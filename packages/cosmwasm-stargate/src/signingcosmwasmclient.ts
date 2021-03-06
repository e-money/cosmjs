/* eslint-disable @typescript-eslint/naming-convention */
import {
  ChangeAdminResult,
  CosmWasmFeeTable,
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  isValidBuilder,
  MigrateResult,
  UploadMeta,
  UploadResult,
} from "@cosmjs/cosmwasm-launchpad";
import { sha256 } from "@cosmjs/crypto";
import { fromBase64, toAscii, toHex } from "@cosmjs/encoding";
import {
  AccountData,
  buildFeeTable,
  Coin,
  CosmosFeeTable,
  encodeSecp256k1Pubkey,
  GasLimits,
  GasPrice,
  logs,
  makeSignDoc as makeSignDocAmino,
  StdFee,
} from "@cosmjs/launchpad";
import { Int53, Uint53 } from "@cosmjs/math";
import {
  EncodeObject,
  encodePubkey,
  isOfflineDirectSigner,
  makeAuthInfoBytes,
  makeSignDoc,
  OfflineSigner,
  Registry,
} from "@cosmjs/proto-signing";
import {
  AminoTypes,
  BroadcastTxFailure,
  BroadcastTxResponse,
  codec,
  isBroadcastTxFailure,
  parseRawLog,
} from "@cosmjs/stargate";
import { adaptor34, Client as TendermintClient } from "@cosmjs/tendermint-rpc";
import Long from "long";
import pako from "pako";

import { cosmWasmTypes } from "./aminotypes";
import { cosmwasm } from "./codec";
import { CosmWasmClient } from "./cosmwasmclient";

const { SignMode } = codec.cosmos.tx.signing.v1beta1;
const { TxRaw } = codec.cosmos.tx.v1beta1;
const { MsgMultiSend } = codec.cosmos.bank.v1beta1;
const {
  MsgBeginRedelegate,
  MsgCreateValidator,
  MsgDelegate,
  MsgEditValidator,
  MsgUndelegate,
} = codec.cosmos.staking.v1beta1;
const {
  MsgClearAdmin,
  MsgExecuteContract,
  MsgInstantiateContract,
  MsgMigrateContract,
  MsgStoreCode,
  MsgUpdateAdmin,
} = cosmwasm.wasm.v1beta1;

function prepareBuilder(builder: string | undefined): string {
  if (builder === undefined) {
    return ""; // normalization needed by backend
  } else {
    if (!isValidBuilder(builder)) throw new Error("The builder (Docker Hub image with tag) is not valid");
    return builder;
  }
}

const defaultGasPrice = GasPrice.fromString("0.025ucosm");
const defaultGasLimits: GasLimits<CosmWasmFeeTable> = {
  upload: 1_500_000,
  init: 500_000,
  migrate: 200_000,
  exec: 200_000,
  send: 80_000,
  changeAdmin: 80_000,
};

function createBroadcastTxErrorMessage(result: BroadcastTxFailure): string {
  return `Error when broadcasting tx ${result.transactionHash} at height ${result.height}. Code: ${result.code}; Raw log: ${result.rawLog}`;
}

function createDefaultRegistry(): Registry {
  return new Registry([
    ["/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend],
    ["/cosmos.staking.v1beta1.MsgBeginRedelegate", MsgBeginRedelegate],
    ["/cosmos.staking.v1beta1.MsgCreateValidator", MsgCreateValidator],
    ["/cosmos.staking.v1beta1.MsgDelegate", MsgDelegate],
    ["/cosmos.staking.v1beta1.MsgEditValidator", MsgEditValidator],
    ["/cosmos.staking.v1beta1.MsgUndelegate", MsgUndelegate],
    ["/cosmwasm.wasm.v1beta1.MsgClearAdmin", MsgClearAdmin],
    ["/cosmwasm.wasm.v1beta1.MsgExecuteContract", MsgExecuteContract],
    ["/cosmwasm.wasm.v1beta1.MsgMigrateContract", MsgMigrateContract],
    ["/cosmwasm.wasm.v1beta1.MsgStoreCode", MsgStoreCode],
    ["/cosmwasm.wasm.v1beta1.MsgInstantiateContract", MsgInstantiateContract],
    ["/cosmwasm.wasm.v1beta1.MsgUpdateAdmin", MsgUpdateAdmin],
  ]);
}

export interface SigningCosmWasmClientOptions {
  readonly registry?: Registry;
  readonly aminoTypes?: AminoTypes;
  readonly prefix?: string;
  readonly gasPrice?: GasPrice;
  readonly gasLimits?: GasLimits<CosmosFeeTable>;
}

/** Use for testing only */
export interface PrivateSigningCosmWasmClient {
  readonly fees: CosmWasmFeeTable;
  readonly registry: Registry;
}

export class SigningCosmWasmClient extends CosmWasmClient {
  private readonly fees: CosmosFeeTable;
  private readonly registry: Registry;
  private readonly signer: OfflineSigner;
  private readonly aminoTypes: AminoTypes;

  public static async connectWithSigner(
    endpoint: string,
    signer: OfflineSigner,
    options: SigningCosmWasmClientOptions = {},
  ): Promise<SigningCosmWasmClient> {
    const tmClient = await TendermintClient.connect(endpoint, adaptor34);
    return new SigningCosmWasmClient(tmClient, signer, options);
  }

  private constructor(
    tmClient: TendermintClient,
    signer: OfflineSigner,
    options: SigningCosmWasmClientOptions,
  ) {
    super(tmClient);
    const {
      registry = createDefaultRegistry(),
      aminoTypes = new AminoTypes({ additions: cosmWasmTypes, prefix: options.prefix }),
      gasPrice = defaultGasPrice,
      gasLimits = defaultGasLimits,
    } = options;
    this.fees = buildFeeTable<CosmosFeeTable>(gasPrice, defaultGasLimits, gasLimits);
    this.registry = registry;
    this.aminoTypes = aminoTypes;
    this.signer = signer;
  }

  /** Uploads code and returns a receipt, including the code ID */
  public async upload(
    senderAddress: string,
    wasmCode: Uint8Array,
    meta: UploadMeta = {},
    memo = "",
  ): Promise<UploadResult> {
    const source = meta.source || "";
    const builder = prepareBuilder(meta.builder);
    const compressed = pako.gzip(wasmCode, { level: 9 });
    const storeCodeMsg = {
      typeUrl: "/cosmwasm.wasm.v1beta1.MsgStoreCode",
      value: MsgStoreCode.create({
        sender: senderAddress,
        wasmByteCode: compressed,
        source: source,
        builder: builder,
      }),
    };

    const result = await this.signAndBroadcast(senderAddress, [storeCodeMsg], this.fees.upload, memo);
    if (isBroadcastTxFailure(result)) {
      throw new Error(createBroadcastTxErrorMessage(result));
    }
    const parsedLogs = parseRawLog(result.rawLog);
    const codeIdAttr = logs.findAttribute(parsedLogs, "message", "code_id");
    return {
      originalSize: wasmCode.length,
      originalChecksum: toHex(sha256(wasmCode)),
      compressedSize: compressed.length,
      compressedChecksum: toHex(sha256(compressed)),
      codeId: Number.parseInt(codeIdAttr.value, 10),
      logs: parsedLogs,
      transactionHash: result.transactionHash,
    };
  }

  public async instantiate(
    senderAddress: string,
    codeId: number,
    initMsg: Record<string, unknown>,
    label: string,
    options: InstantiateOptions = {},
  ): Promise<InstantiateResult> {
    const instantiateMsg = {
      typeUrl: "/cosmwasm.wasm.v1beta1.MsgInstantiateContract",
      value: MsgInstantiateContract.create({
        sender: senderAddress,
        codeId: Long.fromString(new Uint53(codeId).toString()),
        label: label,
        initMsg: toAscii(JSON.stringify(initMsg)),
        initFunds: [...(options.transferAmount || [])],
        admin: options.admin,
      }),
    };
    const result = await this.signAndBroadcast(senderAddress, [instantiateMsg], this.fees.init, options.memo);
    if (isBroadcastTxFailure(result)) {
      throw new Error(createBroadcastTxErrorMessage(result));
    }
    const parsedLogs = parseRawLog(result.rawLog);
    const contractAddressAttr = logs.findAttribute(parsedLogs, "message", "contract_address");
    return {
      contractAddress: contractAddressAttr.value,
      logs: parsedLogs,
      transactionHash: result.transactionHash,
    };
  }

  public async updateAdmin(
    senderAddress: string,
    contractAddress: string,
    newAdmin: string,
    memo = "",
  ): Promise<ChangeAdminResult> {
    const updateAdminMsg = {
      typeUrl: "/cosmwasm.wasm.v1beta1.MsgUpdateAdmin",
      value: MsgUpdateAdmin.create({
        sender: senderAddress,
        contract: contractAddress,
        newAdmin: newAdmin,
      }),
    };
    const result = await this.signAndBroadcast(senderAddress, [updateAdminMsg], this.fees.changeAdmin, memo);
    if (isBroadcastTxFailure(result)) {
      throw new Error(createBroadcastTxErrorMessage(result));
    }
    return {
      logs: parseRawLog(result.rawLog),
      transactionHash: result.transactionHash,
    };
  }

  public async clearAdmin(
    senderAddress: string,
    contractAddress: string,
    memo = "",
  ): Promise<ChangeAdminResult> {
    const clearAdminMsg = {
      typeUrl: "/cosmwasm.wasm.v1beta1.MsgClearAdmin",
      value: MsgClearAdmin.create({
        sender: senderAddress,
        contract: contractAddress,
      }),
    };
    const result = await this.signAndBroadcast(senderAddress, [clearAdminMsg], this.fees.changeAdmin, memo);
    if (isBroadcastTxFailure(result)) {
      throw new Error(createBroadcastTxErrorMessage(result));
    }
    return {
      logs: parseRawLog(result.rawLog),
      transactionHash: result.transactionHash,
    };
  }

  public async migrate(
    senderAddress: string,
    contractAddress: string,
    codeId: number,
    migrateMsg: Record<string, unknown>,
    memo = "",
  ): Promise<MigrateResult> {
    const msg = {
      typeUrl: "/cosmwasm.wasm.v1beta1.MsgMigrateContract",
      value: MsgMigrateContract.create({
        sender: senderAddress,
        contract: contractAddress,
        codeId: Long.fromString(new Uint53(codeId).toString()),
        migrateMsg: toAscii(JSON.stringify(migrateMsg)),
      }),
    };
    const result = await this.signAndBroadcast(senderAddress, [msg], this.fees.migrate, memo);
    if (isBroadcastTxFailure(result)) {
      throw new Error(createBroadcastTxErrorMessage(result));
    }
    return {
      logs: parseRawLog(result.rawLog),
      transactionHash: result.transactionHash,
    };
  }

  public async execute(
    senderAddress: string,
    contractAddress: string,
    handleMsg: Record<string, unknown>,
    memo = "",
    transferAmount?: readonly Coin[],
  ): Promise<ExecuteResult> {
    const executeMsg = {
      typeUrl: "/cosmwasm.wasm.v1beta1.MsgExecuteContract",
      value: MsgExecuteContract.create({
        sender: senderAddress,
        contract: contractAddress,
        msg: toAscii(JSON.stringify(handleMsg)),
        sentFunds: [...(transferAmount || [])],
      }),
    };
    const result = await this.signAndBroadcast(senderAddress, [executeMsg], this.fees.exec, memo);
    if (isBroadcastTxFailure(result)) {
      throw new Error(createBroadcastTxErrorMessage(result));
    }
    return {
      logs: parseRawLog(result.rawLog),
      transactionHash: result.transactionHash,
    };
  }

  public async sendTokens(
    senderAddress: string,
    recipientAddress: string,
    transferAmount: readonly Coin[],
    memo = "",
  ): Promise<BroadcastTxResponse> {
    const sendMsg = {
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: {
        fromAddress: senderAddress,
        toAddress: recipientAddress,
        amount: transferAmount,
      },
    };
    return this.signAndBroadcast(senderAddress, [sendMsg], this.fees.send, memo);
  }

  /**
   * Creates a transaction with the given messages, fee and memo. Then signs and broadcasts the transaction.
   *
   * @param signerAddress The address that will sign transactions using this instance. The signer must be able to sign with this address.
   * @param messages
   * @param fee
   * @param memo
   */
  public async signAndBroadcast(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo = "",
  ): Promise<BroadcastTxResponse> {
    const accountFromSigner = (await this.signer.getAccounts()).find(
      (account: AccountData) => account.address === signerAddress,
    );
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    const pubkey = encodeSecp256k1Pubkey(accountFromSigner.pubkey);
    const accountFromChain = await this.getAccount(signerAddress);
    if (!accountFromChain) {
      throw new Error("Account not found");
    }
    const { accountNumber, sequence } = accountFromChain;
    if (!pubkey) {
      throw new Error("Pubkey not known");
    }
    const chainId = await this.getChainId();
    const pubkeyAny = encodePubkey(pubkey);
    const txBody = {
      messages: messages,
      memo: memo,
    };
    const txBodyBytes = this.registry.encode({
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: txBody,
    });
    const gasLimit = Int53.fromString(fee.gas).toNumber();

    if (isOfflineDirectSigner(this.signer)) {
      const authInfoBytes = makeAuthInfoBytes([pubkeyAny], fee.amount, gasLimit, sequence);
      const signDoc = makeSignDoc(txBodyBytes, authInfoBytes, chainId, accountNumber);
      const { signature, signed } = await this.signer.signDirect(signerAddress, signDoc);
      const txRaw = TxRaw.create({
        bodyBytes: signed.bodyBytes,
        authInfoBytes: signed.authInfoBytes,
        signatures: [fromBase64(signature.signature)],
      });
      const signedTx = Uint8Array.from(TxRaw.encode(txRaw).finish());
      return this.broadcastTx(signedTx);
    }

    // Amino signer
    const signMode = SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
    const msgs = messages.map((msg) => this.aminoTypes.toAmino(msg));
    const signDoc = makeSignDocAmino(msgs, fee, chainId, memo, accountNumber, sequence);
    const { signature, signed } = await this.signer.signAmino(signerAddress, signDoc);
    const signedTxBody = {
      messages: signed.msgs.map((msg) => this.aminoTypes.fromAmino(msg)),
      memo: signed.memo,
    };
    const signedTxBodyBytes = this.registry.encode({
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: signedTxBody,
    });
    const signedGasLimit = Int53.fromString(signed.fee.gas).toNumber();
    const signedSequence = Int53.fromString(signed.sequence).toNumber();
    const signedAuthInfoBytes = makeAuthInfoBytes(
      [pubkeyAny],
      signed.fee.amount,
      signedGasLimit,
      signedSequence,
      signMode,
    );
    const txRaw = TxRaw.create({
      bodyBytes: signedTxBodyBytes,
      authInfoBytes: signedAuthInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
    const signedTx = Uint8Array.from(TxRaw.encode(txRaw).finish());
    return this.broadcastTx(signedTx);
  }
}
