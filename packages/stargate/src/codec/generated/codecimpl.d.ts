import * as $protobuf from "protobufjs";
/** Namespace cosmos. */
export namespace cosmos {
  /** Namespace auth. */
  namespace auth {
    /** Namespace v1beta1. */
    namespace v1beta1 {
      /** Properties of a BaseAccount. */
      interface IBaseAccount {
        /** BaseAccount address */
        address?: string | null;

        /** BaseAccount pubKey */
        pubKey?: google.protobuf.IAny | null;

        /** BaseAccount accountNumber */
        accountNumber?: Long | null;

        /** BaseAccount sequence */
        sequence?: Long | null;
      }

      /** Represents a BaseAccount. */
      class BaseAccount implements IBaseAccount {
        /**
         * Constructs a new BaseAccount.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.auth.v1beta1.IBaseAccount);

        /** BaseAccount address. */
        public address: string;

        /** BaseAccount pubKey. */
        public pubKey?: google.protobuf.IAny | null;

        /** BaseAccount accountNumber. */
        public accountNumber: Long;

        /** BaseAccount sequence. */
        public sequence: Long;

        /**
         * Creates a new BaseAccount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaseAccount instance
         */
        public static create(properties?: cosmos.auth.v1beta1.IBaseAccount): cosmos.auth.v1beta1.BaseAccount;

        /**
         * Encodes the specified BaseAccount message. Does not implicitly {@link cosmos.auth.v1beta1.BaseAccount.verify|verify} messages.
         * @param m BaseAccount message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.auth.v1beta1.IBaseAccount, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaseAccount message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BaseAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.auth.v1beta1.BaseAccount;
      }

      /** Properties of a ModuleAccount. */
      interface IModuleAccount {
        /** ModuleAccount baseAccount */
        baseAccount?: cosmos.auth.v1beta1.IBaseAccount | null;

        /** ModuleAccount name */
        name?: string | null;

        /** ModuleAccount permissions */
        permissions?: string[] | null;
      }

      /** Represents a ModuleAccount. */
      class ModuleAccount implements IModuleAccount {
        /**
         * Constructs a new ModuleAccount.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.auth.v1beta1.IModuleAccount);

        /** ModuleAccount baseAccount. */
        public baseAccount?: cosmos.auth.v1beta1.IBaseAccount | null;

        /** ModuleAccount name. */
        public name: string;

        /** ModuleAccount permissions. */
        public permissions: string[];

        /**
         * Creates a new ModuleAccount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ModuleAccount instance
         */
        public static create(
          properties?: cosmos.auth.v1beta1.IModuleAccount,
        ): cosmos.auth.v1beta1.ModuleAccount;

        /**
         * Encodes the specified ModuleAccount message. Does not implicitly {@link cosmos.auth.v1beta1.ModuleAccount.verify|verify} messages.
         * @param m ModuleAccount message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.auth.v1beta1.IModuleAccount, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ModuleAccount message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ModuleAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.auth.v1beta1.ModuleAccount;
      }

      /** Properties of a Params. */
      interface IParams {
        /** Params maxMemoCharacters */
        maxMemoCharacters?: Long | null;

        /** Params txSigLimit */
        txSigLimit?: Long | null;

        /** Params txSizeCostPerByte */
        txSizeCostPerByte?: Long | null;

        /** Params sigVerifyCostEd25519 */
        sigVerifyCostEd25519?: Long | null;

        /** Params sigVerifyCostSecp256k1 */
        sigVerifyCostSecp256k1?: Long | null;
      }

      /** Represents a Params. */
      class Params implements IParams {
        /**
         * Constructs a new Params.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.auth.v1beta1.IParams);

        /** Params maxMemoCharacters. */
        public maxMemoCharacters: Long;

        /** Params txSigLimit. */
        public txSigLimit: Long;

        /** Params txSizeCostPerByte. */
        public txSizeCostPerByte: Long;

        /** Params sigVerifyCostEd25519. */
        public sigVerifyCostEd25519: Long;

        /** Params sigVerifyCostSecp256k1. */
        public sigVerifyCostSecp256k1: Long;

        /**
         * Creates a new Params instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Params instance
         */
        public static create(properties?: cosmos.auth.v1beta1.IParams): cosmos.auth.v1beta1.Params;

        /**
         * Encodes the specified Params message. Does not implicitly {@link cosmos.auth.v1beta1.Params.verify|verify} messages.
         * @param m Params message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.auth.v1beta1.IParams, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Params message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Params
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.auth.v1beta1.Params;
      }

      /** Represents a Query */
      class Query extends $protobuf.rpc.Service {
        /**
         * Constructs a new Query service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Query service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(
          rpcImpl: $protobuf.RPCImpl,
          requestDelimited?: boolean,
          responseDelimited?: boolean,
        ): Query;

        /**
         * Calls Account.
         * @param request QueryAccountRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and QueryAccountResponse
         */
        public account(
          request: cosmos.auth.v1beta1.IQueryAccountRequest,
          callback: cosmos.auth.v1beta1.Query.AccountCallback,
        ): void;

        /**
         * Calls Account.
         * @param request QueryAccountRequest message or plain object
         * @returns Promise
         */
        public account(
          request: cosmos.auth.v1beta1.IQueryAccountRequest,
        ): Promise<cosmos.auth.v1beta1.QueryAccountResponse>;

        /**
         * Calls Params.
         * @param request QueryParamsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and QueryParamsResponse
         */
        public params(
          request: cosmos.auth.v1beta1.IQueryParamsRequest,
          callback: cosmos.auth.v1beta1.Query.ParamsCallback,
        ): void;

        /**
         * Calls Params.
         * @param request QueryParamsRequest message or plain object
         * @returns Promise
         */
        public params(
          request: cosmos.auth.v1beta1.IQueryParamsRequest,
        ): Promise<cosmos.auth.v1beta1.QueryParamsResponse>;
      }

      namespace Query {
        /**
         * Callback as used by {@link cosmos.auth.v1beta1.Query#account}.
         * @param error Error, if any
         * @param [response] QueryAccountResponse
         */
        type AccountCallback = (
          error: Error | null,
          response?: cosmos.auth.v1beta1.QueryAccountResponse,
        ) => void;

        /**
         * Callback as used by {@link cosmos.auth.v1beta1.Query#params}.
         * @param error Error, if any
         * @param [response] QueryParamsResponse
         */
        type ParamsCallback = (
          error: Error | null,
          response?: cosmos.auth.v1beta1.QueryParamsResponse,
        ) => void;
      }

      /** Properties of a QueryAccountRequest. */
      interface IQueryAccountRequest {
        /** QueryAccountRequest address */
        address?: string | null;
      }

      /** Represents a QueryAccountRequest. */
      class QueryAccountRequest implements IQueryAccountRequest {
        /**
         * Constructs a new QueryAccountRequest.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.auth.v1beta1.IQueryAccountRequest);

        /** QueryAccountRequest address. */
        public address: string;

        /**
         * Creates a new QueryAccountRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryAccountRequest instance
         */
        public static create(
          properties?: cosmos.auth.v1beta1.IQueryAccountRequest,
        ): cosmos.auth.v1beta1.QueryAccountRequest;

        /**
         * Encodes the specified QueryAccountRequest message. Does not implicitly {@link cosmos.auth.v1beta1.QueryAccountRequest.verify|verify} messages.
         * @param m QueryAccountRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.auth.v1beta1.IQueryAccountRequest,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a QueryAccountRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryAccountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.auth.v1beta1.QueryAccountRequest;
      }

      /** Properties of a QueryAccountResponse. */
      interface IQueryAccountResponse {
        /** QueryAccountResponse account */
        account?: google.protobuf.IAny | null;
      }

      /** Represents a QueryAccountResponse. */
      class QueryAccountResponse implements IQueryAccountResponse {
        /**
         * Constructs a new QueryAccountResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.auth.v1beta1.IQueryAccountResponse);

        /** QueryAccountResponse account. */
        public account?: google.protobuf.IAny | null;

        /**
         * Creates a new QueryAccountResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryAccountResponse instance
         */
        public static create(
          properties?: cosmos.auth.v1beta1.IQueryAccountResponse,
        ): cosmos.auth.v1beta1.QueryAccountResponse;

        /**
         * Encodes the specified QueryAccountResponse message. Does not implicitly {@link cosmos.auth.v1beta1.QueryAccountResponse.verify|verify} messages.
         * @param m QueryAccountResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.auth.v1beta1.IQueryAccountResponse,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a QueryAccountResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryAccountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.auth.v1beta1.QueryAccountResponse;
      }

      /** Properties of a QueryParamsRequest. */
      interface IQueryParamsRequest {}

      /** Represents a QueryParamsRequest. */
      class QueryParamsRequest implements IQueryParamsRequest {
        /**
         * Constructs a new QueryParamsRequest.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.auth.v1beta1.IQueryParamsRequest);

        /**
         * Creates a new QueryParamsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryParamsRequest instance
         */
        public static create(
          properties?: cosmos.auth.v1beta1.IQueryParamsRequest,
        ): cosmos.auth.v1beta1.QueryParamsRequest;

        /**
         * Encodes the specified QueryParamsRequest message. Does not implicitly {@link cosmos.auth.v1beta1.QueryParamsRequest.verify|verify} messages.
         * @param m QueryParamsRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.auth.v1beta1.IQueryParamsRequest,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a QueryParamsRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryParamsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.auth.v1beta1.QueryParamsRequest;
      }

      /** Properties of a QueryParamsResponse. */
      interface IQueryParamsResponse {
        /** QueryParamsResponse params */
        params?: cosmos.auth.v1beta1.IParams | null;
      }

      /** Represents a QueryParamsResponse. */
      class QueryParamsResponse implements IQueryParamsResponse {
        /**
         * Constructs a new QueryParamsResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.auth.v1beta1.IQueryParamsResponse);

        /** QueryParamsResponse params. */
        public params?: cosmos.auth.v1beta1.IParams | null;

        /**
         * Creates a new QueryParamsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryParamsResponse instance
         */
        public static create(
          properties?: cosmos.auth.v1beta1.IQueryParamsResponse,
        ): cosmos.auth.v1beta1.QueryParamsResponse;

        /**
         * Encodes the specified QueryParamsResponse message. Does not implicitly {@link cosmos.auth.v1beta1.QueryParamsResponse.verify|verify} messages.
         * @param m QueryParamsResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.auth.v1beta1.IQueryParamsResponse,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a QueryParamsResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryParamsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.auth.v1beta1.QueryParamsResponse;
      }
    }
  }

  /** Namespace bank. */
  namespace bank {
    /** Namespace v1beta1. */
    namespace v1beta1 {
      /** Properties of a Params. */
      interface IParams {
        /** Params sendEnabled */
        sendEnabled?: cosmos.bank.v1beta1.ISendEnabled[] | null;

        /** Params defaultSendEnabled */
        defaultSendEnabled?: boolean | null;
      }

      /** Represents a Params. */
      class Params implements IParams {
        /**
         * Constructs a new Params.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IParams);

        /** Params sendEnabled. */
        public sendEnabled: cosmos.bank.v1beta1.ISendEnabled[];

        /** Params defaultSendEnabled. */
        public defaultSendEnabled: boolean;

        /**
         * Creates a new Params instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Params instance
         */
        public static create(properties?: cosmos.bank.v1beta1.IParams): cosmos.bank.v1beta1.Params;

        /**
         * Encodes the specified Params message. Does not implicitly {@link cosmos.bank.v1beta1.Params.verify|verify} messages.
         * @param m Params message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.bank.v1beta1.IParams, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Params message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Params
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.Params;
      }

      /** Properties of a SendEnabled. */
      interface ISendEnabled {
        /** SendEnabled denom */
        denom?: string | null;

        /** SendEnabled enabled */
        enabled?: boolean | null;
      }

      /** Represents a SendEnabled. */
      class SendEnabled implements ISendEnabled {
        /**
         * Constructs a new SendEnabled.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.ISendEnabled);

        /** SendEnabled denom. */
        public denom: string;

        /** SendEnabled enabled. */
        public enabled: boolean;

        /**
         * Creates a new SendEnabled instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendEnabled instance
         */
        public static create(properties?: cosmos.bank.v1beta1.ISendEnabled): cosmos.bank.v1beta1.SendEnabled;

        /**
         * Encodes the specified SendEnabled message. Does not implicitly {@link cosmos.bank.v1beta1.SendEnabled.verify|verify} messages.
         * @param m SendEnabled message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.bank.v1beta1.ISendEnabled, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendEnabled message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SendEnabled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.SendEnabled;
      }

      /** Properties of an Input. */
      interface IInput {
        /** Input address */
        address?: string | null;

        /** Input coins */
        coins?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents an Input. */
      class Input implements IInput {
        /**
         * Constructs a new Input.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IInput);

        /** Input address. */
        public address: string;

        /** Input coins. */
        public coins: cosmos.base.v1beta1.ICoin[];

        /**
         * Creates a new Input instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Input instance
         */
        public static create(properties?: cosmos.bank.v1beta1.IInput): cosmos.bank.v1beta1.Input;

        /**
         * Encodes the specified Input message. Does not implicitly {@link cosmos.bank.v1beta1.Input.verify|verify} messages.
         * @param m Input message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.bank.v1beta1.IInput, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Input message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.Input;
      }

      /** Properties of an Output. */
      interface IOutput {
        /** Output address */
        address?: string | null;

        /** Output coins */
        coins?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents an Output. */
      class Output implements IOutput {
        /**
         * Constructs a new Output.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IOutput);

        /** Output address. */
        public address: string;

        /** Output coins. */
        public coins: cosmos.base.v1beta1.ICoin[];

        /**
         * Creates a new Output instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Output instance
         */
        public static create(properties?: cosmos.bank.v1beta1.IOutput): cosmos.bank.v1beta1.Output;

        /**
         * Encodes the specified Output message. Does not implicitly {@link cosmos.bank.v1beta1.Output.verify|verify} messages.
         * @param m Output message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.bank.v1beta1.IOutput, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Output message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.Output;
      }

      /** Properties of a Supply. */
      interface ISupply {
        /** Supply total */
        total?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents a Supply. */
      class Supply implements ISupply {
        /**
         * Constructs a new Supply.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.ISupply);

        /** Supply total. */
        public total: cosmos.base.v1beta1.ICoin[];

        /**
         * Creates a new Supply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Supply instance
         */
        public static create(properties?: cosmos.bank.v1beta1.ISupply): cosmos.bank.v1beta1.Supply;

        /**
         * Encodes the specified Supply message. Does not implicitly {@link cosmos.bank.v1beta1.Supply.verify|verify} messages.
         * @param m Supply message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.bank.v1beta1.ISupply, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Supply message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Supply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.Supply;
      }

      /** Properties of a DenomUnit. */
      interface IDenomUnit {
        /** DenomUnit denom */
        denom?: string | null;

        /** DenomUnit exponent */
        exponent?: number | null;

        /** DenomUnit aliases */
        aliases?: string[] | null;
      }

      /** Represents a DenomUnit. */
      class DenomUnit implements IDenomUnit {
        /**
         * Constructs a new DenomUnit.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IDenomUnit);

        /** DenomUnit denom. */
        public denom: string;

        /** DenomUnit exponent. */
        public exponent: number;

        /** DenomUnit aliases. */
        public aliases: string[];

        /**
         * Creates a new DenomUnit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DenomUnit instance
         */
        public static create(properties?: cosmos.bank.v1beta1.IDenomUnit): cosmos.bank.v1beta1.DenomUnit;

        /**
         * Encodes the specified DenomUnit message. Does not implicitly {@link cosmos.bank.v1beta1.DenomUnit.verify|verify} messages.
         * @param m DenomUnit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.bank.v1beta1.IDenomUnit, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DenomUnit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DenomUnit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.DenomUnit;
      }

      /** Properties of a Metadata. */
      interface IMetadata {
        /** Metadata description */
        description?: string | null;

        /** Metadata denomUnits */
        denomUnits?: cosmos.bank.v1beta1.IDenomUnit[] | null;

        /** Metadata base */
        base?: string | null;

        /** Metadata display */
        display?: string | null;
      }

      /** Represents a Metadata. */
      class Metadata implements IMetadata {
        /**
         * Constructs a new Metadata.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IMetadata);

        /** Metadata description. */
        public description: string;

        /** Metadata denomUnits. */
        public denomUnits: cosmos.bank.v1beta1.IDenomUnit[];

        /** Metadata base. */
        public base: string;

        /** Metadata display. */
        public display: string;

        /**
         * Creates a new Metadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Metadata instance
         */
        public static create(properties?: cosmos.bank.v1beta1.IMetadata): cosmos.bank.v1beta1.Metadata;

        /**
         * Encodes the specified Metadata message. Does not implicitly {@link cosmos.bank.v1beta1.Metadata.verify|verify} messages.
         * @param m Metadata message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.bank.v1beta1.IMetadata, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Metadata message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.Metadata;
      }

      /** Represents a Query */
      class Query extends $protobuf.rpc.Service {
        /**
         * Constructs a new Query service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Query service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(
          rpcImpl: $protobuf.RPCImpl,
          requestDelimited?: boolean,
          responseDelimited?: boolean,
        ): Query;

        /**
         * Calls Balance.
         * @param request QueryBalanceRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and QueryBalanceResponse
         */
        public balance(
          request: cosmos.bank.v1beta1.IQueryBalanceRequest,
          callback: cosmos.bank.v1beta1.Query.BalanceCallback,
        ): void;

        /**
         * Calls Balance.
         * @param request QueryBalanceRequest message or plain object
         * @returns Promise
         */
        public balance(
          request: cosmos.bank.v1beta1.IQueryBalanceRequest,
        ): Promise<cosmos.bank.v1beta1.QueryBalanceResponse>;

        /**
         * Calls AllBalances.
         * @param request QueryAllBalancesRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and QueryAllBalancesResponse
         */
        public allBalances(
          request: cosmos.bank.v1beta1.IQueryAllBalancesRequest,
          callback: cosmos.bank.v1beta1.Query.AllBalancesCallback,
        ): void;

        /**
         * Calls AllBalances.
         * @param request QueryAllBalancesRequest message or plain object
         * @returns Promise
         */
        public allBalances(
          request: cosmos.bank.v1beta1.IQueryAllBalancesRequest,
        ): Promise<cosmos.bank.v1beta1.QueryAllBalancesResponse>;

        /**
         * Calls TotalSupply.
         * @param request QueryTotalSupplyRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and QueryTotalSupplyResponse
         */
        public totalSupply(
          request: cosmos.bank.v1beta1.IQueryTotalSupplyRequest,
          callback: cosmos.bank.v1beta1.Query.TotalSupplyCallback,
        ): void;

        /**
         * Calls TotalSupply.
         * @param request QueryTotalSupplyRequest message or plain object
         * @returns Promise
         */
        public totalSupply(
          request: cosmos.bank.v1beta1.IQueryTotalSupplyRequest,
        ): Promise<cosmos.bank.v1beta1.QueryTotalSupplyResponse>;

        /**
         * Calls SupplyOf.
         * @param request QuerySupplyOfRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and QuerySupplyOfResponse
         */
        public supplyOf(
          request: cosmos.bank.v1beta1.IQuerySupplyOfRequest,
          callback: cosmos.bank.v1beta1.Query.SupplyOfCallback,
        ): void;

        /**
         * Calls SupplyOf.
         * @param request QuerySupplyOfRequest message or plain object
         * @returns Promise
         */
        public supplyOf(
          request: cosmos.bank.v1beta1.IQuerySupplyOfRequest,
        ): Promise<cosmos.bank.v1beta1.QuerySupplyOfResponse>;

        /**
         * Calls Params.
         * @param request QueryParamsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and QueryParamsResponse
         */
        public params(
          request: cosmos.bank.v1beta1.IQueryParamsRequest,
          callback: cosmos.bank.v1beta1.Query.ParamsCallback,
        ): void;

        /**
         * Calls Params.
         * @param request QueryParamsRequest message or plain object
         * @returns Promise
         */
        public params(
          request: cosmos.bank.v1beta1.IQueryParamsRequest,
        ): Promise<cosmos.bank.v1beta1.QueryParamsResponse>;
      }

      namespace Query {
        /**
         * Callback as used by {@link cosmos.bank.v1beta1.Query#balance}.
         * @param error Error, if any
         * @param [response] QueryBalanceResponse
         */
        type BalanceCallback = (
          error: Error | null,
          response?: cosmos.bank.v1beta1.QueryBalanceResponse,
        ) => void;

        /**
         * Callback as used by {@link cosmos.bank.v1beta1.Query#allBalances}.
         * @param error Error, if any
         * @param [response] QueryAllBalancesResponse
         */
        type AllBalancesCallback = (
          error: Error | null,
          response?: cosmos.bank.v1beta1.QueryAllBalancesResponse,
        ) => void;

        /**
         * Callback as used by {@link cosmos.bank.v1beta1.Query#totalSupply}.
         * @param error Error, if any
         * @param [response] QueryTotalSupplyResponse
         */
        type TotalSupplyCallback = (
          error: Error | null,
          response?: cosmos.bank.v1beta1.QueryTotalSupplyResponse,
        ) => void;

        /**
         * Callback as used by {@link cosmos.bank.v1beta1.Query#supplyOf}.
         * @param error Error, if any
         * @param [response] QuerySupplyOfResponse
         */
        type SupplyOfCallback = (
          error: Error | null,
          response?: cosmos.bank.v1beta1.QuerySupplyOfResponse,
        ) => void;

        /**
         * Callback as used by {@link cosmos.bank.v1beta1.Query#params}.
         * @param error Error, if any
         * @param [response] QueryParamsResponse
         */
        type ParamsCallback = (
          error: Error | null,
          response?: cosmos.bank.v1beta1.QueryParamsResponse,
        ) => void;
      }

      /** Properties of a QueryBalanceRequest. */
      interface IQueryBalanceRequest {
        /** QueryBalanceRequest address */
        address?: string | null;

        /** QueryBalanceRequest denom */
        denom?: string | null;
      }

      /** Represents a QueryBalanceRequest. */
      class QueryBalanceRequest implements IQueryBalanceRequest {
        /**
         * Constructs a new QueryBalanceRequest.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IQueryBalanceRequest);

        /** QueryBalanceRequest address. */
        public address: string;

        /** QueryBalanceRequest denom. */
        public denom: string;

        /**
         * Creates a new QueryBalanceRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryBalanceRequest instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IQueryBalanceRequest,
        ): cosmos.bank.v1beta1.QueryBalanceRequest;

        /**
         * Encodes the specified QueryBalanceRequest message. Does not implicitly {@link cosmos.bank.v1beta1.QueryBalanceRequest.verify|verify} messages.
         * @param m QueryBalanceRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IQueryBalanceRequest,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a QueryBalanceRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryBalanceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.bank.v1beta1.QueryBalanceRequest;
      }

      /** Properties of a QueryBalanceResponse. */
      interface IQueryBalanceResponse {
        /** QueryBalanceResponse balance */
        balance?: cosmos.base.v1beta1.ICoin | null;
      }

      /** Represents a QueryBalanceResponse. */
      class QueryBalanceResponse implements IQueryBalanceResponse {
        /**
         * Constructs a new QueryBalanceResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IQueryBalanceResponse);

        /** QueryBalanceResponse balance. */
        public balance?: cosmos.base.v1beta1.ICoin | null;

        /**
         * Creates a new QueryBalanceResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryBalanceResponse instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IQueryBalanceResponse,
        ): cosmos.bank.v1beta1.QueryBalanceResponse;

        /**
         * Encodes the specified QueryBalanceResponse message. Does not implicitly {@link cosmos.bank.v1beta1.QueryBalanceResponse.verify|verify} messages.
         * @param m QueryBalanceResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IQueryBalanceResponse,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a QueryBalanceResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryBalanceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.bank.v1beta1.QueryBalanceResponse;
      }

      /** Properties of a QueryAllBalancesRequest. */
      interface IQueryAllBalancesRequest {
        /** QueryAllBalancesRequest address */
        address?: string | null;

        /** QueryAllBalancesRequest pagination */
        pagination?: cosmos.base.query.v1beta1.IPageRequest | null;
      }

      /** Represents a QueryAllBalancesRequest. */
      class QueryAllBalancesRequest implements IQueryAllBalancesRequest {
        /**
         * Constructs a new QueryAllBalancesRequest.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IQueryAllBalancesRequest);

        /** QueryAllBalancesRequest address. */
        public address: string;

        /** QueryAllBalancesRequest pagination. */
        public pagination?: cosmos.base.query.v1beta1.IPageRequest | null;

        /**
         * Creates a new QueryAllBalancesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryAllBalancesRequest instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IQueryAllBalancesRequest,
        ): cosmos.bank.v1beta1.QueryAllBalancesRequest;

        /**
         * Encodes the specified QueryAllBalancesRequest message. Does not implicitly {@link cosmos.bank.v1beta1.QueryAllBalancesRequest.verify|verify} messages.
         * @param m QueryAllBalancesRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IQueryAllBalancesRequest,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a QueryAllBalancesRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryAllBalancesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.bank.v1beta1.QueryAllBalancesRequest;
      }

      /** Properties of a QueryAllBalancesResponse. */
      interface IQueryAllBalancesResponse {
        /** QueryAllBalancesResponse balances */
        balances?: cosmos.base.v1beta1.ICoin[] | null;

        /** QueryAllBalancesResponse pagination */
        pagination?: cosmos.base.query.v1beta1.IPageResponse | null;
      }

      /** Represents a QueryAllBalancesResponse. */
      class QueryAllBalancesResponse implements IQueryAllBalancesResponse {
        /**
         * Constructs a new QueryAllBalancesResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IQueryAllBalancesResponse);

        /** QueryAllBalancesResponse balances. */
        public balances: cosmos.base.v1beta1.ICoin[];

        /** QueryAllBalancesResponse pagination. */
        public pagination?: cosmos.base.query.v1beta1.IPageResponse | null;

        /**
         * Creates a new QueryAllBalancesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryAllBalancesResponse instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IQueryAllBalancesResponse,
        ): cosmos.bank.v1beta1.QueryAllBalancesResponse;

        /**
         * Encodes the specified QueryAllBalancesResponse message. Does not implicitly {@link cosmos.bank.v1beta1.QueryAllBalancesResponse.verify|verify} messages.
         * @param m QueryAllBalancesResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IQueryAllBalancesResponse,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a QueryAllBalancesResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryAllBalancesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.bank.v1beta1.QueryAllBalancesResponse;
      }

      /** Properties of a QueryTotalSupplyRequest. */
      interface IQueryTotalSupplyRequest {}

      /** Represents a QueryTotalSupplyRequest. */
      class QueryTotalSupplyRequest implements IQueryTotalSupplyRequest {
        /**
         * Constructs a new QueryTotalSupplyRequest.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IQueryTotalSupplyRequest);

        /**
         * Creates a new QueryTotalSupplyRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryTotalSupplyRequest instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IQueryTotalSupplyRequest,
        ): cosmos.bank.v1beta1.QueryTotalSupplyRequest;

        /**
         * Encodes the specified QueryTotalSupplyRequest message. Does not implicitly {@link cosmos.bank.v1beta1.QueryTotalSupplyRequest.verify|verify} messages.
         * @param m QueryTotalSupplyRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IQueryTotalSupplyRequest,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a QueryTotalSupplyRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryTotalSupplyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.bank.v1beta1.QueryTotalSupplyRequest;
      }

      /** Properties of a QueryTotalSupplyResponse. */
      interface IQueryTotalSupplyResponse {
        /** QueryTotalSupplyResponse supply */
        supply?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents a QueryTotalSupplyResponse. */
      class QueryTotalSupplyResponse implements IQueryTotalSupplyResponse {
        /**
         * Constructs a new QueryTotalSupplyResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IQueryTotalSupplyResponse);

        /** QueryTotalSupplyResponse supply. */
        public supply: cosmos.base.v1beta1.ICoin[];

        /**
         * Creates a new QueryTotalSupplyResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryTotalSupplyResponse instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IQueryTotalSupplyResponse,
        ): cosmos.bank.v1beta1.QueryTotalSupplyResponse;

        /**
         * Encodes the specified QueryTotalSupplyResponse message. Does not implicitly {@link cosmos.bank.v1beta1.QueryTotalSupplyResponse.verify|verify} messages.
         * @param m QueryTotalSupplyResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IQueryTotalSupplyResponse,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a QueryTotalSupplyResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryTotalSupplyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.bank.v1beta1.QueryTotalSupplyResponse;
      }

      /** Properties of a QuerySupplyOfRequest. */
      interface IQuerySupplyOfRequest {
        /** QuerySupplyOfRequest denom */
        denom?: string | null;
      }

      /** Represents a QuerySupplyOfRequest. */
      class QuerySupplyOfRequest implements IQuerySupplyOfRequest {
        /**
         * Constructs a new QuerySupplyOfRequest.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IQuerySupplyOfRequest);

        /** QuerySupplyOfRequest denom. */
        public denom: string;

        /**
         * Creates a new QuerySupplyOfRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuerySupplyOfRequest instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IQuerySupplyOfRequest,
        ): cosmos.bank.v1beta1.QuerySupplyOfRequest;

        /**
         * Encodes the specified QuerySupplyOfRequest message. Does not implicitly {@link cosmos.bank.v1beta1.QuerySupplyOfRequest.verify|verify} messages.
         * @param m QuerySupplyOfRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IQuerySupplyOfRequest,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a QuerySupplyOfRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QuerySupplyOfRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.bank.v1beta1.QuerySupplyOfRequest;
      }

      /** Properties of a QuerySupplyOfResponse. */
      interface IQuerySupplyOfResponse {
        /** QuerySupplyOfResponse amount */
        amount?: cosmos.base.v1beta1.ICoin | null;
      }

      /** Represents a QuerySupplyOfResponse. */
      class QuerySupplyOfResponse implements IQuerySupplyOfResponse {
        /**
         * Constructs a new QuerySupplyOfResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IQuerySupplyOfResponse);

        /** QuerySupplyOfResponse amount. */
        public amount?: cosmos.base.v1beta1.ICoin | null;

        /**
         * Creates a new QuerySupplyOfResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuerySupplyOfResponse instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IQuerySupplyOfResponse,
        ): cosmos.bank.v1beta1.QuerySupplyOfResponse;

        /**
         * Encodes the specified QuerySupplyOfResponse message. Does not implicitly {@link cosmos.bank.v1beta1.QuerySupplyOfResponse.verify|verify} messages.
         * @param m QuerySupplyOfResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IQuerySupplyOfResponse,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a QuerySupplyOfResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QuerySupplyOfResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.bank.v1beta1.QuerySupplyOfResponse;
      }

      /** Properties of a QueryParamsRequest. */
      interface IQueryParamsRequest {}

      /** Represents a QueryParamsRequest. */
      class QueryParamsRequest implements IQueryParamsRequest {
        /**
         * Constructs a new QueryParamsRequest.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IQueryParamsRequest);

        /**
         * Creates a new QueryParamsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryParamsRequest instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IQueryParamsRequest,
        ): cosmos.bank.v1beta1.QueryParamsRequest;

        /**
         * Encodes the specified QueryParamsRequest message. Does not implicitly {@link cosmos.bank.v1beta1.QueryParamsRequest.verify|verify} messages.
         * @param m QueryParamsRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IQueryParamsRequest,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a QueryParamsRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryParamsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.bank.v1beta1.QueryParamsRequest;
      }

      /** Properties of a QueryParamsResponse. */
      interface IQueryParamsResponse {
        /** QueryParamsResponse params */
        params?: cosmos.bank.v1beta1.IParams | null;
      }

      /** Represents a QueryParamsResponse. */
      class QueryParamsResponse implements IQueryParamsResponse {
        /**
         * Constructs a new QueryParamsResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IQueryParamsResponse);

        /** QueryParamsResponse params. */
        public params?: cosmos.bank.v1beta1.IParams | null;

        /**
         * Creates a new QueryParamsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryParamsResponse instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IQueryParamsResponse,
        ): cosmos.bank.v1beta1.QueryParamsResponse;

        /**
         * Encodes the specified QueryParamsResponse message. Does not implicitly {@link cosmos.bank.v1beta1.QueryParamsResponse.verify|verify} messages.
         * @param m QueryParamsResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IQueryParamsResponse,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a QueryParamsResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryParamsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.bank.v1beta1.QueryParamsResponse;
      }

      /** Represents a Msg */
      class Msg extends $protobuf.rpc.Service {
        /**
         * Constructs a new Msg service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Msg service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(
          rpcImpl: $protobuf.RPCImpl,
          requestDelimited?: boolean,
          responseDelimited?: boolean,
        ): Msg;

        /**
         * Calls Send.
         * @param request MsgSend message or plain object
         * @param callback Node-style callback called with the error, if any, and MsgSendResponse
         */
        public send(
          request: cosmos.bank.v1beta1.IMsgSend,
          callback: cosmos.bank.v1beta1.Msg.SendCallback,
        ): void;

        /**
         * Calls Send.
         * @param request MsgSend message or plain object
         * @returns Promise
         */
        public send(request: cosmos.bank.v1beta1.IMsgSend): Promise<cosmos.bank.v1beta1.MsgSendResponse>;

        /**
         * Calls MultiSend.
         * @param request MsgMultiSend message or plain object
         * @param callback Node-style callback called with the error, if any, and MsgMultiSendResponse
         */
        public multiSend(
          request: cosmos.bank.v1beta1.IMsgMultiSend,
          callback: cosmos.bank.v1beta1.Msg.MultiSendCallback,
        ): void;

        /**
         * Calls MultiSend.
         * @param request MsgMultiSend message or plain object
         * @returns Promise
         */
        public multiSend(
          request: cosmos.bank.v1beta1.IMsgMultiSend,
        ): Promise<cosmos.bank.v1beta1.MsgMultiSendResponse>;
      }

      namespace Msg {
        /**
         * Callback as used by {@link cosmos.bank.v1beta1.Msg#send}.
         * @param error Error, if any
         * @param [response] MsgSendResponse
         */
        type SendCallback = (error: Error | null, response?: cosmos.bank.v1beta1.MsgSendResponse) => void;

        /**
         * Callback as used by {@link cosmos.bank.v1beta1.Msg#multiSend}.
         * @param error Error, if any
         * @param [response] MsgMultiSendResponse
         */
        type MultiSendCallback = (
          error: Error | null,
          response?: cosmos.bank.v1beta1.MsgMultiSendResponse,
        ) => void;
      }

      /** Properties of a MsgSend. */
      interface IMsgSend {
        /** MsgSend fromAddress */
        fromAddress?: string | null;

        /** MsgSend toAddress */
        toAddress?: string | null;

        /** MsgSend amount */
        amount?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents a MsgSend. */
      class MsgSend implements IMsgSend {
        /**
         * Constructs a new MsgSend.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IMsgSend);

        /** MsgSend fromAddress. */
        public fromAddress: string;

        /** MsgSend toAddress. */
        public toAddress: string;

        /** MsgSend amount. */
        public amount: cosmos.base.v1beta1.ICoin[];

        /**
         * Creates a new MsgSend instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgSend instance
         */
        public static create(properties?: cosmos.bank.v1beta1.IMsgSend): cosmos.bank.v1beta1.MsgSend;

        /**
         * Encodes the specified MsgSend message. Does not implicitly {@link cosmos.bank.v1beta1.MsgSend.verify|verify} messages.
         * @param m MsgSend message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.bank.v1beta1.IMsgSend, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgSend message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgSend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.MsgSend;
      }

      /** Properties of a MsgSendResponse. */
      interface IMsgSendResponse {}

      /** Represents a MsgSendResponse. */
      class MsgSendResponse implements IMsgSendResponse {
        /**
         * Constructs a new MsgSendResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IMsgSendResponse);

        /**
         * Creates a new MsgSendResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgSendResponse instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IMsgSendResponse,
        ): cosmos.bank.v1beta1.MsgSendResponse;

        /**
         * Encodes the specified MsgSendResponse message. Does not implicitly {@link cosmos.bank.v1beta1.MsgSendResponse.verify|verify} messages.
         * @param m MsgSendResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.bank.v1beta1.IMsgSendResponse, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgSendResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgSendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.bank.v1beta1.MsgSendResponse;
      }

      /** Properties of a MsgMultiSend. */
      interface IMsgMultiSend {
        /** MsgMultiSend inputs */
        inputs?: cosmos.bank.v1beta1.IInput[] | null;

        /** MsgMultiSend outputs */
        outputs?: cosmos.bank.v1beta1.IOutput[] | null;
      }

      /** Represents a MsgMultiSend. */
      class MsgMultiSend implements IMsgMultiSend {
        /**
         * Constructs a new MsgMultiSend.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IMsgMultiSend);

        /** MsgMultiSend inputs. */
        public inputs: cosmos.bank.v1beta1.IInput[];

        /** MsgMultiSend outputs. */
        public outputs: cosmos.bank.v1beta1.IOutput[];

        /**
         * Creates a new MsgMultiSend instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgMultiSend instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IMsgMultiSend,
        ): cosmos.bank.v1beta1.MsgMultiSend;

        /**
         * Encodes the specified MsgMultiSend message. Does not implicitly {@link cosmos.bank.v1beta1.MsgMultiSend.verify|verify} messages.
         * @param m MsgMultiSend message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.bank.v1beta1.IMsgMultiSend, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgMultiSend message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgMultiSend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.MsgMultiSend;
      }

      /** Properties of a MsgMultiSendResponse. */
      interface IMsgMultiSendResponse {}

      /** Represents a MsgMultiSendResponse. */
      class MsgMultiSendResponse implements IMsgMultiSendResponse {
        /**
         * Constructs a new MsgMultiSendResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IMsgMultiSendResponse);

        /**
         * Creates a new MsgMultiSendResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgMultiSendResponse instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IMsgMultiSendResponse,
        ): cosmos.bank.v1beta1.MsgMultiSendResponse;

        /**
         * Encodes the specified MsgMultiSendResponse message. Does not implicitly {@link cosmos.bank.v1beta1.MsgMultiSendResponse.verify|verify} messages.
         * @param m MsgMultiSendResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IMsgMultiSendResponse,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a MsgMultiSendResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgMultiSendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.bank.v1beta1.MsgMultiSendResponse;
      }
    }
  }

  /** Namespace base. */
  namespace base {
    /** Namespace abci. */
    namespace abci {
      /** Namespace v1beta1. */
      namespace v1beta1 {
        /** Properties of a TxResponse. */
        interface ITxResponse {
          /** TxResponse height */
          height?: Long | null;

          /** TxResponse txhash */
          txhash?: string | null;

          /** TxResponse codespace */
          codespace?: string | null;

          /** TxResponse code */
          code?: number | null;

          /** TxResponse data */
          data?: string | null;

          /** TxResponse rawLog */
          rawLog?: string | null;

          /** TxResponse logs */
          logs?: cosmos.base.abci.v1beta1.IABCIMessageLog[] | null;

          /** TxResponse info */
          info?: string | null;

          /** TxResponse gasWanted */
          gasWanted?: Long | null;

          /** TxResponse gasUsed */
          gasUsed?: Long | null;

          /** TxResponse tx */
          tx?: google.protobuf.IAny | null;

          /** TxResponse timestamp */
          timestamp?: string | null;
        }

        /** Represents a TxResponse. */
        class TxResponse implements ITxResponse {
          /**
           * Constructs a new TxResponse.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.base.abci.v1beta1.ITxResponse);

          /** TxResponse height. */
          public height: Long;

          /** TxResponse txhash. */
          public txhash: string;

          /** TxResponse codespace. */
          public codespace: string;

          /** TxResponse code. */
          public code: number;

          /** TxResponse data. */
          public data: string;

          /** TxResponse rawLog. */
          public rawLog: string;

          /** TxResponse logs. */
          public logs: cosmos.base.abci.v1beta1.IABCIMessageLog[];

          /** TxResponse info. */
          public info: string;

          /** TxResponse gasWanted. */
          public gasWanted: Long;

          /** TxResponse gasUsed. */
          public gasUsed: Long;

          /** TxResponse tx. */
          public tx?: google.protobuf.IAny | null;

          /** TxResponse timestamp. */
          public timestamp: string;

          /**
           * Creates a new TxResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns TxResponse instance
           */
          public static create(
            properties?: cosmos.base.abci.v1beta1.ITxResponse,
          ): cosmos.base.abci.v1beta1.TxResponse;

          /**
           * Encodes the specified TxResponse message. Does not implicitly {@link cosmos.base.abci.v1beta1.TxResponse.verify|verify} messages.
           * @param m TxResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.base.abci.v1beta1.ITxResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a TxResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns TxResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.base.abci.v1beta1.TxResponse;
        }

        /** Properties of a ABCIMessageLog. */
        interface IABCIMessageLog {
          /** ABCIMessageLog msgIndex */
          msgIndex?: number | null;

          /** ABCIMessageLog log */
          log?: string | null;

          /** ABCIMessageLog events */
          events?: cosmos.base.abci.v1beta1.IStringEvent[] | null;
        }

        /** Represents a ABCIMessageLog. */
        class ABCIMessageLog implements IABCIMessageLog {
          /**
           * Constructs a new ABCIMessageLog.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.base.abci.v1beta1.IABCIMessageLog);

          /** ABCIMessageLog msgIndex. */
          public msgIndex: number;

          /** ABCIMessageLog log. */
          public log: string;

          /** ABCIMessageLog events. */
          public events: cosmos.base.abci.v1beta1.IStringEvent[];

          /**
           * Creates a new ABCIMessageLog instance using the specified properties.
           * @param [properties] Properties to set
           * @returns ABCIMessageLog instance
           */
          public static create(
            properties?: cosmos.base.abci.v1beta1.IABCIMessageLog,
          ): cosmos.base.abci.v1beta1.ABCIMessageLog;

          /**
           * Encodes the specified ABCIMessageLog message. Does not implicitly {@link cosmos.base.abci.v1beta1.ABCIMessageLog.verify|verify} messages.
           * @param m ABCIMessageLog message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.base.abci.v1beta1.IABCIMessageLog,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a ABCIMessageLog message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns ABCIMessageLog
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.base.abci.v1beta1.ABCIMessageLog;
        }

        /** Properties of a StringEvent. */
        interface IStringEvent {
          /** StringEvent type */
          type?: string | null;

          /** StringEvent attributes */
          attributes?: cosmos.base.abci.v1beta1.IAttribute[] | null;
        }

        /** Represents a StringEvent. */
        class StringEvent implements IStringEvent {
          /**
           * Constructs a new StringEvent.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.base.abci.v1beta1.IStringEvent);

          /** StringEvent type. */
          public type: string;

          /** StringEvent attributes. */
          public attributes: cosmos.base.abci.v1beta1.IAttribute[];

          /**
           * Creates a new StringEvent instance using the specified properties.
           * @param [properties] Properties to set
           * @returns StringEvent instance
           */
          public static create(
            properties?: cosmos.base.abci.v1beta1.IStringEvent,
          ): cosmos.base.abci.v1beta1.StringEvent;

          /**
           * Encodes the specified StringEvent message. Does not implicitly {@link cosmos.base.abci.v1beta1.StringEvent.verify|verify} messages.
           * @param m StringEvent message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.base.abci.v1beta1.IStringEvent,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a StringEvent message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns StringEvent
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.base.abci.v1beta1.StringEvent;
        }

        /** Properties of an Attribute. */
        interface IAttribute {
          /** Attribute key */
          key?: string | null;

          /** Attribute value */
          value?: string | null;
        }

        /** Represents an Attribute. */
        class Attribute implements IAttribute {
          /**
           * Constructs a new Attribute.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.base.abci.v1beta1.IAttribute);

          /** Attribute key. */
          public key: string;

          /** Attribute value. */
          public value: string;

          /**
           * Creates a new Attribute instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Attribute instance
           */
          public static create(
            properties?: cosmos.base.abci.v1beta1.IAttribute,
          ): cosmos.base.abci.v1beta1.Attribute;

          /**
           * Encodes the specified Attribute message. Does not implicitly {@link cosmos.base.abci.v1beta1.Attribute.verify|verify} messages.
           * @param m Attribute message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.base.abci.v1beta1.IAttribute,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes an Attribute message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns Attribute
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.base.abci.v1beta1.Attribute;
        }

        /** Properties of a GasInfo. */
        interface IGasInfo {
          /** GasInfo gasWanted */
          gasWanted?: Long | null;

          /** GasInfo gasUsed */
          gasUsed?: Long | null;
        }

        /** Represents a GasInfo. */
        class GasInfo implements IGasInfo {
          /**
           * Constructs a new GasInfo.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.base.abci.v1beta1.IGasInfo);

          /** GasInfo gasWanted. */
          public gasWanted: Long;

          /** GasInfo gasUsed. */
          public gasUsed: Long;

          /**
           * Creates a new GasInfo instance using the specified properties.
           * @param [properties] Properties to set
           * @returns GasInfo instance
           */
          public static create(
            properties?: cosmos.base.abci.v1beta1.IGasInfo,
          ): cosmos.base.abci.v1beta1.GasInfo;

          /**
           * Encodes the specified GasInfo message. Does not implicitly {@link cosmos.base.abci.v1beta1.GasInfo.verify|verify} messages.
           * @param m GasInfo message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(m: cosmos.base.abci.v1beta1.IGasInfo, w?: $protobuf.Writer): $protobuf.Writer;

          /**
           * Decodes a GasInfo message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns GasInfo
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.base.abci.v1beta1.GasInfo;
        }

        /** Properties of a Result. */
        interface IResult {
          /** Result data */
          data?: Uint8Array | null;

          /** Result log */
          log?: string | null;

          /** Result events */
          events?: tendermint.abci.IEvent[] | null;
        }

        /** Represents a Result. */
        class Result implements IResult {
          /**
           * Constructs a new Result.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.base.abci.v1beta1.IResult);

          /** Result data. */
          public data: Uint8Array;

          /** Result log. */
          public log: string;

          /** Result events. */
          public events: tendermint.abci.IEvent[];

          /**
           * Creates a new Result instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Result instance
           */
          public static create(
            properties?: cosmos.base.abci.v1beta1.IResult,
          ): cosmos.base.abci.v1beta1.Result;

          /**
           * Encodes the specified Result message. Does not implicitly {@link cosmos.base.abci.v1beta1.Result.verify|verify} messages.
           * @param m Result message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(m: cosmos.base.abci.v1beta1.IResult, w?: $protobuf.Writer): $protobuf.Writer;

          /**
           * Decodes a Result message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns Result
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.base.abci.v1beta1.Result;
        }

        /** Properties of a SimulationResponse. */
        interface ISimulationResponse {
          /** SimulationResponse gasInfo */
          gasInfo?: cosmos.base.abci.v1beta1.IGasInfo | null;

          /** SimulationResponse result */
          result?: cosmos.base.abci.v1beta1.IResult | null;
        }

        /** Represents a SimulationResponse. */
        class SimulationResponse implements ISimulationResponse {
          /**
           * Constructs a new SimulationResponse.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.base.abci.v1beta1.ISimulationResponse);

          /** SimulationResponse gasInfo. */
          public gasInfo?: cosmos.base.abci.v1beta1.IGasInfo | null;

          /** SimulationResponse result. */
          public result?: cosmos.base.abci.v1beta1.IResult | null;

          /**
           * Creates a new SimulationResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns SimulationResponse instance
           */
          public static create(
            properties?: cosmos.base.abci.v1beta1.ISimulationResponse,
          ): cosmos.base.abci.v1beta1.SimulationResponse;

          /**
           * Encodes the specified SimulationResponse message. Does not implicitly {@link cosmos.base.abci.v1beta1.SimulationResponse.verify|verify} messages.
           * @param m SimulationResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.base.abci.v1beta1.ISimulationResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a SimulationResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns SimulationResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.base.abci.v1beta1.SimulationResponse;
        }

        /** Properties of a MsgData. */
        interface IMsgData {
          /** MsgData msgType */
          msgType?: string | null;

          /** MsgData data */
          data?: Uint8Array | null;
        }

        /** Represents a MsgData. */
        class MsgData implements IMsgData {
          /**
           * Constructs a new MsgData.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.base.abci.v1beta1.IMsgData);

          /** MsgData msgType. */
          public msgType: string;

          /** MsgData data. */
          public data: Uint8Array;

          /**
           * Creates a new MsgData instance using the specified properties.
           * @param [properties] Properties to set
           * @returns MsgData instance
           */
          public static create(
            properties?: cosmos.base.abci.v1beta1.IMsgData,
          ): cosmos.base.abci.v1beta1.MsgData;

          /**
           * Encodes the specified MsgData message. Does not implicitly {@link cosmos.base.abci.v1beta1.MsgData.verify|verify} messages.
           * @param m MsgData message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(m: cosmos.base.abci.v1beta1.IMsgData, w?: $protobuf.Writer): $protobuf.Writer;

          /**
           * Decodes a MsgData message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns MsgData
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.base.abci.v1beta1.MsgData;
        }

        /** Properties of a TxMsgData. */
        interface ITxMsgData {
          /** TxMsgData data */
          data?: cosmos.base.abci.v1beta1.IMsgData[] | null;
        }

        /** Represents a TxMsgData. */
        class TxMsgData implements ITxMsgData {
          /**
           * Constructs a new TxMsgData.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.base.abci.v1beta1.ITxMsgData);

          /** TxMsgData data. */
          public data: cosmos.base.abci.v1beta1.IMsgData[];

          /**
           * Creates a new TxMsgData instance using the specified properties.
           * @param [properties] Properties to set
           * @returns TxMsgData instance
           */
          public static create(
            properties?: cosmos.base.abci.v1beta1.ITxMsgData,
          ): cosmos.base.abci.v1beta1.TxMsgData;

          /**
           * Encodes the specified TxMsgData message. Does not implicitly {@link cosmos.base.abci.v1beta1.TxMsgData.verify|verify} messages.
           * @param m TxMsgData message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.base.abci.v1beta1.ITxMsgData,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a TxMsgData message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns TxMsgData
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.base.abci.v1beta1.TxMsgData;
        }

        /** Properties of a SearchTxsResult. */
        interface ISearchTxsResult {
          /** SearchTxsResult totalCount */
          totalCount?: Long | null;

          /** SearchTxsResult count */
          count?: Long | null;

          /** SearchTxsResult pageNumber */
          pageNumber?: Long | null;

          /** SearchTxsResult pageTotal */
          pageTotal?: Long | null;

          /** SearchTxsResult limit */
          limit?: Long | null;

          /** SearchTxsResult txs */
          txs?: cosmos.base.abci.v1beta1.ITxResponse[] | null;
        }

        /** Represents a SearchTxsResult. */
        class SearchTxsResult implements ISearchTxsResult {
          /**
           * Constructs a new SearchTxsResult.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.base.abci.v1beta1.ISearchTxsResult);

          /** SearchTxsResult totalCount. */
          public totalCount: Long;

          /** SearchTxsResult count. */
          public count: Long;

          /** SearchTxsResult pageNumber. */
          public pageNumber: Long;

          /** SearchTxsResult pageTotal. */
          public pageTotal: Long;

          /** SearchTxsResult limit. */
          public limit: Long;

          /** SearchTxsResult txs. */
          public txs: cosmos.base.abci.v1beta1.ITxResponse[];

          /**
           * Creates a new SearchTxsResult instance using the specified properties.
           * @param [properties] Properties to set
           * @returns SearchTxsResult instance
           */
          public static create(
            properties?: cosmos.base.abci.v1beta1.ISearchTxsResult,
          ): cosmos.base.abci.v1beta1.SearchTxsResult;

          /**
           * Encodes the specified SearchTxsResult message. Does not implicitly {@link cosmos.base.abci.v1beta1.SearchTxsResult.verify|verify} messages.
           * @param m SearchTxsResult message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.base.abci.v1beta1.ISearchTxsResult,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a SearchTxsResult message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns SearchTxsResult
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.base.abci.v1beta1.SearchTxsResult;
        }
      }
    }

    /** Namespace query. */
    namespace query {
      /** Namespace v1beta1. */
      namespace v1beta1 {
        /** Properties of a PageRequest. */
        interface IPageRequest {
          /** PageRequest key */
          key?: Uint8Array | null;

          /** PageRequest offset */
          offset?: Long | null;

          /** PageRequest limit */
          limit?: Long | null;

          /** PageRequest countTotal */
          countTotal?: boolean | null;
        }

        /** Represents a PageRequest. */
        class PageRequest implements IPageRequest {
          /**
           * Constructs a new PageRequest.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.base.query.v1beta1.IPageRequest);

          /** PageRequest key. */
          public key: Uint8Array;

          /** PageRequest offset. */
          public offset: Long;

          /** PageRequest limit. */
          public limit: Long;

          /** PageRequest countTotal. */
          public countTotal: boolean;

          /**
           * Creates a new PageRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns PageRequest instance
           */
          public static create(
            properties?: cosmos.base.query.v1beta1.IPageRequest,
          ): cosmos.base.query.v1beta1.PageRequest;

          /**
           * Encodes the specified PageRequest message. Does not implicitly {@link cosmos.base.query.v1beta1.PageRequest.verify|verify} messages.
           * @param m PageRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.base.query.v1beta1.IPageRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a PageRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns PageRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.base.query.v1beta1.PageRequest;
        }

        /** Properties of a PageResponse. */
        interface IPageResponse {
          /** PageResponse nextKey */
          nextKey?: Uint8Array | null;

          /** PageResponse total */
          total?: Long | null;
        }

        /** Represents a PageResponse. */
        class PageResponse implements IPageResponse {
          /**
           * Constructs a new PageResponse.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.base.query.v1beta1.IPageResponse);

          /** PageResponse nextKey. */
          public nextKey: Uint8Array;

          /** PageResponse total. */
          public total: Long;

          /**
           * Creates a new PageResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns PageResponse instance
           */
          public static create(
            properties?: cosmos.base.query.v1beta1.IPageResponse,
          ): cosmos.base.query.v1beta1.PageResponse;

          /**
           * Encodes the specified PageResponse message. Does not implicitly {@link cosmos.base.query.v1beta1.PageResponse.verify|verify} messages.
           * @param m PageResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.base.query.v1beta1.IPageResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a PageResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns PageResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.base.query.v1beta1.PageResponse;
        }
      }
    }

    /** Namespace v1beta1. */
    namespace v1beta1 {
      /** Properties of a Coin. */
      interface ICoin {
        /** Coin denom */
        denom?: string | null;

        /** Coin amount */
        amount?: string | null;
      }

      /** Represents a Coin. */
      class Coin implements ICoin {
        /**
         * Constructs a new Coin.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.base.v1beta1.ICoin);

        /** Coin denom. */
        public denom: string;

        /** Coin amount. */
        public amount: string;

        /**
         * Creates a new Coin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Coin instance
         */
        public static create(properties?: cosmos.base.v1beta1.ICoin): cosmos.base.v1beta1.Coin;

        /**
         * Encodes the specified Coin message. Does not implicitly {@link cosmos.base.v1beta1.Coin.verify|verify} messages.
         * @param m Coin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.base.v1beta1.ICoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Coin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Coin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.base.v1beta1.Coin;
      }

      /** Properties of a DecCoin. */
      interface IDecCoin {
        /** DecCoin denom */
        denom?: string | null;

        /** DecCoin amount */
        amount?: string | null;
      }

      /** Represents a DecCoin. */
      class DecCoin implements IDecCoin {
        /**
         * Constructs a new DecCoin.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.base.v1beta1.IDecCoin);

        /** DecCoin denom. */
        public denom: string;

        /** DecCoin amount. */
        public amount: string;

        /**
         * Creates a new DecCoin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DecCoin instance
         */
        public static create(properties?: cosmos.base.v1beta1.IDecCoin): cosmos.base.v1beta1.DecCoin;

        /**
         * Encodes the specified DecCoin message. Does not implicitly {@link cosmos.base.v1beta1.DecCoin.verify|verify} messages.
         * @param m DecCoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.base.v1beta1.IDecCoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DecCoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DecCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.base.v1beta1.DecCoin;
      }

      /** Properties of an IntProto. */
      interface IIntProto {
        /** IntProto int */
        int?: string | null;
      }

      /** Represents an IntProto. */
      class IntProto implements IIntProto {
        /**
         * Constructs a new IntProto.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.base.v1beta1.IIntProto);

        /** IntProto int. */
        public int: string;

        /**
         * Creates a new IntProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IntProto instance
         */
        public static create(properties?: cosmos.base.v1beta1.IIntProto): cosmos.base.v1beta1.IntProto;

        /**
         * Encodes the specified IntProto message. Does not implicitly {@link cosmos.base.v1beta1.IntProto.verify|verify} messages.
         * @param m IntProto message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.base.v1beta1.IIntProto, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IntProto message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns IntProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.base.v1beta1.IntProto;
      }

      /** Properties of a DecProto. */
      interface IDecProto {
        /** DecProto dec */
        dec?: string | null;
      }

      /** Represents a DecProto. */
      class DecProto implements IDecProto {
        /**
         * Constructs a new DecProto.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.base.v1beta1.IDecProto);

        /** DecProto dec. */
        public dec: string;

        /**
         * Creates a new DecProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DecProto instance
         */
        public static create(properties?: cosmos.base.v1beta1.IDecProto): cosmos.base.v1beta1.DecProto;

        /**
         * Encodes the specified DecProto message. Does not implicitly {@link cosmos.base.v1beta1.DecProto.verify|verify} messages.
         * @param m DecProto message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.base.v1beta1.IDecProto, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DecProto message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DecProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.base.v1beta1.DecProto;
      }
    }
  }

  /** Namespace crypto. */
  namespace crypto {
    /** Namespace multisig. */
    namespace multisig {
      /** Namespace v1beta1. */
      namespace v1beta1 {
        /** Properties of a MultiSignature. */
        interface IMultiSignature {
          /** MultiSignature signatures */
          signatures?: Uint8Array[] | null;
        }

        /** Represents a MultiSignature. */
        class MultiSignature implements IMultiSignature {
          /**
           * Constructs a new MultiSignature.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.crypto.multisig.v1beta1.IMultiSignature);

          /** MultiSignature signatures. */
          public signatures: Uint8Array[];

          /**
           * Creates a new MultiSignature instance using the specified properties.
           * @param [properties] Properties to set
           * @returns MultiSignature instance
           */
          public static create(
            properties?: cosmos.crypto.multisig.v1beta1.IMultiSignature,
          ): cosmos.crypto.multisig.v1beta1.MultiSignature;

          /**
           * Encodes the specified MultiSignature message. Does not implicitly {@link cosmos.crypto.multisig.v1beta1.MultiSignature.verify|verify} messages.
           * @param m MultiSignature message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.crypto.multisig.v1beta1.IMultiSignature,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a MultiSignature message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns MultiSignature
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.crypto.multisig.v1beta1.MultiSignature;
        }

        /** Properties of a CompactBitArray. */
        interface ICompactBitArray {
          /** CompactBitArray extraBitsStored */
          extraBitsStored?: number | null;

          /** CompactBitArray elems */
          elems?: Uint8Array | null;
        }

        /** Represents a CompactBitArray. */
        class CompactBitArray implements ICompactBitArray {
          /**
           * Constructs a new CompactBitArray.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.crypto.multisig.v1beta1.ICompactBitArray);

          /** CompactBitArray extraBitsStored. */
          public extraBitsStored: number;

          /** CompactBitArray elems. */
          public elems: Uint8Array;

          /**
           * Creates a new CompactBitArray instance using the specified properties.
           * @param [properties] Properties to set
           * @returns CompactBitArray instance
           */
          public static create(
            properties?: cosmos.crypto.multisig.v1beta1.ICompactBitArray,
          ): cosmos.crypto.multisig.v1beta1.CompactBitArray;

          /**
           * Encodes the specified CompactBitArray message. Does not implicitly {@link cosmos.crypto.multisig.v1beta1.CompactBitArray.verify|verify} messages.
           * @param m CompactBitArray message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.crypto.multisig.v1beta1.ICompactBitArray,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a CompactBitArray message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns CompactBitArray
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.crypto.multisig.v1beta1.CompactBitArray;
        }
      }
    }

    /** Namespace secp256k1. */
    namespace secp256k1 {
      /** Properties of a PubKey. */
      interface IPubKey {
        /** PubKey key */
        key?: Uint8Array | null;
      }

      /** Represents a PubKey. */
      class PubKey implements IPubKey {
        /**
         * Constructs a new PubKey.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.crypto.secp256k1.IPubKey);

        /** PubKey key. */
        public key: Uint8Array;

        /**
         * Creates a new PubKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PubKey instance
         */
        public static create(properties?: cosmos.crypto.secp256k1.IPubKey): cosmos.crypto.secp256k1.PubKey;

        /**
         * Encodes the specified PubKey message. Does not implicitly {@link cosmos.crypto.secp256k1.PubKey.verify|verify} messages.
         * @param m PubKey message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.crypto.secp256k1.IPubKey, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PubKey message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PubKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.crypto.secp256k1.PubKey;
      }

      /** Properties of a PrivKey. */
      interface IPrivKey {
        /** PrivKey key */
        key?: Uint8Array | null;
      }

      /** Represents a PrivKey. */
      class PrivKey implements IPrivKey {
        /**
         * Constructs a new PrivKey.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.crypto.secp256k1.IPrivKey);

        /** PrivKey key. */
        public key: Uint8Array;

        /**
         * Creates a new PrivKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PrivKey instance
         */
        public static create(properties?: cosmos.crypto.secp256k1.IPrivKey): cosmos.crypto.secp256k1.PrivKey;

        /**
         * Encodes the specified PrivKey message. Does not implicitly {@link cosmos.crypto.secp256k1.PrivKey.verify|verify} messages.
         * @param m PrivKey message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.crypto.secp256k1.IPrivKey, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PrivKey message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PrivKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.crypto.secp256k1.PrivKey;
      }
    }
  }

  /** Namespace staking. */
  namespace staking {
    /** Namespace v1beta1. */
    namespace v1beta1 {
      /** Properties of a HistoricalInfo. */
      interface IHistoricalInfo {
        /** HistoricalInfo header */
        header?: tendermint.types.IHeader | null;

        /** HistoricalInfo valset */
        valset?: cosmos.staking.v1beta1.IValidator[] | null;
      }

      /** Represents a HistoricalInfo. */
      class HistoricalInfo implements IHistoricalInfo {
        /**
         * Constructs a new HistoricalInfo.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IHistoricalInfo);

        /** HistoricalInfo header. */
        public header?: tendermint.types.IHeader | null;

        /** HistoricalInfo valset. */
        public valset: cosmos.staking.v1beta1.IValidator[];

        /**
         * Creates a new HistoricalInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HistoricalInfo instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IHistoricalInfo,
        ): cosmos.staking.v1beta1.HistoricalInfo;

        /**
         * Encodes the specified HistoricalInfo message. Does not implicitly {@link cosmos.staking.v1beta1.HistoricalInfo.verify|verify} messages.
         * @param m HistoricalInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.staking.v1beta1.IHistoricalInfo,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a HistoricalInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns HistoricalInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.staking.v1beta1.HistoricalInfo;
      }

      /** Properties of a CommissionRates. */
      interface ICommissionRates {
        /** CommissionRates rate */
        rate?: string | null;

        /** CommissionRates maxRate */
        maxRate?: string | null;

        /** CommissionRates maxChangeRate */
        maxChangeRate?: string | null;
      }

      /** Represents a CommissionRates. */
      class CommissionRates implements ICommissionRates {
        /**
         * Constructs a new CommissionRates.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.ICommissionRates);

        /** CommissionRates rate. */
        public rate: string;

        /** CommissionRates maxRate. */
        public maxRate: string;

        /** CommissionRates maxChangeRate. */
        public maxChangeRate: string;

        /**
         * Creates a new CommissionRates instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommissionRates instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.ICommissionRates,
        ): cosmos.staking.v1beta1.CommissionRates;

        /**
         * Encodes the specified CommissionRates message. Does not implicitly {@link cosmos.staking.v1beta1.CommissionRates.verify|verify} messages.
         * @param m CommissionRates message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.staking.v1beta1.ICommissionRates,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a CommissionRates message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CommissionRates
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.staking.v1beta1.CommissionRates;
      }

      /** Properties of a Commission. */
      interface ICommission {
        /** Commission commissionRates */
        commissionRates?: cosmos.staking.v1beta1.ICommissionRates | null;

        /** Commission updateTime */
        updateTime?: google.protobuf.ITimestamp | null;
      }

      /** Represents a Commission. */
      class Commission implements ICommission {
        /**
         * Constructs a new Commission.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.ICommission);

        /** Commission commissionRates. */
        public commissionRates?: cosmos.staking.v1beta1.ICommissionRates | null;

        /** Commission updateTime. */
        public updateTime?: google.protobuf.ITimestamp | null;

        /**
         * Creates a new Commission instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Commission instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.ICommission,
        ): cosmos.staking.v1beta1.Commission;

        /**
         * Encodes the specified Commission message. Does not implicitly {@link cosmos.staking.v1beta1.Commission.verify|verify} messages.
         * @param m Commission message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.staking.v1beta1.ICommission, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Commission message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Commission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.staking.v1beta1.Commission;
      }

      /** Properties of a Description. */
      interface IDescription {
        /** Description moniker */
        moniker?: string | null;

        /** Description identity */
        identity?: string | null;

        /** Description website */
        website?: string | null;

        /** Description securityContact */
        securityContact?: string | null;

        /** Description details */
        details?: string | null;
      }

      /** Represents a Description. */
      class Description implements IDescription {
        /**
         * Constructs a new Description.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IDescription);

        /** Description moniker. */
        public moniker: string;

        /** Description identity. */
        public identity: string;

        /** Description website. */
        public website: string;

        /** Description securityContact. */
        public securityContact: string;

        /** Description details. */
        public details: string;

        /**
         * Creates a new Description instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Description instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IDescription,
        ): cosmos.staking.v1beta1.Description;

        /**
         * Encodes the specified Description message. Does not implicitly {@link cosmos.staking.v1beta1.Description.verify|verify} messages.
         * @param m Description message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.staking.v1beta1.IDescription, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Description message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Description
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.staking.v1beta1.Description;
      }

      /** Properties of a Validator. */
      interface IValidator {
        /** Validator operatorAddress */
        operatorAddress?: string | null;

        /** Validator consensusPubkey */
        consensusPubkey?: google.protobuf.IAny | null;

        /** Validator jailed */
        jailed?: boolean | null;

        /** Validator status */
        status?: cosmos.staking.v1beta1.BondStatus | null;

        /** Validator tokens */
        tokens?: string | null;

        /** Validator delegatorShares */
        delegatorShares?: string | null;

        /** Validator description */
        description?: cosmos.staking.v1beta1.IDescription | null;

        /** Validator unbondingHeight */
        unbondingHeight?: Long | null;

        /** Validator unbondingTime */
        unbondingTime?: google.protobuf.ITimestamp | null;

        /** Validator commission */
        commission?: cosmos.staking.v1beta1.ICommission | null;

        /** Validator minSelfDelegation */
        minSelfDelegation?: string | null;
      }

      /** Represents a Validator. */
      class Validator implements IValidator {
        /**
         * Constructs a new Validator.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IValidator);

        /** Validator operatorAddress. */
        public operatorAddress: string;

        /** Validator consensusPubkey. */
        public consensusPubkey?: google.protobuf.IAny | null;

        /** Validator jailed. */
        public jailed: boolean;

        /** Validator status. */
        public status: cosmos.staking.v1beta1.BondStatus;

        /** Validator tokens. */
        public tokens: string;

        /** Validator delegatorShares. */
        public delegatorShares: string;

        /** Validator description. */
        public description?: cosmos.staking.v1beta1.IDescription | null;

        /** Validator unbondingHeight. */
        public unbondingHeight: Long;

        /** Validator unbondingTime. */
        public unbondingTime?: google.protobuf.ITimestamp | null;

        /** Validator commission. */
        public commission?: cosmos.staking.v1beta1.ICommission | null;

        /** Validator minSelfDelegation. */
        public minSelfDelegation: string;

        /**
         * Creates a new Validator instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Validator instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IValidator,
        ): cosmos.staking.v1beta1.Validator;

        /**
         * Encodes the specified Validator message. Does not implicitly {@link cosmos.staking.v1beta1.Validator.verify|verify} messages.
         * @param m Validator message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.staking.v1beta1.IValidator, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Validator message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Validator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.staking.v1beta1.Validator;
      }

      /** BondStatus enum. */
      enum BondStatus {
        BOND_STATUS_UNSPECIFIED = 0,
        BOND_STATUS_UNBONDED = 1,
        BOND_STATUS_UNBONDING = 2,
        BOND_STATUS_BONDED = 3,
      }

      /** Properties of a ValAddresses. */
      interface IValAddresses {
        /** ValAddresses addresses */
        addresses?: string[] | null;
      }

      /** Represents a ValAddresses. */
      class ValAddresses implements IValAddresses {
        /**
         * Constructs a new ValAddresses.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IValAddresses);

        /** ValAddresses addresses. */
        public addresses: string[];

        /**
         * Creates a new ValAddresses instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ValAddresses instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IValAddresses,
        ): cosmos.staking.v1beta1.ValAddresses;

        /**
         * Encodes the specified ValAddresses message. Does not implicitly {@link cosmos.staking.v1beta1.ValAddresses.verify|verify} messages.
         * @param m ValAddresses message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.staking.v1beta1.IValAddresses, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ValAddresses message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ValAddresses
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.staking.v1beta1.ValAddresses;
      }

      /** Properties of a DVPair. */
      interface IDVPair {
        /** DVPair delegatorAddress */
        delegatorAddress?: string | null;

        /** DVPair validatorAddress */
        validatorAddress?: string | null;
      }

      /** Represents a DVPair. */
      class DVPair implements IDVPair {
        /**
         * Constructs a new DVPair.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IDVPair);

        /** DVPair delegatorAddress. */
        public delegatorAddress: string;

        /** DVPair validatorAddress. */
        public validatorAddress: string;

        /**
         * Creates a new DVPair instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DVPair instance
         */
        public static create(properties?: cosmos.staking.v1beta1.IDVPair): cosmos.staking.v1beta1.DVPair;

        /**
         * Encodes the specified DVPair message. Does not implicitly {@link cosmos.staking.v1beta1.DVPair.verify|verify} messages.
         * @param m DVPair message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.staking.v1beta1.IDVPair, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DVPair message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DVPair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.staking.v1beta1.DVPair;
      }

      /** Properties of a DVPairs. */
      interface IDVPairs {
        /** DVPairs pairs */
        pairs?: cosmos.staking.v1beta1.IDVPair[] | null;
      }

      /** Represents a DVPairs. */
      class DVPairs implements IDVPairs {
        /**
         * Constructs a new DVPairs.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IDVPairs);

        /** DVPairs pairs. */
        public pairs: cosmos.staking.v1beta1.IDVPair[];

        /**
         * Creates a new DVPairs instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DVPairs instance
         */
        public static create(properties?: cosmos.staking.v1beta1.IDVPairs): cosmos.staking.v1beta1.DVPairs;

        /**
         * Encodes the specified DVPairs message. Does not implicitly {@link cosmos.staking.v1beta1.DVPairs.verify|verify} messages.
         * @param m DVPairs message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.staking.v1beta1.IDVPairs, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DVPairs message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DVPairs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.staking.v1beta1.DVPairs;
      }

      /** Properties of a DVVTriplet. */
      interface IDVVTriplet {
        /** DVVTriplet delegatorAddress */
        delegatorAddress?: string | null;

        /** DVVTriplet validatorSrcAddress */
        validatorSrcAddress?: string | null;

        /** DVVTriplet validatorDstAddress */
        validatorDstAddress?: string | null;
      }

      /** Represents a DVVTriplet. */
      class DVVTriplet implements IDVVTriplet {
        /**
         * Constructs a new DVVTriplet.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IDVVTriplet);

        /** DVVTriplet delegatorAddress. */
        public delegatorAddress: string;

        /** DVVTriplet validatorSrcAddress. */
        public validatorSrcAddress: string;

        /** DVVTriplet validatorDstAddress. */
        public validatorDstAddress: string;

        /**
         * Creates a new DVVTriplet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DVVTriplet instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IDVVTriplet,
        ): cosmos.staking.v1beta1.DVVTriplet;

        /**
         * Encodes the specified DVVTriplet message. Does not implicitly {@link cosmos.staking.v1beta1.DVVTriplet.verify|verify} messages.
         * @param m DVVTriplet message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.staking.v1beta1.IDVVTriplet, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DVVTriplet message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DVVTriplet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.staking.v1beta1.DVVTriplet;
      }

      /** Properties of a DVVTriplets. */
      interface IDVVTriplets {
        /** DVVTriplets triplets */
        triplets?: cosmos.staking.v1beta1.IDVVTriplet[] | null;
      }

      /** Represents a DVVTriplets. */
      class DVVTriplets implements IDVVTriplets {
        /**
         * Constructs a new DVVTriplets.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IDVVTriplets);

        /** DVVTriplets triplets. */
        public triplets: cosmos.staking.v1beta1.IDVVTriplet[];

        /**
         * Creates a new DVVTriplets instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DVVTriplets instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IDVVTriplets,
        ): cosmos.staking.v1beta1.DVVTriplets;

        /**
         * Encodes the specified DVVTriplets message. Does not implicitly {@link cosmos.staking.v1beta1.DVVTriplets.verify|verify} messages.
         * @param m DVVTriplets message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.staking.v1beta1.IDVVTriplets, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DVVTriplets message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DVVTriplets
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.staking.v1beta1.DVVTriplets;
      }

      /** Properties of a Delegation. */
      interface IDelegation {
        /** Delegation delegatorAddress */
        delegatorAddress?: string | null;

        /** Delegation validatorAddress */
        validatorAddress?: string | null;

        /** Delegation shares */
        shares?: string | null;
      }

      /** Represents a Delegation. */
      class Delegation implements IDelegation {
        /**
         * Constructs a new Delegation.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IDelegation);

        /** Delegation delegatorAddress. */
        public delegatorAddress: string;

        /** Delegation validatorAddress. */
        public validatorAddress: string;

        /** Delegation shares. */
        public shares: string;

        /**
         * Creates a new Delegation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Delegation instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IDelegation,
        ): cosmos.staking.v1beta1.Delegation;

        /**
         * Encodes the specified Delegation message. Does not implicitly {@link cosmos.staking.v1beta1.Delegation.verify|verify} messages.
         * @param m Delegation message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.staking.v1beta1.IDelegation, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Delegation message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Delegation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.staking.v1beta1.Delegation;
      }

      /** Properties of an UnbondingDelegation. */
      interface IUnbondingDelegation {
        /** UnbondingDelegation delegatorAddress */
        delegatorAddress?: string | null;

        /** UnbondingDelegation validatorAddress */
        validatorAddress?: string | null;

        /** UnbondingDelegation entries */
        entries?: cosmos.staking.v1beta1.IUnbondingDelegationEntry[] | null;
      }

      /** Represents an UnbondingDelegation. */
      class UnbondingDelegation implements IUnbondingDelegation {
        /**
         * Constructs a new UnbondingDelegation.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IUnbondingDelegation);

        /** UnbondingDelegation delegatorAddress. */
        public delegatorAddress: string;

        /** UnbondingDelegation validatorAddress. */
        public validatorAddress: string;

        /** UnbondingDelegation entries. */
        public entries: cosmos.staking.v1beta1.IUnbondingDelegationEntry[];

        /**
         * Creates a new UnbondingDelegation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnbondingDelegation instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IUnbondingDelegation,
        ): cosmos.staking.v1beta1.UnbondingDelegation;

        /**
         * Encodes the specified UnbondingDelegation message. Does not implicitly {@link cosmos.staking.v1beta1.UnbondingDelegation.verify|verify} messages.
         * @param m UnbondingDelegation message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.staking.v1beta1.IUnbondingDelegation,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes an UnbondingDelegation message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UnbondingDelegation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.staking.v1beta1.UnbondingDelegation;
      }

      /** Properties of an UnbondingDelegationEntry. */
      interface IUnbondingDelegationEntry {
        /** UnbondingDelegationEntry creationHeight */
        creationHeight?: Long | null;

        /** UnbondingDelegationEntry completionTime */
        completionTime?: google.protobuf.ITimestamp | null;

        /** UnbondingDelegationEntry initialBalance */
        initialBalance?: string | null;

        /** UnbondingDelegationEntry balance */
        balance?: string | null;
      }

      /** Represents an UnbondingDelegationEntry. */
      class UnbondingDelegationEntry implements IUnbondingDelegationEntry {
        /**
         * Constructs a new UnbondingDelegationEntry.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IUnbondingDelegationEntry);

        /** UnbondingDelegationEntry creationHeight. */
        public creationHeight: Long;

        /** UnbondingDelegationEntry completionTime. */
        public completionTime?: google.protobuf.ITimestamp | null;

        /** UnbondingDelegationEntry initialBalance. */
        public initialBalance: string;

        /** UnbondingDelegationEntry balance. */
        public balance: string;

        /**
         * Creates a new UnbondingDelegationEntry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnbondingDelegationEntry instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IUnbondingDelegationEntry,
        ): cosmos.staking.v1beta1.UnbondingDelegationEntry;

        /**
         * Encodes the specified UnbondingDelegationEntry message. Does not implicitly {@link cosmos.staking.v1beta1.UnbondingDelegationEntry.verify|verify} messages.
         * @param m UnbondingDelegationEntry message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.staking.v1beta1.IUnbondingDelegationEntry,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes an UnbondingDelegationEntry message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UnbondingDelegationEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.staking.v1beta1.UnbondingDelegationEntry;
      }

      /** Properties of a RedelegationEntry. */
      interface IRedelegationEntry {
        /** RedelegationEntry creationHeight */
        creationHeight?: Long | null;

        /** RedelegationEntry completionTime */
        completionTime?: google.protobuf.ITimestamp | null;

        /** RedelegationEntry initialBalance */
        initialBalance?: string | null;

        /** RedelegationEntry sharesDst */
        sharesDst?: string | null;
      }

      /** Represents a RedelegationEntry. */
      class RedelegationEntry implements IRedelegationEntry {
        /**
         * Constructs a new RedelegationEntry.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IRedelegationEntry);

        /** RedelegationEntry creationHeight. */
        public creationHeight: Long;

        /** RedelegationEntry completionTime. */
        public completionTime?: google.protobuf.ITimestamp | null;

        /** RedelegationEntry initialBalance. */
        public initialBalance: string;

        /** RedelegationEntry sharesDst. */
        public sharesDst: string;

        /**
         * Creates a new RedelegationEntry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RedelegationEntry instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IRedelegationEntry,
        ): cosmos.staking.v1beta1.RedelegationEntry;

        /**
         * Encodes the specified RedelegationEntry message. Does not implicitly {@link cosmos.staking.v1beta1.RedelegationEntry.verify|verify} messages.
         * @param m RedelegationEntry message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.staking.v1beta1.IRedelegationEntry,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a RedelegationEntry message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RedelegationEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.staking.v1beta1.RedelegationEntry;
      }

      /** Properties of a Redelegation. */
      interface IRedelegation {
        /** Redelegation delegatorAddress */
        delegatorAddress?: string | null;

        /** Redelegation validatorSrcAddress */
        validatorSrcAddress?: string | null;

        /** Redelegation validatorDstAddress */
        validatorDstAddress?: string | null;

        /** Redelegation entries */
        entries?: cosmos.staking.v1beta1.IRedelegationEntry[] | null;
      }

      /** Represents a Redelegation. */
      class Redelegation implements IRedelegation {
        /**
         * Constructs a new Redelegation.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IRedelegation);

        /** Redelegation delegatorAddress. */
        public delegatorAddress: string;

        /** Redelegation validatorSrcAddress. */
        public validatorSrcAddress: string;

        /** Redelegation validatorDstAddress. */
        public validatorDstAddress: string;

        /** Redelegation entries. */
        public entries: cosmos.staking.v1beta1.IRedelegationEntry[];

        /**
         * Creates a new Redelegation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Redelegation instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IRedelegation,
        ): cosmos.staking.v1beta1.Redelegation;

        /**
         * Encodes the specified Redelegation message. Does not implicitly {@link cosmos.staking.v1beta1.Redelegation.verify|verify} messages.
         * @param m Redelegation message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.staking.v1beta1.IRedelegation, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Redelegation message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Redelegation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.staking.v1beta1.Redelegation;
      }

      /** Properties of a Params. */
      interface IParams {
        /** Params unbondingTime */
        unbondingTime?: google.protobuf.IDuration | null;

        /** Params maxValidators */
        maxValidators?: number | null;

        /** Params maxEntries */
        maxEntries?: number | null;

        /** Params historicalEntries */
        historicalEntries?: number | null;

        /** Params bondDenom */
        bondDenom?: string | null;
      }

      /** Represents a Params. */
      class Params implements IParams {
        /**
         * Constructs a new Params.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IParams);

        /** Params unbondingTime. */
        public unbondingTime?: google.protobuf.IDuration | null;

        /** Params maxValidators. */
        public maxValidators: number;

        /** Params maxEntries. */
        public maxEntries: number;

        /** Params historicalEntries. */
        public historicalEntries: number;

        /** Params bondDenom. */
        public bondDenom: string;

        /**
         * Creates a new Params instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Params instance
         */
        public static create(properties?: cosmos.staking.v1beta1.IParams): cosmos.staking.v1beta1.Params;

        /**
         * Encodes the specified Params message. Does not implicitly {@link cosmos.staking.v1beta1.Params.verify|verify} messages.
         * @param m Params message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.staking.v1beta1.IParams, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Params message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Params
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.staking.v1beta1.Params;
      }

      /** Properties of a DelegationResponse. */
      interface IDelegationResponse {
        /** DelegationResponse delegation */
        delegation?: cosmos.staking.v1beta1.IDelegation | null;

        /** DelegationResponse balance */
        balance?: cosmos.base.v1beta1.ICoin | null;
      }

      /** Represents a DelegationResponse. */
      class DelegationResponse implements IDelegationResponse {
        /**
         * Constructs a new DelegationResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IDelegationResponse);

        /** DelegationResponse delegation. */
        public delegation?: cosmos.staking.v1beta1.IDelegation | null;

        /** DelegationResponse balance. */
        public balance?: cosmos.base.v1beta1.ICoin | null;

        /**
         * Creates a new DelegationResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DelegationResponse instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IDelegationResponse,
        ): cosmos.staking.v1beta1.DelegationResponse;

        /**
         * Encodes the specified DelegationResponse message. Does not implicitly {@link cosmos.staking.v1beta1.DelegationResponse.verify|verify} messages.
         * @param m DelegationResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.staking.v1beta1.IDelegationResponse,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a DelegationResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DelegationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.staking.v1beta1.DelegationResponse;
      }

      /** Properties of a RedelegationEntryResponse. */
      interface IRedelegationEntryResponse {
        /** RedelegationEntryResponse redelegationEntry */
        redelegationEntry?: cosmos.staking.v1beta1.IRedelegationEntry | null;

        /** RedelegationEntryResponse balance */
        balance?: string | null;
      }

      /** Represents a RedelegationEntryResponse. */
      class RedelegationEntryResponse implements IRedelegationEntryResponse {
        /**
         * Constructs a new RedelegationEntryResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IRedelegationEntryResponse);

        /** RedelegationEntryResponse redelegationEntry. */
        public redelegationEntry?: cosmos.staking.v1beta1.IRedelegationEntry | null;

        /** RedelegationEntryResponse balance. */
        public balance: string;

        /**
         * Creates a new RedelegationEntryResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RedelegationEntryResponse instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IRedelegationEntryResponse,
        ): cosmos.staking.v1beta1.RedelegationEntryResponse;

        /**
         * Encodes the specified RedelegationEntryResponse message. Does not implicitly {@link cosmos.staking.v1beta1.RedelegationEntryResponse.verify|verify} messages.
         * @param m RedelegationEntryResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.staking.v1beta1.IRedelegationEntryResponse,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a RedelegationEntryResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RedelegationEntryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.staking.v1beta1.RedelegationEntryResponse;
      }

      /** Properties of a RedelegationResponse. */
      interface IRedelegationResponse {
        /** RedelegationResponse redelegation */
        redelegation?: cosmos.staking.v1beta1.IRedelegation | null;

        /** RedelegationResponse entries */
        entries?: cosmos.staking.v1beta1.IRedelegationEntryResponse[] | null;
      }

      /** Represents a RedelegationResponse. */
      class RedelegationResponse implements IRedelegationResponse {
        /**
         * Constructs a new RedelegationResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IRedelegationResponse);

        /** RedelegationResponse redelegation. */
        public redelegation?: cosmos.staking.v1beta1.IRedelegation | null;

        /** RedelegationResponse entries. */
        public entries: cosmos.staking.v1beta1.IRedelegationEntryResponse[];

        /**
         * Creates a new RedelegationResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RedelegationResponse instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IRedelegationResponse,
        ): cosmos.staking.v1beta1.RedelegationResponse;

        /**
         * Encodes the specified RedelegationResponse message. Does not implicitly {@link cosmos.staking.v1beta1.RedelegationResponse.verify|verify} messages.
         * @param m RedelegationResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.staking.v1beta1.IRedelegationResponse,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a RedelegationResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RedelegationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.staking.v1beta1.RedelegationResponse;
      }

      /** Properties of a Pool. */
      interface IPool {
        /** Pool notBondedTokens */
        notBondedTokens?: string | null;

        /** Pool bondedTokens */
        bondedTokens?: string | null;
      }

      /** Represents a Pool. */
      class Pool implements IPool {
        /**
         * Constructs a new Pool.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IPool);

        /** Pool notBondedTokens. */
        public notBondedTokens: string;

        /** Pool bondedTokens. */
        public bondedTokens: string;

        /**
         * Creates a new Pool instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pool instance
         */
        public static create(properties?: cosmos.staking.v1beta1.IPool): cosmos.staking.v1beta1.Pool;

        /**
         * Encodes the specified Pool message. Does not implicitly {@link cosmos.staking.v1beta1.Pool.verify|verify} messages.
         * @param m Pool message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.staking.v1beta1.IPool, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pool message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Pool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.staking.v1beta1.Pool;
      }

      /** Represents a Msg */
      class Msg extends $protobuf.rpc.Service {
        /**
         * Constructs a new Msg service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Msg service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(
          rpcImpl: $protobuf.RPCImpl,
          requestDelimited?: boolean,
          responseDelimited?: boolean,
        ): Msg;

        /**
         * Calls CreateValidator.
         * @param request MsgCreateValidator message or plain object
         * @param callback Node-style callback called with the error, if any, and MsgCreateValidatorResponse
         */
        public createValidator(
          request: cosmos.staking.v1beta1.IMsgCreateValidator,
          callback: cosmos.staking.v1beta1.Msg.CreateValidatorCallback,
        ): void;

        /**
         * Calls CreateValidator.
         * @param request MsgCreateValidator message or plain object
         * @returns Promise
         */
        public createValidator(
          request: cosmos.staking.v1beta1.IMsgCreateValidator,
        ): Promise<cosmos.staking.v1beta1.MsgCreateValidatorResponse>;

        /**
         * Calls EditValidator.
         * @param request MsgEditValidator message or plain object
         * @param callback Node-style callback called with the error, if any, and MsgEditValidatorResponse
         */
        public editValidator(
          request: cosmos.staking.v1beta1.IMsgEditValidator,
          callback: cosmos.staking.v1beta1.Msg.EditValidatorCallback,
        ): void;

        /**
         * Calls EditValidator.
         * @param request MsgEditValidator message or plain object
         * @returns Promise
         */
        public editValidator(
          request: cosmos.staking.v1beta1.IMsgEditValidator,
        ): Promise<cosmos.staking.v1beta1.MsgEditValidatorResponse>;

        /**
         * Calls Delegate.
         * @param request MsgDelegate message or plain object
         * @param callback Node-style callback called with the error, if any, and MsgDelegateResponse
         */
        public delegate(
          request: cosmos.staking.v1beta1.IMsgDelegate,
          callback: cosmos.staking.v1beta1.Msg.DelegateCallback,
        ): void;

        /**
         * Calls Delegate.
         * @param request MsgDelegate message or plain object
         * @returns Promise
         */
        public delegate(
          request: cosmos.staking.v1beta1.IMsgDelegate,
        ): Promise<cosmos.staking.v1beta1.MsgDelegateResponse>;

        /**
         * Calls BeginRedelegate.
         * @param request MsgBeginRedelegate message or plain object
         * @param callback Node-style callback called with the error, if any, and MsgBeginRedelegateResponse
         */
        public beginRedelegate(
          request: cosmos.staking.v1beta1.IMsgBeginRedelegate,
          callback: cosmos.staking.v1beta1.Msg.BeginRedelegateCallback,
        ): void;

        /**
         * Calls BeginRedelegate.
         * @param request MsgBeginRedelegate message or plain object
         * @returns Promise
         */
        public beginRedelegate(
          request: cosmos.staking.v1beta1.IMsgBeginRedelegate,
        ): Promise<cosmos.staking.v1beta1.MsgBeginRedelegateResponse>;

        /**
         * Calls Undelegate.
         * @param request MsgUndelegate message or plain object
         * @param callback Node-style callback called with the error, if any, and MsgUndelegateResponse
         */
        public undelegate(
          request: cosmos.staking.v1beta1.IMsgUndelegate,
          callback: cosmos.staking.v1beta1.Msg.UndelegateCallback,
        ): void;

        /**
         * Calls Undelegate.
         * @param request MsgUndelegate message or plain object
         * @returns Promise
         */
        public undelegate(
          request: cosmos.staking.v1beta1.IMsgUndelegate,
        ): Promise<cosmos.staking.v1beta1.MsgUndelegateResponse>;
      }

      namespace Msg {
        /**
         * Callback as used by {@link cosmos.staking.v1beta1.Msg#createValidator}.
         * @param error Error, if any
         * @param [response] MsgCreateValidatorResponse
         */
        type CreateValidatorCallback = (
          error: Error | null,
          response?: cosmos.staking.v1beta1.MsgCreateValidatorResponse,
        ) => void;

        /**
         * Callback as used by {@link cosmos.staking.v1beta1.Msg#editValidator}.
         * @param error Error, if any
         * @param [response] MsgEditValidatorResponse
         */
        type EditValidatorCallback = (
          error: Error | null,
          response?: cosmos.staking.v1beta1.MsgEditValidatorResponse,
        ) => void;

        /**
         * Callback as used by {@link cosmos.staking.v1beta1.Msg#delegate}.
         * @param error Error, if any
         * @param [response] MsgDelegateResponse
         */
        type DelegateCallback = (
          error: Error | null,
          response?: cosmos.staking.v1beta1.MsgDelegateResponse,
        ) => void;

        /**
         * Callback as used by {@link cosmos.staking.v1beta1.Msg#beginRedelegate}.
         * @param error Error, if any
         * @param [response] MsgBeginRedelegateResponse
         */
        type BeginRedelegateCallback = (
          error: Error | null,
          response?: cosmos.staking.v1beta1.MsgBeginRedelegateResponse,
        ) => void;

        /**
         * Callback as used by {@link cosmos.staking.v1beta1.Msg#undelegate}.
         * @param error Error, if any
         * @param [response] MsgUndelegateResponse
         */
        type UndelegateCallback = (
          error: Error | null,
          response?: cosmos.staking.v1beta1.MsgUndelegateResponse,
        ) => void;
      }

      /** Properties of a MsgCreateValidator. */
      interface IMsgCreateValidator {
        /** MsgCreateValidator description */
        description?: cosmos.staking.v1beta1.IDescription | null;

        /** MsgCreateValidator commission */
        commission?: cosmos.staking.v1beta1.ICommissionRates | null;

        /** MsgCreateValidator minSelfDelegation */
        minSelfDelegation?: string | null;

        /** MsgCreateValidator delegatorAddress */
        delegatorAddress?: string | null;

        /** MsgCreateValidator validatorAddress */
        validatorAddress?: string | null;

        /** MsgCreateValidator pubkey */
        pubkey?: google.protobuf.IAny | null;

        /** MsgCreateValidator value */
        value?: cosmos.base.v1beta1.ICoin | null;
      }

      /** Represents a MsgCreateValidator. */
      class MsgCreateValidator implements IMsgCreateValidator {
        /**
         * Constructs a new MsgCreateValidator.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IMsgCreateValidator);

        /** MsgCreateValidator description. */
        public description?: cosmos.staking.v1beta1.IDescription | null;

        /** MsgCreateValidator commission. */
        public commission?: cosmos.staking.v1beta1.ICommissionRates | null;

        /** MsgCreateValidator minSelfDelegation. */
        public minSelfDelegation: string;

        /** MsgCreateValidator delegatorAddress. */
        public delegatorAddress: string;

        /** MsgCreateValidator validatorAddress. */
        public validatorAddress: string;

        /** MsgCreateValidator pubkey. */
        public pubkey?: google.protobuf.IAny | null;

        /** MsgCreateValidator value. */
        public value?: cosmos.base.v1beta1.ICoin | null;

        /**
         * Creates a new MsgCreateValidator instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgCreateValidator instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IMsgCreateValidator,
        ): cosmos.staking.v1beta1.MsgCreateValidator;

        /**
         * Encodes the specified MsgCreateValidator message. Does not implicitly {@link cosmos.staking.v1beta1.MsgCreateValidator.verify|verify} messages.
         * @param m MsgCreateValidator message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.staking.v1beta1.IMsgCreateValidator,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a MsgCreateValidator message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgCreateValidator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.staking.v1beta1.MsgCreateValidator;
      }

      /** Properties of a MsgCreateValidatorResponse. */
      interface IMsgCreateValidatorResponse {}

      /** Represents a MsgCreateValidatorResponse. */
      class MsgCreateValidatorResponse implements IMsgCreateValidatorResponse {
        /**
         * Constructs a new MsgCreateValidatorResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IMsgCreateValidatorResponse);

        /**
         * Creates a new MsgCreateValidatorResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgCreateValidatorResponse instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IMsgCreateValidatorResponse,
        ): cosmos.staking.v1beta1.MsgCreateValidatorResponse;

        /**
         * Encodes the specified MsgCreateValidatorResponse message. Does not implicitly {@link cosmos.staking.v1beta1.MsgCreateValidatorResponse.verify|verify} messages.
         * @param m MsgCreateValidatorResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.staking.v1beta1.IMsgCreateValidatorResponse,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a MsgCreateValidatorResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgCreateValidatorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.staking.v1beta1.MsgCreateValidatorResponse;
      }

      /** Properties of a MsgEditValidator. */
      interface IMsgEditValidator {
        /** MsgEditValidator description */
        description?: cosmos.staking.v1beta1.IDescription | null;

        /** MsgEditValidator validatorAddress */
        validatorAddress?: string | null;

        /** MsgEditValidator commissionRate */
        commissionRate?: string | null;

        /** MsgEditValidator minSelfDelegation */
        minSelfDelegation?: string | null;
      }

      /** Represents a MsgEditValidator. */
      class MsgEditValidator implements IMsgEditValidator {
        /**
         * Constructs a new MsgEditValidator.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IMsgEditValidator);

        /** MsgEditValidator description. */
        public description?: cosmos.staking.v1beta1.IDescription | null;

        /** MsgEditValidator validatorAddress. */
        public validatorAddress: string;

        /** MsgEditValidator commissionRate. */
        public commissionRate: string;

        /** MsgEditValidator minSelfDelegation. */
        public minSelfDelegation: string;

        /**
         * Creates a new MsgEditValidator instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgEditValidator instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IMsgEditValidator,
        ): cosmos.staking.v1beta1.MsgEditValidator;

        /**
         * Encodes the specified MsgEditValidator message. Does not implicitly {@link cosmos.staking.v1beta1.MsgEditValidator.verify|verify} messages.
         * @param m MsgEditValidator message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.staking.v1beta1.IMsgEditValidator,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a MsgEditValidator message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgEditValidator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.staking.v1beta1.MsgEditValidator;
      }

      /** Properties of a MsgEditValidatorResponse. */
      interface IMsgEditValidatorResponse {}

      /** Represents a MsgEditValidatorResponse. */
      class MsgEditValidatorResponse implements IMsgEditValidatorResponse {
        /**
         * Constructs a new MsgEditValidatorResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IMsgEditValidatorResponse);

        /**
         * Creates a new MsgEditValidatorResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgEditValidatorResponse instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IMsgEditValidatorResponse,
        ): cosmos.staking.v1beta1.MsgEditValidatorResponse;

        /**
         * Encodes the specified MsgEditValidatorResponse message. Does not implicitly {@link cosmos.staking.v1beta1.MsgEditValidatorResponse.verify|verify} messages.
         * @param m MsgEditValidatorResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.staking.v1beta1.IMsgEditValidatorResponse,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a MsgEditValidatorResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgEditValidatorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.staking.v1beta1.MsgEditValidatorResponse;
      }

      /** Properties of a MsgDelegate. */
      interface IMsgDelegate {
        /** MsgDelegate delegatorAddress */
        delegatorAddress?: string | null;

        /** MsgDelegate validatorAddress */
        validatorAddress?: string | null;

        /** MsgDelegate amount */
        amount?: cosmos.base.v1beta1.ICoin | null;
      }

      /** Represents a MsgDelegate. */
      class MsgDelegate implements IMsgDelegate {
        /**
         * Constructs a new MsgDelegate.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IMsgDelegate);

        /** MsgDelegate delegatorAddress. */
        public delegatorAddress: string;

        /** MsgDelegate validatorAddress. */
        public validatorAddress: string;

        /** MsgDelegate amount. */
        public amount?: cosmos.base.v1beta1.ICoin | null;

        /**
         * Creates a new MsgDelegate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgDelegate instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IMsgDelegate,
        ): cosmos.staking.v1beta1.MsgDelegate;

        /**
         * Encodes the specified MsgDelegate message. Does not implicitly {@link cosmos.staking.v1beta1.MsgDelegate.verify|verify} messages.
         * @param m MsgDelegate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.staking.v1beta1.IMsgDelegate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgDelegate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgDelegate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.staking.v1beta1.MsgDelegate;
      }

      /** Properties of a MsgDelegateResponse. */
      interface IMsgDelegateResponse {}

      /** Represents a MsgDelegateResponse. */
      class MsgDelegateResponse implements IMsgDelegateResponse {
        /**
         * Constructs a new MsgDelegateResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IMsgDelegateResponse);

        /**
         * Creates a new MsgDelegateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgDelegateResponse instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IMsgDelegateResponse,
        ): cosmos.staking.v1beta1.MsgDelegateResponse;

        /**
         * Encodes the specified MsgDelegateResponse message. Does not implicitly {@link cosmos.staking.v1beta1.MsgDelegateResponse.verify|verify} messages.
         * @param m MsgDelegateResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.staking.v1beta1.IMsgDelegateResponse,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a MsgDelegateResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgDelegateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.staking.v1beta1.MsgDelegateResponse;
      }

      /** Properties of a MsgBeginRedelegate. */
      interface IMsgBeginRedelegate {
        /** MsgBeginRedelegate delegatorAddress */
        delegatorAddress?: string | null;

        /** MsgBeginRedelegate validatorSrcAddress */
        validatorSrcAddress?: string | null;

        /** MsgBeginRedelegate validatorDstAddress */
        validatorDstAddress?: string | null;

        /** MsgBeginRedelegate amount */
        amount?: cosmos.base.v1beta1.ICoin | null;
      }

      /** Represents a MsgBeginRedelegate. */
      class MsgBeginRedelegate implements IMsgBeginRedelegate {
        /**
         * Constructs a new MsgBeginRedelegate.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IMsgBeginRedelegate);

        /** MsgBeginRedelegate delegatorAddress. */
        public delegatorAddress: string;

        /** MsgBeginRedelegate validatorSrcAddress. */
        public validatorSrcAddress: string;

        /** MsgBeginRedelegate validatorDstAddress. */
        public validatorDstAddress: string;

        /** MsgBeginRedelegate amount. */
        public amount?: cosmos.base.v1beta1.ICoin | null;

        /**
         * Creates a new MsgBeginRedelegate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgBeginRedelegate instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IMsgBeginRedelegate,
        ): cosmos.staking.v1beta1.MsgBeginRedelegate;

        /**
         * Encodes the specified MsgBeginRedelegate message. Does not implicitly {@link cosmos.staking.v1beta1.MsgBeginRedelegate.verify|verify} messages.
         * @param m MsgBeginRedelegate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.staking.v1beta1.IMsgBeginRedelegate,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a MsgBeginRedelegate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgBeginRedelegate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.staking.v1beta1.MsgBeginRedelegate;
      }

      /** Properties of a MsgBeginRedelegateResponse. */
      interface IMsgBeginRedelegateResponse {
        /** MsgBeginRedelegateResponse completionTime */
        completionTime?: google.protobuf.ITimestamp | null;
      }

      /** Represents a MsgBeginRedelegateResponse. */
      class MsgBeginRedelegateResponse implements IMsgBeginRedelegateResponse {
        /**
         * Constructs a new MsgBeginRedelegateResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IMsgBeginRedelegateResponse);

        /** MsgBeginRedelegateResponse completionTime. */
        public completionTime?: google.protobuf.ITimestamp | null;

        /**
         * Creates a new MsgBeginRedelegateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgBeginRedelegateResponse instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IMsgBeginRedelegateResponse,
        ): cosmos.staking.v1beta1.MsgBeginRedelegateResponse;

        /**
         * Encodes the specified MsgBeginRedelegateResponse message. Does not implicitly {@link cosmos.staking.v1beta1.MsgBeginRedelegateResponse.verify|verify} messages.
         * @param m MsgBeginRedelegateResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.staking.v1beta1.IMsgBeginRedelegateResponse,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a MsgBeginRedelegateResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgBeginRedelegateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.staking.v1beta1.MsgBeginRedelegateResponse;
      }

      /** Properties of a MsgUndelegate. */
      interface IMsgUndelegate {
        /** MsgUndelegate delegatorAddress */
        delegatorAddress?: string | null;

        /** MsgUndelegate validatorAddress */
        validatorAddress?: string | null;

        /** MsgUndelegate amount */
        amount?: cosmos.base.v1beta1.ICoin | null;
      }

      /** Represents a MsgUndelegate. */
      class MsgUndelegate implements IMsgUndelegate {
        /**
         * Constructs a new MsgUndelegate.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IMsgUndelegate);

        /** MsgUndelegate delegatorAddress. */
        public delegatorAddress: string;

        /** MsgUndelegate validatorAddress. */
        public validatorAddress: string;

        /** MsgUndelegate amount. */
        public amount?: cosmos.base.v1beta1.ICoin | null;

        /**
         * Creates a new MsgUndelegate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgUndelegate instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IMsgUndelegate,
        ): cosmos.staking.v1beta1.MsgUndelegate;

        /**
         * Encodes the specified MsgUndelegate message. Does not implicitly {@link cosmos.staking.v1beta1.MsgUndelegate.verify|verify} messages.
         * @param m MsgUndelegate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.staking.v1beta1.IMsgUndelegate,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a MsgUndelegate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgUndelegate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.staking.v1beta1.MsgUndelegate;
      }

      /** Properties of a MsgUndelegateResponse. */
      interface IMsgUndelegateResponse {
        /** MsgUndelegateResponse completionTime */
        completionTime?: google.protobuf.ITimestamp | null;
      }

      /** Represents a MsgUndelegateResponse. */
      class MsgUndelegateResponse implements IMsgUndelegateResponse {
        /**
         * Constructs a new MsgUndelegateResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IMsgUndelegateResponse);

        /** MsgUndelegateResponse completionTime. */
        public completionTime?: google.protobuf.ITimestamp | null;

        /**
         * Creates a new MsgUndelegateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgUndelegateResponse instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IMsgUndelegateResponse,
        ): cosmos.staking.v1beta1.MsgUndelegateResponse;

        /**
         * Encodes the specified MsgUndelegateResponse message. Does not implicitly {@link cosmos.staking.v1beta1.MsgUndelegateResponse.verify|verify} messages.
         * @param m MsgUndelegateResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.staking.v1beta1.IMsgUndelegateResponse,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a MsgUndelegateResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgUndelegateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.staking.v1beta1.MsgUndelegateResponse;
      }
    }
  }

  /** Namespace tx. */
  namespace tx {
    /** Namespace signing. */
    namespace signing {
      /** Namespace v1beta1. */
      namespace v1beta1 {
        /** SignMode enum. */
        enum SignMode {
          SIGN_MODE_UNSPECIFIED = 0,
          SIGN_MODE_DIRECT = 1,
          SIGN_MODE_TEXTUAL = 2,
          SIGN_MODE_LEGACY_AMINO_JSON = 127,
        }

        /** Properties of a SignatureDescriptors. */
        interface ISignatureDescriptors {
          /** SignatureDescriptors signatures */
          signatures?: cosmos.tx.signing.v1beta1.ISignatureDescriptor[] | null;
        }

        /** Represents a SignatureDescriptors. */
        class SignatureDescriptors implements ISignatureDescriptors {
          /**
           * Constructs a new SignatureDescriptors.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.tx.signing.v1beta1.ISignatureDescriptors);

          /** SignatureDescriptors signatures. */
          public signatures: cosmos.tx.signing.v1beta1.ISignatureDescriptor[];

          /**
           * Creates a new SignatureDescriptors instance using the specified properties.
           * @param [properties] Properties to set
           * @returns SignatureDescriptors instance
           */
          public static create(
            properties?: cosmos.tx.signing.v1beta1.ISignatureDescriptors,
          ): cosmos.tx.signing.v1beta1.SignatureDescriptors;

          /**
           * Encodes the specified SignatureDescriptors message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptors.verify|verify} messages.
           * @param m SignatureDescriptors message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.tx.signing.v1beta1.ISignatureDescriptors,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a SignatureDescriptors message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns SignatureDescriptors
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.tx.signing.v1beta1.SignatureDescriptors;
        }

        /** Properties of a SignatureDescriptor. */
        interface ISignatureDescriptor {
          /** SignatureDescriptor publicKey */
          publicKey?: google.protobuf.IAny | null;

          /** SignatureDescriptor data */
          data?: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData | null;

          /** SignatureDescriptor sequence */
          sequence?: Long | null;
        }

        /** Represents a SignatureDescriptor. */
        class SignatureDescriptor implements ISignatureDescriptor {
          /**
           * Constructs a new SignatureDescriptor.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.tx.signing.v1beta1.ISignatureDescriptor);

          /** SignatureDescriptor publicKey. */
          public publicKey?: google.protobuf.IAny | null;

          /** SignatureDescriptor data. */
          public data?: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData | null;

          /** SignatureDescriptor sequence. */
          public sequence: Long;

          /**
           * Creates a new SignatureDescriptor instance using the specified properties.
           * @param [properties] Properties to set
           * @returns SignatureDescriptor instance
           */
          public static create(
            properties?: cosmos.tx.signing.v1beta1.ISignatureDescriptor,
          ): cosmos.tx.signing.v1beta1.SignatureDescriptor;

          /**
           * Encodes the specified SignatureDescriptor message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptor.verify|verify} messages.
           * @param m SignatureDescriptor message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.tx.signing.v1beta1.ISignatureDescriptor,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a SignatureDescriptor message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns SignatureDescriptor
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.tx.signing.v1beta1.SignatureDescriptor;
        }

        namespace SignatureDescriptor {
          /** Properties of a Data. */
          interface IData {
            /** Data single */
            single?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle | null;

            /** Data multi */
            multi?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti | null;
          }

          /** Represents a Data. */
          class Data implements IData {
            /**
             * Constructs a new Data.
             * @param [p] Properties to set
             */
            constructor(p?: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData);

            /** Data single. */
            public single?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle | null;

            /** Data multi. */
            public multi?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti | null;

            /** Data sum. */
            public sum?: "single" | "multi";

            /**
             * Creates a new Data instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Data instance
             */
            public static create(
              properties?: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData,
            ): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data;

            /**
             * Encodes the specified Data message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.verify|verify} messages.
             * @param m Data message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(
              m: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData,
              w?: $protobuf.Writer,
            ): $protobuf.Writer;

            /**
             * Decodes a Data message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Data
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(
              r: $protobuf.Reader | Uint8Array,
              l?: number,
            ): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data;
          }

          namespace Data {
            /** Properties of a Single. */
            interface ISingle {
              /** Single mode */
              mode?: cosmos.tx.signing.v1beta1.SignMode | null;

              /** Single signature */
              signature?: Uint8Array | null;
            }

            /** Represents a Single. */
            class Single implements ISingle {
              /**
               * Constructs a new Single.
               * @param [p] Properties to set
               */
              constructor(p?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle);

              /** Single mode. */
              public mode: cosmos.tx.signing.v1beta1.SignMode;

              /** Single signature. */
              public signature: Uint8Array;

              /**
               * Creates a new Single instance using the specified properties.
               * @param [properties] Properties to set
               * @returns Single instance
               */
              public static create(
                properties?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle,
              ): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single;

              /**
               * Encodes the specified Single message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single.verify|verify} messages.
               * @param m Single message or plain object to encode
               * @param [w] Writer to encode to
               * @returns Writer
               */
              public static encode(
                m: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle,
                w?: $protobuf.Writer,
              ): $protobuf.Writer;

              /**
               * Decodes a Single message from the specified reader or buffer.
               * @param r Reader or buffer to decode from
               * @param [l] Message length if known beforehand
               * @returns Single
               * @throws {Error} If the payload is not a reader or valid buffer
               * @throws {$protobuf.util.ProtocolError} If required fields are missing
               */
              public static decode(
                r: $protobuf.Reader | Uint8Array,
                l?: number,
              ): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single;
            }

            /** Properties of a Multi. */
            interface IMulti {
              /** Multi bitarray */
              bitarray?: cosmos.crypto.multisig.v1beta1.ICompactBitArray | null;

              /** Multi signatures */
              signatures?: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData[] | null;
            }

            /** Represents a Multi. */
            class Multi implements IMulti {
              /**
               * Constructs a new Multi.
               * @param [p] Properties to set
               */
              constructor(p?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti);

              /** Multi bitarray. */
              public bitarray?: cosmos.crypto.multisig.v1beta1.ICompactBitArray | null;

              /** Multi signatures. */
              public signatures: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData[];

              /**
               * Creates a new Multi instance using the specified properties.
               * @param [properties] Properties to set
               * @returns Multi instance
               */
              public static create(
                properties?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti,
              ): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi;

              /**
               * Encodes the specified Multi message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi.verify|verify} messages.
               * @param m Multi message or plain object to encode
               * @param [w] Writer to encode to
               * @returns Writer
               */
              public static encode(
                m: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti,
                w?: $protobuf.Writer,
              ): $protobuf.Writer;

              /**
               * Decodes a Multi message from the specified reader or buffer.
               * @param r Reader or buffer to decode from
               * @param [l] Message length if known beforehand
               * @returns Multi
               * @throws {Error} If the payload is not a reader or valid buffer
               * @throws {$protobuf.util.ProtocolError} If required fields are missing
               */
              public static decode(
                r: $protobuf.Reader | Uint8Array,
                l?: number,
              ): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi;
            }
          }
        }
      }
    }

    /** Namespace v1beta1. */
    namespace v1beta1 {
      /** Properties of a Tx. */
      interface ITx {
        /** Tx body */
        body?: cosmos.tx.v1beta1.ITxBody | null;

        /** Tx authInfo */
        authInfo?: cosmos.tx.v1beta1.IAuthInfo | null;

        /** Tx signatures */
        signatures?: Uint8Array[] | null;
      }

      /** Represents a Tx. */
      class Tx implements ITx {
        /**
         * Constructs a new Tx.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.tx.v1beta1.ITx);

        /** Tx body. */
        public body?: cosmos.tx.v1beta1.ITxBody | null;

        /** Tx authInfo. */
        public authInfo?: cosmos.tx.v1beta1.IAuthInfo | null;

        /** Tx signatures. */
        public signatures: Uint8Array[];

        /**
         * Creates a new Tx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Tx instance
         */
        public static create(properties?: cosmos.tx.v1beta1.ITx): cosmos.tx.v1beta1.Tx;

        /**
         * Encodes the specified Tx message. Does not implicitly {@link cosmos.tx.v1beta1.Tx.verify|verify} messages.
         * @param m Tx message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.tx.v1beta1.ITx, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Tx message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Tx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.tx.v1beta1.Tx;
      }

      /** Properties of a TxRaw. */
      interface ITxRaw {
        /** TxRaw bodyBytes */
        bodyBytes?: Uint8Array | null;

        /** TxRaw authInfoBytes */
        authInfoBytes?: Uint8Array | null;

        /** TxRaw signatures */
        signatures?: Uint8Array[] | null;
      }

      /** Represents a TxRaw. */
      class TxRaw implements ITxRaw {
        /**
         * Constructs a new TxRaw.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.tx.v1beta1.ITxRaw);

        /** TxRaw bodyBytes. */
        public bodyBytes: Uint8Array;

        /** TxRaw authInfoBytes. */
        public authInfoBytes: Uint8Array;

        /** TxRaw signatures. */
        public signatures: Uint8Array[];

        /**
         * Creates a new TxRaw instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TxRaw instance
         */
        public static create(properties?: cosmos.tx.v1beta1.ITxRaw): cosmos.tx.v1beta1.TxRaw;

        /**
         * Encodes the specified TxRaw message. Does not implicitly {@link cosmos.tx.v1beta1.TxRaw.verify|verify} messages.
         * @param m TxRaw message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.tx.v1beta1.ITxRaw, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TxRaw message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TxRaw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.tx.v1beta1.TxRaw;
      }

      /** Properties of a SignDoc. */
      interface ISignDoc {
        /** SignDoc bodyBytes */
        bodyBytes?: Uint8Array | null;

        /** SignDoc authInfoBytes */
        authInfoBytes?: Uint8Array | null;

        /** SignDoc chainId */
        chainId?: string | null;

        /** SignDoc accountNumber */
        accountNumber?: Long | null;
      }

      /** Represents a SignDoc. */
      class SignDoc implements ISignDoc {
        /**
         * Constructs a new SignDoc.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.tx.v1beta1.ISignDoc);

        /** SignDoc bodyBytes. */
        public bodyBytes: Uint8Array;

        /** SignDoc authInfoBytes. */
        public authInfoBytes: Uint8Array;

        /** SignDoc chainId. */
        public chainId: string;

        /** SignDoc accountNumber. */
        public accountNumber: Long;

        /**
         * Creates a new SignDoc instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignDoc instance
         */
        public static create(properties?: cosmos.tx.v1beta1.ISignDoc): cosmos.tx.v1beta1.SignDoc;

        /**
         * Encodes the specified SignDoc message. Does not implicitly {@link cosmos.tx.v1beta1.SignDoc.verify|verify} messages.
         * @param m SignDoc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.tx.v1beta1.ISignDoc, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignDoc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SignDoc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.tx.v1beta1.SignDoc;
      }

      /** Properties of a TxBody. */
      interface ITxBody {
        /** TxBody messages */
        messages?: google.protobuf.IAny[] | null;

        /** TxBody memo */
        memo?: string | null;

        /** TxBody timeoutHeight */
        timeoutHeight?: Long | null;

        /** TxBody extensionOptions */
        extensionOptions?: google.protobuf.IAny[] | null;

        /** TxBody nonCriticalExtensionOptions */
        nonCriticalExtensionOptions?: google.protobuf.IAny[] | null;
      }

      /** Represents a TxBody. */
      class TxBody implements ITxBody {
        /**
         * Constructs a new TxBody.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.tx.v1beta1.ITxBody);

        /** TxBody messages. */
        public messages: google.protobuf.IAny[];

        /** TxBody memo. */
        public memo: string;

        /** TxBody timeoutHeight. */
        public timeoutHeight: Long;

        /** TxBody extensionOptions. */
        public extensionOptions: google.protobuf.IAny[];

        /** TxBody nonCriticalExtensionOptions. */
        public nonCriticalExtensionOptions: google.protobuf.IAny[];

        /**
         * Creates a new TxBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TxBody instance
         */
        public static create(properties?: cosmos.tx.v1beta1.ITxBody): cosmos.tx.v1beta1.TxBody;

        /**
         * Encodes the specified TxBody message. Does not implicitly {@link cosmos.tx.v1beta1.TxBody.verify|verify} messages.
         * @param m TxBody message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.tx.v1beta1.ITxBody, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TxBody message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TxBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.tx.v1beta1.TxBody;
      }

      /** Properties of an AuthInfo. */
      interface IAuthInfo {
        /** AuthInfo signerInfos */
        signerInfos?: cosmos.tx.v1beta1.ISignerInfo[] | null;

        /** AuthInfo fee */
        fee?: cosmos.tx.v1beta1.IFee | null;
      }

      /** Represents an AuthInfo. */
      class AuthInfo implements IAuthInfo {
        /**
         * Constructs a new AuthInfo.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.tx.v1beta1.IAuthInfo);

        /** AuthInfo signerInfos. */
        public signerInfos: cosmos.tx.v1beta1.ISignerInfo[];

        /** AuthInfo fee. */
        public fee?: cosmos.tx.v1beta1.IFee | null;

        /**
         * Creates a new AuthInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuthInfo instance
         */
        public static create(properties?: cosmos.tx.v1beta1.IAuthInfo): cosmos.tx.v1beta1.AuthInfo;

        /**
         * Encodes the specified AuthInfo message. Does not implicitly {@link cosmos.tx.v1beta1.AuthInfo.verify|verify} messages.
         * @param m AuthInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.tx.v1beta1.IAuthInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuthInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AuthInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.tx.v1beta1.AuthInfo;
      }

      /** Properties of a SignerInfo. */
      interface ISignerInfo {
        /** SignerInfo publicKey */
        publicKey?: google.protobuf.IAny | null;

        /** SignerInfo modeInfo */
        modeInfo?: cosmos.tx.v1beta1.IModeInfo | null;

        /** SignerInfo sequence */
        sequence?: Long | null;
      }

      /** Represents a SignerInfo. */
      class SignerInfo implements ISignerInfo {
        /**
         * Constructs a new SignerInfo.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.tx.v1beta1.ISignerInfo);

        /** SignerInfo publicKey. */
        public publicKey?: google.protobuf.IAny | null;

        /** SignerInfo modeInfo. */
        public modeInfo?: cosmos.tx.v1beta1.IModeInfo | null;

        /** SignerInfo sequence. */
        public sequence: Long;

        /**
         * Creates a new SignerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignerInfo instance
         */
        public static create(properties?: cosmos.tx.v1beta1.ISignerInfo): cosmos.tx.v1beta1.SignerInfo;

        /**
         * Encodes the specified SignerInfo message. Does not implicitly {@link cosmos.tx.v1beta1.SignerInfo.verify|verify} messages.
         * @param m SignerInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.tx.v1beta1.ISignerInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignerInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SignerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.tx.v1beta1.SignerInfo;
      }

      /** Properties of a ModeInfo. */
      interface IModeInfo {
        /** ModeInfo single */
        single?: cosmos.tx.v1beta1.ModeInfo.ISingle | null;

        /** ModeInfo multi */
        multi?: cosmos.tx.v1beta1.ModeInfo.IMulti | null;
      }

      /** Represents a ModeInfo. */
      class ModeInfo implements IModeInfo {
        /**
         * Constructs a new ModeInfo.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.tx.v1beta1.IModeInfo);

        /** ModeInfo single. */
        public single?: cosmos.tx.v1beta1.ModeInfo.ISingle | null;

        /** ModeInfo multi. */
        public multi?: cosmos.tx.v1beta1.ModeInfo.IMulti | null;

        /** ModeInfo sum. */
        public sum?: "single" | "multi";

        /**
         * Creates a new ModeInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ModeInfo instance
         */
        public static create(properties?: cosmos.tx.v1beta1.IModeInfo): cosmos.tx.v1beta1.ModeInfo;

        /**
         * Encodes the specified ModeInfo message. Does not implicitly {@link cosmos.tx.v1beta1.ModeInfo.verify|verify} messages.
         * @param m ModeInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.tx.v1beta1.IModeInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ModeInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ModeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.tx.v1beta1.ModeInfo;
      }

      namespace ModeInfo {
        /** Properties of a Single. */
        interface ISingle {
          /** Single mode */
          mode?: cosmos.tx.signing.v1beta1.SignMode | null;
        }

        /** Represents a Single. */
        class Single implements ISingle {
          /**
           * Constructs a new Single.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.tx.v1beta1.ModeInfo.ISingle);

          /** Single mode. */
          public mode: cosmos.tx.signing.v1beta1.SignMode;

          /**
           * Creates a new Single instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Single instance
           */
          public static create(
            properties?: cosmos.tx.v1beta1.ModeInfo.ISingle,
          ): cosmos.tx.v1beta1.ModeInfo.Single;

          /**
           * Encodes the specified Single message. Does not implicitly {@link cosmos.tx.v1beta1.ModeInfo.Single.verify|verify} messages.
           * @param m Single message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(m: cosmos.tx.v1beta1.ModeInfo.ISingle, w?: $protobuf.Writer): $protobuf.Writer;

          /**
           * Decodes a Single message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns Single
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.tx.v1beta1.ModeInfo.Single;
        }

        /** Properties of a Multi. */
        interface IMulti {
          /** Multi bitarray */
          bitarray?: cosmos.crypto.multisig.v1beta1.ICompactBitArray | null;

          /** Multi modeInfos */
          modeInfos?: cosmos.tx.v1beta1.IModeInfo[] | null;
        }

        /** Represents a Multi. */
        class Multi implements IMulti {
          /**
           * Constructs a new Multi.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.tx.v1beta1.ModeInfo.IMulti);

          /** Multi bitarray. */
          public bitarray?: cosmos.crypto.multisig.v1beta1.ICompactBitArray | null;

          /** Multi modeInfos. */
          public modeInfos: cosmos.tx.v1beta1.IModeInfo[];

          /**
           * Creates a new Multi instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Multi instance
           */
          public static create(
            properties?: cosmos.tx.v1beta1.ModeInfo.IMulti,
          ): cosmos.tx.v1beta1.ModeInfo.Multi;

          /**
           * Encodes the specified Multi message. Does not implicitly {@link cosmos.tx.v1beta1.ModeInfo.Multi.verify|verify} messages.
           * @param m Multi message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(m: cosmos.tx.v1beta1.ModeInfo.IMulti, w?: $protobuf.Writer): $protobuf.Writer;

          /**
           * Decodes a Multi message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns Multi
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.tx.v1beta1.ModeInfo.Multi;
        }
      }

      /** Properties of a Fee. */
      interface IFee {
        /** Fee amount */
        amount?: cosmos.base.v1beta1.ICoin[] | null;

        /** Fee gasLimit */
        gasLimit?: Long | null;

        /** Fee payer */
        payer?: string | null;

        /** Fee granter */
        granter?: string | null;
      }

      /** Represents a Fee. */
      class Fee implements IFee {
        /**
         * Constructs a new Fee.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.tx.v1beta1.IFee);

        /** Fee amount. */
        public amount: cosmos.base.v1beta1.ICoin[];

        /** Fee gasLimit. */
        public gasLimit: Long;

        /** Fee payer. */
        public payer: string;

        /** Fee granter. */
        public granter: string;

        /**
         * Creates a new Fee instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Fee instance
         */
        public static create(properties?: cosmos.tx.v1beta1.IFee): cosmos.tx.v1beta1.Fee;

        /**
         * Encodes the specified Fee message. Does not implicitly {@link cosmos.tx.v1beta1.Fee.verify|verify} messages.
         * @param m Fee message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.tx.v1beta1.IFee, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Fee message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Fee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.tx.v1beta1.Fee;
      }
    }
  }
}

/** Namespace google. */
export namespace google {
  /** Namespace protobuf. */
  namespace protobuf {
    /** Properties of an Any. */
    interface IAny {
      /** Any type_url */
      type_url?: string | null;

      /** Any value */
      value?: Uint8Array | null;
    }

    /** Represents an Any. */
    class Any implements IAny {
      /**
       * Constructs a new Any.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IAny);

      /** Any type_url. */
      public type_url: string;

      /** Any value. */
      public value: Uint8Array;

      /**
       * Creates a new Any instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Any instance
       */
      public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

      /**
       * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
       * @param m Any message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.protobuf.IAny, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes an Any message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Any
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.protobuf.Any;
    }

    /** Properties of a FileDescriptorSet. */
    interface IFileDescriptorSet {
      /** FileDescriptorSet file */
      file?: google.protobuf.IFileDescriptorProto[] | null;
    }

    /** Represents a FileDescriptorSet. */
    class FileDescriptorSet implements IFileDescriptorSet {
      /**
       * Constructs a new FileDescriptorSet.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IFileDescriptorSet);

      /** FileDescriptorSet file. */
      public file: google.protobuf.IFileDescriptorProto[];

      /**
       * Creates a new FileDescriptorSet instance using the specified properties.
       * @param [properties] Properties to set
       * @returns FileDescriptorSet instance
       */
      public static create(
        properties?: google.protobuf.IFileDescriptorSet,
      ): google.protobuf.FileDescriptorSet;

      /**
       * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
       * @param m FileDescriptorSet message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.protobuf.IFileDescriptorSet, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a FileDescriptorSet message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns FileDescriptorSet
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.protobuf.FileDescriptorSet;
    }

    /** Properties of a FileDescriptorProto. */
    interface IFileDescriptorProto {
      /** FileDescriptorProto name */
      name?: string | null;

      /** FileDescriptorProto package */
      package?: string | null;

      /** FileDescriptorProto dependency */
      dependency?: string[] | null;

      /** FileDescriptorProto publicDependency */
      publicDependency?: number[] | null;

      /** FileDescriptorProto weakDependency */
      weakDependency?: number[] | null;

      /** FileDescriptorProto messageType */
      messageType?: google.protobuf.IDescriptorProto[] | null;

      /** FileDescriptorProto enumType */
      enumType?: google.protobuf.IEnumDescriptorProto[] | null;

      /** FileDescriptorProto service */
      service?: google.protobuf.IServiceDescriptorProto[] | null;

      /** FileDescriptorProto extension */
      extension?: google.protobuf.IFieldDescriptorProto[] | null;

      /** FileDescriptorProto options */
      options?: google.protobuf.IFileOptions | null;

      /** FileDescriptorProto sourceCodeInfo */
      sourceCodeInfo?: google.protobuf.ISourceCodeInfo | null;

      /** FileDescriptorProto syntax */
      syntax?: string | null;
    }

    /** Represents a FileDescriptorProto. */
    class FileDescriptorProto implements IFileDescriptorProto {
      /**
       * Constructs a new FileDescriptorProto.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IFileDescriptorProto);

      /** FileDescriptorProto name. */
      public name: string;

      /** FileDescriptorProto package. */
      public package: string;

      /** FileDescriptorProto dependency. */
      public dependency: string[];

      /** FileDescriptorProto publicDependency. */
      public publicDependency: number[];

      /** FileDescriptorProto weakDependency. */
      public weakDependency: number[];

      /** FileDescriptorProto messageType. */
      public messageType: google.protobuf.IDescriptorProto[];

      /** FileDescriptorProto enumType. */
      public enumType: google.protobuf.IEnumDescriptorProto[];

      /** FileDescriptorProto service. */
      public service: google.protobuf.IServiceDescriptorProto[];

      /** FileDescriptorProto extension. */
      public extension: google.protobuf.IFieldDescriptorProto[];

      /** FileDescriptorProto options. */
      public options?: google.protobuf.IFileOptions | null;

      /** FileDescriptorProto sourceCodeInfo. */
      public sourceCodeInfo?: google.protobuf.ISourceCodeInfo | null;

      /** FileDescriptorProto syntax. */
      public syntax: string;

      /**
       * Creates a new FileDescriptorProto instance using the specified properties.
       * @param [properties] Properties to set
       * @returns FileDescriptorProto instance
       */
      public static create(
        properties?: google.protobuf.IFileDescriptorProto,
      ): google.protobuf.FileDescriptorProto;

      /**
       * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
       * @param m FileDescriptorProto message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.protobuf.IFileDescriptorProto, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a FileDescriptorProto message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns FileDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.protobuf.FileDescriptorProto;
    }

    /** Properties of a DescriptorProto. */
    interface IDescriptorProto {
      /** DescriptorProto name */
      name?: string | null;

      /** DescriptorProto field */
      field?: google.protobuf.IFieldDescriptorProto[] | null;

      /** DescriptorProto extension */
      extension?: google.protobuf.IFieldDescriptorProto[] | null;

      /** DescriptorProto nestedType */
      nestedType?: google.protobuf.IDescriptorProto[] | null;

      /** DescriptorProto enumType */
      enumType?: google.protobuf.IEnumDescriptorProto[] | null;

      /** DescriptorProto extensionRange */
      extensionRange?: google.protobuf.DescriptorProto.IExtensionRange[] | null;

      /** DescriptorProto oneofDecl */
      oneofDecl?: google.protobuf.IOneofDescriptorProto[] | null;

      /** DescriptorProto options */
      options?: google.protobuf.IMessageOptions | null;

      /** DescriptorProto reservedRange */
      reservedRange?: google.protobuf.DescriptorProto.IReservedRange[] | null;

      /** DescriptorProto reservedName */
      reservedName?: string[] | null;
    }

    /** Represents a DescriptorProto. */
    class DescriptorProto implements IDescriptorProto {
      /**
       * Constructs a new DescriptorProto.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IDescriptorProto);

      /** DescriptorProto name. */
      public name: string;

      /** DescriptorProto field. */
      public field: google.protobuf.IFieldDescriptorProto[];

      /** DescriptorProto extension. */
      public extension: google.protobuf.IFieldDescriptorProto[];

      /** DescriptorProto nestedType. */
      public nestedType: google.protobuf.IDescriptorProto[];

      /** DescriptorProto enumType. */
      public enumType: google.protobuf.IEnumDescriptorProto[];

      /** DescriptorProto extensionRange. */
      public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

      /** DescriptorProto oneofDecl. */
      public oneofDecl: google.protobuf.IOneofDescriptorProto[];

      /** DescriptorProto options. */
      public options?: google.protobuf.IMessageOptions | null;

      /** DescriptorProto reservedRange. */
      public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

      /** DescriptorProto reservedName. */
      public reservedName: string[];

      /**
       * Creates a new DescriptorProto instance using the specified properties.
       * @param [properties] Properties to set
       * @returns DescriptorProto instance
       */
      public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

      /**
       * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
       * @param m DescriptorProto message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.protobuf.IDescriptorProto, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a DescriptorProto message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns DescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.protobuf.DescriptorProto;
    }

    namespace DescriptorProto {
      /** Properties of an ExtensionRange. */
      interface IExtensionRange {
        /** ExtensionRange start */
        start?: number | null;

        /** ExtensionRange end */
        end?: number | null;
      }

      /** Represents an ExtensionRange. */
      class ExtensionRange implements IExtensionRange {
        /**
         * Constructs a new ExtensionRange.
         * @param [p] Properties to set
         */
        constructor(p?: google.protobuf.DescriptorProto.IExtensionRange);

        /** ExtensionRange start. */
        public start: number;

        /** ExtensionRange end. */
        public end: number;

        /**
         * Creates a new ExtensionRange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExtensionRange instance
         */
        public static create(
          properties?: google.protobuf.DescriptorProto.IExtensionRange,
        ): google.protobuf.DescriptorProto.ExtensionRange;

        /**
         * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
         * @param m ExtensionRange message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: google.protobuf.DescriptorProto.IExtensionRange,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes an ExtensionRange message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ExtensionRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): google.protobuf.DescriptorProto.ExtensionRange;
      }

      /** Properties of a ReservedRange. */
      interface IReservedRange {
        /** ReservedRange start */
        start?: number | null;

        /** ReservedRange end */
        end?: number | null;
      }

      /** Represents a ReservedRange. */
      class ReservedRange implements IReservedRange {
        /**
         * Constructs a new ReservedRange.
         * @param [p] Properties to set
         */
        constructor(p?: google.protobuf.DescriptorProto.IReservedRange);

        /** ReservedRange start. */
        public start: number;

        /** ReservedRange end. */
        public end: number;

        /**
         * Creates a new ReservedRange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReservedRange instance
         */
        public static create(
          properties?: google.protobuf.DescriptorProto.IReservedRange,
        ): google.protobuf.DescriptorProto.ReservedRange;

        /**
         * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
         * @param m ReservedRange message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: google.protobuf.DescriptorProto.IReservedRange,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a ReservedRange message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReservedRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): google.protobuf.DescriptorProto.ReservedRange;
      }
    }

    /** Properties of a FieldDescriptorProto. */
    interface IFieldDescriptorProto {
      /** FieldDescriptorProto name */
      name?: string | null;

      /** FieldDescriptorProto number */
      number?: number | null;

      /** FieldDescriptorProto label */
      label?: google.protobuf.FieldDescriptorProto.Label | null;

      /** FieldDescriptorProto type */
      type?: google.protobuf.FieldDescriptorProto.Type | null;

      /** FieldDescriptorProto typeName */
      typeName?: string | null;

      /** FieldDescriptorProto extendee */
      extendee?: string | null;

      /** FieldDescriptorProto defaultValue */
      defaultValue?: string | null;

      /** FieldDescriptorProto oneofIndex */
      oneofIndex?: number | null;

      /** FieldDescriptorProto jsonName */
      jsonName?: string | null;

      /** FieldDescriptorProto options */
      options?: google.protobuf.IFieldOptions | null;
    }

    /** Represents a FieldDescriptorProto. */
    class FieldDescriptorProto implements IFieldDescriptorProto {
      /**
       * Constructs a new FieldDescriptorProto.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IFieldDescriptorProto);

      /** FieldDescriptorProto name. */
      public name: string;

      /** FieldDescriptorProto number. */
      public number: number;

      /** FieldDescriptorProto label. */
      public label: google.protobuf.FieldDescriptorProto.Label;

      /** FieldDescriptorProto type. */
      public type: google.protobuf.FieldDescriptorProto.Type;

      /** FieldDescriptorProto typeName. */
      public typeName: string;

      /** FieldDescriptorProto extendee. */
      public extendee: string;

      /** FieldDescriptorProto defaultValue. */
      public defaultValue: string;

      /** FieldDescriptorProto oneofIndex. */
      public oneofIndex: number;

      /** FieldDescriptorProto jsonName. */
      public jsonName: string;

      /** FieldDescriptorProto options. */
      public options?: google.protobuf.IFieldOptions | null;

      /**
       * Creates a new FieldDescriptorProto instance using the specified properties.
       * @param [properties] Properties to set
       * @returns FieldDescriptorProto instance
       */
      public static create(
        properties?: google.protobuf.IFieldDescriptorProto,
      ): google.protobuf.FieldDescriptorProto;

      /**
       * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
       * @param m FieldDescriptorProto message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.protobuf.IFieldDescriptorProto, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a FieldDescriptorProto message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns FieldDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number,
      ): google.protobuf.FieldDescriptorProto;
    }

    namespace FieldDescriptorProto {
      /** Type enum. */
      enum Type {
        TYPE_DOUBLE = 1,
        TYPE_FLOAT = 2,
        TYPE_INT64 = 3,
        TYPE_UINT64 = 4,
        TYPE_INT32 = 5,
        TYPE_FIXED64 = 6,
        TYPE_FIXED32 = 7,
        TYPE_BOOL = 8,
        TYPE_STRING = 9,
        TYPE_GROUP = 10,
        TYPE_MESSAGE = 11,
        TYPE_BYTES = 12,
        TYPE_UINT32 = 13,
        TYPE_ENUM = 14,
        TYPE_SFIXED32 = 15,
        TYPE_SFIXED64 = 16,
        TYPE_SINT32 = 17,
        TYPE_SINT64 = 18,
      }

      /** Label enum. */
      enum Label {
        LABEL_OPTIONAL = 1,
        LABEL_REQUIRED = 2,
        LABEL_REPEATED = 3,
      }
    }

    /** Properties of an OneofDescriptorProto. */
    interface IOneofDescriptorProto {
      /** OneofDescriptorProto name */
      name?: string | null;

      /** OneofDescriptorProto options */
      options?: google.protobuf.IOneofOptions | null;
    }

    /** Represents an OneofDescriptorProto. */
    class OneofDescriptorProto implements IOneofDescriptorProto {
      /**
       * Constructs a new OneofDescriptorProto.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IOneofDescriptorProto);

      /** OneofDescriptorProto name. */
      public name: string;

      /** OneofDescriptorProto options. */
      public options?: google.protobuf.IOneofOptions | null;

      /**
       * Creates a new OneofDescriptorProto instance using the specified properties.
       * @param [properties] Properties to set
       * @returns OneofDescriptorProto instance
       */
      public static create(
        properties?: google.protobuf.IOneofDescriptorProto,
      ): google.protobuf.OneofDescriptorProto;

      /**
       * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
       * @param m OneofDescriptorProto message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.protobuf.IOneofDescriptorProto, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes an OneofDescriptorProto message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns OneofDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number,
      ): google.protobuf.OneofDescriptorProto;
    }

    /** Properties of an EnumDescriptorProto. */
    interface IEnumDescriptorProto {
      /** EnumDescriptorProto name */
      name?: string | null;

      /** EnumDescriptorProto value */
      value?: google.protobuf.IEnumValueDescriptorProto[] | null;

      /** EnumDescriptorProto options */
      options?: google.protobuf.IEnumOptions | null;
    }

    /** Represents an EnumDescriptorProto. */
    class EnumDescriptorProto implements IEnumDescriptorProto {
      /**
       * Constructs a new EnumDescriptorProto.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IEnumDescriptorProto);

      /** EnumDescriptorProto name. */
      public name: string;

      /** EnumDescriptorProto value. */
      public value: google.protobuf.IEnumValueDescriptorProto[];

      /** EnumDescriptorProto options. */
      public options?: google.protobuf.IEnumOptions | null;

      /**
       * Creates a new EnumDescriptorProto instance using the specified properties.
       * @param [properties] Properties to set
       * @returns EnumDescriptorProto instance
       */
      public static create(
        properties?: google.protobuf.IEnumDescriptorProto,
      ): google.protobuf.EnumDescriptorProto;

      /**
       * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
       * @param m EnumDescriptorProto message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.protobuf.IEnumDescriptorProto, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes an EnumDescriptorProto message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns EnumDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.protobuf.EnumDescriptorProto;
    }

    /** Properties of an EnumValueDescriptorProto. */
    interface IEnumValueDescriptorProto {
      /** EnumValueDescriptorProto name */
      name?: string | null;

      /** EnumValueDescriptorProto number */
      number?: number | null;

      /** EnumValueDescriptorProto options */
      options?: google.protobuf.IEnumValueOptions | null;
    }

    /** Represents an EnumValueDescriptorProto. */
    class EnumValueDescriptorProto implements IEnumValueDescriptorProto {
      /**
       * Constructs a new EnumValueDescriptorProto.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IEnumValueDescriptorProto);

      /** EnumValueDescriptorProto name. */
      public name: string;

      /** EnumValueDescriptorProto number. */
      public number: number;

      /** EnumValueDescriptorProto options. */
      public options?: google.protobuf.IEnumValueOptions | null;

      /**
       * Creates a new EnumValueDescriptorProto instance using the specified properties.
       * @param [properties] Properties to set
       * @returns EnumValueDescriptorProto instance
       */
      public static create(
        properties?: google.protobuf.IEnumValueDescriptorProto,
      ): google.protobuf.EnumValueDescriptorProto;

      /**
       * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
       * @param m EnumValueDescriptorProto message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: google.protobuf.IEnumValueDescriptorProto,
        w?: $protobuf.Writer,
      ): $protobuf.Writer;

      /**
       * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns EnumValueDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number,
      ): google.protobuf.EnumValueDescriptorProto;
    }

    /** Properties of a ServiceDescriptorProto. */
    interface IServiceDescriptorProto {
      /** ServiceDescriptorProto name */
      name?: string | null;

      /** ServiceDescriptorProto method */
      method?: google.protobuf.IMethodDescriptorProto[] | null;

      /** ServiceDescriptorProto options */
      options?: google.protobuf.IServiceOptions | null;
    }

    /** Represents a ServiceDescriptorProto. */
    class ServiceDescriptorProto implements IServiceDescriptorProto {
      /**
       * Constructs a new ServiceDescriptorProto.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IServiceDescriptorProto);

      /** ServiceDescriptorProto name. */
      public name: string;

      /** ServiceDescriptorProto method. */
      public method: google.protobuf.IMethodDescriptorProto[];

      /** ServiceDescriptorProto options. */
      public options?: google.protobuf.IServiceOptions | null;

      /**
       * Creates a new ServiceDescriptorProto instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ServiceDescriptorProto instance
       */
      public static create(
        properties?: google.protobuf.IServiceDescriptorProto,
      ): google.protobuf.ServiceDescriptorProto;

      /**
       * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
       * @param m ServiceDescriptorProto message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: google.protobuf.IServiceDescriptorProto,
        w?: $protobuf.Writer,
      ): $protobuf.Writer;

      /**
       * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ServiceDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number,
      ): google.protobuf.ServiceDescriptorProto;
    }

    /** Properties of a MethodDescriptorProto. */
    interface IMethodDescriptorProto {
      /** MethodDescriptorProto name */
      name?: string | null;

      /** MethodDescriptorProto inputType */
      inputType?: string | null;

      /** MethodDescriptorProto outputType */
      outputType?: string | null;

      /** MethodDescriptorProto options */
      options?: google.protobuf.IMethodOptions | null;

      /** MethodDescriptorProto clientStreaming */
      clientStreaming?: boolean | null;

      /** MethodDescriptorProto serverStreaming */
      serverStreaming?: boolean | null;
    }

    /** Represents a MethodDescriptorProto. */
    class MethodDescriptorProto implements IMethodDescriptorProto {
      /**
       * Constructs a new MethodDescriptorProto.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IMethodDescriptorProto);

      /** MethodDescriptorProto name. */
      public name: string;

      /** MethodDescriptorProto inputType. */
      public inputType: string;

      /** MethodDescriptorProto outputType. */
      public outputType: string;

      /** MethodDescriptorProto options. */
      public options?: google.protobuf.IMethodOptions | null;

      /** MethodDescriptorProto clientStreaming. */
      public clientStreaming: boolean;

      /** MethodDescriptorProto serverStreaming. */
      public serverStreaming: boolean;

      /**
       * Creates a new MethodDescriptorProto instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MethodDescriptorProto instance
       */
      public static create(
        properties?: google.protobuf.IMethodDescriptorProto,
      ): google.protobuf.MethodDescriptorProto;

      /**
       * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
       * @param m MethodDescriptorProto message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.protobuf.IMethodDescriptorProto, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a MethodDescriptorProto message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns MethodDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number,
      ): google.protobuf.MethodDescriptorProto;
    }

    /** Properties of a FileOptions. */
    interface IFileOptions {
      /** FileOptions javaPackage */
      javaPackage?: string | null;

      /** FileOptions javaOuterClassname */
      javaOuterClassname?: string | null;

      /** FileOptions javaMultipleFiles */
      javaMultipleFiles?: boolean | null;

      /** FileOptions javaGenerateEqualsAndHash */
      javaGenerateEqualsAndHash?: boolean | null;

      /** FileOptions javaStringCheckUtf8 */
      javaStringCheckUtf8?: boolean | null;

      /** FileOptions optimizeFor */
      optimizeFor?: google.protobuf.FileOptions.OptimizeMode | null;

      /** FileOptions goPackage */
      goPackage?: string | null;

      /** FileOptions ccGenericServices */
      ccGenericServices?: boolean | null;

      /** FileOptions javaGenericServices */
      javaGenericServices?: boolean | null;

      /** FileOptions pyGenericServices */
      pyGenericServices?: boolean | null;

      /** FileOptions deprecated */
      deprecated?: boolean | null;

      /** FileOptions ccEnableArenas */
      ccEnableArenas?: boolean | null;

      /** FileOptions objcClassPrefix */
      objcClassPrefix?: string | null;

      /** FileOptions csharpNamespace */
      csharpNamespace?: string | null;

      /** FileOptions uninterpretedOption */
      uninterpretedOption?: google.protobuf.IUninterpretedOption[] | null;
    }

    /** Represents a FileOptions. */
    class FileOptions implements IFileOptions {
      /**
       * Constructs a new FileOptions.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IFileOptions);

      /** FileOptions javaPackage. */
      public javaPackage: string;

      /** FileOptions javaOuterClassname. */
      public javaOuterClassname: string;

      /** FileOptions javaMultipleFiles. */
      public javaMultipleFiles: boolean;

      /** FileOptions javaGenerateEqualsAndHash. */
      public javaGenerateEqualsAndHash: boolean;

      /** FileOptions javaStringCheckUtf8. */
      public javaStringCheckUtf8: boolean;

      /** FileOptions optimizeFor. */
      public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

      /** FileOptions goPackage. */
      public goPackage: string;

      /** FileOptions ccGenericServices. */
      public ccGenericServices: boolean;

      /** FileOptions javaGenericServices. */
      public javaGenericServices: boolean;

      /** FileOptions pyGenericServices. */
      public pyGenericServices: boolean;

      /** FileOptions deprecated. */
      public deprecated: boolean;

      /** FileOptions ccEnableArenas. */
      public ccEnableArenas: boolean;

      /** FileOptions objcClassPrefix. */
      public objcClassPrefix: string;

      /** FileOptions csharpNamespace. */
      public csharpNamespace: string;

      /** FileOptions uninterpretedOption. */
      public uninterpretedOption: google.protobuf.IUninterpretedOption[];

      /**
       * Creates a new FileOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns FileOptions instance
       */
      public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

      /**
       * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
       * @param m FileOptions message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.protobuf.IFileOptions, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a FileOptions message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns FileOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.protobuf.FileOptions;
    }

    namespace FileOptions {
      /** OptimizeMode enum. */
      enum OptimizeMode {
        SPEED = 1,
        CODE_SIZE = 2,
        LITE_RUNTIME = 3,
      }
    }

    /** Properties of a MessageOptions. */
    interface IMessageOptions {
      /** MessageOptions messageSetWireFormat */
      messageSetWireFormat?: boolean | null;

      /** MessageOptions noStandardDescriptorAccessor */
      noStandardDescriptorAccessor?: boolean | null;

      /** MessageOptions deprecated */
      deprecated?: boolean | null;

      /** MessageOptions mapEntry */
      mapEntry?: boolean | null;

      /** MessageOptions uninterpretedOption */
      uninterpretedOption?: google.protobuf.IUninterpretedOption[] | null;
    }

    /** Represents a MessageOptions. */
    class MessageOptions implements IMessageOptions {
      /**
       * Constructs a new MessageOptions.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IMessageOptions);

      /** MessageOptions messageSetWireFormat. */
      public messageSetWireFormat: boolean;

      /** MessageOptions noStandardDescriptorAccessor. */
      public noStandardDescriptorAccessor: boolean;

      /** MessageOptions deprecated. */
      public deprecated: boolean;

      /** MessageOptions mapEntry. */
      public mapEntry: boolean;

      /** MessageOptions uninterpretedOption. */
      public uninterpretedOption: google.protobuf.IUninterpretedOption[];

      /**
       * Creates a new MessageOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MessageOptions instance
       */
      public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

      /**
       * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
       * @param m MessageOptions message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.protobuf.IMessageOptions, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a MessageOptions message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns MessageOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.protobuf.MessageOptions;
    }

    /** Properties of a FieldOptions. */
    interface IFieldOptions {
      /** FieldOptions ctype */
      ctype?: google.protobuf.FieldOptions.CType | null;

      /** FieldOptions packed */
      packed?: boolean | null;

      /** FieldOptions jstype */
      jstype?: google.protobuf.FieldOptions.JSType | null;

      /** FieldOptions lazy */
      lazy?: boolean | null;

      /** FieldOptions deprecated */
      deprecated?: boolean | null;

      /** FieldOptions weak */
      weak?: boolean | null;

      /** FieldOptions uninterpretedOption */
      uninterpretedOption?: google.protobuf.IUninterpretedOption[] | null;
    }

    /** Represents a FieldOptions. */
    class FieldOptions implements IFieldOptions {
      /**
       * Constructs a new FieldOptions.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IFieldOptions);

      /** FieldOptions ctype. */
      public ctype: google.protobuf.FieldOptions.CType;

      /** FieldOptions packed. */
      public packed: boolean;

      /** FieldOptions jstype. */
      public jstype: google.protobuf.FieldOptions.JSType;

      /** FieldOptions lazy. */
      public lazy: boolean;

      /** FieldOptions deprecated. */
      public deprecated: boolean;

      /** FieldOptions weak. */
      public weak: boolean;

      /** FieldOptions uninterpretedOption. */
      public uninterpretedOption: google.protobuf.IUninterpretedOption[];

      /**
       * Creates a new FieldOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns FieldOptions instance
       */
      public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

      /**
       * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
       * @param m FieldOptions message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.protobuf.IFieldOptions, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a FieldOptions message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns FieldOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.protobuf.FieldOptions;
    }

    namespace FieldOptions {
      /** CType enum. */
      enum CType {
        STRING = 0,
        CORD = 1,
        STRING_PIECE = 2,
      }

      /** JSType enum. */
      enum JSType {
        JS_NORMAL = 0,
        JS_STRING = 1,
        JS_NUMBER = 2,
      }
    }

    /** Properties of an OneofOptions. */
    interface IOneofOptions {
      /** OneofOptions uninterpretedOption */
      uninterpretedOption?: google.protobuf.IUninterpretedOption[] | null;
    }

    /** Represents an OneofOptions. */
    class OneofOptions implements IOneofOptions {
      /**
       * Constructs a new OneofOptions.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IOneofOptions);

      /** OneofOptions uninterpretedOption. */
      public uninterpretedOption: google.protobuf.IUninterpretedOption[];

      /**
       * Creates a new OneofOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns OneofOptions instance
       */
      public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

      /**
       * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
       * @param m OneofOptions message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.protobuf.IOneofOptions, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes an OneofOptions message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns OneofOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.protobuf.OneofOptions;
    }

    /** Properties of an EnumOptions. */
    interface IEnumOptions {
      /** EnumOptions allowAlias */
      allowAlias?: boolean | null;

      /** EnumOptions deprecated */
      deprecated?: boolean | null;

      /** EnumOptions uninterpretedOption */
      uninterpretedOption?: google.protobuf.IUninterpretedOption[] | null;
    }

    /** Represents an EnumOptions. */
    class EnumOptions implements IEnumOptions {
      /**
       * Constructs a new EnumOptions.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IEnumOptions);

      /** EnumOptions allowAlias. */
      public allowAlias: boolean;

      /** EnumOptions deprecated. */
      public deprecated: boolean;

      /** EnumOptions uninterpretedOption. */
      public uninterpretedOption: google.protobuf.IUninterpretedOption[];

      /**
       * Creates a new EnumOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns EnumOptions instance
       */
      public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

      /**
       * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
       * @param m EnumOptions message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.protobuf.IEnumOptions, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes an EnumOptions message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns EnumOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.protobuf.EnumOptions;
    }

    /** Properties of an EnumValueOptions. */
    interface IEnumValueOptions {
      /** EnumValueOptions deprecated */
      deprecated?: boolean | null;

      /** EnumValueOptions uninterpretedOption */
      uninterpretedOption?: google.protobuf.IUninterpretedOption[] | null;
    }

    /** Represents an EnumValueOptions. */
    class EnumValueOptions implements IEnumValueOptions {
      /**
       * Constructs a new EnumValueOptions.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IEnumValueOptions);

      /** EnumValueOptions deprecated. */
      public deprecated: boolean;

      /** EnumValueOptions uninterpretedOption. */
      public uninterpretedOption: google.protobuf.IUninterpretedOption[];

      /**
       * Creates a new EnumValueOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns EnumValueOptions instance
       */
      public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

      /**
       * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
       * @param m EnumValueOptions message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.protobuf.IEnumValueOptions, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes an EnumValueOptions message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns EnumValueOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.protobuf.EnumValueOptions;
    }

    /** Properties of a ServiceOptions. */
    interface IServiceOptions {
      /** ServiceOptions deprecated */
      deprecated?: boolean | null;

      /** ServiceOptions uninterpretedOption */
      uninterpretedOption?: google.protobuf.IUninterpretedOption[] | null;
    }

    /** Represents a ServiceOptions. */
    class ServiceOptions implements IServiceOptions {
      /**
       * Constructs a new ServiceOptions.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IServiceOptions);

      /** ServiceOptions deprecated. */
      public deprecated: boolean;

      /** ServiceOptions uninterpretedOption. */
      public uninterpretedOption: google.protobuf.IUninterpretedOption[];

      /**
       * Creates a new ServiceOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ServiceOptions instance
       */
      public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

      /**
       * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
       * @param m ServiceOptions message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.protobuf.IServiceOptions, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a ServiceOptions message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ServiceOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.protobuf.ServiceOptions;
    }

    /** Properties of a MethodOptions. */
    interface IMethodOptions {
      /** MethodOptions deprecated */
      deprecated?: boolean | null;

      /** MethodOptions uninterpretedOption */
      uninterpretedOption?: google.protobuf.IUninterpretedOption[] | null;

      /** MethodOptions .google.api.http */
      ".google.api.http"?: google.api.IHttpRule | null;
    }

    /** Represents a MethodOptions. */
    class MethodOptions implements IMethodOptions {
      /**
       * Constructs a new MethodOptions.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IMethodOptions);

      /** MethodOptions deprecated. */
      public deprecated: boolean;

      /** MethodOptions uninterpretedOption. */
      public uninterpretedOption: google.protobuf.IUninterpretedOption[];

      /**
       * Creates a new MethodOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MethodOptions instance
       */
      public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

      /**
       * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
       * @param m MethodOptions message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.protobuf.IMethodOptions, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a MethodOptions message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns MethodOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.protobuf.MethodOptions;
    }

    /** Properties of an UninterpretedOption. */
    interface IUninterpretedOption {
      /** UninterpretedOption name */
      name?: google.protobuf.UninterpretedOption.INamePart[] | null;

      /** UninterpretedOption identifierValue */
      identifierValue?: string | null;

      /** UninterpretedOption positiveIntValue */
      positiveIntValue?: Long | null;

      /** UninterpretedOption negativeIntValue */
      negativeIntValue?: Long | null;

      /** UninterpretedOption doubleValue */
      doubleValue?: number | null;

      /** UninterpretedOption stringValue */
      stringValue?: Uint8Array | null;

      /** UninterpretedOption aggregateValue */
      aggregateValue?: string | null;
    }

    /** Represents an UninterpretedOption. */
    class UninterpretedOption implements IUninterpretedOption {
      /**
       * Constructs a new UninterpretedOption.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IUninterpretedOption);

      /** UninterpretedOption name. */
      public name: google.protobuf.UninterpretedOption.INamePart[];

      /** UninterpretedOption identifierValue. */
      public identifierValue: string;

      /** UninterpretedOption positiveIntValue. */
      public positiveIntValue: Long;

      /** UninterpretedOption negativeIntValue. */
      public negativeIntValue: Long;

      /** UninterpretedOption doubleValue. */
      public doubleValue: number;

      /** UninterpretedOption stringValue. */
      public stringValue: Uint8Array;

      /** UninterpretedOption aggregateValue. */
      public aggregateValue: string;

      /**
       * Creates a new UninterpretedOption instance using the specified properties.
       * @param [properties] Properties to set
       * @returns UninterpretedOption instance
       */
      public static create(
        properties?: google.protobuf.IUninterpretedOption,
      ): google.protobuf.UninterpretedOption;

      /**
       * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
       * @param m UninterpretedOption message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.protobuf.IUninterpretedOption, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes an UninterpretedOption message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns UninterpretedOption
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.protobuf.UninterpretedOption;
    }

    namespace UninterpretedOption {
      /** Properties of a NamePart. */
      interface INamePart {
        /** NamePart namePart */
        namePart: string;

        /** NamePart isExtension */
        isExtension: boolean;
      }

      /** Represents a NamePart. */
      class NamePart implements INamePart {
        /**
         * Constructs a new NamePart.
         * @param [p] Properties to set
         */
        constructor(p?: google.protobuf.UninterpretedOption.INamePart);

        /** NamePart namePart. */
        public namePart: string;

        /** NamePart isExtension. */
        public isExtension: boolean;

        /**
         * Creates a new NamePart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NamePart instance
         */
        public static create(
          properties?: google.protobuf.UninterpretedOption.INamePart,
        ): google.protobuf.UninterpretedOption.NamePart;

        /**
         * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
         * @param m NamePart message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: google.protobuf.UninterpretedOption.INamePart,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a NamePart message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns NamePart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): google.protobuf.UninterpretedOption.NamePart;
      }
    }

    /** Properties of a SourceCodeInfo. */
    interface ISourceCodeInfo {
      /** SourceCodeInfo location */
      location?: google.protobuf.SourceCodeInfo.ILocation[] | null;
    }

    /** Represents a SourceCodeInfo. */
    class SourceCodeInfo implements ISourceCodeInfo {
      /**
       * Constructs a new SourceCodeInfo.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.ISourceCodeInfo);

      /** SourceCodeInfo location. */
      public location: google.protobuf.SourceCodeInfo.ILocation[];

      /**
       * Creates a new SourceCodeInfo instance using the specified properties.
       * @param [properties] Properties to set
       * @returns SourceCodeInfo instance
       */
      public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

      /**
       * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
       * @param m SourceCodeInfo message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.protobuf.ISourceCodeInfo, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a SourceCodeInfo message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns SourceCodeInfo
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.protobuf.SourceCodeInfo;
    }

    namespace SourceCodeInfo {
      /** Properties of a Location. */
      interface ILocation {
        /** Location path */
        path?: number[] | null;

        /** Location span */
        span?: number[] | null;

        /** Location leadingComments */
        leadingComments?: string | null;

        /** Location trailingComments */
        trailingComments?: string | null;

        /** Location leadingDetachedComments */
        leadingDetachedComments?: string[] | null;
      }

      /** Represents a Location. */
      class Location implements ILocation {
        /**
         * Constructs a new Location.
         * @param [p] Properties to set
         */
        constructor(p?: google.protobuf.SourceCodeInfo.ILocation);

        /** Location path. */
        public path: number[];

        /** Location span. */
        public span: number[];

        /** Location leadingComments. */
        public leadingComments: string;

        /** Location trailingComments. */
        public trailingComments: string;

        /** Location leadingDetachedComments. */
        public leadingDetachedComments: string[];

        /**
         * Creates a new Location instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Location instance
         */
        public static create(
          properties?: google.protobuf.SourceCodeInfo.ILocation,
        ): google.protobuf.SourceCodeInfo.Location;

        /**
         * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
         * @param m Location message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: google.protobuf.SourceCodeInfo.ILocation,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a Location message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): google.protobuf.SourceCodeInfo.Location;
      }
    }

    /** Properties of a GeneratedCodeInfo. */
    interface IGeneratedCodeInfo {
      /** GeneratedCodeInfo annotation */
      annotation?: google.protobuf.GeneratedCodeInfo.IAnnotation[] | null;
    }

    /** Represents a GeneratedCodeInfo. */
    class GeneratedCodeInfo implements IGeneratedCodeInfo {
      /**
       * Constructs a new GeneratedCodeInfo.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IGeneratedCodeInfo);

      /** GeneratedCodeInfo annotation. */
      public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

      /**
       * Creates a new GeneratedCodeInfo instance using the specified properties.
       * @param [properties] Properties to set
       * @returns GeneratedCodeInfo instance
       */
      public static create(
        properties?: google.protobuf.IGeneratedCodeInfo,
      ): google.protobuf.GeneratedCodeInfo;

      /**
       * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
       * @param m GeneratedCodeInfo message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.protobuf.IGeneratedCodeInfo, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns GeneratedCodeInfo
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.protobuf.GeneratedCodeInfo;
    }

    namespace GeneratedCodeInfo {
      /** Properties of an Annotation. */
      interface IAnnotation {
        /** Annotation path */
        path?: number[] | null;

        /** Annotation sourceFile */
        sourceFile?: string | null;

        /** Annotation begin */
        begin?: number | null;

        /** Annotation end */
        end?: number | null;
      }

      /** Represents an Annotation. */
      class Annotation implements IAnnotation {
        /**
         * Constructs a new Annotation.
         * @param [p] Properties to set
         */
        constructor(p?: google.protobuf.GeneratedCodeInfo.IAnnotation);

        /** Annotation path. */
        public path: number[];

        /** Annotation sourceFile. */
        public sourceFile: string;

        /** Annotation begin. */
        public begin: number;

        /** Annotation end. */
        public end: number;

        /**
         * Creates a new Annotation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Annotation instance
         */
        public static create(
          properties?: google.protobuf.GeneratedCodeInfo.IAnnotation,
        ): google.protobuf.GeneratedCodeInfo.Annotation;

        /**
         * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
         * @param m Annotation message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: google.protobuf.GeneratedCodeInfo.IAnnotation,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes an Annotation message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Annotation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): google.protobuf.GeneratedCodeInfo.Annotation;
      }
    }

    /** Properties of a Duration. */
    interface IDuration {
      /** Duration seconds */
      seconds?: Long | null;

      /** Duration nanos */
      nanos?: number | null;
    }

    /** Represents a Duration. */
    class Duration implements IDuration {
      /**
       * Constructs a new Duration.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IDuration);

      /** Duration seconds. */
      public seconds: Long;

      /** Duration nanos. */
      public nanos: number;

      /**
       * Creates a new Duration instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Duration instance
       */
      public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

      /**
       * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
       * @param m Duration message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.protobuf.IDuration, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a Duration message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Duration
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.protobuf.Duration;
    }

    /** Properties of a Timestamp. */
    interface ITimestamp {
      /** Timestamp seconds */
      seconds?: Long | null;

      /** Timestamp nanos */
      nanos?: number | null;
    }

    /** Represents a Timestamp. */
    class Timestamp implements ITimestamp {
      /**
       * Constructs a new Timestamp.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.ITimestamp);

      /** Timestamp seconds. */
      public seconds: Long;

      /** Timestamp nanos. */
      public nanos: number;

      /**
       * Creates a new Timestamp instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Timestamp instance
       */
      public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

      /**
       * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
       * @param m Timestamp message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.protobuf.ITimestamp, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a Timestamp message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Timestamp
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.protobuf.Timestamp;
    }
  }

  /** Namespace api. */
  namespace api {
    /** Properties of a Http. */
    interface IHttp {
      /** Http rules */
      rules?: google.api.IHttpRule[] | null;
    }

    /** Represents a Http. */
    class Http implements IHttp {
      /**
       * Constructs a new Http.
       * @param [p] Properties to set
       */
      constructor(p?: google.api.IHttp);

      /** Http rules. */
      public rules: google.api.IHttpRule[];

      /**
       * Creates a new Http instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Http instance
       */
      public static create(properties?: google.api.IHttp): google.api.Http;

      /**
       * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
       * @param m Http message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.api.IHttp, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a Http message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Http
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.api.Http;
    }

    /** Properties of a HttpRule. */
    interface IHttpRule {
      /** HttpRule get */
      get?: string | null;

      /** HttpRule put */
      put?: string | null;

      /** HttpRule post */
      post?: string | null;

      /** HttpRule delete */
      delete?: string | null;

      /** HttpRule patch */
      patch?: string | null;

      /** HttpRule custom */
      custom?: google.api.ICustomHttpPattern | null;

      /** HttpRule selector */
      selector?: string | null;

      /** HttpRule body */
      body?: string | null;

      /** HttpRule additionalBindings */
      additionalBindings?: google.api.IHttpRule[] | null;
    }

    /** Represents a HttpRule. */
    class HttpRule implements IHttpRule {
      /**
       * Constructs a new HttpRule.
       * @param [p] Properties to set
       */
      constructor(p?: google.api.IHttpRule);

      /** HttpRule get. */
      public get: string;

      /** HttpRule put. */
      public put: string;

      /** HttpRule post. */
      public post: string;

      /** HttpRule delete. */
      public delete: string;

      /** HttpRule patch. */
      public patch: string;

      /** HttpRule custom. */
      public custom?: google.api.ICustomHttpPattern | null;

      /** HttpRule selector. */
      public selector: string;

      /** HttpRule body. */
      public body: string;

      /** HttpRule additionalBindings. */
      public additionalBindings: google.api.IHttpRule[];

      /** HttpRule pattern. */
      public pattern?: "get" | "put" | "post" | "delete" | "patch" | "custom";

      /**
       * Creates a new HttpRule instance using the specified properties.
       * @param [properties] Properties to set
       * @returns HttpRule instance
       */
      public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

      /**
       * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
       * @param m HttpRule message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.api.IHttpRule, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a HttpRule message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns HttpRule
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.api.HttpRule;
    }

    /** Properties of a CustomHttpPattern. */
    interface ICustomHttpPattern {
      /** CustomHttpPattern kind */
      kind?: string | null;

      /** CustomHttpPattern path */
      path?: string | null;
    }

    /** Represents a CustomHttpPattern. */
    class CustomHttpPattern implements ICustomHttpPattern {
      /**
       * Constructs a new CustomHttpPattern.
       * @param [p] Properties to set
       */
      constructor(p?: google.api.ICustomHttpPattern);

      /** CustomHttpPattern kind. */
      public kind: string;

      /** CustomHttpPattern path. */
      public path: string;

      /**
       * Creates a new CustomHttpPattern instance using the specified properties.
       * @param [properties] Properties to set
       * @returns CustomHttpPattern instance
       */
      public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

      /**
       * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
       * @param m CustomHttpPattern message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.api.ICustomHttpPattern, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a CustomHttpPattern message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns CustomHttpPattern
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.api.CustomHttpPattern;
    }
  }
}

/** Namespace ibc. */
export namespace ibc {
  /** Namespace core. */
  namespace core {
    /** Namespace channel. */
    namespace channel {
      /** Namespace v1. */
      namespace v1 {
        /** Properties of a Channel. */
        interface IChannel {
          /** Channel state */
          state?: ibc.core.channel.v1.State | null;

          /** Channel ordering */
          ordering?: ibc.core.channel.v1.Order | null;

          /** Channel counterparty */
          counterparty?: ibc.core.channel.v1.ICounterparty | null;

          /** Channel connectionHops */
          connectionHops?: string[] | null;

          /** Channel version */
          version?: string | null;
        }

        /** Represents a Channel. */
        class Channel implements IChannel {
          /**
           * Constructs a new Channel.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IChannel);

          /** Channel state. */
          public state: ibc.core.channel.v1.State;

          /** Channel ordering. */
          public ordering: ibc.core.channel.v1.Order;

          /** Channel counterparty. */
          public counterparty?: ibc.core.channel.v1.ICounterparty | null;

          /** Channel connectionHops. */
          public connectionHops: string[];

          /** Channel version. */
          public version: string;

          /**
           * Creates a new Channel instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Channel instance
           */
          public static create(properties?: ibc.core.channel.v1.IChannel): ibc.core.channel.v1.Channel;

          /**
           * Encodes the specified Channel message. Does not implicitly {@link ibc.core.channel.v1.Channel.verify|verify} messages.
           * @param m Channel message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(m: ibc.core.channel.v1.IChannel, w?: $protobuf.Writer): $protobuf.Writer;

          /**
           * Decodes a Channel message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns Channel
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ibc.core.channel.v1.Channel;
        }

        /** Properties of an IdentifiedChannel. */
        interface IIdentifiedChannel {
          /** IdentifiedChannel state */
          state?: ibc.core.channel.v1.State | null;

          /** IdentifiedChannel ordering */
          ordering?: ibc.core.channel.v1.Order | null;

          /** IdentifiedChannel counterparty */
          counterparty?: ibc.core.channel.v1.ICounterparty | null;

          /** IdentifiedChannel connectionHops */
          connectionHops?: string[] | null;

          /** IdentifiedChannel version */
          version?: string | null;

          /** IdentifiedChannel portId */
          portId?: string | null;

          /** IdentifiedChannel channelId */
          channelId?: string | null;
        }

        /** Represents an IdentifiedChannel. */
        class IdentifiedChannel implements IIdentifiedChannel {
          /**
           * Constructs a new IdentifiedChannel.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IIdentifiedChannel);

          /** IdentifiedChannel state. */
          public state: ibc.core.channel.v1.State;

          /** IdentifiedChannel ordering. */
          public ordering: ibc.core.channel.v1.Order;

          /** IdentifiedChannel counterparty. */
          public counterparty?: ibc.core.channel.v1.ICounterparty | null;

          /** IdentifiedChannel connectionHops. */
          public connectionHops: string[];

          /** IdentifiedChannel version. */
          public version: string;

          /** IdentifiedChannel portId. */
          public portId: string;

          /** IdentifiedChannel channelId. */
          public channelId: string;

          /**
           * Creates a new IdentifiedChannel instance using the specified properties.
           * @param [properties] Properties to set
           * @returns IdentifiedChannel instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IIdentifiedChannel,
          ): ibc.core.channel.v1.IdentifiedChannel;

          /**
           * Encodes the specified IdentifiedChannel message. Does not implicitly {@link ibc.core.channel.v1.IdentifiedChannel.verify|verify} messages.
           * @param m IdentifiedChannel message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IIdentifiedChannel,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes an IdentifiedChannel message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns IdentifiedChannel
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.IdentifiedChannel;
        }

        /** State enum. */
        enum State {
          STATE_UNINITIALIZED_UNSPECIFIED = 0,
          STATE_INIT = 1,
          STATE_TRYOPEN = 2,
          STATE_OPEN = 3,
          STATE_CLOSED = 4,
        }

        /** Order enum. */
        enum Order {
          ORDER_NONE_UNSPECIFIED = 0,
          ORDER_UNORDERED = 1,
          ORDER_ORDERED = 2,
        }

        /** Properties of a Counterparty. */
        interface ICounterparty {
          /** Counterparty portId */
          portId?: string | null;

          /** Counterparty channelId */
          channelId?: string | null;
        }

        /** Represents a Counterparty. */
        class Counterparty implements ICounterparty {
          /**
           * Constructs a new Counterparty.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.ICounterparty);

          /** Counterparty portId. */
          public portId: string;

          /** Counterparty channelId. */
          public channelId: string;

          /**
           * Creates a new Counterparty instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Counterparty instance
           */
          public static create(
            properties?: ibc.core.channel.v1.ICounterparty,
          ): ibc.core.channel.v1.Counterparty;

          /**
           * Encodes the specified Counterparty message. Does not implicitly {@link ibc.core.channel.v1.Counterparty.verify|verify} messages.
           * @param m Counterparty message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(m: ibc.core.channel.v1.ICounterparty, w?: $protobuf.Writer): $protobuf.Writer;

          /**
           * Decodes a Counterparty message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns Counterparty
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.Counterparty;
        }

        /** Properties of a Packet. */
        interface IPacket {
          /** Packet sequence */
          sequence?: Long | null;

          /** Packet sourcePort */
          sourcePort?: string | null;

          /** Packet sourceChannel */
          sourceChannel?: string | null;

          /** Packet destinationPort */
          destinationPort?: string | null;

          /** Packet destinationChannel */
          destinationChannel?: string | null;

          /** Packet data */
          data?: Uint8Array | null;

          /** Packet timeoutHeight */
          timeoutHeight?: ibc.core.client.v1.IHeight | null;

          /** Packet timeoutTimestamp */
          timeoutTimestamp?: Long | null;
        }

        /** Represents a Packet. */
        class Packet implements IPacket {
          /**
           * Constructs a new Packet.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IPacket);

          /** Packet sequence. */
          public sequence: Long;

          /** Packet sourcePort. */
          public sourcePort: string;

          /** Packet sourceChannel. */
          public sourceChannel: string;

          /** Packet destinationPort. */
          public destinationPort: string;

          /** Packet destinationChannel. */
          public destinationChannel: string;

          /** Packet data. */
          public data: Uint8Array;

          /** Packet timeoutHeight. */
          public timeoutHeight?: ibc.core.client.v1.IHeight | null;

          /** Packet timeoutTimestamp. */
          public timeoutTimestamp: Long;

          /**
           * Creates a new Packet instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Packet instance
           */
          public static create(properties?: ibc.core.channel.v1.IPacket): ibc.core.channel.v1.Packet;

          /**
           * Encodes the specified Packet message. Does not implicitly {@link ibc.core.channel.v1.Packet.verify|verify} messages.
           * @param m Packet message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(m: ibc.core.channel.v1.IPacket, w?: $protobuf.Writer): $protobuf.Writer;

          /**
           * Decodes a Packet message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns Packet
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ibc.core.channel.v1.Packet;
        }

        /** Properties of a PacketState. */
        interface IPacketState {
          /** PacketState portId */
          portId?: string | null;

          /** PacketState channelId */
          channelId?: string | null;

          /** PacketState sequence */
          sequence?: Long | null;

          /** PacketState data */
          data?: Uint8Array | null;
        }

        /** Represents a PacketState. */
        class PacketState implements IPacketState {
          /**
           * Constructs a new PacketState.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IPacketState);

          /** PacketState portId. */
          public portId: string;

          /** PacketState channelId. */
          public channelId: string;

          /** PacketState sequence. */
          public sequence: Long;

          /** PacketState data. */
          public data: Uint8Array;

          /**
           * Creates a new PacketState instance using the specified properties.
           * @param [properties] Properties to set
           * @returns PacketState instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IPacketState,
          ): ibc.core.channel.v1.PacketState;

          /**
           * Encodes the specified PacketState message. Does not implicitly {@link ibc.core.channel.v1.PacketState.verify|verify} messages.
           * @param m PacketState message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(m: ibc.core.channel.v1.IPacketState, w?: $protobuf.Writer): $protobuf.Writer;

          /**
           * Decodes a PacketState message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns PacketState
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ibc.core.channel.v1.PacketState;
        }

        /** Properties of an Acknowledgement. */
        interface IAcknowledgement {
          /** Acknowledgement result */
          result?: Uint8Array | null;

          /** Acknowledgement error */
          error?: string | null;
        }

        /** Represents an Acknowledgement. */
        class Acknowledgement implements IAcknowledgement {
          /**
           * Constructs a new Acknowledgement.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IAcknowledgement);

          /** Acknowledgement result. */
          public result: Uint8Array;

          /** Acknowledgement error. */
          public error: string;

          /** Acknowledgement response. */
          public response?: "result" | "error";

          /**
           * Creates a new Acknowledgement instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Acknowledgement instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IAcknowledgement,
          ): ibc.core.channel.v1.Acknowledgement;

          /**
           * Encodes the specified Acknowledgement message. Does not implicitly {@link ibc.core.channel.v1.Acknowledgement.verify|verify} messages.
           * @param m Acknowledgement message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IAcknowledgement,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes an Acknowledgement message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns Acknowledgement
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.Acknowledgement;
        }

        /** Represents a Query */
        class Query extends $protobuf.rpc.Service {
          /**
           * Constructs a new Query service.
           * @param rpcImpl RPC implementation
           * @param [requestDelimited=false] Whether requests are length-delimited
           * @param [responseDelimited=false] Whether responses are length-delimited
           */
          constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

          /**
           * Creates new Query service using the specified rpc implementation.
           * @param rpcImpl RPC implementation
           * @param [requestDelimited=false] Whether requests are length-delimited
           * @param [responseDelimited=false] Whether responses are length-delimited
           * @returns RPC service. Useful where requests and/or responses are streamed.
           */
          public static create(
            rpcImpl: $protobuf.RPCImpl,
            requestDelimited?: boolean,
            responseDelimited?: boolean,
          ): Query;

          /**
           * Calls Channel.
           * @param request QueryChannelRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryChannelResponse
           */
          public channel(
            request: ibc.core.channel.v1.IQueryChannelRequest,
            callback: ibc.core.channel.v1.Query.ChannelCallback,
          ): void;

          /**
           * Calls Channel.
           * @param request QueryChannelRequest message or plain object
           * @returns Promise
           */
          public channel(
            request: ibc.core.channel.v1.IQueryChannelRequest,
          ): Promise<ibc.core.channel.v1.QueryChannelResponse>;

          /**
           * Calls Channels.
           * @param request QueryChannelsRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryChannelsResponse
           */
          public channels(
            request: ibc.core.channel.v1.IQueryChannelsRequest,
            callback: ibc.core.channel.v1.Query.ChannelsCallback,
          ): void;

          /**
           * Calls Channels.
           * @param request QueryChannelsRequest message or plain object
           * @returns Promise
           */
          public channels(
            request: ibc.core.channel.v1.IQueryChannelsRequest,
          ): Promise<ibc.core.channel.v1.QueryChannelsResponse>;

          /**
           * Calls ConnectionChannels.
           * @param request QueryConnectionChannelsRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryConnectionChannelsResponse
           */
          public connectionChannels(
            request: ibc.core.channel.v1.IQueryConnectionChannelsRequest,
            callback: ibc.core.channel.v1.Query.ConnectionChannelsCallback,
          ): void;

          /**
           * Calls ConnectionChannels.
           * @param request QueryConnectionChannelsRequest message or plain object
           * @returns Promise
           */
          public connectionChannels(
            request: ibc.core.channel.v1.IQueryConnectionChannelsRequest,
          ): Promise<ibc.core.channel.v1.QueryConnectionChannelsResponse>;

          /**
           * Calls ChannelClientState.
           * @param request QueryChannelClientStateRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryChannelClientStateResponse
           */
          public channelClientState(
            request: ibc.core.channel.v1.IQueryChannelClientStateRequest,
            callback: ibc.core.channel.v1.Query.ChannelClientStateCallback,
          ): void;

          /**
           * Calls ChannelClientState.
           * @param request QueryChannelClientStateRequest message or plain object
           * @returns Promise
           */
          public channelClientState(
            request: ibc.core.channel.v1.IQueryChannelClientStateRequest,
          ): Promise<ibc.core.channel.v1.QueryChannelClientStateResponse>;

          /**
           * Calls ChannelConsensusState.
           * @param request QueryChannelConsensusStateRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryChannelConsensusStateResponse
           */
          public channelConsensusState(
            request: ibc.core.channel.v1.IQueryChannelConsensusStateRequest,
            callback: ibc.core.channel.v1.Query.ChannelConsensusStateCallback,
          ): void;

          /**
           * Calls ChannelConsensusState.
           * @param request QueryChannelConsensusStateRequest message or plain object
           * @returns Promise
           */
          public channelConsensusState(
            request: ibc.core.channel.v1.IQueryChannelConsensusStateRequest,
          ): Promise<ibc.core.channel.v1.QueryChannelConsensusStateResponse>;

          /**
           * Calls PacketCommitment.
           * @param request QueryPacketCommitmentRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryPacketCommitmentResponse
           */
          public packetCommitment(
            request: ibc.core.channel.v1.IQueryPacketCommitmentRequest,
            callback: ibc.core.channel.v1.Query.PacketCommitmentCallback,
          ): void;

          /**
           * Calls PacketCommitment.
           * @param request QueryPacketCommitmentRequest message or plain object
           * @returns Promise
           */
          public packetCommitment(
            request: ibc.core.channel.v1.IQueryPacketCommitmentRequest,
          ): Promise<ibc.core.channel.v1.QueryPacketCommitmentResponse>;

          /**
           * Calls PacketCommitments.
           * @param request QueryPacketCommitmentsRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryPacketCommitmentsResponse
           */
          public packetCommitments(
            request: ibc.core.channel.v1.IQueryPacketCommitmentsRequest,
            callback: ibc.core.channel.v1.Query.PacketCommitmentsCallback,
          ): void;

          /**
           * Calls PacketCommitments.
           * @param request QueryPacketCommitmentsRequest message or plain object
           * @returns Promise
           */
          public packetCommitments(
            request: ibc.core.channel.v1.IQueryPacketCommitmentsRequest,
          ): Promise<ibc.core.channel.v1.QueryPacketCommitmentsResponse>;

          /**
           * Calls PacketReceipt.
           * @param request QueryPacketReceiptRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryPacketReceiptResponse
           */
          public packetReceipt(
            request: ibc.core.channel.v1.IQueryPacketReceiptRequest,
            callback: ibc.core.channel.v1.Query.PacketReceiptCallback,
          ): void;

          /**
           * Calls PacketReceipt.
           * @param request QueryPacketReceiptRequest message or plain object
           * @returns Promise
           */
          public packetReceipt(
            request: ibc.core.channel.v1.IQueryPacketReceiptRequest,
          ): Promise<ibc.core.channel.v1.QueryPacketReceiptResponse>;

          /**
           * Calls PacketAcknowledgement.
           * @param request QueryPacketAcknowledgementRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryPacketAcknowledgementResponse
           */
          public packetAcknowledgement(
            request: ibc.core.channel.v1.IQueryPacketAcknowledgementRequest,
            callback: ibc.core.channel.v1.Query.PacketAcknowledgementCallback,
          ): void;

          /**
           * Calls PacketAcknowledgement.
           * @param request QueryPacketAcknowledgementRequest message or plain object
           * @returns Promise
           */
          public packetAcknowledgement(
            request: ibc.core.channel.v1.IQueryPacketAcknowledgementRequest,
          ): Promise<ibc.core.channel.v1.QueryPacketAcknowledgementResponse>;

          /**
           * Calls PacketAcknowledgements.
           * @param request QueryPacketAcknowledgementsRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryPacketAcknowledgementsResponse
           */
          public packetAcknowledgements(
            request: ibc.core.channel.v1.IQueryPacketAcknowledgementsRequest,
            callback: ibc.core.channel.v1.Query.PacketAcknowledgementsCallback,
          ): void;

          /**
           * Calls PacketAcknowledgements.
           * @param request QueryPacketAcknowledgementsRequest message or plain object
           * @returns Promise
           */
          public packetAcknowledgements(
            request: ibc.core.channel.v1.IQueryPacketAcknowledgementsRequest,
          ): Promise<ibc.core.channel.v1.QueryPacketAcknowledgementsResponse>;

          /**
           * Calls UnreceivedPackets.
           * @param request QueryUnreceivedPacketsRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryUnreceivedPacketsResponse
           */
          public unreceivedPackets(
            request: ibc.core.channel.v1.IQueryUnreceivedPacketsRequest,
            callback: ibc.core.channel.v1.Query.UnreceivedPacketsCallback,
          ): void;

          /**
           * Calls UnreceivedPackets.
           * @param request QueryUnreceivedPacketsRequest message or plain object
           * @returns Promise
           */
          public unreceivedPackets(
            request: ibc.core.channel.v1.IQueryUnreceivedPacketsRequest,
          ): Promise<ibc.core.channel.v1.QueryUnreceivedPacketsResponse>;

          /**
           * Calls UnreceivedAcks.
           * @param request QueryUnreceivedAcksRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryUnreceivedAcksResponse
           */
          public unreceivedAcks(
            request: ibc.core.channel.v1.IQueryUnreceivedAcksRequest,
            callback: ibc.core.channel.v1.Query.UnreceivedAcksCallback,
          ): void;

          /**
           * Calls UnreceivedAcks.
           * @param request QueryUnreceivedAcksRequest message or plain object
           * @returns Promise
           */
          public unreceivedAcks(
            request: ibc.core.channel.v1.IQueryUnreceivedAcksRequest,
          ): Promise<ibc.core.channel.v1.QueryUnreceivedAcksResponse>;

          /**
           * Calls NextSequenceReceive.
           * @param request QueryNextSequenceReceiveRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryNextSequenceReceiveResponse
           */
          public nextSequenceReceive(
            request: ibc.core.channel.v1.IQueryNextSequenceReceiveRequest,
            callback: ibc.core.channel.v1.Query.NextSequenceReceiveCallback,
          ): void;

          /**
           * Calls NextSequenceReceive.
           * @param request QueryNextSequenceReceiveRequest message or plain object
           * @returns Promise
           */
          public nextSequenceReceive(
            request: ibc.core.channel.v1.IQueryNextSequenceReceiveRequest,
          ): Promise<ibc.core.channel.v1.QueryNextSequenceReceiveResponse>;
        }

        namespace Query {
          /**
           * Callback as used by {@link ibc.core.channel.v1.Query#channel}.
           * @param error Error, if any
           * @param [response] QueryChannelResponse
           */
          type ChannelCallback = (
            error: Error | null,
            response?: ibc.core.channel.v1.QueryChannelResponse,
          ) => void;

          /**
           * Callback as used by {@link ibc.core.channel.v1.Query#channels}.
           * @param error Error, if any
           * @param [response] QueryChannelsResponse
           */
          type ChannelsCallback = (
            error: Error | null,
            response?: ibc.core.channel.v1.QueryChannelsResponse,
          ) => void;

          /**
           * Callback as used by {@link ibc.core.channel.v1.Query#connectionChannels}.
           * @param error Error, if any
           * @param [response] QueryConnectionChannelsResponse
           */
          type ConnectionChannelsCallback = (
            error: Error | null,
            response?: ibc.core.channel.v1.QueryConnectionChannelsResponse,
          ) => void;

          /**
           * Callback as used by {@link ibc.core.channel.v1.Query#channelClientState}.
           * @param error Error, if any
           * @param [response] QueryChannelClientStateResponse
           */
          type ChannelClientStateCallback = (
            error: Error | null,
            response?: ibc.core.channel.v1.QueryChannelClientStateResponse,
          ) => void;

          /**
           * Callback as used by {@link ibc.core.channel.v1.Query#channelConsensusState}.
           * @param error Error, if any
           * @param [response] QueryChannelConsensusStateResponse
           */
          type ChannelConsensusStateCallback = (
            error: Error | null,
            response?: ibc.core.channel.v1.QueryChannelConsensusStateResponse,
          ) => void;

          /**
           * Callback as used by {@link ibc.core.channel.v1.Query#packetCommitment}.
           * @param error Error, if any
           * @param [response] QueryPacketCommitmentResponse
           */
          type PacketCommitmentCallback = (
            error: Error | null,
            response?: ibc.core.channel.v1.QueryPacketCommitmentResponse,
          ) => void;

          /**
           * Callback as used by {@link ibc.core.channel.v1.Query#packetCommitments}.
           * @param error Error, if any
           * @param [response] QueryPacketCommitmentsResponse
           */
          type PacketCommitmentsCallback = (
            error: Error | null,
            response?: ibc.core.channel.v1.QueryPacketCommitmentsResponse,
          ) => void;

          /**
           * Callback as used by {@link ibc.core.channel.v1.Query#packetReceipt}.
           * @param error Error, if any
           * @param [response] QueryPacketReceiptResponse
           */
          type PacketReceiptCallback = (
            error: Error | null,
            response?: ibc.core.channel.v1.QueryPacketReceiptResponse,
          ) => void;

          /**
           * Callback as used by {@link ibc.core.channel.v1.Query#packetAcknowledgement}.
           * @param error Error, if any
           * @param [response] QueryPacketAcknowledgementResponse
           */
          type PacketAcknowledgementCallback = (
            error: Error | null,
            response?: ibc.core.channel.v1.QueryPacketAcknowledgementResponse,
          ) => void;

          /**
           * Callback as used by {@link ibc.core.channel.v1.Query#packetAcknowledgements}.
           * @param error Error, if any
           * @param [response] QueryPacketAcknowledgementsResponse
           */
          type PacketAcknowledgementsCallback = (
            error: Error | null,
            response?: ibc.core.channel.v1.QueryPacketAcknowledgementsResponse,
          ) => void;

          /**
           * Callback as used by {@link ibc.core.channel.v1.Query#unreceivedPackets}.
           * @param error Error, if any
           * @param [response] QueryUnreceivedPacketsResponse
           */
          type UnreceivedPacketsCallback = (
            error: Error | null,
            response?: ibc.core.channel.v1.QueryUnreceivedPacketsResponse,
          ) => void;

          /**
           * Callback as used by {@link ibc.core.channel.v1.Query#unreceivedAcks}.
           * @param error Error, if any
           * @param [response] QueryUnreceivedAcksResponse
           */
          type UnreceivedAcksCallback = (
            error: Error | null,
            response?: ibc.core.channel.v1.QueryUnreceivedAcksResponse,
          ) => void;

          /**
           * Callback as used by {@link ibc.core.channel.v1.Query#nextSequenceReceive}.
           * @param error Error, if any
           * @param [response] QueryNextSequenceReceiveResponse
           */
          type NextSequenceReceiveCallback = (
            error: Error | null,
            response?: ibc.core.channel.v1.QueryNextSequenceReceiveResponse,
          ) => void;
        }

        /** Properties of a QueryChannelRequest. */
        interface IQueryChannelRequest {
          /** QueryChannelRequest portId */
          portId?: string | null;

          /** QueryChannelRequest channelId */
          channelId?: string | null;
        }

        /** Represents a QueryChannelRequest. */
        class QueryChannelRequest implements IQueryChannelRequest {
          /**
           * Constructs a new QueryChannelRequest.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryChannelRequest);

          /** QueryChannelRequest portId. */
          public portId: string;

          /** QueryChannelRequest channelId. */
          public channelId: string;

          /**
           * Creates a new QueryChannelRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryChannelRequest instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryChannelRequest,
          ): ibc.core.channel.v1.QueryChannelRequest;

          /**
           * Encodes the specified QueryChannelRequest message. Does not implicitly {@link ibc.core.channel.v1.QueryChannelRequest.verify|verify} messages.
           * @param m QueryChannelRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryChannelRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryChannelRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryChannelRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryChannelRequest;
        }

        /** Properties of a QueryChannelResponse. */
        interface IQueryChannelResponse {
          /** QueryChannelResponse channel */
          channel?: ibc.core.channel.v1.IChannel | null;

          /** QueryChannelResponse proof */
          proof?: Uint8Array | null;

          /** QueryChannelResponse proofHeight */
          proofHeight?: ibc.core.client.v1.IHeight | null;
        }

        /** Represents a QueryChannelResponse. */
        class QueryChannelResponse implements IQueryChannelResponse {
          /**
           * Constructs a new QueryChannelResponse.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryChannelResponse);

          /** QueryChannelResponse channel. */
          public channel?: ibc.core.channel.v1.IChannel | null;

          /** QueryChannelResponse proof. */
          public proof: Uint8Array;

          /** QueryChannelResponse proofHeight. */
          public proofHeight?: ibc.core.client.v1.IHeight | null;

          /**
           * Creates a new QueryChannelResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryChannelResponse instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryChannelResponse,
          ): ibc.core.channel.v1.QueryChannelResponse;

          /**
           * Encodes the specified QueryChannelResponse message. Does not implicitly {@link ibc.core.channel.v1.QueryChannelResponse.verify|verify} messages.
           * @param m QueryChannelResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryChannelResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryChannelResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryChannelResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryChannelResponse;
        }

        /** Properties of a QueryChannelsRequest. */
        interface IQueryChannelsRequest {
          /** QueryChannelsRequest pagination */
          pagination?: cosmos.base.query.v1beta1.IPageRequest | null;
        }

        /** Represents a QueryChannelsRequest. */
        class QueryChannelsRequest implements IQueryChannelsRequest {
          /**
           * Constructs a new QueryChannelsRequest.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryChannelsRequest);

          /** QueryChannelsRequest pagination. */
          public pagination?: cosmos.base.query.v1beta1.IPageRequest | null;

          /**
           * Creates a new QueryChannelsRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryChannelsRequest instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryChannelsRequest,
          ): ibc.core.channel.v1.QueryChannelsRequest;

          /**
           * Encodes the specified QueryChannelsRequest message. Does not implicitly {@link ibc.core.channel.v1.QueryChannelsRequest.verify|verify} messages.
           * @param m QueryChannelsRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryChannelsRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryChannelsRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryChannelsRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryChannelsRequest;
        }

        /** Properties of a QueryChannelsResponse. */
        interface IQueryChannelsResponse {
          /** QueryChannelsResponse channels */
          channels?: ibc.core.channel.v1.IIdentifiedChannel[] | null;

          /** QueryChannelsResponse pagination */
          pagination?: cosmos.base.query.v1beta1.IPageResponse | null;

          /** QueryChannelsResponse height */
          height?: ibc.core.client.v1.IHeight | null;
        }

        /** Represents a QueryChannelsResponse. */
        class QueryChannelsResponse implements IQueryChannelsResponse {
          /**
           * Constructs a new QueryChannelsResponse.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryChannelsResponse);

          /** QueryChannelsResponse channels. */
          public channels: ibc.core.channel.v1.IIdentifiedChannel[];

          /** QueryChannelsResponse pagination. */
          public pagination?: cosmos.base.query.v1beta1.IPageResponse | null;

          /** QueryChannelsResponse height. */
          public height?: ibc.core.client.v1.IHeight | null;

          /**
           * Creates a new QueryChannelsResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryChannelsResponse instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryChannelsResponse,
          ): ibc.core.channel.v1.QueryChannelsResponse;

          /**
           * Encodes the specified QueryChannelsResponse message. Does not implicitly {@link ibc.core.channel.v1.QueryChannelsResponse.verify|verify} messages.
           * @param m QueryChannelsResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryChannelsResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryChannelsResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryChannelsResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryChannelsResponse;
        }

        /** Properties of a QueryConnectionChannelsRequest. */
        interface IQueryConnectionChannelsRequest {
          /** QueryConnectionChannelsRequest connection */
          connection?: string | null;

          /** QueryConnectionChannelsRequest pagination */
          pagination?: cosmos.base.query.v1beta1.IPageRequest | null;
        }

        /** Represents a QueryConnectionChannelsRequest. */
        class QueryConnectionChannelsRequest implements IQueryConnectionChannelsRequest {
          /**
           * Constructs a new QueryConnectionChannelsRequest.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryConnectionChannelsRequest);

          /** QueryConnectionChannelsRequest connection. */
          public connection: string;

          /** QueryConnectionChannelsRequest pagination. */
          public pagination?: cosmos.base.query.v1beta1.IPageRequest | null;

          /**
           * Creates a new QueryConnectionChannelsRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryConnectionChannelsRequest instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryConnectionChannelsRequest,
          ): ibc.core.channel.v1.QueryConnectionChannelsRequest;

          /**
           * Encodes the specified QueryConnectionChannelsRequest message. Does not implicitly {@link ibc.core.channel.v1.QueryConnectionChannelsRequest.verify|verify} messages.
           * @param m QueryConnectionChannelsRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryConnectionChannelsRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryConnectionChannelsRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryConnectionChannelsRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryConnectionChannelsRequest;
        }

        /** Properties of a QueryConnectionChannelsResponse. */
        interface IQueryConnectionChannelsResponse {
          /** QueryConnectionChannelsResponse channels */
          channels?: ibc.core.channel.v1.IIdentifiedChannel[] | null;

          /** QueryConnectionChannelsResponse pagination */
          pagination?: cosmos.base.query.v1beta1.IPageResponse | null;

          /** QueryConnectionChannelsResponse height */
          height?: ibc.core.client.v1.IHeight | null;
        }

        /** Represents a QueryConnectionChannelsResponse. */
        class QueryConnectionChannelsResponse implements IQueryConnectionChannelsResponse {
          /**
           * Constructs a new QueryConnectionChannelsResponse.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryConnectionChannelsResponse);

          /** QueryConnectionChannelsResponse channels. */
          public channels: ibc.core.channel.v1.IIdentifiedChannel[];

          /** QueryConnectionChannelsResponse pagination. */
          public pagination?: cosmos.base.query.v1beta1.IPageResponse | null;

          /** QueryConnectionChannelsResponse height. */
          public height?: ibc.core.client.v1.IHeight | null;

          /**
           * Creates a new QueryConnectionChannelsResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryConnectionChannelsResponse instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryConnectionChannelsResponse,
          ): ibc.core.channel.v1.QueryConnectionChannelsResponse;

          /**
           * Encodes the specified QueryConnectionChannelsResponse message. Does not implicitly {@link ibc.core.channel.v1.QueryConnectionChannelsResponse.verify|verify} messages.
           * @param m QueryConnectionChannelsResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryConnectionChannelsResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryConnectionChannelsResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryConnectionChannelsResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryConnectionChannelsResponse;
        }

        /** Properties of a QueryChannelClientStateRequest. */
        interface IQueryChannelClientStateRequest {
          /** QueryChannelClientStateRequest portId */
          portId?: string | null;

          /** QueryChannelClientStateRequest channelId */
          channelId?: string | null;
        }

        /** Represents a QueryChannelClientStateRequest. */
        class QueryChannelClientStateRequest implements IQueryChannelClientStateRequest {
          /**
           * Constructs a new QueryChannelClientStateRequest.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryChannelClientStateRequest);

          /** QueryChannelClientStateRequest portId. */
          public portId: string;

          /** QueryChannelClientStateRequest channelId. */
          public channelId: string;

          /**
           * Creates a new QueryChannelClientStateRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryChannelClientStateRequest instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryChannelClientStateRequest,
          ): ibc.core.channel.v1.QueryChannelClientStateRequest;

          /**
           * Encodes the specified QueryChannelClientStateRequest message. Does not implicitly {@link ibc.core.channel.v1.QueryChannelClientStateRequest.verify|verify} messages.
           * @param m QueryChannelClientStateRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryChannelClientStateRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryChannelClientStateRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryChannelClientStateRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryChannelClientStateRequest;
        }

        /** Properties of a QueryChannelClientStateResponse. */
        interface IQueryChannelClientStateResponse {
          /** QueryChannelClientStateResponse identifiedClientState */
          identifiedClientState?: ibc.core.client.v1.IIdentifiedClientState | null;

          /** QueryChannelClientStateResponse proof */
          proof?: Uint8Array | null;

          /** QueryChannelClientStateResponse proofHeight */
          proofHeight?: ibc.core.client.v1.IHeight | null;
        }

        /** Represents a QueryChannelClientStateResponse. */
        class QueryChannelClientStateResponse implements IQueryChannelClientStateResponse {
          /**
           * Constructs a new QueryChannelClientStateResponse.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryChannelClientStateResponse);

          /** QueryChannelClientStateResponse identifiedClientState. */
          public identifiedClientState?: ibc.core.client.v1.IIdentifiedClientState | null;

          /** QueryChannelClientStateResponse proof. */
          public proof: Uint8Array;

          /** QueryChannelClientStateResponse proofHeight. */
          public proofHeight?: ibc.core.client.v1.IHeight | null;

          /**
           * Creates a new QueryChannelClientStateResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryChannelClientStateResponse instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryChannelClientStateResponse,
          ): ibc.core.channel.v1.QueryChannelClientStateResponse;

          /**
           * Encodes the specified QueryChannelClientStateResponse message. Does not implicitly {@link ibc.core.channel.v1.QueryChannelClientStateResponse.verify|verify} messages.
           * @param m QueryChannelClientStateResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryChannelClientStateResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryChannelClientStateResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryChannelClientStateResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryChannelClientStateResponse;
        }

        /** Properties of a QueryChannelConsensusStateRequest. */
        interface IQueryChannelConsensusStateRequest {
          /** QueryChannelConsensusStateRequest portId */
          portId?: string | null;

          /** QueryChannelConsensusStateRequest channelId */
          channelId?: string | null;

          /** QueryChannelConsensusStateRequest revisionNumber */
          revisionNumber?: Long | null;

          /** QueryChannelConsensusStateRequest revisionHeight */
          revisionHeight?: Long | null;
        }

        /** Represents a QueryChannelConsensusStateRequest. */
        class QueryChannelConsensusStateRequest implements IQueryChannelConsensusStateRequest {
          /**
           * Constructs a new QueryChannelConsensusStateRequest.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryChannelConsensusStateRequest);

          /** QueryChannelConsensusStateRequest portId. */
          public portId: string;

          /** QueryChannelConsensusStateRequest channelId. */
          public channelId: string;

          /** QueryChannelConsensusStateRequest revisionNumber. */
          public revisionNumber: Long;

          /** QueryChannelConsensusStateRequest revisionHeight. */
          public revisionHeight: Long;

          /**
           * Creates a new QueryChannelConsensusStateRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryChannelConsensusStateRequest instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryChannelConsensusStateRequest,
          ): ibc.core.channel.v1.QueryChannelConsensusStateRequest;

          /**
           * Encodes the specified QueryChannelConsensusStateRequest message. Does not implicitly {@link ibc.core.channel.v1.QueryChannelConsensusStateRequest.verify|verify} messages.
           * @param m QueryChannelConsensusStateRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryChannelConsensusStateRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryChannelConsensusStateRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryChannelConsensusStateRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryChannelConsensusStateRequest;
        }

        /** Properties of a QueryChannelConsensusStateResponse. */
        interface IQueryChannelConsensusStateResponse {
          /** QueryChannelConsensusStateResponse consensusState */
          consensusState?: google.protobuf.IAny | null;

          /** QueryChannelConsensusStateResponse clientId */
          clientId?: string | null;

          /** QueryChannelConsensusStateResponse proof */
          proof?: Uint8Array | null;

          /** QueryChannelConsensusStateResponse proofHeight */
          proofHeight?: ibc.core.client.v1.IHeight | null;
        }

        /** Represents a QueryChannelConsensusStateResponse. */
        class QueryChannelConsensusStateResponse implements IQueryChannelConsensusStateResponse {
          /**
           * Constructs a new QueryChannelConsensusStateResponse.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryChannelConsensusStateResponse);

          /** QueryChannelConsensusStateResponse consensusState. */
          public consensusState?: google.protobuf.IAny | null;

          /** QueryChannelConsensusStateResponse clientId. */
          public clientId: string;

          /** QueryChannelConsensusStateResponse proof. */
          public proof: Uint8Array;

          /** QueryChannelConsensusStateResponse proofHeight. */
          public proofHeight?: ibc.core.client.v1.IHeight | null;

          /**
           * Creates a new QueryChannelConsensusStateResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryChannelConsensusStateResponse instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryChannelConsensusStateResponse,
          ): ibc.core.channel.v1.QueryChannelConsensusStateResponse;

          /**
           * Encodes the specified QueryChannelConsensusStateResponse message. Does not implicitly {@link ibc.core.channel.v1.QueryChannelConsensusStateResponse.verify|verify} messages.
           * @param m QueryChannelConsensusStateResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryChannelConsensusStateResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryChannelConsensusStateResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryChannelConsensusStateResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryChannelConsensusStateResponse;
        }

        /** Properties of a QueryPacketCommitmentRequest. */
        interface IQueryPacketCommitmentRequest {
          /** QueryPacketCommitmentRequest portId */
          portId?: string | null;

          /** QueryPacketCommitmentRequest channelId */
          channelId?: string | null;

          /** QueryPacketCommitmentRequest sequence */
          sequence?: Long | null;
        }

        /** Represents a QueryPacketCommitmentRequest. */
        class QueryPacketCommitmentRequest implements IQueryPacketCommitmentRequest {
          /**
           * Constructs a new QueryPacketCommitmentRequest.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryPacketCommitmentRequest);

          /** QueryPacketCommitmentRequest portId. */
          public portId: string;

          /** QueryPacketCommitmentRequest channelId. */
          public channelId: string;

          /** QueryPacketCommitmentRequest sequence. */
          public sequence: Long;

          /**
           * Creates a new QueryPacketCommitmentRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryPacketCommitmentRequest instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryPacketCommitmentRequest,
          ): ibc.core.channel.v1.QueryPacketCommitmentRequest;

          /**
           * Encodes the specified QueryPacketCommitmentRequest message. Does not implicitly {@link ibc.core.channel.v1.QueryPacketCommitmentRequest.verify|verify} messages.
           * @param m QueryPacketCommitmentRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryPacketCommitmentRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryPacketCommitmentRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryPacketCommitmentRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryPacketCommitmentRequest;
        }

        /** Properties of a QueryPacketCommitmentResponse. */
        interface IQueryPacketCommitmentResponse {
          /** QueryPacketCommitmentResponse commitment */
          commitment?: Uint8Array | null;

          /** QueryPacketCommitmentResponse proof */
          proof?: Uint8Array | null;

          /** QueryPacketCommitmentResponse proofHeight */
          proofHeight?: ibc.core.client.v1.IHeight | null;
        }

        /** Represents a QueryPacketCommitmentResponse. */
        class QueryPacketCommitmentResponse implements IQueryPacketCommitmentResponse {
          /**
           * Constructs a new QueryPacketCommitmentResponse.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryPacketCommitmentResponse);

          /** QueryPacketCommitmentResponse commitment. */
          public commitment: Uint8Array;

          /** QueryPacketCommitmentResponse proof. */
          public proof: Uint8Array;

          /** QueryPacketCommitmentResponse proofHeight. */
          public proofHeight?: ibc.core.client.v1.IHeight | null;

          /**
           * Creates a new QueryPacketCommitmentResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryPacketCommitmentResponse instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryPacketCommitmentResponse,
          ): ibc.core.channel.v1.QueryPacketCommitmentResponse;

          /**
           * Encodes the specified QueryPacketCommitmentResponse message. Does not implicitly {@link ibc.core.channel.v1.QueryPacketCommitmentResponse.verify|verify} messages.
           * @param m QueryPacketCommitmentResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryPacketCommitmentResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryPacketCommitmentResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryPacketCommitmentResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryPacketCommitmentResponse;
        }

        /** Properties of a QueryPacketCommitmentsRequest. */
        interface IQueryPacketCommitmentsRequest {
          /** QueryPacketCommitmentsRequest portId */
          portId?: string | null;

          /** QueryPacketCommitmentsRequest channelId */
          channelId?: string | null;

          /** QueryPacketCommitmentsRequest pagination */
          pagination?: cosmos.base.query.v1beta1.IPageRequest | null;
        }

        /** Represents a QueryPacketCommitmentsRequest. */
        class QueryPacketCommitmentsRequest implements IQueryPacketCommitmentsRequest {
          /**
           * Constructs a new QueryPacketCommitmentsRequest.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryPacketCommitmentsRequest);

          /** QueryPacketCommitmentsRequest portId. */
          public portId: string;

          /** QueryPacketCommitmentsRequest channelId. */
          public channelId: string;

          /** QueryPacketCommitmentsRequest pagination. */
          public pagination?: cosmos.base.query.v1beta1.IPageRequest | null;

          /**
           * Creates a new QueryPacketCommitmentsRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryPacketCommitmentsRequest instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryPacketCommitmentsRequest,
          ): ibc.core.channel.v1.QueryPacketCommitmentsRequest;

          /**
           * Encodes the specified QueryPacketCommitmentsRequest message. Does not implicitly {@link ibc.core.channel.v1.QueryPacketCommitmentsRequest.verify|verify} messages.
           * @param m QueryPacketCommitmentsRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryPacketCommitmentsRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryPacketCommitmentsRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryPacketCommitmentsRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryPacketCommitmentsRequest;
        }

        /** Properties of a QueryPacketCommitmentsResponse. */
        interface IQueryPacketCommitmentsResponse {
          /** QueryPacketCommitmentsResponse commitments */
          commitments?: ibc.core.channel.v1.IPacketState[] | null;

          /** QueryPacketCommitmentsResponse pagination */
          pagination?: cosmos.base.query.v1beta1.IPageResponse | null;

          /** QueryPacketCommitmentsResponse height */
          height?: ibc.core.client.v1.IHeight | null;
        }

        /** Represents a QueryPacketCommitmentsResponse. */
        class QueryPacketCommitmentsResponse implements IQueryPacketCommitmentsResponse {
          /**
           * Constructs a new QueryPacketCommitmentsResponse.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryPacketCommitmentsResponse);

          /** QueryPacketCommitmentsResponse commitments. */
          public commitments: ibc.core.channel.v1.IPacketState[];

          /** QueryPacketCommitmentsResponse pagination. */
          public pagination?: cosmos.base.query.v1beta1.IPageResponse | null;

          /** QueryPacketCommitmentsResponse height. */
          public height?: ibc.core.client.v1.IHeight | null;

          /**
           * Creates a new QueryPacketCommitmentsResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryPacketCommitmentsResponse instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryPacketCommitmentsResponse,
          ): ibc.core.channel.v1.QueryPacketCommitmentsResponse;

          /**
           * Encodes the specified QueryPacketCommitmentsResponse message. Does not implicitly {@link ibc.core.channel.v1.QueryPacketCommitmentsResponse.verify|verify} messages.
           * @param m QueryPacketCommitmentsResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryPacketCommitmentsResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryPacketCommitmentsResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryPacketCommitmentsResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryPacketCommitmentsResponse;
        }

        /** Properties of a QueryPacketReceiptRequest. */
        interface IQueryPacketReceiptRequest {
          /** QueryPacketReceiptRequest portId */
          portId?: string | null;

          /** QueryPacketReceiptRequest channelId */
          channelId?: string | null;

          /** QueryPacketReceiptRequest sequence */
          sequence?: Long | null;
        }

        /** Represents a QueryPacketReceiptRequest. */
        class QueryPacketReceiptRequest implements IQueryPacketReceiptRequest {
          /**
           * Constructs a new QueryPacketReceiptRequest.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryPacketReceiptRequest);

          /** QueryPacketReceiptRequest portId. */
          public portId: string;

          /** QueryPacketReceiptRequest channelId. */
          public channelId: string;

          /** QueryPacketReceiptRequest sequence. */
          public sequence: Long;

          /**
           * Creates a new QueryPacketReceiptRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryPacketReceiptRequest instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryPacketReceiptRequest,
          ): ibc.core.channel.v1.QueryPacketReceiptRequest;

          /**
           * Encodes the specified QueryPacketReceiptRequest message. Does not implicitly {@link ibc.core.channel.v1.QueryPacketReceiptRequest.verify|verify} messages.
           * @param m QueryPacketReceiptRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryPacketReceiptRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryPacketReceiptRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryPacketReceiptRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryPacketReceiptRequest;
        }

        /** Properties of a QueryPacketReceiptResponse. */
        interface IQueryPacketReceiptResponse {
          /** QueryPacketReceiptResponse received */
          received?: boolean | null;

          /** QueryPacketReceiptResponse proof */
          proof?: Uint8Array | null;

          /** QueryPacketReceiptResponse proofHeight */
          proofHeight?: ibc.core.client.v1.IHeight | null;
        }

        /** Represents a QueryPacketReceiptResponse. */
        class QueryPacketReceiptResponse implements IQueryPacketReceiptResponse {
          /**
           * Constructs a new QueryPacketReceiptResponse.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryPacketReceiptResponse);

          /** QueryPacketReceiptResponse received. */
          public received: boolean;

          /** QueryPacketReceiptResponse proof. */
          public proof: Uint8Array;

          /** QueryPacketReceiptResponse proofHeight. */
          public proofHeight?: ibc.core.client.v1.IHeight | null;

          /**
           * Creates a new QueryPacketReceiptResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryPacketReceiptResponse instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryPacketReceiptResponse,
          ): ibc.core.channel.v1.QueryPacketReceiptResponse;

          /**
           * Encodes the specified QueryPacketReceiptResponse message. Does not implicitly {@link ibc.core.channel.v1.QueryPacketReceiptResponse.verify|verify} messages.
           * @param m QueryPacketReceiptResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryPacketReceiptResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryPacketReceiptResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryPacketReceiptResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryPacketReceiptResponse;
        }

        /** Properties of a QueryPacketAcknowledgementRequest. */
        interface IQueryPacketAcknowledgementRequest {
          /** QueryPacketAcknowledgementRequest portId */
          portId?: string | null;

          /** QueryPacketAcknowledgementRequest channelId */
          channelId?: string | null;

          /** QueryPacketAcknowledgementRequest sequence */
          sequence?: Long | null;
        }

        /** Represents a QueryPacketAcknowledgementRequest. */
        class QueryPacketAcknowledgementRequest implements IQueryPacketAcknowledgementRequest {
          /**
           * Constructs a new QueryPacketAcknowledgementRequest.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryPacketAcknowledgementRequest);

          /** QueryPacketAcknowledgementRequest portId. */
          public portId: string;

          /** QueryPacketAcknowledgementRequest channelId. */
          public channelId: string;

          /** QueryPacketAcknowledgementRequest sequence. */
          public sequence: Long;

          /**
           * Creates a new QueryPacketAcknowledgementRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryPacketAcknowledgementRequest instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryPacketAcknowledgementRequest,
          ): ibc.core.channel.v1.QueryPacketAcknowledgementRequest;

          /**
           * Encodes the specified QueryPacketAcknowledgementRequest message. Does not implicitly {@link ibc.core.channel.v1.QueryPacketAcknowledgementRequest.verify|verify} messages.
           * @param m QueryPacketAcknowledgementRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryPacketAcknowledgementRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryPacketAcknowledgementRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryPacketAcknowledgementRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryPacketAcknowledgementRequest;
        }

        /** Properties of a QueryPacketAcknowledgementResponse. */
        interface IQueryPacketAcknowledgementResponse {
          /** QueryPacketAcknowledgementResponse acknowledgement */
          acknowledgement?: Uint8Array | null;

          /** QueryPacketAcknowledgementResponse proof */
          proof?: Uint8Array | null;

          /** QueryPacketAcknowledgementResponse proofHeight */
          proofHeight?: ibc.core.client.v1.IHeight | null;
        }

        /** Represents a QueryPacketAcknowledgementResponse. */
        class QueryPacketAcknowledgementResponse implements IQueryPacketAcknowledgementResponse {
          /**
           * Constructs a new QueryPacketAcknowledgementResponse.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryPacketAcknowledgementResponse);

          /** QueryPacketAcknowledgementResponse acknowledgement. */
          public acknowledgement: Uint8Array;

          /** QueryPacketAcknowledgementResponse proof. */
          public proof: Uint8Array;

          /** QueryPacketAcknowledgementResponse proofHeight. */
          public proofHeight?: ibc.core.client.v1.IHeight | null;

          /**
           * Creates a new QueryPacketAcknowledgementResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryPacketAcknowledgementResponse instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryPacketAcknowledgementResponse,
          ): ibc.core.channel.v1.QueryPacketAcknowledgementResponse;

          /**
           * Encodes the specified QueryPacketAcknowledgementResponse message. Does not implicitly {@link ibc.core.channel.v1.QueryPacketAcknowledgementResponse.verify|verify} messages.
           * @param m QueryPacketAcknowledgementResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryPacketAcknowledgementResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryPacketAcknowledgementResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryPacketAcknowledgementResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryPacketAcknowledgementResponse;
        }

        /** Properties of a QueryPacketAcknowledgementsRequest. */
        interface IQueryPacketAcknowledgementsRequest {
          /** QueryPacketAcknowledgementsRequest portId */
          portId?: string | null;

          /** QueryPacketAcknowledgementsRequest channelId */
          channelId?: string | null;

          /** QueryPacketAcknowledgementsRequest pagination */
          pagination?: cosmos.base.query.v1beta1.IPageRequest | null;
        }

        /** Represents a QueryPacketAcknowledgementsRequest. */
        class QueryPacketAcknowledgementsRequest implements IQueryPacketAcknowledgementsRequest {
          /**
           * Constructs a new QueryPacketAcknowledgementsRequest.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryPacketAcknowledgementsRequest);

          /** QueryPacketAcknowledgementsRequest portId. */
          public portId: string;

          /** QueryPacketAcknowledgementsRequest channelId. */
          public channelId: string;

          /** QueryPacketAcknowledgementsRequest pagination. */
          public pagination?: cosmos.base.query.v1beta1.IPageRequest | null;

          /**
           * Creates a new QueryPacketAcknowledgementsRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryPacketAcknowledgementsRequest instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryPacketAcknowledgementsRequest,
          ): ibc.core.channel.v1.QueryPacketAcknowledgementsRequest;

          /**
           * Encodes the specified QueryPacketAcknowledgementsRequest message. Does not implicitly {@link ibc.core.channel.v1.QueryPacketAcknowledgementsRequest.verify|verify} messages.
           * @param m QueryPacketAcknowledgementsRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryPacketAcknowledgementsRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryPacketAcknowledgementsRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryPacketAcknowledgementsRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryPacketAcknowledgementsRequest;
        }

        /** Properties of a QueryPacketAcknowledgementsResponse. */
        interface IQueryPacketAcknowledgementsResponse {
          /** QueryPacketAcknowledgementsResponse acknowledgements */
          acknowledgements?: ibc.core.channel.v1.IPacketState[] | null;

          /** QueryPacketAcknowledgementsResponse pagination */
          pagination?: cosmos.base.query.v1beta1.IPageResponse | null;

          /** QueryPacketAcknowledgementsResponse height */
          height?: ibc.core.client.v1.IHeight | null;
        }

        /** Represents a QueryPacketAcknowledgementsResponse. */
        class QueryPacketAcknowledgementsResponse implements IQueryPacketAcknowledgementsResponse {
          /**
           * Constructs a new QueryPacketAcknowledgementsResponse.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryPacketAcknowledgementsResponse);

          /** QueryPacketAcknowledgementsResponse acknowledgements. */
          public acknowledgements: ibc.core.channel.v1.IPacketState[];

          /** QueryPacketAcknowledgementsResponse pagination. */
          public pagination?: cosmos.base.query.v1beta1.IPageResponse | null;

          /** QueryPacketAcknowledgementsResponse height. */
          public height?: ibc.core.client.v1.IHeight | null;

          /**
           * Creates a new QueryPacketAcknowledgementsResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryPacketAcknowledgementsResponse instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryPacketAcknowledgementsResponse,
          ): ibc.core.channel.v1.QueryPacketAcknowledgementsResponse;

          /**
           * Encodes the specified QueryPacketAcknowledgementsResponse message. Does not implicitly {@link ibc.core.channel.v1.QueryPacketAcknowledgementsResponse.verify|verify} messages.
           * @param m QueryPacketAcknowledgementsResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryPacketAcknowledgementsResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryPacketAcknowledgementsResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryPacketAcknowledgementsResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryPacketAcknowledgementsResponse;
        }

        /** Properties of a QueryUnreceivedPacketsRequest. */
        interface IQueryUnreceivedPacketsRequest {
          /** QueryUnreceivedPacketsRequest portId */
          portId?: string | null;

          /** QueryUnreceivedPacketsRequest channelId */
          channelId?: string | null;

          /** QueryUnreceivedPacketsRequest packetCommitmentSequences */
          packetCommitmentSequences?: Long[] | null;
        }

        /** Represents a QueryUnreceivedPacketsRequest. */
        class QueryUnreceivedPacketsRequest implements IQueryUnreceivedPacketsRequest {
          /**
           * Constructs a new QueryUnreceivedPacketsRequest.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryUnreceivedPacketsRequest);

          /** QueryUnreceivedPacketsRequest portId. */
          public portId: string;

          /** QueryUnreceivedPacketsRequest channelId. */
          public channelId: string;

          /** QueryUnreceivedPacketsRequest packetCommitmentSequences. */
          public packetCommitmentSequences: Long[];

          /**
           * Creates a new QueryUnreceivedPacketsRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryUnreceivedPacketsRequest instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryUnreceivedPacketsRequest,
          ): ibc.core.channel.v1.QueryUnreceivedPacketsRequest;

          /**
           * Encodes the specified QueryUnreceivedPacketsRequest message. Does not implicitly {@link ibc.core.channel.v1.QueryUnreceivedPacketsRequest.verify|verify} messages.
           * @param m QueryUnreceivedPacketsRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryUnreceivedPacketsRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryUnreceivedPacketsRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryUnreceivedPacketsRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryUnreceivedPacketsRequest;
        }

        /** Properties of a QueryUnreceivedPacketsResponse. */
        interface IQueryUnreceivedPacketsResponse {
          /** QueryUnreceivedPacketsResponse sequences */
          sequences?: Long[] | null;

          /** QueryUnreceivedPacketsResponse height */
          height?: ibc.core.client.v1.IHeight | null;
        }

        /** Represents a QueryUnreceivedPacketsResponse. */
        class QueryUnreceivedPacketsResponse implements IQueryUnreceivedPacketsResponse {
          /**
           * Constructs a new QueryUnreceivedPacketsResponse.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryUnreceivedPacketsResponse);

          /** QueryUnreceivedPacketsResponse sequences. */
          public sequences: Long[];

          /** QueryUnreceivedPacketsResponse height. */
          public height?: ibc.core.client.v1.IHeight | null;

          /**
           * Creates a new QueryUnreceivedPacketsResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryUnreceivedPacketsResponse instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryUnreceivedPacketsResponse,
          ): ibc.core.channel.v1.QueryUnreceivedPacketsResponse;

          /**
           * Encodes the specified QueryUnreceivedPacketsResponse message. Does not implicitly {@link ibc.core.channel.v1.QueryUnreceivedPacketsResponse.verify|verify} messages.
           * @param m QueryUnreceivedPacketsResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryUnreceivedPacketsResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryUnreceivedPacketsResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryUnreceivedPacketsResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryUnreceivedPacketsResponse;
        }

        /** Properties of a QueryUnreceivedAcksRequest. */
        interface IQueryUnreceivedAcksRequest {
          /** QueryUnreceivedAcksRequest portId */
          portId?: string | null;

          /** QueryUnreceivedAcksRequest channelId */
          channelId?: string | null;

          /** QueryUnreceivedAcksRequest packetAckSequences */
          packetAckSequences?: Long[] | null;
        }

        /** Represents a QueryUnreceivedAcksRequest. */
        class QueryUnreceivedAcksRequest implements IQueryUnreceivedAcksRequest {
          /**
           * Constructs a new QueryUnreceivedAcksRequest.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryUnreceivedAcksRequest);

          /** QueryUnreceivedAcksRequest portId. */
          public portId: string;

          /** QueryUnreceivedAcksRequest channelId. */
          public channelId: string;

          /** QueryUnreceivedAcksRequest packetAckSequences. */
          public packetAckSequences: Long[];

          /**
           * Creates a new QueryUnreceivedAcksRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryUnreceivedAcksRequest instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryUnreceivedAcksRequest,
          ): ibc.core.channel.v1.QueryUnreceivedAcksRequest;

          /**
           * Encodes the specified QueryUnreceivedAcksRequest message. Does not implicitly {@link ibc.core.channel.v1.QueryUnreceivedAcksRequest.verify|verify} messages.
           * @param m QueryUnreceivedAcksRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryUnreceivedAcksRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryUnreceivedAcksRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryUnreceivedAcksRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryUnreceivedAcksRequest;
        }

        /** Properties of a QueryUnreceivedAcksResponse. */
        interface IQueryUnreceivedAcksResponse {
          /** QueryUnreceivedAcksResponse sequences */
          sequences?: Long[] | null;

          /** QueryUnreceivedAcksResponse height */
          height?: ibc.core.client.v1.IHeight | null;
        }

        /** Represents a QueryUnreceivedAcksResponse. */
        class QueryUnreceivedAcksResponse implements IQueryUnreceivedAcksResponse {
          /**
           * Constructs a new QueryUnreceivedAcksResponse.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryUnreceivedAcksResponse);

          /** QueryUnreceivedAcksResponse sequences. */
          public sequences: Long[];

          /** QueryUnreceivedAcksResponse height. */
          public height?: ibc.core.client.v1.IHeight | null;

          /**
           * Creates a new QueryUnreceivedAcksResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryUnreceivedAcksResponse instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryUnreceivedAcksResponse,
          ): ibc.core.channel.v1.QueryUnreceivedAcksResponse;

          /**
           * Encodes the specified QueryUnreceivedAcksResponse message. Does not implicitly {@link ibc.core.channel.v1.QueryUnreceivedAcksResponse.verify|verify} messages.
           * @param m QueryUnreceivedAcksResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryUnreceivedAcksResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryUnreceivedAcksResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryUnreceivedAcksResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryUnreceivedAcksResponse;
        }

        /** Properties of a QueryNextSequenceReceiveRequest. */
        interface IQueryNextSequenceReceiveRequest {
          /** QueryNextSequenceReceiveRequest portId */
          portId?: string | null;

          /** QueryNextSequenceReceiveRequest channelId */
          channelId?: string | null;
        }

        /** Represents a QueryNextSequenceReceiveRequest. */
        class QueryNextSequenceReceiveRequest implements IQueryNextSequenceReceiveRequest {
          /**
           * Constructs a new QueryNextSequenceReceiveRequest.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryNextSequenceReceiveRequest);

          /** QueryNextSequenceReceiveRequest portId. */
          public portId: string;

          /** QueryNextSequenceReceiveRequest channelId. */
          public channelId: string;

          /**
           * Creates a new QueryNextSequenceReceiveRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryNextSequenceReceiveRequest instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryNextSequenceReceiveRequest,
          ): ibc.core.channel.v1.QueryNextSequenceReceiveRequest;

          /**
           * Encodes the specified QueryNextSequenceReceiveRequest message. Does not implicitly {@link ibc.core.channel.v1.QueryNextSequenceReceiveRequest.verify|verify} messages.
           * @param m QueryNextSequenceReceiveRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryNextSequenceReceiveRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryNextSequenceReceiveRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryNextSequenceReceiveRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryNextSequenceReceiveRequest;
        }

        /** Properties of a QueryNextSequenceReceiveResponse. */
        interface IQueryNextSequenceReceiveResponse {
          /** QueryNextSequenceReceiveResponse nextSequenceReceive */
          nextSequenceReceive?: Long | null;

          /** QueryNextSequenceReceiveResponse proof */
          proof?: Uint8Array | null;

          /** QueryNextSequenceReceiveResponse proofHeight */
          proofHeight?: ibc.core.client.v1.IHeight | null;
        }

        /** Represents a QueryNextSequenceReceiveResponse. */
        class QueryNextSequenceReceiveResponse implements IQueryNextSequenceReceiveResponse {
          /**
           * Constructs a new QueryNextSequenceReceiveResponse.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.channel.v1.IQueryNextSequenceReceiveResponse);

          /** QueryNextSequenceReceiveResponse nextSequenceReceive. */
          public nextSequenceReceive: Long;

          /** QueryNextSequenceReceiveResponse proof. */
          public proof: Uint8Array;

          /** QueryNextSequenceReceiveResponse proofHeight. */
          public proofHeight?: ibc.core.client.v1.IHeight | null;

          /**
           * Creates a new QueryNextSequenceReceiveResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryNextSequenceReceiveResponse instance
           */
          public static create(
            properties?: ibc.core.channel.v1.IQueryNextSequenceReceiveResponse,
          ): ibc.core.channel.v1.QueryNextSequenceReceiveResponse;

          /**
           * Encodes the specified QueryNextSequenceReceiveResponse message. Does not implicitly {@link ibc.core.channel.v1.QueryNextSequenceReceiveResponse.verify|verify} messages.
           * @param m QueryNextSequenceReceiveResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.channel.v1.IQueryNextSequenceReceiveResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryNextSequenceReceiveResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryNextSequenceReceiveResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.channel.v1.QueryNextSequenceReceiveResponse;
        }
      }
    }

    /** Namespace client. */
    namespace client {
      /** Namespace v1. */
      namespace v1 {
        /** Properties of an IdentifiedClientState. */
        interface IIdentifiedClientState {
          /** IdentifiedClientState clientId */
          clientId?: string | null;

          /** IdentifiedClientState clientState */
          clientState?: google.protobuf.IAny | null;
        }

        /** Represents an IdentifiedClientState. */
        class IdentifiedClientState implements IIdentifiedClientState {
          /**
           * Constructs a new IdentifiedClientState.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.client.v1.IIdentifiedClientState);

          /** IdentifiedClientState clientId. */
          public clientId: string;

          /** IdentifiedClientState clientState. */
          public clientState?: google.protobuf.IAny | null;

          /**
           * Creates a new IdentifiedClientState instance using the specified properties.
           * @param [properties] Properties to set
           * @returns IdentifiedClientState instance
           */
          public static create(
            properties?: ibc.core.client.v1.IIdentifiedClientState,
          ): ibc.core.client.v1.IdentifiedClientState;

          /**
           * Encodes the specified IdentifiedClientState message. Does not implicitly {@link ibc.core.client.v1.IdentifiedClientState.verify|verify} messages.
           * @param m IdentifiedClientState message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.client.v1.IIdentifiedClientState,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes an IdentifiedClientState message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns IdentifiedClientState
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.client.v1.IdentifiedClientState;
        }

        /** Properties of a ConsensusStateWithHeight. */
        interface IConsensusStateWithHeight {
          /** ConsensusStateWithHeight height */
          height?: ibc.core.client.v1.IHeight | null;

          /** ConsensusStateWithHeight consensusState */
          consensusState?: google.protobuf.IAny | null;
        }

        /** Represents a ConsensusStateWithHeight. */
        class ConsensusStateWithHeight implements IConsensusStateWithHeight {
          /**
           * Constructs a new ConsensusStateWithHeight.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.client.v1.IConsensusStateWithHeight);

          /** ConsensusStateWithHeight height. */
          public height?: ibc.core.client.v1.IHeight | null;

          /** ConsensusStateWithHeight consensusState. */
          public consensusState?: google.protobuf.IAny | null;

          /**
           * Creates a new ConsensusStateWithHeight instance using the specified properties.
           * @param [properties] Properties to set
           * @returns ConsensusStateWithHeight instance
           */
          public static create(
            properties?: ibc.core.client.v1.IConsensusStateWithHeight,
          ): ibc.core.client.v1.ConsensusStateWithHeight;

          /**
           * Encodes the specified ConsensusStateWithHeight message. Does not implicitly {@link ibc.core.client.v1.ConsensusStateWithHeight.verify|verify} messages.
           * @param m ConsensusStateWithHeight message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.client.v1.IConsensusStateWithHeight,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a ConsensusStateWithHeight message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns ConsensusStateWithHeight
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.client.v1.ConsensusStateWithHeight;
        }

        /** Properties of a ClientConsensusStates. */
        interface IClientConsensusStates {
          /** ClientConsensusStates clientId */
          clientId?: string | null;

          /** ClientConsensusStates consensusStates */
          consensusStates?: ibc.core.client.v1.IConsensusStateWithHeight[] | null;
        }

        /** Represents a ClientConsensusStates. */
        class ClientConsensusStates implements IClientConsensusStates {
          /**
           * Constructs a new ClientConsensusStates.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.client.v1.IClientConsensusStates);

          /** ClientConsensusStates clientId. */
          public clientId: string;

          /** ClientConsensusStates consensusStates. */
          public consensusStates: ibc.core.client.v1.IConsensusStateWithHeight[];

          /**
           * Creates a new ClientConsensusStates instance using the specified properties.
           * @param [properties] Properties to set
           * @returns ClientConsensusStates instance
           */
          public static create(
            properties?: ibc.core.client.v1.IClientConsensusStates,
          ): ibc.core.client.v1.ClientConsensusStates;

          /**
           * Encodes the specified ClientConsensusStates message. Does not implicitly {@link ibc.core.client.v1.ClientConsensusStates.verify|verify} messages.
           * @param m ClientConsensusStates message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.client.v1.IClientConsensusStates,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a ClientConsensusStates message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns ClientConsensusStates
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.client.v1.ClientConsensusStates;
        }

        /** Properties of a ClientUpdateProposal. */
        interface IClientUpdateProposal {
          /** ClientUpdateProposal title */
          title?: string | null;

          /** ClientUpdateProposal description */
          description?: string | null;

          /** ClientUpdateProposal clientId */
          clientId?: string | null;

          /** ClientUpdateProposal header */
          header?: google.protobuf.IAny | null;
        }

        /** Represents a ClientUpdateProposal. */
        class ClientUpdateProposal implements IClientUpdateProposal {
          /**
           * Constructs a new ClientUpdateProposal.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.client.v1.IClientUpdateProposal);

          /** ClientUpdateProposal title. */
          public title: string;

          /** ClientUpdateProposal description. */
          public description: string;

          /** ClientUpdateProposal clientId. */
          public clientId: string;

          /** ClientUpdateProposal header. */
          public header?: google.protobuf.IAny | null;

          /**
           * Creates a new ClientUpdateProposal instance using the specified properties.
           * @param [properties] Properties to set
           * @returns ClientUpdateProposal instance
           */
          public static create(
            properties?: ibc.core.client.v1.IClientUpdateProposal,
          ): ibc.core.client.v1.ClientUpdateProposal;

          /**
           * Encodes the specified ClientUpdateProposal message. Does not implicitly {@link ibc.core.client.v1.ClientUpdateProposal.verify|verify} messages.
           * @param m ClientUpdateProposal message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.client.v1.IClientUpdateProposal,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a ClientUpdateProposal message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns ClientUpdateProposal
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.client.v1.ClientUpdateProposal;
        }

        /** Properties of an Height. */
        interface IHeight {
          /** Height revisionNumber */
          revisionNumber?: Long | null;

          /** Height revisionHeight */
          revisionHeight?: Long | null;
        }

        /** Represents an Height. */
        class Height implements IHeight {
          /**
           * Constructs a new Height.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.client.v1.IHeight);

          /** Height revisionNumber. */
          public revisionNumber: Long;

          /** Height revisionHeight. */
          public revisionHeight: Long;

          /**
           * Creates a new Height instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Height instance
           */
          public static create(properties?: ibc.core.client.v1.IHeight): ibc.core.client.v1.Height;

          /**
           * Encodes the specified Height message. Does not implicitly {@link ibc.core.client.v1.Height.verify|verify} messages.
           * @param m Height message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(m: ibc.core.client.v1.IHeight, w?: $protobuf.Writer): $protobuf.Writer;

          /**
           * Decodes an Height message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns Height
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ibc.core.client.v1.Height;
        }

        /** Properties of a Params. */
        interface IParams {
          /** Params allowedClients */
          allowedClients?: string[] | null;
        }

        /** Represents a Params. */
        class Params implements IParams {
          /**
           * Constructs a new Params.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.client.v1.IParams);

          /** Params allowedClients. */
          public allowedClients: string[];

          /**
           * Creates a new Params instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Params instance
           */
          public static create(properties?: ibc.core.client.v1.IParams): ibc.core.client.v1.Params;

          /**
           * Encodes the specified Params message. Does not implicitly {@link ibc.core.client.v1.Params.verify|verify} messages.
           * @param m Params message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(m: ibc.core.client.v1.IParams, w?: $protobuf.Writer): $protobuf.Writer;

          /**
           * Decodes a Params message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns Params
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ibc.core.client.v1.Params;
        }
      }
    }

    /** Namespace commitment. */
    namespace commitment {
      /** Namespace v1. */
      namespace v1 {
        /** Properties of a MerkleRoot. */
        interface IMerkleRoot {
          /** MerkleRoot hash */
          hash?: Uint8Array | null;
        }

        /** Represents a MerkleRoot. */
        class MerkleRoot implements IMerkleRoot {
          /**
           * Constructs a new MerkleRoot.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.commitment.v1.IMerkleRoot);

          /** MerkleRoot hash. */
          public hash: Uint8Array;

          /**
           * Creates a new MerkleRoot instance using the specified properties.
           * @param [properties] Properties to set
           * @returns MerkleRoot instance
           */
          public static create(
            properties?: ibc.core.commitment.v1.IMerkleRoot,
          ): ibc.core.commitment.v1.MerkleRoot;

          /**
           * Encodes the specified MerkleRoot message. Does not implicitly {@link ibc.core.commitment.v1.MerkleRoot.verify|verify} messages.
           * @param m MerkleRoot message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(m: ibc.core.commitment.v1.IMerkleRoot, w?: $protobuf.Writer): $protobuf.Writer;

          /**
           * Decodes a MerkleRoot message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns MerkleRoot
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.commitment.v1.MerkleRoot;
        }

        /** Properties of a MerklePrefix. */
        interface IMerklePrefix {
          /** MerklePrefix keyPrefix */
          keyPrefix?: Uint8Array | null;
        }

        /** Represents a MerklePrefix. */
        class MerklePrefix implements IMerklePrefix {
          /**
           * Constructs a new MerklePrefix.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.commitment.v1.IMerklePrefix);

          /** MerklePrefix keyPrefix. */
          public keyPrefix: Uint8Array;

          /**
           * Creates a new MerklePrefix instance using the specified properties.
           * @param [properties] Properties to set
           * @returns MerklePrefix instance
           */
          public static create(
            properties?: ibc.core.commitment.v1.IMerklePrefix,
          ): ibc.core.commitment.v1.MerklePrefix;

          /**
           * Encodes the specified MerklePrefix message. Does not implicitly {@link ibc.core.commitment.v1.MerklePrefix.verify|verify} messages.
           * @param m MerklePrefix message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.commitment.v1.IMerklePrefix,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a MerklePrefix message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns MerklePrefix
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.commitment.v1.MerklePrefix;
        }

        /** Properties of a MerklePath. */
        interface IMerklePath {
          /** MerklePath keyPath */
          keyPath?: string[] | null;
        }

        /** Represents a MerklePath. */
        class MerklePath implements IMerklePath {
          /**
           * Constructs a new MerklePath.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.commitment.v1.IMerklePath);

          /** MerklePath keyPath. */
          public keyPath: string[];

          /**
           * Creates a new MerklePath instance using the specified properties.
           * @param [properties] Properties to set
           * @returns MerklePath instance
           */
          public static create(
            properties?: ibc.core.commitment.v1.IMerklePath,
          ): ibc.core.commitment.v1.MerklePath;

          /**
           * Encodes the specified MerklePath message. Does not implicitly {@link ibc.core.commitment.v1.MerklePath.verify|verify} messages.
           * @param m MerklePath message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(m: ibc.core.commitment.v1.IMerklePath, w?: $protobuf.Writer): $protobuf.Writer;

          /**
           * Decodes a MerklePath message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns MerklePath
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.commitment.v1.MerklePath;
        }

        /** Properties of a MerkleProof. */
        interface IMerkleProof {
          /** MerkleProof proofs */
          proofs?: ics23.ICommitmentProof[] | null;
        }

        /** Represents a MerkleProof. */
        class MerkleProof implements IMerkleProof {
          /**
           * Constructs a new MerkleProof.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.commitment.v1.IMerkleProof);

          /** MerkleProof proofs. */
          public proofs: ics23.ICommitmentProof[];

          /**
           * Creates a new MerkleProof instance using the specified properties.
           * @param [properties] Properties to set
           * @returns MerkleProof instance
           */
          public static create(
            properties?: ibc.core.commitment.v1.IMerkleProof,
          ): ibc.core.commitment.v1.MerkleProof;

          /**
           * Encodes the specified MerkleProof message. Does not implicitly {@link ibc.core.commitment.v1.MerkleProof.verify|verify} messages.
           * @param m MerkleProof message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.commitment.v1.IMerkleProof,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a MerkleProof message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns MerkleProof
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.commitment.v1.MerkleProof;
        }
      }
    }

    /** Namespace connection. */
    namespace connection {
      /** Namespace v1. */
      namespace v1 {
        /** Properties of a ConnectionEnd. */
        interface IConnectionEnd {
          /** ConnectionEnd clientId */
          clientId?: string | null;

          /** ConnectionEnd versions */
          versions?: ibc.core.connection.v1.IVersion[] | null;

          /** ConnectionEnd state */
          state?: ibc.core.connection.v1.State | null;

          /** ConnectionEnd counterparty */
          counterparty?: ibc.core.connection.v1.ICounterparty | null;

          /** ConnectionEnd delayPeriod */
          delayPeriod?: Long | null;
        }

        /** Represents a ConnectionEnd. */
        class ConnectionEnd implements IConnectionEnd {
          /**
           * Constructs a new ConnectionEnd.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.connection.v1.IConnectionEnd);

          /** ConnectionEnd clientId. */
          public clientId: string;

          /** ConnectionEnd versions. */
          public versions: ibc.core.connection.v1.IVersion[];

          /** ConnectionEnd state. */
          public state: ibc.core.connection.v1.State;

          /** ConnectionEnd counterparty. */
          public counterparty?: ibc.core.connection.v1.ICounterparty | null;

          /** ConnectionEnd delayPeriod. */
          public delayPeriod: Long;

          /**
           * Creates a new ConnectionEnd instance using the specified properties.
           * @param [properties] Properties to set
           * @returns ConnectionEnd instance
           */
          public static create(
            properties?: ibc.core.connection.v1.IConnectionEnd,
          ): ibc.core.connection.v1.ConnectionEnd;

          /**
           * Encodes the specified ConnectionEnd message. Does not implicitly {@link ibc.core.connection.v1.ConnectionEnd.verify|verify} messages.
           * @param m ConnectionEnd message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.connection.v1.IConnectionEnd,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a ConnectionEnd message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns ConnectionEnd
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.connection.v1.ConnectionEnd;
        }

        /** Properties of an IdentifiedConnection. */
        interface IIdentifiedConnection {
          /** IdentifiedConnection id */
          id?: string | null;

          /** IdentifiedConnection clientId */
          clientId?: string | null;

          /** IdentifiedConnection versions */
          versions?: ibc.core.connection.v1.IVersion[] | null;

          /** IdentifiedConnection state */
          state?: ibc.core.connection.v1.State | null;

          /** IdentifiedConnection counterparty */
          counterparty?: ibc.core.connection.v1.ICounterparty | null;

          /** IdentifiedConnection delayPeriod */
          delayPeriod?: Long | null;
        }

        /** Represents an IdentifiedConnection. */
        class IdentifiedConnection implements IIdentifiedConnection {
          /**
           * Constructs a new IdentifiedConnection.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.connection.v1.IIdentifiedConnection);

          /** IdentifiedConnection id. */
          public id: string;

          /** IdentifiedConnection clientId. */
          public clientId: string;

          /** IdentifiedConnection versions. */
          public versions: ibc.core.connection.v1.IVersion[];

          /** IdentifiedConnection state. */
          public state: ibc.core.connection.v1.State;

          /** IdentifiedConnection counterparty. */
          public counterparty?: ibc.core.connection.v1.ICounterparty | null;

          /** IdentifiedConnection delayPeriod. */
          public delayPeriod: Long;

          /**
           * Creates a new IdentifiedConnection instance using the specified properties.
           * @param [properties] Properties to set
           * @returns IdentifiedConnection instance
           */
          public static create(
            properties?: ibc.core.connection.v1.IIdentifiedConnection,
          ): ibc.core.connection.v1.IdentifiedConnection;

          /**
           * Encodes the specified IdentifiedConnection message. Does not implicitly {@link ibc.core.connection.v1.IdentifiedConnection.verify|verify} messages.
           * @param m IdentifiedConnection message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.connection.v1.IIdentifiedConnection,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes an IdentifiedConnection message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns IdentifiedConnection
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.connection.v1.IdentifiedConnection;
        }

        /** State enum. */
        enum State {
          STATE_UNINITIALIZED_UNSPECIFIED = 0,
          STATE_INIT = 1,
          STATE_TRYOPEN = 2,
          STATE_OPEN = 3,
        }

        /** Properties of a Counterparty. */
        interface ICounterparty {
          /** Counterparty clientId */
          clientId?: string | null;

          /** Counterparty connectionId */
          connectionId?: string | null;

          /** Counterparty prefix */
          prefix?: ibc.core.commitment.v1.IMerklePrefix | null;
        }

        /** Represents a Counterparty. */
        class Counterparty implements ICounterparty {
          /**
           * Constructs a new Counterparty.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.connection.v1.ICounterparty);

          /** Counterparty clientId. */
          public clientId: string;

          /** Counterparty connectionId. */
          public connectionId: string;

          /** Counterparty prefix. */
          public prefix?: ibc.core.commitment.v1.IMerklePrefix | null;

          /**
           * Creates a new Counterparty instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Counterparty instance
           */
          public static create(
            properties?: ibc.core.connection.v1.ICounterparty,
          ): ibc.core.connection.v1.Counterparty;

          /**
           * Encodes the specified Counterparty message. Does not implicitly {@link ibc.core.connection.v1.Counterparty.verify|verify} messages.
           * @param m Counterparty message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.connection.v1.ICounterparty,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a Counterparty message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns Counterparty
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.connection.v1.Counterparty;
        }

        /** Properties of a ClientPaths. */
        interface IClientPaths {
          /** ClientPaths paths */
          paths?: string[] | null;
        }

        /** Represents a ClientPaths. */
        class ClientPaths implements IClientPaths {
          /**
           * Constructs a new ClientPaths.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.connection.v1.IClientPaths);

          /** ClientPaths paths. */
          public paths: string[];

          /**
           * Creates a new ClientPaths instance using the specified properties.
           * @param [properties] Properties to set
           * @returns ClientPaths instance
           */
          public static create(
            properties?: ibc.core.connection.v1.IClientPaths,
          ): ibc.core.connection.v1.ClientPaths;

          /**
           * Encodes the specified ClientPaths message. Does not implicitly {@link ibc.core.connection.v1.ClientPaths.verify|verify} messages.
           * @param m ClientPaths message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.connection.v1.IClientPaths,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a ClientPaths message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns ClientPaths
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.connection.v1.ClientPaths;
        }

        /** Properties of a ConnectionPaths. */
        interface IConnectionPaths {
          /** ConnectionPaths clientId */
          clientId?: string | null;

          /** ConnectionPaths paths */
          paths?: string[] | null;
        }

        /** Represents a ConnectionPaths. */
        class ConnectionPaths implements IConnectionPaths {
          /**
           * Constructs a new ConnectionPaths.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.connection.v1.IConnectionPaths);

          /** ConnectionPaths clientId. */
          public clientId: string;

          /** ConnectionPaths paths. */
          public paths: string[];

          /**
           * Creates a new ConnectionPaths instance using the specified properties.
           * @param [properties] Properties to set
           * @returns ConnectionPaths instance
           */
          public static create(
            properties?: ibc.core.connection.v1.IConnectionPaths,
          ): ibc.core.connection.v1.ConnectionPaths;

          /**
           * Encodes the specified ConnectionPaths message. Does not implicitly {@link ibc.core.connection.v1.ConnectionPaths.verify|verify} messages.
           * @param m ConnectionPaths message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.connection.v1.IConnectionPaths,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a ConnectionPaths message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns ConnectionPaths
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.connection.v1.ConnectionPaths;
        }

        /** Properties of a Version. */
        interface IVersion {
          /** Version identifier */
          identifier?: string | null;

          /** Version features */
          features?: string[] | null;
        }

        /** Represents a Version. */
        class Version implements IVersion {
          /**
           * Constructs a new Version.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.connection.v1.IVersion);

          /** Version identifier. */
          public identifier: string;

          /** Version features. */
          public features: string[];

          /**
           * Creates a new Version instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Version instance
           */
          public static create(properties?: ibc.core.connection.v1.IVersion): ibc.core.connection.v1.Version;

          /**
           * Encodes the specified Version message. Does not implicitly {@link ibc.core.connection.v1.Version.verify|verify} messages.
           * @param m Version message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(m: ibc.core.connection.v1.IVersion, w?: $protobuf.Writer): $protobuf.Writer;

          /**
           * Decodes a Version message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns Version
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ibc.core.connection.v1.Version;
        }

        /** Represents a Query */
        class Query extends $protobuf.rpc.Service {
          /**
           * Constructs a new Query service.
           * @param rpcImpl RPC implementation
           * @param [requestDelimited=false] Whether requests are length-delimited
           * @param [responseDelimited=false] Whether responses are length-delimited
           */
          constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

          /**
           * Creates new Query service using the specified rpc implementation.
           * @param rpcImpl RPC implementation
           * @param [requestDelimited=false] Whether requests are length-delimited
           * @param [responseDelimited=false] Whether responses are length-delimited
           * @returns RPC service. Useful where requests and/or responses are streamed.
           */
          public static create(
            rpcImpl: $protobuf.RPCImpl,
            requestDelimited?: boolean,
            responseDelimited?: boolean,
          ): Query;

          /**
           * Calls Connection.
           * @param request QueryConnectionRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryConnectionResponse
           */
          public connection(
            request: ibc.core.connection.v1.IQueryConnectionRequest,
            callback: ibc.core.connection.v1.Query.ConnectionCallback,
          ): void;

          /**
           * Calls Connection.
           * @param request QueryConnectionRequest message or plain object
           * @returns Promise
           */
          public connection(
            request: ibc.core.connection.v1.IQueryConnectionRequest,
          ): Promise<ibc.core.connection.v1.QueryConnectionResponse>;

          /**
           * Calls Connections.
           * @param request QueryConnectionsRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryConnectionsResponse
           */
          public connections(
            request: ibc.core.connection.v1.IQueryConnectionsRequest,
            callback: ibc.core.connection.v1.Query.ConnectionsCallback,
          ): void;

          /**
           * Calls Connections.
           * @param request QueryConnectionsRequest message or plain object
           * @returns Promise
           */
          public connections(
            request: ibc.core.connection.v1.IQueryConnectionsRequest,
          ): Promise<ibc.core.connection.v1.QueryConnectionsResponse>;

          /**
           * Calls ClientConnections.
           * @param request QueryClientConnectionsRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryClientConnectionsResponse
           */
          public clientConnections(
            request: ibc.core.connection.v1.IQueryClientConnectionsRequest,
            callback: ibc.core.connection.v1.Query.ClientConnectionsCallback,
          ): void;

          /**
           * Calls ClientConnections.
           * @param request QueryClientConnectionsRequest message or plain object
           * @returns Promise
           */
          public clientConnections(
            request: ibc.core.connection.v1.IQueryClientConnectionsRequest,
          ): Promise<ibc.core.connection.v1.QueryClientConnectionsResponse>;

          /**
           * Calls ConnectionClientState.
           * @param request QueryConnectionClientStateRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryConnectionClientStateResponse
           */
          public connectionClientState(
            request: ibc.core.connection.v1.IQueryConnectionClientStateRequest,
            callback: ibc.core.connection.v1.Query.ConnectionClientStateCallback,
          ): void;

          /**
           * Calls ConnectionClientState.
           * @param request QueryConnectionClientStateRequest message or plain object
           * @returns Promise
           */
          public connectionClientState(
            request: ibc.core.connection.v1.IQueryConnectionClientStateRequest,
          ): Promise<ibc.core.connection.v1.QueryConnectionClientStateResponse>;

          /**
           * Calls ConnectionConsensusState.
           * @param request QueryConnectionConsensusStateRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryConnectionConsensusStateResponse
           */
          public connectionConsensusState(
            request: ibc.core.connection.v1.IQueryConnectionConsensusStateRequest,
            callback: ibc.core.connection.v1.Query.ConnectionConsensusStateCallback,
          ): void;

          /**
           * Calls ConnectionConsensusState.
           * @param request QueryConnectionConsensusStateRequest message or plain object
           * @returns Promise
           */
          public connectionConsensusState(
            request: ibc.core.connection.v1.IQueryConnectionConsensusStateRequest,
          ): Promise<ibc.core.connection.v1.QueryConnectionConsensusStateResponse>;
        }

        namespace Query {
          /**
           * Callback as used by {@link ibc.core.connection.v1.Query#connection}.
           * @param error Error, if any
           * @param [response] QueryConnectionResponse
           */
          type ConnectionCallback = (
            error: Error | null,
            response?: ibc.core.connection.v1.QueryConnectionResponse,
          ) => void;

          /**
           * Callback as used by {@link ibc.core.connection.v1.Query#connections}.
           * @param error Error, if any
           * @param [response] QueryConnectionsResponse
           */
          type ConnectionsCallback = (
            error: Error | null,
            response?: ibc.core.connection.v1.QueryConnectionsResponse,
          ) => void;

          /**
           * Callback as used by {@link ibc.core.connection.v1.Query#clientConnections}.
           * @param error Error, if any
           * @param [response] QueryClientConnectionsResponse
           */
          type ClientConnectionsCallback = (
            error: Error | null,
            response?: ibc.core.connection.v1.QueryClientConnectionsResponse,
          ) => void;

          /**
           * Callback as used by {@link ibc.core.connection.v1.Query#connectionClientState}.
           * @param error Error, if any
           * @param [response] QueryConnectionClientStateResponse
           */
          type ConnectionClientStateCallback = (
            error: Error | null,
            response?: ibc.core.connection.v1.QueryConnectionClientStateResponse,
          ) => void;

          /**
           * Callback as used by {@link ibc.core.connection.v1.Query#connectionConsensusState}.
           * @param error Error, if any
           * @param [response] QueryConnectionConsensusStateResponse
           */
          type ConnectionConsensusStateCallback = (
            error: Error | null,
            response?: ibc.core.connection.v1.QueryConnectionConsensusStateResponse,
          ) => void;
        }

        /** Properties of a QueryConnectionRequest. */
        interface IQueryConnectionRequest {
          /** QueryConnectionRequest connectionId */
          connectionId?: string | null;
        }

        /** Represents a QueryConnectionRequest. */
        class QueryConnectionRequest implements IQueryConnectionRequest {
          /**
           * Constructs a new QueryConnectionRequest.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.connection.v1.IQueryConnectionRequest);

          /** QueryConnectionRequest connectionId. */
          public connectionId: string;

          /**
           * Creates a new QueryConnectionRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryConnectionRequest instance
           */
          public static create(
            properties?: ibc.core.connection.v1.IQueryConnectionRequest,
          ): ibc.core.connection.v1.QueryConnectionRequest;

          /**
           * Encodes the specified QueryConnectionRequest message. Does not implicitly {@link ibc.core.connection.v1.QueryConnectionRequest.verify|verify} messages.
           * @param m QueryConnectionRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.connection.v1.IQueryConnectionRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryConnectionRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryConnectionRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.connection.v1.QueryConnectionRequest;
        }

        /** Properties of a QueryConnectionResponse. */
        interface IQueryConnectionResponse {
          /** QueryConnectionResponse connection */
          connection?: ibc.core.connection.v1.IConnectionEnd | null;

          /** QueryConnectionResponse proof */
          proof?: Uint8Array | null;

          /** QueryConnectionResponse proofHeight */
          proofHeight?: ibc.core.client.v1.IHeight | null;
        }

        /** Represents a QueryConnectionResponse. */
        class QueryConnectionResponse implements IQueryConnectionResponse {
          /**
           * Constructs a new QueryConnectionResponse.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.connection.v1.IQueryConnectionResponse);

          /** QueryConnectionResponse connection. */
          public connection?: ibc.core.connection.v1.IConnectionEnd | null;

          /** QueryConnectionResponse proof. */
          public proof: Uint8Array;

          /** QueryConnectionResponse proofHeight. */
          public proofHeight?: ibc.core.client.v1.IHeight | null;

          /**
           * Creates a new QueryConnectionResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryConnectionResponse instance
           */
          public static create(
            properties?: ibc.core.connection.v1.IQueryConnectionResponse,
          ): ibc.core.connection.v1.QueryConnectionResponse;

          /**
           * Encodes the specified QueryConnectionResponse message. Does not implicitly {@link ibc.core.connection.v1.QueryConnectionResponse.verify|verify} messages.
           * @param m QueryConnectionResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.connection.v1.IQueryConnectionResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryConnectionResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryConnectionResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.connection.v1.QueryConnectionResponse;
        }

        /** Properties of a QueryConnectionsRequest. */
        interface IQueryConnectionsRequest {
          /** QueryConnectionsRequest pagination */
          pagination?: cosmos.base.query.v1beta1.IPageRequest | null;
        }

        /** Represents a QueryConnectionsRequest. */
        class QueryConnectionsRequest implements IQueryConnectionsRequest {
          /**
           * Constructs a new QueryConnectionsRequest.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.connection.v1.IQueryConnectionsRequest);

          /** QueryConnectionsRequest pagination. */
          public pagination?: cosmos.base.query.v1beta1.IPageRequest | null;

          /**
           * Creates a new QueryConnectionsRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryConnectionsRequest instance
           */
          public static create(
            properties?: ibc.core.connection.v1.IQueryConnectionsRequest,
          ): ibc.core.connection.v1.QueryConnectionsRequest;

          /**
           * Encodes the specified QueryConnectionsRequest message. Does not implicitly {@link ibc.core.connection.v1.QueryConnectionsRequest.verify|verify} messages.
           * @param m QueryConnectionsRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.connection.v1.IQueryConnectionsRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryConnectionsRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryConnectionsRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.connection.v1.QueryConnectionsRequest;
        }

        /** Properties of a QueryConnectionsResponse. */
        interface IQueryConnectionsResponse {
          /** QueryConnectionsResponse connections */
          connections?: ibc.core.connection.v1.IIdentifiedConnection[] | null;

          /** QueryConnectionsResponse pagination */
          pagination?: cosmos.base.query.v1beta1.IPageResponse | null;

          /** QueryConnectionsResponse height */
          height?: ibc.core.client.v1.IHeight | null;
        }

        /** Represents a QueryConnectionsResponse. */
        class QueryConnectionsResponse implements IQueryConnectionsResponse {
          /**
           * Constructs a new QueryConnectionsResponse.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.connection.v1.IQueryConnectionsResponse);

          /** QueryConnectionsResponse connections. */
          public connections: ibc.core.connection.v1.IIdentifiedConnection[];

          /** QueryConnectionsResponse pagination. */
          public pagination?: cosmos.base.query.v1beta1.IPageResponse | null;

          /** QueryConnectionsResponse height. */
          public height?: ibc.core.client.v1.IHeight | null;

          /**
           * Creates a new QueryConnectionsResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryConnectionsResponse instance
           */
          public static create(
            properties?: ibc.core.connection.v1.IQueryConnectionsResponse,
          ): ibc.core.connection.v1.QueryConnectionsResponse;

          /**
           * Encodes the specified QueryConnectionsResponse message. Does not implicitly {@link ibc.core.connection.v1.QueryConnectionsResponse.verify|verify} messages.
           * @param m QueryConnectionsResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.connection.v1.IQueryConnectionsResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryConnectionsResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryConnectionsResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.connection.v1.QueryConnectionsResponse;
        }

        /** Properties of a QueryClientConnectionsRequest. */
        interface IQueryClientConnectionsRequest {
          /** QueryClientConnectionsRequest clientId */
          clientId?: string | null;
        }

        /** Represents a QueryClientConnectionsRequest. */
        class QueryClientConnectionsRequest implements IQueryClientConnectionsRequest {
          /**
           * Constructs a new QueryClientConnectionsRequest.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.connection.v1.IQueryClientConnectionsRequest);

          /** QueryClientConnectionsRequest clientId. */
          public clientId: string;

          /**
           * Creates a new QueryClientConnectionsRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryClientConnectionsRequest instance
           */
          public static create(
            properties?: ibc.core.connection.v1.IQueryClientConnectionsRequest,
          ): ibc.core.connection.v1.QueryClientConnectionsRequest;

          /**
           * Encodes the specified QueryClientConnectionsRequest message. Does not implicitly {@link ibc.core.connection.v1.QueryClientConnectionsRequest.verify|verify} messages.
           * @param m QueryClientConnectionsRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.connection.v1.IQueryClientConnectionsRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryClientConnectionsRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryClientConnectionsRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.connection.v1.QueryClientConnectionsRequest;
        }

        /** Properties of a QueryClientConnectionsResponse. */
        interface IQueryClientConnectionsResponse {
          /** QueryClientConnectionsResponse connectionPaths */
          connectionPaths?: string[] | null;

          /** QueryClientConnectionsResponse proof */
          proof?: Uint8Array | null;

          /** QueryClientConnectionsResponse proofHeight */
          proofHeight?: ibc.core.client.v1.IHeight | null;
        }

        /** Represents a QueryClientConnectionsResponse. */
        class QueryClientConnectionsResponse implements IQueryClientConnectionsResponse {
          /**
           * Constructs a new QueryClientConnectionsResponse.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.connection.v1.IQueryClientConnectionsResponse);

          /** QueryClientConnectionsResponse connectionPaths. */
          public connectionPaths: string[];

          /** QueryClientConnectionsResponse proof. */
          public proof: Uint8Array;

          /** QueryClientConnectionsResponse proofHeight. */
          public proofHeight?: ibc.core.client.v1.IHeight | null;

          /**
           * Creates a new QueryClientConnectionsResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryClientConnectionsResponse instance
           */
          public static create(
            properties?: ibc.core.connection.v1.IQueryClientConnectionsResponse,
          ): ibc.core.connection.v1.QueryClientConnectionsResponse;

          /**
           * Encodes the specified QueryClientConnectionsResponse message. Does not implicitly {@link ibc.core.connection.v1.QueryClientConnectionsResponse.verify|verify} messages.
           * @param m QueryClientConnectionsResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.connection.v1.IQueryClientConnectionsResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryClientConnectionsResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryClientConnectionsResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.connection.v1.QueryClientConnectionsResponse;
        }

        /** Properties of a QueryConnectionClientStateRequest. */
        interface IQueryConnectionClientStateRequest {
          /** QueryConnectionClientStateRequest connectionId */
          connectionId?: string | null;
        }

        /** Represents a QueryConnectionClientStateRequest. */
        class QueryConnectionClientStateRequest implements IQueryConnectionClientStateRequest {
          /**
           * Constructs a new QueryConnectionClientStateRequest.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.connection.v1.IQueryConnectionClientStateRequest);

          /** QueryConnectionClientStateRequest connectionId. */
          public connectionId: string;

          /**
           * Creates a new QueryConnectionClientStateRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryConnectionClientStateRequest instance
           */
          public static create(
            properties?: ibc.core.connection.v1.IQueryConnectionClientStateRequest,
          ): ibc.core.connection.v1.QueryConnectionClientStateRequest;

          /**
           * Encodes the specified QueryConnectionClientStateRequest message. Does not implicitly {@link ibc.core.connection.v1.QueryConnectionClientStateRequest.verify|verify} messages.
           * @param m QueryConnectionClientStateRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.connection.v1.IQueryConnectionClientStateRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryConnectionClientStateRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryConnectionClientStateRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.connection.v1.QueryConnectionClientStateRequest;
        }

        /** Properties of a QueryConnectionClientStateResponse. */
        interface IQueryConnectionClientStateResponse {
          /** QueryConnectionClientStateResponse identifiedClientState */
          identifiedClientState?: ibc.core.client.v1.IIdentifiedClientState | null;

          /** QueryConnectionClientStateResponse proof */
          proof?: Uint8Array | null;

          /** QueryConnectionClientStateResponse proofHeight */
          proofHeight?: ibc.core.client.v1.IHeight | null;
        }

        /** Represents a QueryConnectionClientStateResponse. */
        class QueryConnectionClientStateResponse implements IQueryConnectionClientStateResponse {
          /**
           * Constructs a new QueryConnectionClientStateResponse.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.connection.v1.IQueryConnectionClientStateResponse);

          /** QueryConnectionClientStateResponse identifiedClientState. */
          public identifiedClientState?: ibc.core.client.v1.IIdentifiedClientState | null;

          /** QueryConnectionClientStateResponse proof. */
          public proof: Uint8Array;

          /** QueryConnectionClientStateResponse proofHeight. */
          public proofHeight?: ibc.core.client.v1.IHeight | null;

          /**
           * Creates a new QueryConnectionClientStateResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryConnectionClientStateResponse instance
           */
          public static create(
            properties?: ibc.core.connection.v1.IQueryConnectionClientStateResponse,
          ): ibc.core.connection.v1.QueryConnectionClientStateResponse;

          /**
           * Encodes the specified QueryConnectionClientStateResponse message. Does not implicitly {@link ibc.core.connection.v1.QueryConnectionClientStateResponse.verify|verify} messages.
           * @param m QueryConnectionClientStateResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.connection.v1.IQueryConnectionClientStateResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryConnectionClientStateResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryConnectionClientStateResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.connection.v1.QueryConnectionClientStateResponse;
        }

        /** Properties of a QueryConnectionConsensusStateRequest. */
        interface IQueryConnectionConsensusStateRequest {
          /** QueryConnectionConsensusStateRequest connectionId */
          connectionId?: string | null;

          /** QueryConnectionConsensusStateRequest revisionNumber */
          revisionNumber?: Long | null;

          /** QueryConnectionConsensusStateRequest revisionHeight */
          revisionHeight?: Long | null;
        }

        /** Represents a QueryConnectionConsensusStateRequest. */
        class QueryConnectionConsensusStateRequest implements IQueryConnectionConsensusStateRequest {
          /**
           * Constructs a new QueryConnectionConsensusStateRequest.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.connection.v1.IQueryConnectionConsensusStateRequest);

          /** QueryConnectionConsensusStateRequest connectionId. */
          public connectionId: string;

          /** QueryConnectionConsensusStateRequest revisionNumber. */
          public revisionNumber: Long;

          /** QueryConnectionConsensusStateRequest revisionHeight. */
          public revisionHeight: Long;

          /**
           * Creates a new QueryConnectionConsensusStateRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryConnectionConsensusStateRequest instance
           */
          public static create(
            properties?: ibc.core.connection.v1.IQueryConnectionConsensusStateRequest,
          ): ibc.core.connection.v1.QueryConnectionConsensusStateRequest;

          /**
           * Encodes the specified QueryConnectionConsensusStateRequest message. Does not implicitly {@link ibc.core.connection.v1.QueryConnectionConsensusStateRequest.verify|verify} messages.
           * @param m QueryConnectionConsensusStateRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.connection.v1.IQueryConnectionConsensusStateRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryConnectionConsensusStateRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryConnectionConsensusStateRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.connection.v1.QueryConnectionConsensusStateRequest;
        }

        /** Properties of a QueryConnectionConsensusStateResponse. */
        interface IQueryConnectionConsensusStateResponse {
          /** QueryConnectionConsensusStateResponse consensusState */
          consensusState?: google.protobuf.IAny | null;

          /** QueryConnectionConsensusStateResponse clientId */
          clientId?: string | null;

          /** QueryConnectionConsensusStateResponse proof */
          proof?: Uint8Array | null;

          /** QueryConnectionConsensusStateResponse proofHeight */
          proofHeight?: ibc.core.client.v1.IHeight | null;
        }

        /** Represents a QueryConnectionConsensusStateResponse. */
        class QueryConnectionConsensusStateResponse implements IQueryConnectionConsensusStateResponse {
          /**
           * Constructs a new QueryConnectionConsensusStateResponse.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.connection.v1.IQueryConnectionConsensusStateResponse);

          /** QueryConnectionConsensusStateResponse consensusState. */
          public consensusState?: google.protobuf.IAny | null;

          /** QueryConnectionConsensusStateResponse clientId. */
          public clientId: string;

          /** QueryConnectionConsensusStateResponse proof. */
          public proof: Uint8Array;

          /** QueryConnectionConsensusStateResponse proofHeight. */
          public proofHeight?: ibc.core.client.v1.IHeight | null;

          /**
           * Creates a new QueryConnectionConsensusStateResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryConnectionConsensusStateResponse instance
           */
          public static create(
            properties?: ibc.core.connection.v1.IQueryConnectionConsensusStateResponse,
          ): ibc.core.connection.v1.QueryConnectionConsensusStateResponse;

          /**
           * Encodes the specified QueryConnectionConsensusStateResponse message. Does not implicitly {@link ibc.core.connection.v1.QueryConnectionConsensusStateResponse.verify|verify} messages.
           * @param m QueryConnectionConsensusStateResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.connection.v1.IQueryConnectionConsensusStateResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryConnectionConsensusStateResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryConnectionConsensusStateResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): ibc.core.connection.v1.QueryConnectionConsensusStateResponse;
        }
      }
    }
  }
}

/** Namespace ics23. */
export namespace ics23 {
  /** HashOp enum. */
  enum HashOp {
    NO_HASH = 0,
    SHA256 = 1,
    SHA512 = 2,
    KECCAK = 3,
    RIPEMD160 = 4,
    BITCOIN = 5,
  }

  /**
   * LengthOp defines how to process the key and value of the LeafOp
   * to include length information. After encoding the length with the given
   * algorithm, the length will be prepended to the key and value bytes.
   * (Each one with it's own encoded length)
   */
  enum LengthOp {
    NO_PREFIX = 0,
    VAR_PROTO = 1,
    VAR_RLP = 2,
    FIXED32_BIG = 3,
    FIXED32_LITTLE = 4,
    FIXED64_BIG = 5,
    FIXED64_LITTLE = 6,
    REQUIRE_32_BYTES = 7,
    REQUIRE_64_BYTES = 8,
  }

  /** Properties of an ExistenceProof. */
  interface IExistenceProof {
    /** ExistenceProof key */
    key?: Uint8Array | null;

    /** ExistenceProof value */
    value?: Uint8Array | null;

    /** ExistenceProof leaf */
    leaf?: ics23.ILeafOp | null;

    /** ExistenceProof path */
    path?: ics23.IInnerOp[] | null;
  }

  /**
   * ExistenceProof takes a key and a value and a set of steps to perform on it.
   * The result of peforming all these steps will provide a "root hash", which can
   * be compared to the value in a header.
   *
   * Since it is computationally infeasible to produce a hash collission for any of the used
   * cryptographic hash functions, if someone can provide a series of operations to transform
   * a given key and value into a root hash that matches some trusted root, these key and values
   * must be in the referenced merkle tree.
   *
   * The only possible issue is maliablity in LeafOp, such as providing extra prefix data,
   * which should be controlled by a spec. Eg. with lengthOp as NONE,
   * prefix = FOO, key = BAR, value = CHOICE
   * and
   * prefix = F, key = OOBAR, value = CHOICE
   * would produce the same value.
   *
   * With LengthOp this is tricker but not impossible. Which is why the "leafPrefixEqual" field
   * in the ProofSpec is valuable to prevent this mutability. And why all trees should
   * length-prefix the data before hashing it.
   */
  class ExistenceProof implements IExistenceProof {
    /**
     * Constructs a new ExistenceProof.
     * @param [p] Properties to set
     */
    constructor(p?: ics23.IExistenceProof);

    /** ExistenceProof key. */
    public key: Uint8Array;

    /** ExistenceProof value. */
    public value: Uint8Array;

    /** ExistenceProof leaf. */
    public leaf?: ics23.ILeafOp | null;

    /** ExistenceProof path. */
    public path: ics23.IInnerOp[];

    /**
     * Creates a new ExistenceProof instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExistenceProof instance
     */
    public static create(properties?: ics23.IExistenceProof): ics23.ExistenceProof;

    /**
     * Encodes the specified ExistenceProof message. Does not implicitly {@link ics23.ExistenceProof.verify|verify} messages.
     * @param m ExistenceProof message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ics23.IExistenceProof, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExistenceProof message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ExistenceProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.ExistenceProof;
  }

  /** Properties of a NonExistenceProof. */
  interface INonExistenceProof {
    /** NonExistenceProof key */
    key?: Uint8Array | null;

    /** NonExistenceProof left */
    left?: ics23.IExistenceProof | null;

    /** NonExistenceProof right */
    right?: ics23.IExistenceProof | null;
  }

  /** Represents a NonExistenceProof. */
  class NonExistenceProof implements INonExistenceProof {
    /**
     * Constructs a new NonExistenceProof.
     * @param [p] Properties to set
     */
    constructor(p?: ics23.INonExistenceProof);

    /** NonExistenceProof key. */
    public key: Uint8Array;

    /** NonExistenceProof left. */
    public left?: ics23.IExistenceProof | null;

    /** NonExistenceProof right. */
    public right?: ics23.IExistenceProof | null;

    /**
     * Creates a new NonExistenceProof instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NonExistenceProof instance
     */
    public static create(properties?: ics23.INonExistenceProof): ics23.NonExistenceProof;

    /**
     * Encodes the specified NonExistenceProof message. Does not implicitly {@link ics23.NonExistenceProof.verify|verify} messages.
     * @param m NonExistenceProof message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ics23.INonExistenceProof, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NonExistenceProof message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns NonExistenceProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.NonExistenceProof;
  }

  /** Properties of a CommitmentProof. */
  interface ICommitmentProof {
    /** CommitmentProof exist */
    exist?: ics23.IExistenceProof | null;

    /** CommitmentProof nonexist */
    nonexist?: ics23.INonExistenceProof | null;

    /** CommitmentProof batch */
    batch?: ics23.IBatchProof | null;

    /** CommitmentProof compressed */
    compressed?: ics23.ICompressedBatchProof | null;
  }

  /** Represents a CommitmentProof. */
  class CommitmentProof implements ICommitmentProof {
    /**
     * Constructs a new CommitmentProof.
     * @param [p] Properties to set
     */
    constructor(p?: ics23.ICommitmentProof);

    /** CommitmentProof exist. */
    public exist?: ics23.IExistenceProof | null;

    /** CommitmentProof nonexist. */
    public nonexist?: ics23.INonExistenceProof | null;

    /** CommitmentProof batch. */
    public batch?: ics23.IBatchProof | null;

    /** CommitmentProof compressed. */
    public compressed?: ics23.ICompressedBatchProof | null;

    /** CommitmentProof proof. */
    public proof?: "exist" | "nonexist" | "batch" | "compressed";

    /**
     * Creates a new CommitmentProof instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommitmentProof instance
     */
    public static create(properties?: ics23.ICommitmentProof): ics23.CommitmentProof;

    /**
     * Encodes the specified CommitmentProof message. Does not implicitly {@link ics23.CommitmentProof.verify|verify} messages.
     * @param m CommitmentProof message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ics23.ICommitmentProof, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommitmentProof message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CommitmentProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.CommitmentProof;
  }

  /** Properties of a LeafOp. */
  interface ILeafOp {
    /** LeafOp hash */
    hash?: ics23.HashOp | null;

    /** LeafOp prehashKey */
    prehashKey?: ics23.HashOp | null;

    /** LeafOp prehashValue */
    prehashValue?: ics23.HashOp | null;

    /** LeafOp length */
    length?: ics23.LengthOp | null;

    /** LeafOp prefix */
    prefix?: Uint8Array | null;
  }

  /**
   * LeafOp represents the raw key-value data we wish to prove, and
   * must be flexible to represent the internal transformation from
   * the original key-value pairs into the basis hash, for many existing
   * merkle trees.
   *
   * key and value are passed in. So that the signature of this operation is:
   * leafOp(key, value) -> output
   *
   * To process this, first prehash the keys and values if needed (ANY means no hash in this case):
   * hkey = prehashKey(key)
   * hvalue = prehashValue(value)
   *
   * Then combine the bytes, and hash it
   * output = hash(prefix || length(hkey) || hkey || length(hvalue) || hvalue)
   */
  class LeafOp implements ILeafOp {
    /**
     * Constructs a new LeafOp.
     * @param [p] Properties to set
     */
    constructor(p?: ics23.ILeafOp);

    /** LeafOp hash. */
    public hash: ics23.HashOp;

    /** LeafOp prehashKey. */
    public prehashKey: ics23.HashOp;

    /** LeafOp prehashValue. */
    public prehashValue: ics23.HashOp;

    /** LeafOp length. */
    public length: ics23.LengthOp;

    /** LeafOp prefix. */
    public prefix: Uint8Array;

    /**
     * Creates a new LeafOp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LeafOp instance
     */
    public static create(properties?: ics23.ILeafOp): ics23.LeafOp;

    /**
     * Encodes the specified LeafOp message. Does not implicitly {@link ics23.LeafOp.verify|verify} messages.
     * @param m LeafOp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ics23.ILeafOp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LeafOp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns LeafOp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.LeafOp;
  }

  /** Properties of an InnerOp. */
  interface IInnerOp {
    /** InnerOp hash */
    hash?: ics23.HashOp | null;

    /** InnerOp prefix */
    prefix?: Uint8Array | null;

    /** InnerOp suffix */
    suffix?: Uint8Array | null;
  }

  /**
   * InnerOp represents a merkle-proof step that is not a leaf.
   * It represents concatenating two children and hashing them to provide the next result.
   *
   * The result of the previous step is passed in, so the signature of this op is:
   * innerOp(child) -> output
   *
   * The result of applying InnerOp should be:
   * output = op.hash(op.prefix || child || op.suffix)
   *
   * where the || operator is concatenation of binary data,
   * and child is the result of hashing all the tree below this step.
   *
   * Any special data, like prepending child with the length, or prepending the entire operation with
   * some value to differentiate from leaf nodes, should be included in prefix and suffix.
   * If either of prefix or suffix is empty, we just treat it as an empty string
   */
  class InnerOp implements IInnerOp {
    /**
     * Constructs a new InnerOp.
     * @param [p] Properties to set
     */
    constructor(p?: ics23.IInnerOp);

    /** InnerOp hash. */
    public hash: ics23.HashOp;

    /** InnerOp prefix. */
    public prefix: Uint8Array;

    /** InnerOp suffix. */
    public suffix: Uint8Array;

    /**
     * Creates a new InnerOp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InnerOp instance
     */
    public static create(properties?: ics23.IInnerOp): ics23.InnerOp;

    /**
     * Encodes the specified InnerOp message. Does not implicitly {@link ics23.InnerOp.verify|verify} messages.
     * @param m InnerOp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ics23.IInnerOp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InnerOp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns InnerOp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.InnerOp;
  }

  /** Properties of a ProofSpec. */
  interface IProofSpec {
    /** ProofSpec leafSpec */
    leafSpec?: ics23.ILeafOp | null;

    /** ProofSpec innerSpec */
    innerSpec?: ics23.IInnerSpec | null;

    /** ProofSpec maxDepth */
    maxDepth?: number | null;

    /** ProofSpec minDepth */
    minDepth?: number | null;
  }

  /**
   * ProofSpec defines what the expected parameters are for a given proof type.
   * This can be stored in the client and used to validate any incoming proofs.
   *
   * verify(ProofSpec, Proof) -> Proof | Error
   *
   * As demonstrated in tests, if we don't fix the algorithm used to calculate the
   * LeafHash for a given tree, there are many possible key-value pairs that can
   * generate a given hash (by interpretting the preimage differently).
   * We need this for proper security, requires client knows a priori what
   * tree format server uses. But not in code, rather a configuration object.
   */
  class ProofSpec implements IProofSpec {
    /**
     * Constructs a new ProofSpec.
     * @param [p] Properties to set
     */
    constructor(p?: ics23.IProofSpec);

    /** ProofSpec leafSpec. */
    public leafSpec?: ics23.ILeafOp | null;

    /** ProofSpec innerSpec. */
    public innerSpec?: ics23.IInnerSpec | null;

    /** ProofSpec maxDepth. */
    public maxDepth: number;

    /** ProofSpec minDepth. */
    public minDepth: number;

    /**
     * Creates a new ProofSpec instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProofSpec instance
     */
    public static create(properties?: ics23.IProofSpec): ics23.ProofSpec;

    /**
     * Encodes the specified ProofSpec message. Does not implicitly {@link ics23.ProofSpec.verify|verify} messages.
     * @param m ProofSpec message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ics23.IProofSpec, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProofSpec message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ProofSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.ProofSpec;
  }

  /** Properties of an InnerSpec. */
  interface IInnerSpec {
    /** InnerSpec childOrder */
    childOrder?: number[] | null;

    /** InnerSpec childSize */
    childSize?: number | null;

    /** InnerSpec minPrefixLength */
    minPrefixLength?: number | null;

    /** InnerSpec maxPrefixLength */
    maxPrefixLength?: number | null;

    /** InnerSpec emptyChild */
    emptyChild?: Uint8Array | null;

    /** InnerSpec hash */
    hash?: ics23.HashOp | null;
  }

  /** Represents an InnerSpec. */
  class InnerSpec implements IInnerSpec {
    /**
     * Constructs a new InnerSpec.
     * @param [p] Properties to set
     */
    constructor(p?: ics23.IInnerSpec);

    /** InnerSpec childOrder. */
    public childOrder: number[];

    /** InnerSpec childSize. */
    public childSize: number;

    /** InnerSpec minPrefixLength. */
    public minPrefixLength: number;

    /** InnerSpec maxPrefixLength. */
    public maxPrefixLength: number;

    /** InnerSpec emptyChild. */
    public emptyChild: Uint8Array;

    /** InnerSpec hash. */
    public hash: ics23.HashOp;

    /**
     * Creates a new InnerSpec instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InnerSpec instance
     */
    public static create(properties?: ics23.IInnerSpec): ics23.InnerSpec;

    /**
     * Encodes the specified InnerSpec message. Does not implicitly {@link ics23.InnerSpec.verify|verify} messages.
     * @param m InnerSpec message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ics23.IInnerSpec, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InnerSpec message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns InnerSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.InnerSpec;
  }

  /** Properties of a BatchProof. */
  interface IBatchProof {
    /** BatchProof entries */
    entries?: ics23.IBatchEntry[] | null;
  }

  /** Represents a BatchProof. */
  class BatchProof implements IBatchProof {
    /**
     * Constructs a new BatchProof.
     * @param [p] Properties to set
     */
    constructor(p?: ics23.IBatchProof);

    /** BatchProof entries. */
    public entries: ics23.IBatchEntry[];

    /**
     * Creates a new BatchProof instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BatchProof instance
     */
    public static create(properties?: ics23.IBatchProof): ics23.BatchProof;

    /**
     * Encodes the specified BatchProof message. Does not implicitly {@link ics23.BatchProof.verify|verify} messages.
     * @param m BatchProof message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ics23.IBatchProof, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BatchProof message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BatchProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.BatchProof;
  }

  /** Properties of a BatchEntry. */
  interface IBatchEntry {
    /** BatchEntry exist */
    exist?: ics23.IExistenceProof | null;

    /** BatchEntry nonexist */
    nonexist?: ics23.INonExistenceProof | null;
  }

  /** Represents a BatchEntry. */
  class BatchEntry implements IBatchEntry {
    /**
     * Constructs a new BatchEntry.
     * @param [p] Properties to set
     */
    constructor(p?: ics23.IBatchEntry);

    /** BatchEntry exist. */
    public exist?: ics23.IExistenceProof | null;

    /** BatchEntry nonexist. */
    public nonexist?: ics23.INonExistenceProof | null;

    /** BatchEntry proof. */
    public proof?: "exist" | "nonexist";

    /**
     * Creates a new BatchEntry instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BatchEntry instance
     */
    public static create(properties?: ics23.IBatchEntry): ics23.BatchEntry;

    /**
     * Encodes the specified BatchEntry message. Does not implicitly {@link ics23.BatchEntry.verify|verify} messages.
     * @param m BatchEntry message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ics23.IBatchEntry, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BatchEntry message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BatchEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.BatchEntry;
  }

  /** Properties of a CompressedBatchProof. */
  interface ICompressedBatchProof {
    /** CompressedBatchProof entries */
    entries?: ics23.ICompressedBatchEntry[] | null;

    /** CompressedBatchProof lookupInners */
    lookupInners?: ics23.IInnerOp[] | null;
  }

  /** Represents a CompressedBatchProof. */
  class CompressedBatchProof implements ICompressedBatchProof {
    /**
     * Constructs a new CompressedBatchProof.
     * @param [p] Properties to set
     */
    constructor(p?: ics23.ICompressedBatchProof);

    /** CompressedBatchProof entries. */
    public entries: ics23.ICompressedBatchEntry[];

    /** CompressedBatchProof lookupInners. */
    public lookupInners: ics23.IInnerOp[];

    /**
     * Creates a new CompressedBatchProof instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CompressedBatchProof instance
     */
    public static create(properties?: ics23.ICompressedBatchProof): ics23.CompressedBatchProof;

    /**
     * Encodes the specified CompressedBatchProof message. Does not implicitly {@link ics23.CompressedBatchProof.verify|verify} messages.
     * @param m CompressedBatchProof message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ics23.ICompressedBatchProof, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CompressedBatchProof message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CompressedBatchProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.CompressedBatchProof;
  }

  /** Properties of a CompressedBatchEntry. */
  interface ICompressedBatchEntry {
    /** CompressedBatchEntry exist */
    exist?: ics23.ICompressedExistenceProof | null;

    /** CompressedBatchEntry nonexist */
    nonexist?: ics23.ICompressedNonExistenceProof | null;
  }

  /** Represents a CompressedBatchEntry. */
  class CompressedBatchEntry implements ICompressedBatchEntry {
    /**
     * Constructs a new CompressedBatchEntry.
     * @param [p] Properties to set
     */
    constructor(p?: ics23.ICompressedBatchEntry);

    /** CompressedBatchEntry exist. */
    public exist?: ics23.ICompressedExistenceProof | null;

    /** CompressedBatchEntry nonexist. */
    public nonexist?: ics23.ICompressedNonExistenceProof | null;

    /** CompressedBatchEntry proof. */
    public proof?: "exist" | "nonexist";

    /**
     * Creates a new CompressedBatchEntry instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CompressedBatchEntry instance
     */
    public static create(properties?: ics23.ICompressedBatchEntry): ics23.CompressedBatchEntry;

    /**
     * Encodes the specified CompressedBatchEntry message. Does not implicitly {@link ics23.CompressedBatchEntry.verify|verify} messages.
     * @param m CompressedBatchEntry message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ics23.ICompressedBatchEntry, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CompressedBatchEntry message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CompressedBatchEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.CompressedBatchEntry;
  }

  /** Properties of a CompressedExistenceProof. */
  interface ICompressedExistenceProof {
    /** CompressedExistenceProof key */
    key?: Uint8Array | null;

    /** CompressedExistenceProof value */
    value?: Uint8Array | null;

    /** CompressedExistenceProof leaf */
    leaf?: ics23.ILeafOp | null;

    /** CompressedExistenceProof path */
    path?: number[] | null;
  }

  /** Represents a CompressedExistenceProof. */
  class CompressedExistenceProof implements ICompressedExistenceProof {
    /**
     * Constructs a new CompressedExistenceProof.
     * @param [p] Properties to set
     */
    constructor(p?: ics23.ICompressedExistenceProof);

    /** CompressedExistenceProof key. */
    public key: Uint8Array;

    /** CompressedExistenceProof value. */
    public value: Uint8Array;

    /** CompressedExistenceProof leaf. */
    public leaf?: ics23.ILeafOp | null;

    /** CompressedExistenceProof path. */
    public path: number[];

    /**
     * Creates a new CompressedExistenceProof instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CompressedExistenceProof instance
     */
    public static create(properties?: ics23.ICompressedExistenceProof): ics23.CompressedExistenceProof;

    /**
     * Encodes the specified CompressedExistenceProof message. Does not implicitly {@link ics23.CompressedExistenceProof.verify|verify} messages.
     * @param m CompressedExistenceProof message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ics23.ICompressedExistenceProof, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CompressedExistenceProof message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CompressedExistenceProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.CompressedExistenceProof;
  }

  /** Properties of a CompressedNonExistenceProof. */
  interface ICompressedNonExistenceProof {
    /** CompressedNonExistenceProof key */
    key?: Uint8Array | null;

    /** CompressedNonExistenceProof left */
    left?: ics23.ICompressedExistenceProof | null;

    /** CompressedNonExistenceProof right */
    right?: ics23.ICompressedExistenceProof | null;
  }

  /** Represents a CompressedNonExistenceProof. */
  class CompressedNonExistenceProof implements ICompressedNonExistenceProof {
    /**
     * Constructs a new CompressedNonExistenceProof.
     * @param [p] Properties to set
     */
    constructor(p?: ics23.ICompressedNonExistenceProof);

    /** CompressedNonExistenceProof key. */
    public key: Uint8Array;

    /** CompressedNonExistenceProof left. */
    public left?: ics23.ICompressedExistenceProof | null;

    /** CompressedNonExistenceProof right. */
    public right?: ics23.ICompressedExistenceProof | null;

    /**
     * Creates a new CompressedNonExistenceProof instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CompressedNonExistenceProof instance
     */
    public static create(properties?: ics23.ICompressedNonExistenceProof): ics23.CompressedNonExistenceProof;

    /**
     * Encodes the specified CompressedNonExistenceProof message. Does not implicitly {@link ics23.CompressedNonExistenceProof.verify|verify} messages.
     * @param m CompressedNonExistenceProof message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ics23.ICompressedNonExistenceProof, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CompressedNonExistenceProof message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CompressedNonExistenceProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.CompressedNonExistenceProof;
  }
}

/** Namespace tendermint. */
export namespace tendermint {
  /** Namespace abci. */
  namespace abci {
    /** Properties of a Request. */
    interface IRequest {
      /** Request echo */
      echo?: tendermint.abci.IRequestEcho | null;

      /** Request flush */
      flush?: tendermint.abci.IRequestFlush | null;

      /** Request info */
      info?: tendermint.abci.IRequestInfo | null;

      /** Request setOption */
      setOption?: tendermint.abci.IRequestSetOption | null;

      /** Request initChain */
      initChain?: tendermint.abci.IRequestInitChain | null;

      /** Request query */
      query?: tendermint.abci.IRequestQuery | null;

      /** Request beginBlock */
      beginBlock?: tendermint.abci.IRequestBeginBlock | null;

      /** Request checkTx */
      checkTx?: tendermint.abci.IRequestCheckTx | null;

      /** Request deliverTx */
      deliverTx?: tendermint.abci.IRequestDeliverTx | null;

      /** Request endBlock */
      endBlock?: tendermint.abci.IRequestEndBlock | null;

      /** Request commit */
      commit?: tendermint.abci.IRequestCommit | null;

      /** Request listSnapshots */
      listSnapshots?: tendermint.abci.IRequestListSnapshots | null;

      /** Request offerSnapshot */
      offerSnapshot?: tendermint.abci.IRequestOfferSnapshot | null;

      /** Request loadSnapshotChunk */
      loadSnapshotChunk?: tendermint.abci.IRequestLoadSnapshotChunk | null;

      /** Request applySnapshotChunk */
      applySnapshotChunk?: tendermint.abci.IRequestApplySnapshotChunk | null;
    }

    /** Represents a Request. */
    class Request implements IRequest {
      /**
       * Constructs a new Request.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IRequest);

      /** Request echo. */
      public echo?: tendermint.abci.IRequestEcho | null;

      /** Request flush. */
      public flush?: tendermint.abci.IRequestFlush | null;

      /** Request info. */
      public info?: tendermint.abci.IRequestInfo | null;

      /** Request setOption. */
      public setOption?: tendermint.abci.IRequestSetOption | null;

      /** Request initChain. */
      public initChain?: tendermint.abci.IRequestInitChain | null;

      /** Request query. */
      public query?: tendermint.abci.IRequestQuery | null;

      /** Request beginBlock. */
      public beginBlock?: tendermint.abci.IRequestBeginBlock | null;

      /** Request checkTx. */
      public checkTx?: tendermint.abci.IRequestCheckTx | null;

      /** Request deliverTx. */
      public deliverTx?: tendermint.abci.IRequestDeliverTx | null;

      /** Request endBlock. */
      public endBlock?: tendermint.abci.IRequestEndBlock | null;

      /** Request commit. */
      public commit?: tendermint.abci.IRequestCommit | null;

      /** Request listSnapshots. */
      public listSnapshots?: tendermint.abci.IRequestListSnapshots | null;

      /** Request offerSnapshot. */
      public offerSnapshot?: tendermint.abci.IRequestOfferSnapshot | null;

      /** Request loadSnapshotChunk. */
      public loadSnapshotChunk?: tendermint.abci.IRequestLoadSnapshotChunk | null;

      /** Request applySnapshotChunk. */
      public applySnapshotChunk?: tendermint.abci.IRequestApplySnapshotChunk | null;

      /** Request value. */
      public value?:
        | "echo"
        | "flush"
        | "info"
        | "setOption"
        | "initChain"
        | "query"
        | "beginBlock"
        | "checkTx"
        | "deliverTx"
        | "endBlock"
        | "commit"
        | "listSnapshots"
        | "offerSnapshot"
        | "loadSnapshotChunk"
        | "applySnapshotChunk";

      /**
       * Creates a new Request instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Request instance
       */
      public static create(properties?: tendermint.abci.IRequest): tendermint.abci.Request;

      /**
       * Encodes the specified Request message. Does not implicitly {@link tendermint.abci.Request.verify|verify} messages.
       * @param m Request message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IRequest, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.Request;
    }

    /** Properties of a RequestEcho. */
    interface IRequestEcho {
      /** RequestEcho message */
      message?: string | null;
    }

    /** Represents a RequestEcho. */
    class RequestEcho implements IRequestEcho {
      /**
       * Constructs a new RequestEcho.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IRequestEcho);

      /** RequestEcho message. */
      public message: string;

      /**
       * Creates a new RequestEcho instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RequestEcho instance
       */
      public static create(properties?: tendermint.abci.IRequestEcho): tendermint.abci.RequestEcho;

      /**
       * Encodes the specified RequestEcho message. Does not implicitly {@link tendermint.abci.RequestEcho.verify|verify} messages.
       * @param m RequestEcho message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IRequestEcho, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a RequestEcho message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns RequestEcho
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.RequestEcho;
    }

    /** Properties of a RequestFlush. */
    interface IRequestFlush {}

    /** Represents a RequestFlush. */
    class RequestFlush implements IRequestFlush {
      /**
       * Constructs a new RequestFlush.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IRequestFlush);

      /**
       * Creates a new RequestFlush instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RequestFlush instance
       */
      public static create(properties?: tendermint.abci.IRequestFlush): tendermint.abci.RequestFlush;

      /**
       * Encodes the specified RequestFlush message. Does not implicitly {@link tendermint.abci.RequestFlush.verify|verify} messages.
       * @param m RequestFlush message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IRequestFlush, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a RequestFlush message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns RequestFlush
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.RequestFlush;
    }

    /** Properties of a RequestInfo. */
    interface IRequestInfo {
      /** RequestInfo version */
      version?: string | null;

      /** RequestInfo blockVersion */
      blockVersion?: Long | null;

      /** RequestInfo p2pVersion */
      p2pVersion?: Long | null;
    }

    /** Represents a RequestInfo. */
    class RequestInfo implements IRequestInfo {
      /**
       * Constructs a new RequestInfo.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IRequestInfo);

      /** RequestInfo version. */
      public version: string;

      /** RequestInfo blockVersion. */
      public blockVersion: Long;

      /** RequestInfo p2pVersion. */
      public p2pVersion: Long;

      /**
       * Creates a new RequestInfo instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RequestInfo instance
       */
      public static create(properties?: tendermint.abci.IRequestInfo): tendermint.abci.RequestInfo;

      /**
       * Encodes the specified RequestInfo message. Does not implicitly {@link tendermint.abci.RequestInfo.verify|verify} messages.
       * @param m RequestInfo message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IRequestInfo, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a RequestInfo message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns RequestInfo
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.RequestInfo;
    }

    /** Properties of a RequestSetOption. */
    interface IRequestSetOption {
      /** RequestSetOption key */
      key?: string | null;

      /** RequestSetOption value */
      value?: string | null;
    }

    /** Represents a RequestSetOption. */
    class RequestSetOption implements IRequestSetOption {
      /**
       * Constructs a new RequestSetOption.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IRequestSetOption);

      /** RequestSetOption key. */
      public key: string;

      /** RequestSetOption value. */
      public value: string;

      /**
       * Creates a new RequestSetOption instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RequestSetOption instance
       */
      public static create(properties?: tendermint.abci.IRequestSetOption): tendermint.abci.RequestSetOption;

      /**
       * Encodes the specified RequestSetOption message. Does not implicitly {@link tendermint.abci.RequestSetOption.verify|verify} messages.
       * @param m RequestSetOption message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IRequestSetOption, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a RequestSetOption message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns RequestSetOption
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.RequestSetOption;
    }

    /** Properties of a RequestInitChain. */
    interface IRequestInitChain {
      /** RequestInitChain time */
      time?: google.protobuf.ITimestamp | null;

      /** RequestInitChain chainId */
      chainId?: string | null;

      /** RequestInitChain consensusParams */
      consensusParams?: tendermint.abci.IConsensusParams | null;

      /** RequestInitChain validators */
      validators?: tendermint.abci.IValidatorUpdate[] | null;

      /** RequestInitChain appStateBytes */
      appStateBytes?: Uint8Array | null;

      /** RequestInitChain initialHeight */
      initialHeight?: Long | null;
    }

    /** Represents a RequestInitChain. */
    class RequestInitChain implements IRequestInitChain {
      /**
       * Constructs a new RequestInitChain.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IRequestInitChain);

      /** RequestInitChain time. */
      public time?: google.protobuf.ITimestamp | null;

      /** RequestInitChain chainId. */
      public chainId: string;

      /** RequestInitChain consensusParams. */
      public consensusParams?: tendermint.abci.IConsensusParams | null;

      /** RequestInitChain validators. */
      public validators: tendermint.abci.IValidatorUpdate[];

      /** RequestInitChain appStateBytes. */
      public appStateBytes: Uint8Array;

      /** RequestInitChain initialHeight. */
      public initialHeight: Long;

      /**
       * Creates a new RequestInitChain instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RequestInitChain instance
       */
      public static create(properties?: tendermint.abci.IRequestInitChain): tendermint.abci.RequestInitChain;

      /**
       * Encodes the specified RequestInitChain message. Does not implicitly {@link tendermint.abci.RequestInitChain.verify|verify} messages.
       * @param m RequestInitChain message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IRequestInitChain, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a RequestInitChain message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns RequestInitChain
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.RequestInitChain;
    }

    /** Properties of a RequestQuery. */
    interface IRequestQuery {
      /** RequestQuery data */
      data?: Uint8Array | null;

      /** RequestQuery path */
      path?: string | null;

      /** RequestQuery height */
      height?: Long | null;

      /** RequestQuery prove */
      prove?: boolean | null;
    }

    /** Represents a RequestQuery. */
    class RequestQuery implements IRequestQuery {
      /**
       * Constructs a new RequestQuery.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IRequestQuery);

      /** RequestQuery data. */
      public data: Uint8Array;

      /** RequestQuery path. */
      public path: string;

      /** RequestQuery height. */
      public height: Long;

      /** RequestQuery prove. */
      public prove: boolean;

      /**
       * Creates a new RequestQuery instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RequestQuery instance
       */
      public static create(properties?: tendermint.abci.IRequestQuery): tendermint.abci.RequestQuery;

      /**
       * Encodes the specified RequestQuery message. Does not implicitly {@link tendermint.abci.RequestQuery.verify|verify} messages.
       * @param m RequestQuery message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IRequestQuery, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a RequestQuery message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns RequestQuery
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.RequestQuery;
    }

    /** Properties of a RequestBeginBlock. */
    interface IRequestBeginBlock {
      /** RequestBeginBlock hash */
      hash?: Uint8Array | null;

      /** RequestBeginBlock header */
      header?: tendermint.types.IHeader | null;

      /** RequestBeginBlock lastCommitInfo */
      lastCommitInfo?: tendermint.abci.ILastCommitInfo | null;

      /** RequestBeginBlock byzantineValidators */
      byzantineValidators?: tendermint.abci.IEvidence[] | null;
    }

    /** Represents a RequestBeginBlock. */
    class RequestBeginBlock implements IRequestBeginBlock {
      /**
       * Constructs a new RequestBeginBlock.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IRequestBeginBlock);

      /** RequestBeginBlock hash. */
      public hash: Uint8Array;

      /** RequestBeginBlock header. */
      public header?: tendermint.types.IHeader | null;

      /** RequestBeginBlock lastCommitInfo. */
      public lastCommitInfo?: tendermint.abci.ILastCommitInfo | null;

      /** RequestBeginBlock byzantineValidators. */
      public byzantineValidators: tendermint.abci.IEvidence[];

      /**
       * Creates a new RequestBeginBlock instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RequestBeginBlock instance
       */
      public static create(
        properties?: tendermint.abci.IRequestBeginBlock,
      ): tendermint.abci.RequestBeginBlock;

      /**
       * Encodes the specified RequestBeginBlock message. Does not implicitly {@link tendermint.abci.RequestBeginBlock.verify|verify} messages.
       * @param m RequestBeginBlock message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IRequestBeginBlock, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a RequestBeginBlock message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns RequestBeginBlock
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.RequestBeginBlock;
    }

    /** CheckTxType enum. */
    enum CheckTxType {
      NEW = 0,
      RECHECK = 1,
    }

    /** Properties of a RequestCheckTx. */
    interface IRequestCheckTx {
      /** RequestCheckTx tx */
      tx?: Uint8Array | null;

      /** RequestCheckTx type */
      type?: tendermint.abci.CheckTxType | null;
    }

    /** Represents a RequestCheckTx. */
    class RequestCheckTx implements IRequestCheckTx {
      /**
       * Constructs a new RequestCheckTx.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IRequestCheckTx);

      /** RequestCheckTx tx. */
      public tx: Uint8Array;

      /** RequestCheckTx type. */
      public type: tendermint.abci.CheckTxType;

      /**
       * Creates a new RequestCheckTx instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RequestCheckTx instance
       */
      public static create(properties?: tendermint.abci.IRequestCheckTx): tendermint.abci.RequestCheckTx;

      /**
       * Encodes the specified RequestCheckTx message. Does not implicitly {@link tendermint.abci.RequestCheckTx.verify|verify} messages.
       * @param m RequestCheckTx message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IRequestCheckTx, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a RequestCheckTx message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns RequestCheckTx
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.RequestCheckTx;
    }

    /** Properties of a RequestDeliverTx. */
    interface IRequestDeliverTx {
      /** RequestDeliverTx tx */
      tx?: Uint8Array | null;
    }

    /** Represents a RequestDeliverTx. */
    class RequestDeliverTx implements IRequestDeliverTx {
      /**
       * Constructs a new RequestDeliverTx.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IRequestDeliverTx);

      /** RequestDeliverTx tx. */
      public tx: Uint8Array;

      /**
       * Creates a new RequestDeliverTx instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RequestDeliverTx instance
       */
      public static create(properties?: tendermint.abci.IRequestDeliverTx): tendermint.abci.RequestDeliverTx;

      /**
       * Encodes the specified RequestDeliverTx message. Does not implicitly {@link tendermint.abci.RequestDeliverTx.verify|verify} messages.
       * @param m RequestDeliverTx message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IRequestDeliverTx, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a RequestDeliverTx message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns RequestDeliverTx
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.RequestDeliverTx;
    }

    /** Properties of a RequestEndBlock. */
    interface IRequestEndBlock {
      /** RequestEndBlock height */
      height?: Long | null;
    }

    /** Represents a RequestEndBlock. */
    class RequestEndBlock implements IRequestEndBlock {
      /**
       * Constructs a new RequestEndBlock.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IRequestEndBlock);

      /** RequestEndBlock height. */
      public height: Long;

      /**
       * Creates a new RequestEndBlock instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RequestEndBlock instance
       */
      public static create(properties?: tendermint.abci.IRequestEndBlock): tendermint.abci.RequestEndBlock;

      /**
       * Encodes the specified RequestEndBlock message. Does not implicitly {@link tendermint.abci.RequestEndBlock.verify|verify} messages.
       * @param m RequestEndBlock message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IRequestEndBlock, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a RequestEndBlock message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns RequestEndBlock
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.RequestEndBlock;
    }

    /** Properties of a RequestCommit. */
    interface IRequestCommit {}

    /** Represents a RequestCommit. */
    class RequestCommit implements IRequestCommit {
      /**
       * Constructs a new RequestCommit.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IRequestCommit);

      /**
       * Creates a new RequestCommit instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RequestCommit instance
       */
      public static create(properties?: tendermint.abci.IRequestCommit): tendermint.abci.RequestCommit;

      /**
       * Encodes the specified RequestCommit message. Does not implicitly {@link tendermint.abci.RequestCommit.verify|verify} messages.
       * @param m RequestCommit message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IRequestCommit, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a RequestCommit message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns RequestCommit
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.RequestCommit;
    }

    /** Properties of a RequestListSnapshots. */
    interface IRequestListSnapshots {}

    /** Represents a RequestListSnapshots. */
    class RequestListSnapshots implements IRequestListSnapshots {
      /**
       * Constructs a new RequestListSnapshots.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IRequestListSnapshots);

      /**
       * Creates a new RequestListSnapshots instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RequestListSnapshots instance
       */
      public static create(
        properties?: tendermint.abci.IRequestListSnapshots,
      ): tendermint.abci.RequestListSnapshots;

      /**
       * Encodes the specified RequestListSnapshots message. Does not implicitly {@link tendermint.abci.RequestListSnapshots.verify|verify} messages.
       * @param m RequestListSnapshots message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IRequestListSnapshots, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a RequestListSnapshots message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns RequestListSnapshots
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number,
      ): tendermint.abci.RequestListSnapshots;
    }

    /** Properties of a RequestOfferSnapshot. */
    interface IRequestOfferSnapshot {
      /** RequestOfferSnapshot snapshot */
      snapshot?: tendermint.abci.ISnapshot | null;

      /** RequestOfferSnapshot appHash */
      appHash?: Uint8Array | null;
    }

    /** Represents a RequestOfferSnapshot. */
    class RequestOfferSnapshot implements IRequestOfferSnapshot {
      /**
       * Constructs a new RequestOfferSnapshot.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IRequestOfferSnapshot);

      /** RequestOfferSnapshot snapshot. */
      public snapshot?: tendermint.abci.ISnapshot | null;

      /** RequestOfferSnapshot appHash. */
      public appHash: Uint8Array;

      /**
       * Creates a new RequestOfferSnapshot instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RequestOfferSnapshot instance
       */
      public static create(
        properties?: tendermint.abci.IRequestOfferSnapshot,
      ): tendermint.abci.RequestOfferSnapshot;

      /**
       * Encodes the specified RequestOfferSnapshot message. Does not implicitly {@link tendermint.abci.RequestOfferSnapshot.verify|verify} messages.
       * @param m RequestOfferSnapshot message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IRequestOfferSnapshot, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a RequestOfferSnapshot message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns RequestOfferSnapshot
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number,
      ): tendermint.abci.RequestOfferSnapshot;
    }

    /** Properties of a RequestLoadSnapshotChunk. */
    interface IRequestLoadSnapshotChunk {
      /** RequestLoadSnapshotChunk height */
      height?: Long | null;

      /** RequestLoadSnapshotChunk format */
      format?: number | null;

      /** RequestLoadSnapshotChunk chunk */
      chunk?: number | null;
    }

    /** Represents a RequestLoadSnapshotChunk. */
    class RequestLoadSnapshotChunk implements IRequestLoadSnapshotChunk {
      /**
       * Constructs a new RequestLoadSnapshotChunk.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IRequestLoadSnapshotChunk);

      /** RequestLoadSnapshotChunk height. */
      public height: Long;

      /** RequestLoadSnapshotChunk format. */
      public format: number;

      /** RequestLoadSnapshotChunk chunk. */
      public chunk: number;

      /**
       * Creates a new RequestLoadSnapshotChunk instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RequestLoadSnapshotChunk instance
       */
      public static create(
        properties?: tendermint.abci.IRequestLoadSnapshotChunk,
      ): tendermint.abci.RequestLoadSnapshotChunk;

      /**
       * Encodes the specified RequestLoadSnapshotChunk message. Does not implicitly {@link tendermint.abci.RequestLoadSnapshotChunk.verify|verify} messages.
       * @param m RequestLoadSnapshotChunk message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: tendermint.abci.IRequestLoadSnapshotChunk,
        w?: $protobuf.Writer,
      ): $protobuf.Writer;

      /**
       * Decodes a RequestLoadSnapshotChunk message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns RequestLoadSnapshotChunk
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number,
      ): tendermint.abci.RequestLoadSnapshotChunk;
    }

    /** Properties of a RequestApplySnapshotChunk. */
    interface IRequestApplySnapshotChunk {
      /** RequestApplySnapshotChunk index */
      index?: number | null;

      /** RequestApplySnapshotChunk chunk */
      chunk?: Uint8Array | null;

      /** RequestApplySnapshotChunk sender */
      sender?: string | null;
    }

    /** Represents a RequestApplySnapshotChunk. */
    class RequestApplySnapshotChunk implements IRequestApplySnapshotChunk {
      /**
       * Constructs a new RequestApplySnapshotChunk.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IRequestApplySnapshotChunk);

      /** RequestApplySnapshotChunk index. */
      public index: number;

      /** RequestApplySnapshotChunk chunk. */
      public chunk: Uint8Array;

      /** RequestApplySnapshotChunk sender. */
      public sender: string;

      /**
       * Creates a new RequestApplySnapshotChunk instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RequestApplySnapshotChunk instance
       */
      public static create(
        properties?: tendermint.abci.IRequestApplySnapshotChunk,
      ): tendermint.abci.RequestApplySnapshotChunk;

      /**
       * Encodes the specified RequestApplySnapshotChunk message. Does not implicitly {@link tendermint.abci.RequestApplySnapshotChunk.verify|verify} messages.
       * @param m RequestApplySnapshotChunk message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: tendermint.abci.IRequestApplySnapshotChunk,
        w?: $protobuf.Writer,
      ): $protobuf.Writer;

      /**
       * Decodes a RequestApplySnapshotChunk message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns RequestApplySnapshotChunk
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number,
      ): tendermint.abci.RequestApplySnapshotChunk;
    }

    /** Properties of a Response. */
    interface IResponse {
      /** Response exception */
      exception?: tendermint.abci.IResponseException | null;

      /** Response echo */
      echo?: tendermint.abci.IResponseEcho | null;

      /** Response flush */
      flush?: tendermint.abci.IResponseFlush | null;

      /** Response info */
      info?: tendermint.abci.IResponseInfo | null;

      /** Response setOption */
      setOption?: tendermint.abci.IResponseSetOption | null;

      /** Response initChain */
      initChain?: tendermint.abci.IResponseInitChain | null;

      /** Response query */
      query?: tendermint.abci.IResponseQuery | null;

      /** Response beginBlock */
      beginBlock?: tendermint.abci.IResponseBeginBlock | null;

      /** Response checkTx */
      checkTx?: tendermint.abci.IResponseCheckTx | null;

      /** Response deliverTx */
      deliverTx?: tendermint.abci.IResponseDeliverTx | null;

      /** Response endBlock */
      endBlock?: tendermint.abci.IResponseEndBlock | null;

      /** Response commit */
      commit?: tendermint.abci.IResponseCommit | null;

      /** Response listSnapshots */
      listSnapshots?: tendermint.abci.IResponseListSnapshots | null;

      /** Response offerSnapshot */
      offerSnapshot?: tendermint.abci.IResponseOfferSnapshot | null;

      /** Response loadSnapshotChunk */
      loadSnapshotChunk?: tendermint.abci.IResponseLoadSnapshotChunk | null;

      /** Response applySnapshotChunk */
      applySnapshotChunk?: tendermint.abci.IResponseApplySnapshotChunk | null;
    }

    /** Represents a Response. */
    class Response implements IResponse {
      /**
       * Constructs a new Response.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IResponse);

      /** Response exception. */
      public exception?: tendermint.abci.IResponseException | null;

      /** Response echo. */
      public echo?: tendermint.abci.IResponseEcho | null;

      /** Response flush. */
      public flush?: tendermint.abci.IResponseFlush | null;

      /** Response info. */
      public info?: tendermint.abci.IResponseInfo | null;

      /** Response setOption. */
      public setOption?: tendermint.abci.IResponseSetOption | null;

      /** Response initChain. */
      public initChain?: tendermint.abci.IResponseInitChain | null;

      /** Response query. */
      public query?: tendermint.abci.IResponseQuery | null;

      /** Response beginBlock. */
      public beginBlock?: tendermint.abci.IResponseBeginBlock | null;

      /** Response checkTx. */
      public checkTx?: tendermint.abci.IResponseCheckTx | null;

      /** Response deliverTx. */
      public deliverTx?: tendermint.abci.IResponseDeliverTx | null;

      /** Response endBlock. */
      public endBlock?: tendermint.abci.IResponseEndBlock | null;

      /** Response commit. */
      public commit?: tendermint.abci.IResponseCommit | null;

      /** Response listSnapshots. */
      public listSnapshots?: tendermint.abci.IResponseListSnapshots | null;

      /** Response offerSnapshot. */
      public offerSnapshot?: tendermint.abci.IResponseOfferSnapshot | null;

      /** Response loadSnapshotChunk. */
      public loadSnapshotChunk?: tendermint.abci.IResponseLoadSnapshotChunk | null;

      /** Response applySnapshotChunk. */
      public applySnapshotChunk?: tendermint.abci.IResponseApplySnapshotChunk | null;

      /** Response value. */
      public value?:
        | "exception"
        | "echo"
        | "flush"
        | "info"
        | "setOption"
        | "initChain"
        | "query"
        | "beginBlock"
        | "checkTx"
        | "deliverTx"
        | "endBlock"
        | "commit"
        | "listSnapshots"
        | "offerSnapshot"
        | "loadSnapshotChunk"
        | "applySnapshotChunk";

      /**
       * Creates a new Response instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Response instance
       */
      public static create(properties?: tendermint.abci.IResponse): tendermint.abci.Response;

      /**
       * Encodes the specified Response message. Does not implicitly {@link tendermint.abci.Response.verify|verify} messages.
       * @param m Response message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IResponse, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.Response;
    }

    /** Properties of a ResponseException. */
    interface IResponseException {
      /** ResponseException error */
      error?: string | null;
    }

    /** Represents a ResponseException. */
    class ResponseException implements IResponseException {
      /**
       * Constructs a new ResponseException.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IResponseException);

      /** ResponseException error. */
      public error: string;

      /**
       * Creates a new ResponseException instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ResponseException instance
       */
      public static create(
        properties?: tendermint.abci.IResponseException,
      ): tendermint.abci.ResponseException;

      /**
       * Encodes the specified ResponseException message. Does not implicitly {@link tendermint.abci.ResponseException.verify|verify} messages.
       * @param m ResponseException message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IResponseException, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a ResponseException message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ResponseException
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.ResponseException;
    }

    /** Properties of a ResponseEcho. */
    interface IResponseEcho {
      /** ResponseEcho message */
      message?: string | null;
    }

    /** Represents a ResponseEcho. */
    class ResponseEcho implements IResponseEcho {
      /**
       * Constructs a new ResponseEcho.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IResponseEcho);

      /** ResponseEcho message. */
      public message: string;

      /**
       * Creates a new ResponseEcho instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ResponseEcho instance
       */
      public static create(properties?: tendermint.abci.IResponseEcho): tendermint.abci.ResponseEcho;

      /**
       * Encodes the specified ResponseEcho message. Does not implicitly {@link tendermint.abci.ResponseEcho.verify|verify} messages.
       * @param m ResponseEcho message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IResponseEcho, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a ResponseEcho message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ResponseEcho
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.ResponseEcho;
    }

    /** Properties of a ResponseFlush. */
    interface IResponseFlush {}

    /** Represents a ResponseFlush. */
    class ResponseFlush implements IResponseFlush {
      /**
       * Constructs a new ResponseFlush.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IResponseFlush);

      /**
       * Creates a new ResponseFlush instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ResponseFlush instance
       */
      public static create(properties?: tendermint.abci.IResponseFlush): tendermint.abci.ResponseFlush;

      /**
       * Encodes the specified ResponseFlush message. Does not implicitly {@link tendermint.abci.ResponseFlush.verify|verify} messages.
       * @param m ResponseFlush message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IResponseFlush, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a ResponseFlush message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ResponseFlush
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.ResponseFlush;
    }

    /** Properties of a ResponseInfo. */
    interface IResponseInfo {
      /** ResponseInfo data */
      data?: string | null;

      /** ResponseInfo version */
      version?: string | null;

      /** ResponseInfo appVersion */
      appVersion?: Long | null;

      /** ResponseInfo lastBlockHeight */
      lastBlockHeight?: Long | null;

      /** ResponseInfo lastBlockAppHash */
      lastBlockAppHash?: Uint8Array | null;
    }

    /** Represents a ResponseInfo. */
    class ResponseInfo implements IResponseInfo {
      /**
       * Constructs a new ResponseInfo.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IResponseInfo);

      /** ResponseInfo data. */
      public data: string;

      /** ResponseInfo version. */
      public version: string;

      /** ResponseInfo appVersion. */
      public appVersion: Long;

      /** ResponseInfo lastBlockHeight. */
      public lastBlockHeight: Long;

      /** ResponseInfo lastBlockAppHash. */
      public lastBlockAppHash: Uint8Array;

      /**
       * Creates a new ResponseInfo instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ResponseInfo instance
       */
      public static create(properties?: tendermint.abci.IResponseInfo): tendermint.abci.ResponseInfo;

      /**
       * Encodes the specified ResponseInfo message. Does not implicitly {@link tendermint.abci.ResponseInfo.verify|verify} messages.
       * @param m ResponseInfo message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IResponseInfo, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a ResponseInfo message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ResponseInfo
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.ResponseInfo;
    }

    /** Properties of a ResponseSetOption. */
    interface IResponseSetOption {
      /** ResponseSetOption code */
      code?: number | null;

      /** ResponseSetOption log */
      log?: string | null;

      /** ResponseSetOption info */
      info?: string | null;
    }

    /** Represents a ResponseSetOption. */
    class ResponseSetOption implements IResponseSetOption {
      /**
       * Constructs a new ResponseSetOption.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IResponseSetOption);

      /** ResponseSetOption code. */
      public code: number;

      /** ResponseSetOption log. */
      public log: string;

      /** ResponseSetOption info. */
      public info: string;

      /**
       * Creates a new ResponseSetOption instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ResponseSetOption instance
       */
      public static create(
        properties?: tendermint.abci.IResponseSetOption,
      ): tendermint.abci.ResponseSetOption;

      /**
       * Encodes the specified ResponseSetOption message. Does not implicitly {@link tendermint.abci.ResponseSetOption.verify|verify} messages.
       * @param m ResponseSetOption message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IResponseSetOption, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a ResponseSetOption message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ResponseSetOption
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.ResponseSetOption;
    }

    /** Properties of a ResponseInitChain. */
    interface IResponseInitChain {
      /** ResponseInitChain consensusParams */
      consensusParams?: tendermint.abci.IConsensusParams | null;

      /** ResponseInitChain validators */
      validators?: tendermint.abci.IValidatorUpdate[] | null;

      /** ResponseInitChain appHash */
      appHash?: Uint8Array | null;
    }

    /** Represents a ResponseInitChain. */
    class ResponseInitChain implements IResponseInitChain {
      /**
       * Constructs a new ResponseInitChain.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IResponseInitChain);

      /** ResponseInitChain consensusParams. */
      public consensusParams?: tendermint.abci.IConsensusParams | null;

      /** ResponseInitChain validators. */
      public validators: tendermint.abci.IValidatorUpdate[];

      /** ResponseInitChain appHash. */
      public appHash: Uint8Array;

      /**
       * Creates a new ResponseInitChain instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ResponseInitChain instance
       */
      public static create(
        properties?: tendermint.abci.IResponseInitChain,
      ): tendermint.abci.ResponseInitChain;

      /**
       * Encodes the specified ResponseInitChain message. Does not implicitly {@link tendermint.abci.ResponseInitChain.verify|verify} messages.
       * @param m ResponseInitChain message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IResponseInitChain, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a ResponseInitChain message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ResponseInitChain
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.ResponseInitChain;
    }

    /** Properties of a ResponseQuery. */
    interface IResponseQuery {
      /** ResponseQuery code */
      code?: number | null;

      /** ResponseQuery log */
      log?: string | null;

      /** ResponseQuery info */
      info?: string | null;

      /** ResponseQuery index */
      index?: Long | null;

      /** ResponseQuery key */
      key?: Uint8Array | null;

      /** ResponseQuery value */
      value?: Uint8Array | null;

      /** ResponseQuery proofOps */
      proofOps?: tendermint.crypto.IProofOps | null;

      /** ResponseQuery height */
      height?: Long | null;

      /** ResponseQuery codespace */
      codespace?: string | null;
    }

    /** Represents a ResponseQuery. */
    class ResponseQuery implements IResponseQuery {
      /**
       * Constructs a new ResponseQuery.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IResponseQuery);

      /** ResponseQuery code. */
      public code: number;

      /** ResponseQuery log. */
      public log: string;

      /** ResponseQuery info. */
      public info: string;

      /** ResponseQuery index. */
      public index: Long;

      /** ResponseQuery key. */
      public key: Uint8Array;

      /** ResponseQuery value. */
      public value: Uint8Array;

      /** ResponseQuery proofOps. */
      public proofOps?: tendermint.crypto.IProofOps | null;

      /** ResponseQuery height. */
      public height: Long;

      /** ResponseQuery codespace. */
      public codespace: string;

      /**
       * Creates a new ResponseQuery instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ResponseQuery instance
       */
      public static create(properties?: tendermint.abci.IResponseQuery): tendermint.abci.ResponseQuery;

      /**
       * Encodes the specified ResponseQuery message. Does not implicitly {@link tendermint.abci.ResponseQuery.verify|verify} messages.
       * @param m ResponseQuery message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IResponseQuery, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a ResponseQuery message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ResponseQuery
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.ResponseQuery;
    }

    /** Properties of a ResponseBeginBlock. */
    interface IResponseBeginBlock {
      /** ResponseBeginBlock events */
      events?: tendermint.abci.IEvent[] | null;
    }

    /** Represents a ResponseBeginBlock. */
    class ResponseBeginBlock implements IResponseBeginBlock {
      /**
       * Constructs a new ResponseBeginBlock.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IResponseBeginBlock);

      /** ResponseBeginBlock events. */
      public events: tendermint.abci.IEvent[];

      /**
       * Creates a new ResponseBeginBlock instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ResponseBeginBlock instance
       */
      public static create(
        properties?: tendermint.abci.IResponseBeginBlock,
      ): tendermint.abci.ResponseBeginBlock;

      /**
       * Encodes the specified ResponseBeginBlock message. Does not implicitly {@link tendermint.abci.ResponseBeginBlock.verify|verify} messages.
       * @param m ResponseBeginBlock message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IResponseBeginBlock, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a ResponseBeginBlock message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ResponseBeginBlock
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.ResponseBeginBlock;
    }

    /** Properties of a ResponseCheckTx. */
    interface IResponseCheckTx {
      /** ResponseCheckTx code */
      code?: number | null;

      /** ResponseCheckTx data */
      data?: Uint8Array | null;

      /** ResponseCheckTx log */
      log?: string | null;

      /** ResponseCheckTx info */
      info?: string | null;

      /** ResponseCheckTx gasWanted */
      gasWanted?: Long | null;

      /** ResponseCheckTx gasUsed */
      gasUsed?: Long | null;

      /** ResponseCheckTx events */
      events?: tendermint.abci.IEvent[] | null;

      /** ResponseCheckTx codespace */
      codespace?: string | null;
    }

    /** Represents a ResponseCheckTx. */
    class ResponseCheckTx implements IResponseCheckTx {
      /**
       * Constructs a new ResponseCheckTx.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IResponseCheckTx);

      /** ResponseCheckTx code. */
      public code: number;

      /** ResponseCheckTx data. */
      public data: Uint8Array;

      /** ResponseCheckTx log. */
      public log: string;

      /** ResponseCheckTx info. */
      public info: string;

      /** ResponseCheckTx gasWanted. */
      public gasWanted: Long;

      /** ResponseCheckTx gasUsed. */
      public gasUsed: Long;

      /** ResponseCheckTx events. */
      public events: tendermint.abci.IEvent[];

      /** ResponseCheckTx codespace. */
      public codespace: string;

      /**
       * Creates a new ResponseCheckTx instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ResponseCheckTx instance
       */
      public static create(properties?: tendermint.abci.IResponseCheckTx): tendermint.abci.ResponseCheckTx;

      /**
       * Encodes the specified ResponseCheckTx message. Does not implicitly {@link tendermint.abci.ResponseCheckTx.verify|verify} messages.
       * @param m ResponseCheckTx message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IResponseCheckTx, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a ResponseCheckTx message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ResponseCheckTx
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.ResponseCheckTx;
    }

    /** Properties of a ResponseDeliverTx. */
    interface IResponseDeliverTx {
      /** ResponseDeliverTx code */
      code?: number | null;

      /** ResponseDeliverTx data */
      data?: Uint8Array | null;

      /** ResponseDeliverTx log */
      log?: string | null;

      /** ResponseDeliverTx info */
      info?: string | null;

      /** ResponseDeliverTx gasWanted */
      gasWanted?: Long | null;

      /** ResponseDeliverTx gasUsed */
      gasUsed?: Long | null;

      /** ResponseDeliverTx events */
      events?: tendermint.abci.IEvent[] | null;

      /** ResponseDeliverTx codespace */
      codespace?: string | null;
    }

    /** Represents a ResponseDeliverTx. */
    class ResponseDeliverTx implements IResponseDeliverTx {
      /**
       * Constructs a new ResponseDeliverTx.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IResponseDeliverTx);

      /** ResponseDeliverTx code. */
      public code: number;

      /** ResponseDeliverTx data. */
      public data: Uint8Array;

      /** ResponseDeliverTx log. */
      public log: string;

      /** ResponseDeliverTx info. */
      public info: string;

      /** ResponseDeliverTx gasWanted. */
      public gasWanted: Long;

      /** ResponseDeliverTx gasUsed. */
      public gasUsed: Long;

      /** ResponseDeliverTx events. */
      public events: tendermint.abci.IEvent[];

      /** ResponseDeliverTx codespace. */
      public codespace: string;

      /**
       * Creates a new ResponseDeliverTx instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ResponseDeliverTx instance
       */
      public static create(
        properties?: tendermint.abci.IResponseDeliverTx,
      ): tendermint.abci.ResponseDeliverTx;

      /**
       * Encodes the specified ResponseDeliverTx message. Does not implicitly {@link tendermint.abci.ResponseDeliverTx.verify|verify} messages.
       * @param m ResponseDeliverTx message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IResponseDeliverTx, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a ResponseDeliverTx message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ResponseDeliverTx
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.ResponseDeliverTx;
    }

    /** Properties of a ResponseEndBlock. */
    interface IResponseEndBlock {
      /** ResponseEndBlock validatorUpdates */
      validatorUpdates?: tendermint.abci.IValidatorUpdate[] | null;

      /** ResponseEndBlock consensusParamUpdates */
      consensusParamUpdates?: tendermint.abci.IConsensusParams | null;

      /** ResponseEndBlock events */
      events?: tendermint.abci.IEvent[] | null;
    }

    /** Represents a ResponseEndBlock. */
    class ResponseEndBlock implements IResponseEndBlock {
      /**
       * Constructs a new ResponseEndBlock.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IResponseEndBlock);

      /** ResponseEndBlock validatorUpdates. */
      public validatorUpdates: tendermint.abci.IValidatorUpdate[];

      /** ResponseEndBlock consensusParamUpdates. */
      public consensusParamUpdates?: tendermint.abci.IConsensusParams | null;

      /** ResponseEndBlock events. */
      public events: tendermint.abci.IEvent[];

      /**
       * Creates a new ResponseEndBlock instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ResponseEndBlock instance
       */
      public static create(properties?: tendermint.abci.IResponseEndBlock): tendermint.abci.ResponseEndBlock;

      /**
       * Encodes the specified ResponseEndBlock message. Does not implicitly {@link tendermint.abci.ResponseEndBlock.verify|verify} messages.
       * @param m ResponseEndBlock message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IResponseEndBlock, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a ResponseEndBlock message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ResponseEndBlock
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.ResponseEndBlock;
    }

    /** Properties of a ResponseCommit. */
    interface IResponseCommit {
      /** ResponseCommit data */
      data?: Uint8Array | null;

      /** ResponseCommit retainHeight */
      retainHeight?: Long | null;
    }

    /** Represents a ResponseCommit. */
    class ResponseCommit implements IResponseCommit {
      /**
       * Constructs a new ResponseCommit.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IResponseCommit);

      /** ResponseCommit data. */
      public data: Uint8Array;

      /** ResponseCommit retainHeight. */
      public retainHeight: Long;

      /**
       * Creates a new ResponseCommit instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ResponseCommit instance
       */
      public static create(properties?: tendermint.abci.IResponseCommit): tendermint.abci.ResponseCommit;

      /**
       * Encodes the specified ResponseCommit message. Does not implicitly {@link tendermint.abci.ResponseCommit.verify|verify} messages.
       * @param m ResponseCommit message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IResponseCommit, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a ResponseCommit message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ResponseCommit
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.ResponseCommit;
    }

    /** Properties of a ResponseListSnapshots. */
    interface IResponseListSnapshots {
      /** ResponseListSnapshots snapshots */
      snapshots?: tendermint.abci.ISnapshot[] | null;
    }

    /** Represents a ResponseListSnapshots. */
    class ResponseListSnapshots implements IResponseListSnapshots {
      /**
       * Constructs a new ResponseListSnapshots.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IResponseListSnapshots);

      /** ResponseListSnapshots snapshots. */
      public snapshots: tendermint.abci.ISnapshot[];

      /**
       * Creates a new ResponseListSnapshots instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ResponseListSnapshots instance
       */
      public static create(
        properties?: tendermint.abci.IResponseListSnapshots,
      ): tendermint.abci.ResponseListSnapshots;

      /**
       * Encodes the specified ResponseListSnapshots message. Does not implicitly {@link tendermint.abci.ResponseListSnapshots.verify|verify} messages.
       * @param m ResponseListSnapshots message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IResponseListSnapshots, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a ResponseListSnapshots message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ResponseListSnapshots
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number,
      ): tendermint.abci.ResponseListSnapshots;
    }

    /** Properties of a ResponseOfferSnapshot. */
    interface IResponseOfferSnapshot {
      /** ResponseOfferSnapshot result */
      result?: tendermint.abci.ResponseOfferSnapshot.Result | null;
    }

    /** Represents a ResponseOfferSnapshot. */
    class ResponseOfferSnapshot implements IResponseOfferSnapshot {
      /**
       * Constructs a new ResponseOfferSnapshot.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IResponseOfferSnapshot);

      /** ResponseOfferSnapshot result. */
      public result: tendermint.abci.ResponseOfferSnapshot.Result;

      /**
       * Creates a new ResponseOfferSnapshot instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ResponseOfferSnapshot instance
       */
      public static create(
        properties?: tendermint.abci.IResponseOfferSnapshot,
      ): tendermint.abci.ResponseOfferSnapshot;

      /**
       * Encodes the specified ResponseOfferSnapshot message. Does not implicitly {@link tendermint.abci.ResponseOfferSnapshot.verify|verify} messages.
       * @param m ResponseOfferSnapshot message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IResponseOfferSnapshot, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a ResponseOfferSnapshot message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ResponseOfferSnapshot
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number,
      ): tendermint.abci.ResponseOfferSnapshot;
    }

    namespace ResponseOfferSnapshot {
      /** Result enum. */
      enum Result {
        UNKNOWN = 0,
        ACCEPT = 1,
        ABORT = 2,
        REJECT = 3,
        REJECT_FORMAT = 4,
        REJECT_SENDER = 5,
      }
    }

    /** Properties of a ResponseLoadSnapshotChunk. */
    interface IResponseLoadSnapshotChunk {
      /** ResponseLoadSnapshotChunk chunk */
      chunk?: Uint8Array | null;
    }

    /** Represents a ResponseLoadSnapshotChunk. */
    class ResponseLoadSnapshotChunk implements IResponseLoadSnapshotChunk {
      /**
       * Constructs a new ResponseLoadSnapshotChunk.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IResponseLoadSnapshotChunk);

      /** ResponseLoadSnapshotChunk chunk. */
      public chunk: Uint8Array;

      /**
       * Creates a new ResponseLoadSnapshotChunk instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ResponseLoadSnapshotChunk instance
       */
      public static create(
        properties?: tendermint.abci.IResponseLoadSnapshotChunk,
      ): tendermint.abci.ResponseLoadSnapshotChunk;

      /**
       * Encodes the specified ResponseLoadSnapshotChunk message. Does not implicitly {@link tendermint.abci.ResponseLoadSnapshotChunk.verify|verify} messages.
       * @param m ResponseLoadSnapshotChunk message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: tendermint.abci.IResponseLoadSnapshotChunk,
        w?: $protobuf.Writer,
      ): $protobuf.Writer;

      /**
       * Decodes a ResponseLoadSnapshotChunk message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ResponseLoadSnapshotChunk
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number,
      ): tendermint.abci.ResponseLoadSnapshotChunk;
    }

    /** Properties of a ResponseApplySnapshotChunk. */
    interface IResponseApplySnapshotChunk {
      /** ResponseApplySnapshotChunk result */
      result?: tendermint.abci.ResponseApplySnapshotChunk.Result | null;

      /** ResponseApplySnapshotChunk refetchChunks */
      refetchChunks?: number[] | null;

      /** ResponseApplySnapshotChunk rejectSenders */
      rejectSenders?: string[] | null;
    }

    /** Represents a ResponseApplySnapshotChunk. */
    class ResponseApplySnapshotChunk implements IResponseApplySnapshotChunk {
      /**
       * Constructs a new ResponseApplySnapshotChunk.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IResponseApplySnapshotChunk);

      /** ResponseApplySnapshotChunk result. */
      public result: tendermint.abci.ResponseApplySnapshotChunk.Result;

      /** ResponseApplySnapshotChunk refetchChunks. */
      public refetchChunks: number[];

      /** ResponseApplySnapshotChunk rejectSenders. */
      public rejectSenders: string[];

      /**
       * Creates a new ResponseApplySnapshotChunk instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ResponseApplySnapshotChunk instance
       */
      public static create(
        properties?: tendermint.abci.IResponseApplySnapshotChunk,
      ): tendermint.abci.ResponseApplySnapshotChunk;

      /**
       * Encodes the specified ResponseApplySnapshotChunk message. Does not implicitly {@link tendermint.abci.ResponseApplySnapshotChunk.verify|verify} messages.
       * @param m ResponseApplySnapshotChunk message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: tendermint.abci.IResponseApplySnapshotChunk,
        w?: $protobuf.Writer,
      ): $protobuf.Writer;

      /**
       * Decodes a ResponseApplySnapshotChunk message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ResponseApplySnapshotChunk
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number,
      ): tendermint.abci.ResponseApplySnapshotChunk;
    }

    namespace ResponseApplySnapshotChunk {
      /** Result enum. */
      enum Result {
        UNKNOWN = 0,
        ACCEPT = 1,
        ABORT = 2,
        RETRY = 3,
        RETRY_SNAPSHOT = 4,
        REJECT_SNAPSHOT = 5,
      }
    }

    /** Properties of a ConsensusParams. */
    interface IConsensusParams {
      /** ConsensusParams block */
      block?: tendermint.abci.IBlockParams | null;

      /** ConsensusParams evidence */
      evidence?: tendermint.types.IEvidenceParams | null;

      /** ConsensusParams validator */
      validator?: tendermint.types.IValidatorParams | null;

      /** ConsensusParams version */
      version?: tendermint.types.IVersionParams | null;
    }

    /** Represents a ConsensusParams. */
    class ConsensusParams implements IConsensusParams {
      /**
       * Constructs a new ConsensusParams.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IConsensusParams);

      /** ConsensusParams block. */
      public block?: tendermint.abci.IBlockParams | null;

      /** ConsensusParams evidence. */
      public evidence?: tendermint.types.IEvidenceParams | null;

      /** ConsensusParams validator. */
      public validator?: tendermint.types.IValidatorParams | null;

      /** ConsensusParams version. */
      public version?: tendermint.types.IVersionParams | null;

      /**
       * Creates a new ConsensusParams instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ConsensusParams instance
       */
      public static create(properties?: tendermint.abci.IConsensusParams): tendermint.abci.ConsensusParams;

      /**
       * Encodes the specified ConsensusParams message. Does not implicitly {@link tendermint.abci.ConsensusParams.verify|verify} messages.
       * @param m ConsensusParams message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IConsensusParams, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a ConsensusParams message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ConsensusParams
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.ConsensusParams;
    }

    /** Properties of a BlockParams. */
    interface IBlockParams {
      /** BlockParams maxBytes */
      maxBytes?: Long | null;

      /** BlockParams maxGas */
      maxGas?: Long | null;
    }

    /** Represents a BlockParams. */
    class BlockParams implements IBlockParams {
      /**
       * Constructs a new BlockParams.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IBlockParams);

      /** BlockParams maxBytes. */
      public maxBytes: Long;

      /** BlockParams maxGas. */
      public maxGas: Long;

      /**
       * Creates a new BlockParams instance using the specified properties.
       * @param [properties] Properties to set
       * @returns BlockParams instance
       */
      public static create(properties?: tendermint.abci.IBlockParams): tendermint.abci.BlockParams;

      /**
       * Encodes the specified BlockParams message. Does not implicitly {@link tendermint.abci.BlockParams.verify|verify} messages.
       * @param m BlockParams message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IBlockParams, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a BlockParams message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns BlockParams
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.BlockParams;
    }

    /** Properties of a LastCommitInfo. */
    interface ILastCommitInfo {
      /** LastCommitInfo round */
      round?: number | null;

      /** LastCommitInfo votes */
      votes?: tendermint.abci.IVoteInfo[] | null;
    }

    /** Represents a LastCommitInfo. */
    class LastCommitInfo implements ILastCommitInfo {
      /**
       * Constructs a new LastCommitInfo.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.ILastCommitInfo);

      /** LastCommitInfo round. */
      public round: number;

      /** LastCommitInfo votes. */
      public votes: tendermint.abci.IVoteInfo[];

      /**
       * Creates a new LastCommitInfo instance using the specified properties.
       * @param [properties] Properties to set
       * @returns LastCommitInfo instance
       */
      public static create(properties?: tendermint.abci.ILastCommitInfo): tendermint.abci.LastCommitInfo;

      /**
       * Encodes the specified LastCommitInfo message. Does not implicitly {@link tendermint.abci.LastCommitInfo.verify|verify} messages.
       * @param m LastCommitInfo message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.ILastCommitInfo, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a LastCommitInfo message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns LastCommitInfo
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.LastCommitInfo;
    }

    /** Properties of an Event. */
    interface IEvent {
      /** Event type */
      type?: string | null;

      /** Event attributes */
      attributes?: tendermint.abci.IEventAttribute[] | null;
    }

    /** Represents an Event. */
    class Event implements IEvent {
      /**
       * Constructs a new Event.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IEvent);

      /** Event type. */
      public type: string;

      /** Event attributes. */
      public attributes: tendermint.abci.IEventAttribute[];

      /**
       * Creates a new Event instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Event instance
       */
      public static create(properties?: tendermint.abci.IEvent): tendermint.abci.Event;

      /**
       * Encodes the specified Event message. Does not implicitly {@link tendermint.abci.Event.verify|verify} messages.
       * @param m Event message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IEvent, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes an Event message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Event
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.Event;
    }

    /** Properties of an EventAttribute. */
    interface IEventAttribute {
      /** EventAttribute key */
      key?: Uint8Array | null;

      /** EventAttribute value */
      value?: Uint8Array | null;

      /** EventAttribute index */
      index?: boolean | null;
    }

    /** Represents an EventAttribute. */
    class EventAttribute implements IEventAttribute {
      /**
       * Constructs a new EventAttribute.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IEventAttribute);

      /** EventAttribute key. */
      public key: Uint8Array;

      /** EventAttribute value. */
      public value: Uint8Array;

      /** EventAttribute index. */
      public index: boolean;

      /**
       * Creates a new EventAttribute instance using the specified properties.
       * @param [properties] Properties to set
       * @returns EventAttribute instance
       */
      public static create(properties?: tendermint.abci.IEventAttribute): tendermint.abci.EventAttribute;

      /**
       * Encodes the specified EventAttribute message. Does not implicitly {@link tendermint.abci.EventAttribute.verify|verify} messages.
       * @param m EventAttribute message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IEventAttribute, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes an EventAttribute message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns EventAttribute
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.EventAttribute;
    }

    /** Properties of a TxResult. */
    interface ITxResult {
      /** TxResult height */
      height?: Long | null;

      /** TxResult index */
      index?: number | null;

      /** TxResult tx */
      tx?: Uint8Array | null;

      /** TxResult result */
      result?: tendermint.abci.IResponseDeliverTx | null;
    }

    /** Represents a TxResult. */
    class TxResult implements ITxResult {
      /**
       * Constructs a new TxResult.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.ITxResult);

      /** TxResult height. */
      public height: Long;

      /** TxResult index. */
      public index: number;

      /** TxResult tx. */
      public tx: Uint8Array;

      /** TxResult result. */
      public result?: tendermint.abci.IResponseDeliverTx | null;

      /**
       * Creates a new TxResult instance using the specified properties.
       * @param [properties] Properties to set
       * @returns TxResult instance
       */
      public static create(properties?: tendermint.abci.ITxResult): tendermint.abci.TxResult;

      /**
       * Encodes the specified TxResult message. Does not implicitly {@link tendermint.abci.TxResult.verify|verify} messages.
       * @param m TxResult message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.ITxResult, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a TxResult message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns TxResult
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.TxResult;
    }

    /** Properties of a Validator. */
    interface IValidator {
      /** Validator address */
      address?: Uint8Array | null;

      /** Validator power */
      power?: Long | null;
    }

    /** Represents a Validator. */
    class Validator implements IValidator {
      /**
       * Constructs a new Validator.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IValidator);

      /** Validator address. */
      public address: Uint8Array;

      /** Validator power. */
      public power: Long;

      /**
       * Creates a new Validator instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Validator instance
       */
      public static create(properties?: tendermint.abci.IValidator): tendermint.abci.Validator;

      /**
       * Encodes the specified Validator message. Does not implicitly {@link tendermint.abci.Validator.verify|verify} messages.
       * @param m Validator message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IValidator, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a Validator message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Validator
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.Validator;
    }

    /** Properties of a ValidatorUpdate. */
    interface IValidatorUpdate {
      /** ValidatorUpdate pubKey */
      pubKey?: tendermint.crypto.IPublicKey | null;

      /** ValidatorUpdate power */
      power?: Long | null;
    }

    /** Represents a ValidatorUpdate. */
    class ValidatorUpdate implements IValidatorUpdate {
      /**
       * Constructs a new ValidatorUpdate.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IValidatorUpdate);

      /** ValidatorUpdate pubKey. */
      public pubKey?: tendermint.crypto.IPublicKey | null;

      /** ValidatorUpdate power. */
      public power: Long;

      /**
       * Creates a new ValidatorUpdate instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ValidatorUpdate instance
       */
      public static create(properties?: tendermint.abci.IValidatorUpdate): tendermint.abci.ValidatorUpdate;

      /**
       * Encodes the specified ValidatorUpdate message. Does not implicitly {@link tendermint.abci.ValidatorUpdate.verify|verify} messages.
       * @param m ValidatorUpdate message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IValidatorUpdate, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a ValidatorUpdate message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ValidatorUpdate
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.ValidatorUpdate;
    }

    /** Properties of a VoteInfo. */
    interface IVoteInfo {
      /** VoteInfo validator */
      validator?: tendermint.abci.IValidator | null;

      /** VoteInfo signedLastBlock */
      signedLastBlock?: boolean | null;
    }

    /** Represents a VoteInfo. */
    class VoteInfo implements IVoteInfo {
      /**
       * Constructs a new VoteInfo.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IVoteInfo);

      /** VoteInfo validator. */
      public validator?: tendermint.abci.IValidator | null;

      /** VoteInfo signedLastBlock. */
      public signedLastBlock: boolean;

      /**
       * Creates a new VoteInfo instance using the specified properties.
       * @param [properties] Properties to set
       * @returns VoteInfo instance
       */
      public static create(properties?: tendermint.abci.IVoteInfo): tendermint.abci.VoteInfo;

      /**
       * Encodes the specified VoteInfo message. Does not implicitly {@link tendermint.abci.VoteInfo.verify|verify} messages.
       * @param m VoteInfo message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IVoteInfo, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a VoteInfo message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns VoteInfo
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.VoteInfo;
    }

    /** EvidenceType enum. */
    enum EvidenceType {
      UNKNOWN = 0,
      DUPLICATE_VOTE = 1,
      LIGHT_CLIENT_ATTACK = 2,
    }

    /** Properties of an Evidence. */
    interface IEvidence {
      /** Evidence type */
      type?: tendermint.abci.EvidenceType | null;

      /** Evidence validator */
      validator?: tendermint.abci.IValidator | null;

      /** Evidence height */
      height?: Long | null;

      /** Evidence time */
      time?: google.protobuf.ITimestamp | null;

      /** Evidence totalVotingPower */
      totalVotingPower?: Long | null;
    }

    /** Represents an Evidence. */
    class Evidence implements IEvidence {
      /**
       * Constructs a new Evidence.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.IEvidence);

      /** Evidence type. */
      public type: tendermint.abci.EvidenceType;

      /** Evidence validator. */
      public validator?: tendermint.abci.IValidator | null;

      /** Evidence height. */
      public height: Long;

      /** Evidence time. */
      public time?: google.protobuf.ITimestamp | null;

      /** Evidence totalVotingPower. */
      public totalVotingPower: Long;

      /**
       * Creates a new Evidence instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Evidence instance
       */
      public static create(properties?: tendermint.abci.IEvidence): tendermint.abci.Evidence;

      /**
       * Encodes the specified Evidence message. Does not implicitly {@link tendermint.abci.Evidence.verify|verify} messages.
       * @param m Evidence message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.IEvidence, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes an Evidence message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Evidence
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.Evidence;
    }

    /** Properties of a Snapshot. */
    interface ISnapshot {
      /** Snapshot height */
      height?: Long | null;

      /** Snapshot format */
      format?: number | null;

      /** Snapshot chunks */
      chunks?: number | null;

      /** Snapshot hash */
      hash?: Uint8Array | null;

      /** Snapshot metadata */
      metadata?: Uint8Array | null;
    }

    /** Represents a Snapshot. */
    class Snapshot implements ISnapshot {
      /**
       * Constructs a new Snapshot.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.abci.ISnapshot);

      /** Snapshot height. */
      public height: Long;

      /** Snapshot format. */
      public format: number;

      /** Snapshot chunks. */
      public chunks: number;

      /** Snapshot hash. */
      public hash: Uint8Array;

      /** Snapshot metadata. */
      public metadata: Uint8Array;

      /**
       * Creates a new Snapshot instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Snapshot instance
       */
      public static create(properties?: tendermint.abci.ISnapshot): tendermint.abci.Snapshot;

      /**
       * Encodes the specified Snapshot message. Does not implicitly {@link tendermint.abci.Snapshot.verify|verify} messages.
       * @param m Snapshot message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.abci.ISnapshot, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a Snapshot message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Snapshot
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.abci.Snapshot;
    }

    /** Represents a ABCIApplication */
    class ABCIApplication extends $protobuf.rpc.Service {
      /**
       * Constructs a new ABCIApplication service.
       * @param rpcImpl RPC implementation
       * @param [requestDelimited=false] Whether requests are length-delimited
       * @param [responseDelimited=false] Whether responses are length-delimited
       */
      constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

      /**
       * Creates new ABCIApplication service using the specified rpc implementation.
       * @param rpcImpl RPC implementation
       * @param [requestDelimited=false] Whether requests are length-delimited
       * @param [responseDelimited=false] Whether responses are length-delimited
       * @returns RPC service. Useful where requests and/or responses are streamed.
       */
      public static create(
        rpcImpl: $protobuf.RPCImpl,
        requestDelimited?: boolean,
        responseDelimited?: boolean,
      ): ABCIApplication;

      /**
       * Calls Echo.
       * @param request RequestEcho message or plain object
       * @param callback Node-style callback called with the error, if any, and ResponseEcho
       */
      public echo(
        request: tendermint.abci.IRequestEcho,
        callback: tendermint.abci.ABCIApplication.EchoCallback,
      ): void;

      /**
       * Calls Echo.
       * @param request RequestEcho message or plain object
       * @returns Promise
       */
      public echo(request: tendermint.abci.IRequestEcho): Promise<tendermint.abci.ResponseEcho>;

      /**
       * Calls Flush.
       * @param request RequestFlush message or plain object
       * @param callback Node-style callback called with the error, if any, and ResponseFlush
       */
      public flush(
        request: tendermint.abci.IRequestFlush,
        callback: tendermint.abci.ABCIApplication.FlushCallback,
      ): void;

      /**
       * Calls Flush.
       * @param request RequestFlush message or plain object
       * @returns Promise
       */
      public flush(request: tendermint.abci.IRequestFlush): Promise<tendermint.abci.ResponseFlush>;

      /**
       * Calls Info.
       * @param request RequestInfo message or plain object
       * @param callback Node-style callback called with the error, if any, and ResponseInfo
       */
      public info(
        request: tendermint.abci.IRequestInfo,
        callback: tendermint.abci.ABCIApplication.InfoCallback,
      ): void;

      /**
       * Calls Info.
       * @param request RequestInfo message or plain object
       * @returns Promise
       */
      public info(request: tendermint.abci.IRequestInfo): Promise<tendermint.abci.ResponseInfo>;

      /**
       * Calls SetOption.
       * @param request RequestSetOption message or plain object
       * @param callback Node-style callback called with the error, if any, and ResponseSetOption
       */
      public setOption(
        request: tendermint.abci.IRequestSetOption,
        callback: tendermint.abci.ABCIApplication.SetOptionCallback,
      ): void;

      /**
       * Calls SetOption.
       * @param request RequestSetOption message or plain object
       * @returns Promise
       */
      public setOption(
        request: tendermint.abci.IRequestSetOption,
      ): Promise<tendermint.abci.ResponseSetOption>;

      /**
       * Calls DeliverTx.
       * @param request RequestDeliverTx message or plain object
       * @param callback Node-style callback called with the error, if any, and ResponseDeliverTx
       */
      public deliverTx(
        request: tendermint.abci.IRequestDeliverTx,
        callback: tendermint.abci.ABCIApplication.DeliverTxCallback,
      ): void;

      /**
       * Calls DeliverTx.
       * @param request RequestDeliverTx message or plain object
       * @returns Promise
       */
      public deliverTx(
        request: tendermint.abci.IRequestDeliverTx,
      ): Promise<tendermint.abci.ResponseDeliverTx>;

      /**
       * Calls CheckTx.
       * @param request RequestCheckTx message or plain object
       * @param callback Node-style callback called with the error, if any, and ResponseCheckTx
       */
      public checkTx(
        request: tendermint.abci.IRequestCheckTx,
        callback: tendermint.abci.ABCIApplication.CheckTxCallback,
      ): void;

      /**
       * Calls CheckTx.
       * @param request RequestCheckTx message or plain object
       * @returns Promise
       */
      public checkTx(request: tendermint.abci.IRequestCheckTx): Promise<tendermint.abci.ResponseCheckTx>;

      /**
       * Calls Query.
       * @param request RequestQuery message or plain object
       * @param callback Node-style callback called with the error, if any, and ResponseQuery
       */
      public query(
        request: tendermint.abci.IRequestQuery,
        callback: tendermint.abci.ABCIApplication.QueryCallback,
      ): void;

      /**
       * Calls Query.
       * @param request RequestQuery message or plain object
       * @returns Promise
       */
      public query(request: tendermint.abci.IRequestQuery): Promise<tendermint.abci.ResponseQuery>;

      /**
       * Calls Commit.
       * @param request RequestCommit message or plain object
       * @param callback Node-style callback called with the error, if any, and ResponseCommit
       */
      public commit(
        request: tendermint.abci.IRequestCommit,
        callback: tendermint.abci.ABCIApplication.CommitCallback,
      ): void;

      /**
       * Calls Commit.
       * @param request RequestCommit message or plain object
       * @returns Promise
       */
      public commit(request: tendermint.abci.IRequestCommit): Promise<tendermint.abci.ResponseCommit>;

      /**
       * Calls InitChain.
       * @param request RequestInitChain message or plain object
       * @param callback Node-style callback called with the error, if any, and ResponseInitChain
       */
      public initChain(
        request: tendermint.abci.IRequestInitChain,
        callback: tendermint.abci.ABCIApplication.InitChainCallback,
      ): void;

      /**
       * Calls InitChain.
       * @param request RequestInitChain message or plain object
       * @returns Promise
       */
      public initChain(
        request: tendermint.abci.IRequestInitChain,
      ): Promise<tendermint.abci.ResponseInitChain>;

      /**
       * Calls BeginBlock.
       * @param request RequestBeginBlock message or plain object
       * @param callback Node-style callback called with the error, if any, and ResponseBeginBlock
       */
      public beginBlock(
        request: tendermint.abci.IRequestBeginBlock,
        callback: tendermint.abci.ABCIApplication.BeginBlockCallback,
      ): void;

      /**
       * Calls BeginBlock.
       * @param request RequestBeginBlock message or plain object
       * @returns Promise
       */
      public beginBlock(
        request: tendermint.abci.IRequestBeginBlock,
      ): Promise<tendermint.abci.ResponseBeginBlock>;

      /**
       * Calls EndBlock.
       * @param request RequestEndBlock message or plain object
       * @param callback Node-style callback called with the error, if any, and ResponseEndBlock
       */
      public endBlock(
        request: tendermint.abci.IRequestEndBlock,
        callback: tendermint.abci.ABCIApplication.EndBlockCallback,
      ): void;

      /**
       * Calls EndBlock.
       * @param request RequestEndBlock message or plain object
       * @returns Promise
       */
      public endBlock(request: tendermint.abci.IRequestEndBlock): Promise<tendermint.abci.ResponseEndBlock>;

      /**
       * Calls ListSnapshots.
       * @param request RequestListSnapshots message or plain object
       * @param callback Node-style callback called with the error, if any, and ResponseListSnapshots
       */
      public listSnapshots(
        request: tendermint.abci.IRequestListSnapshots,
        callback: tendermint.abci.ABCIApplication.ListSnapshotsCallback,
      ): void;

      /**
       * Calls ListSnapshots.
       * @param request RequestListSnapshots message or plain object
       * @returns Promise
       */
      public listSnapshots(
        request: tendermint.abci.IRequestListSnapshots,
      ): Promise<tendermint.abci.ResponseListSnapshots>;

      /**
       * Calls OfferSnapshot.
       * @param request RequestOfferSnapshot message or plain object
       * @param callback Node-style callback called with the error, if any, and ResponseOfferSnapshot
       */
      public offerSnapshot(
        request: tendermint.abci.IRequestOfferSnapshot,
        callback: tendermint.abci.ABCIApplication.OfferSnapshotCallback,
      ): void;

      /**
       * Calls OfferSnapshot.
       * @param request RequestOfferSnapshot message or plain object
       * @returns Promise
       */
      public offerSnapshot(
        request: tendermint.abci.IRequestOfferSnapshot,
      ): Promise<tendermint.abci.ResponseOfferSnapshot>;

      /**
       * Calls LoadSnapshotChunk.
       * @param request RequestLoadSnapshotChunk message or plain object
       * @param callback Node-style callback called with the error, if any, and ResponseLoadSnapshotChunk
       */
      public loadSnapshotChunk(
        request: tendermint.abci.IRequestLoadSnapshotChunk,
        callback: tendermint.abci.ABCIApplication.LoadSnapshotChunkCallback,
      ): void;

      /**
       * Calls LoadSnapshotChunk.
       * @param request RequestLoadSnapshotChunk message or plain object
       * @returns Promise
       */
      public loadSnapshotChunk(
        request: tendermint.abci.IRequestLoadSnapshotChunk,
      ): Promise<tendermint.abci.ResponseLoadSnapshotChunk>;

      /**
       * Calls ApplySnapshotChunk.
       * @param request RequestApplySnapshotChunk message or plain object
       * @param callback Node-style callback called with the error, if any, and ResponseApplySnapshotChunk
       */
      public applySnapshotChunk(
        request: tendermint.abci.IRequestApplySnapshotChunk,
        callback: tendermint.abci.ABCIApplication.ApplySnapshotChunkCallback,
      ): void;

      /**
       * Calls ApplySnapshotChunk.
       * @param request RequestApplySnapshotChunk message or plain object
       * @returns Promise
       */
      public applySnapshotChunk(
        request: tendermint.abci.IRequestApplySnapshotChunk,
      ): Promise<tendermint.abci.ResponseApplySnapshotChunk>;
    }

    namespace ABCIApplication {
      /**
       * Callback as used by {@link tendermint.abci.ABCIApplication#echo}.
       * @param error Error, if any
       * @param [response] ResponseEcho
       */
      type EchoCallback = (error: Error | null, response?: tendermint.abci.ResponseEcho) => void;

      /**
       * Callback as used by {@link tendermint.abci.ABCIApplication#flush}.
       * @param error Error, if any
       * @param [response] ResponseFlush
       */
      type FlushCallback = (error: Error | null, response?: tendermint.abci.ResponseFlush) => void;

      /**
       * Callback as used by {@link tendermint.abci.ABCIApplication#info}.
       * @param error Error, if any
       * @param [response] ResponseInfo
       */
      type InfoCallback = (error: Error | null, response?: tendermint.abci.ResponseInfo) => void;

      /**
       * Callback as used by {@link tendermint.abci.ABCIApplication#setOption}.
       * @param error Error, if any
       * @param [response] ResponseSetOption
       */
      type SetOptionCallback = (error: Error | null, response?: tendermint.abci.ResponseSetOption) => void;

      /**
       * Callback as used by {@link tendermint.abci.ABCIApplication#deliverTx}.
       * @param error Error, if any
       * @param [response] ResponseDeliverTx
       */
      type DeliverTxCallback = (error: Error | null, response?: tendermint.abci.ResponseDeliverTx) => void;

      /**
       * Callback as used by {@link tendermint.abci.ABCIApplication#checkTx}.
       * @param error Error, if any
       * @param [response] ResponseCheckTx
       */
      type CheckTxCallback = (error: Error | null, response?: tendermint.abci.ResponseCheckTx) => void;

      /**
       * Callback as used by {@link tendermint.abci.ABCIApplication#query}.
       * @param error Error, if any
       * @param [response] ResponseQuery
       */
      type QueryCallback = (error: Error | null, response?: tendermint.abci.ResponseQuery) => void;

      /**
       * Callback as used by {@link tendermint.abci.ABCIApplication#commit}.
       * @param error Error, if any
       * @param [response] ResponseCommit
       */
      type CommitCallback = (error: Error | null, response?: tendermint.abci.ResponseCommit) => void;

      /**
       * Callback as used by {@link tendermint.abci.ABCIApplication#initChain}.
       * @param error Error, if any
       * @param [response] ResponseInitChain
       */
      type InitChainCallback = (error: Error | null, response?: tendermint.abci.ResponseInitChain) => void;

      /**
       * Callback as used by {@link tendermint.abci.ABCIApplication#beginBlock}.
       * @param error Error, if any
       * @param [response] ResponseBeginBlock
       */
      type BeginBlockCallback = (error: Error | null, response?: tendermint.abci.ResponseBeginBlock) => void;

      /**
       * Callback as used by {@link tendermint.abci.ABCIApplication#endBlock}.
       * @param error Error, if any
       * @param [response] ResponseEndBlock
       */
      type EndBlockCallback = (error: Error | null, response?: tendermint.abci.ResponseEndBlock) => void;

      /**
       * Callback as used by {@link tendermint.abci.ABCIApplication#listSnapshots}.
       * @param error Error, if any
       * @param [response] ResponseListSnapshots
       */
      type ListSnapshotsCallback = (
        error: Error | null,
        response?: tendermint.abci.ResponseListSnapshots,
      ) => void;

      /**
       * Callback as used by {@link tendermint.abci.ABCIApplication#offerSnapshot}.
       * @param error Error, if any
       * @param [response] ResponseOfferSnapshot
       */
      type OfferSnapshotCallback = (
        error: Error | null,
        response?: tendermint.abci.ResponseOfferSnapshot,
      ) => void;

      /**
       * Callback as used by {@link tendermint.abci.ABCIApplication#loadSnapshotChunk}.
       * @param error Error, if any
       * @param [response] ResponseLoadSnapshotChunk
       */
      type LoadSnapshotChunkCallback = (
        error: Error | null,
        response?: tendermint.abci.ResponseLoadSnapshotChunk,
      ) => void;

      /**
       * Callback as used by {@link tendermint.abci.ABCIApplication#applySnapshotChunk}.
       * @param error Error, if any
       * @param [response] ResponseApplySnapshotChunk
       */
      type ApplySnapshotChunkCallback = (
        error: Error | null,
        response?: tendermint.abci.ResponseApplySnapshotChunk,
      ) => void;
    }
  }

  /** Namespace crypto. */
  namespace crypto {
    /** Properties of a PublicKey. */
    interface IPublicKey {
      /** PublicKey ed25519 */
      ed25519?: Uint8Array | null;

      /** PublicKey secp256k1 */
      secp256k1?: Uint8Array | null;
    }

    /** Represents a PublicKey. */
    class PublicKey implements IPublicKey {
      /**
       * Constructs a new PublicKey.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.crypto.IPublicKey);

      /** PublicKey ed25519. */
      public ed25519: Uint8Array;

      /** PublicKey secp256k1. */
      public secp256k1: Uint8Array;

      /** PublicKey sum. */
      public sum?: "ed25519" | "secp256k1";

      /**
       * Creates a new PublicKey instance using the specified properties.
       * @param [properties] Properties to set
       * @returns PublicKey instance
       */
      public static create(properties?: tendermint.crypto.IPublicKey): tendermint.crypto.PublicKey;

      /**
       * Encodes the specified PublicKey message. Does not implicitly {@link tendermint.crypto.PublicKey.verify|verify} messages.
       * @param m PublicKey message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.crypto.IPublicKey, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a PublicKey message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns PublicKey
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.crypto.PublicKey;
    }

    /** Properties of a Proof. */
    interface IProof {
      /** Proof total */
      total?: Long | null;

      /** Proof index */
      index?: Long | null;

      /** Proof leafHash */
      leafHash?: Uint8Array | null;

      /** Proof aunts */
      aunts?: Uint8Array[] | null;
    }

    /** Represents a Proof. */
    class Proof implements IProof {
      /**
       * Constructs a new Proof.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.crypto.IProof);

      /** Proof total. */
      public total: Long;

      /** Proof index. */
      public index: Long;

      /** Proof leafHash. */
      public leafHash: Uint8Array;

      /** Proof aunts. */
      public aunts: Uint8Array[];

      /**
       * Creates a new Proof instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Proof instance
       */
      public static create(properties?: tendermint.crypto.IProof): tendermint.crypto.Proof;

      /**
       * Encodes the specified Proof message. Does not implicitly {@link tendermint.crypto.Proof.verify|verify} messages.
       * @param m Proof message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.crypto.IProof, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a Proof message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Proof
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.crypto.Proof;
    }

    /** Properties of a ValueOp. */
    interface IValueOp {
      /** ValueOp key */
      key?: Uint8Array | null;

      /** ValueOp proof */
      proof?: tendermint.crypto.IProof | null;
    }

    /** Represents a ValueOp. */
    class ValueOp implements IValueOp {
      /**
       * Constructs a new ValueOp.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.crypto.IValueOp);

      /** ValueOp key. */
      public key: Uint8Array;

      /** ValueOp proof. */
      public proof?: tendermint.crypto.IProof | null;

      /**
       * Creates a new ValueOp instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ValueOp instance
       */
      public static create(properties?: tendermint.crypto.IValueOp): tendermint.crypto.ValueOp;

      /**
       * Encodes the specified ValueOp message. Does not implicitly {@link tendermint.crypto.ValueOp.verify|verify} messages.
       * @param m ValueOp message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.crypto.IValueOp, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a ValueOp message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ValueOp
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.crypto.ValueOp;
    }

    /** Properties of a DominoOp. */
    interface IDominoOp {
      /** DominoOp key */
      key?: string | null;

      /** DominoOp input */
      input?: string | null;

      /** DominoOp output */
      output?: string | null;
    }

    /** Represents a DominoOp. */
    class DominoOp implements IDominoOp {
      /**
       * Constructs a new DominoOp.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.crypto.IDominoOp);

      /** DominoOp key. */
      public key: string;

      /** DominoOp input. */
      public input: string;

      /** DominoOp output. */
      public output: string;

      /**
       * Creates a new DominoOp instance using the specified properties.
       * @param [properties] Properties to set
       * @returns DominoOp instance
       */
      public static create(properties?: tendermint.crypto.IDominoOp): tendermint.crypto.DominoOp;

      /**
       * Encodes the specified DominoOp message. Does not implicitly {@link tendermint.crypto.DominoOp.verify|verify} messages.
       * @param m DominoOp message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.crypto.IDominoOp, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a DominoOp message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns DominoOp
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.crypto.DominoOp;
    }

    /** Properties of a ProofOp. */
    interface IProofOp {
      /** ProofOp type */
      type?: string | null;

      /** ProofOp key */
      key?: Uint8Array | null;

      /** ProofOp data */
      data?: Uint8Array | null;
    }

    /** Represents a ProofOp. */
    class ProofOp implements IProofOp {
      /**
       * Constructs a new ProofOp.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.crypto.IProofOp);

      /** ProofOp type. */
      public type: string;

      /** ProofOp key. */
      public key: Uint8Array;

      /** ProofOp data. */
      public data: Uint8Array;

      /**
       * Creates a new ProofOp instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ProofOp instance
       */
      public static create(properties?: tendermint.crypto.IProofOp): tendermint.crypto.ProofOp;

      /**
       * Encodes the specified ProofOp message. Does not implicitly {@link tendermint.crypto.ProofOp.verify|verify} messages.
       * @param m ProofOp message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.crypto.IProofOp, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a ProofOp message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ProofOp
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.crypto.ProofOp;
    }

    /** Properties of a ProofOps. */
    interface IProofOps {
      /** ProofOps ops */
      ops?: tendermint.crypto.IProofOp[] | null;
    }

    /** Represents a ProofOps. */
    class ProofOps implements IProofOps {
      /**
       * Constructs a new ProofOps.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.crypto.IProofOps);

      /** ProofOps ops. */
      public ops: tendermint.crypto.IProofOp[];

      /**
       * Creates a new ProofOps instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ProofOps instance
       */
      public static create(properties?: tendermint.crypto.IProofOps): tendermint.crypto.ProofOps;

      /**
       * Encodes the specified ProofOps message. Does not implicitly {@link tendermint.crypto.ProofOps.verify|verify} messages.
       * @param m ProofOps message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.crypto.IProofOps, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a ProofOps message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ProofOps
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.crypto.ProofOps;
    }
  }

  /** Namespace libs. */
  namespace libs {
    /** Namespace bits. */
    namespace bits {
      /** Properties of a BitArray. */
      interface IBitArray {
        /** BitArray bits */
        bits?: Long | null;

        /** BitArray elems */
        elems?: Long[] | null;
      }

      /** Represents a BitArray. */
      class BitArray implements IBitArray {
        /**
         * Constructs a new BitArray.
         * @param [p] Properties to set
         */
        constructor(p?: tendermint.libs.bits.IBitArray);

        /** BitArray bits. */
        public bits: Long;

        /** BitArray elems. */
        public elems: Long[];

        /**
         * Creates a new BitArray instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BitArray instance
         */
        public static create(properties?: tendermint.libs.bits.IBitArray): tendermint.libs.bits.BitArray;

        /**
         * Encodes the specified BitArray message. Does not implicitly {@link tendermint.libs.bits.BitArray.verify|verify} messages.
         * @param m BitArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tendermint.libs.bits.IBitArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BitArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BitArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.libs.bits.BitArray;
      }
    }
  }

  /** Namespace types. */
  namespace types {
    /** Properties of a ConsensusParams. */
    interface IConsensusParams {
      /** ConsensusParams block */
      block?: tendermint.types.IBlockParams | null;

      /** ConsensusParams evidence */
      evidence?: tendermint.types.IEvidenceParams | null;

      /** ConsensusParams validator */
      validator?: tendermint.types.IValidatorParams | null;

      /** ConsensusParams version */
      version?: tendermint.types.IVersionParams | null;
    }

    /** Represents a ConsensusParams. */
    class ConsensusParams implements IConsensusParams {
      /**
       * Constructs a new ConsensusParams.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.types.IConsensusParams);

      /** ConsensusParams block. */
      public block?: tendermint.types.IBlockParams | null;

      /** ConsensusParams evidence. */
      public evidence?: tendermint.types.IEvidenceParams | null;

      /** ConsensusParams validator. */
      public validator?: tendermint.types.IValidatorParams | null;

      /** ConsensusParams version. */
      public version?: tendermint.types.IVersionParams | null;

      /**
       * Creates a new ConsensusParams instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ConsensusParams instance
       */
      public static create(properties?: tendermint.types.IConsensusParams): tendermint.types.ConsensusParams;

      /**
       * Encodes the specified ConsensusParams message. Does not implicitly {@link tendermint.types.ConsensusParams.verify|verify} messages.
       * @param m ConsensusParams message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.types.IConsensusParams, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a ConsensusParams message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ConsensusParams
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.ConsensusParams;
    }

    /** Properties of a BlockParams. */
    interface IBlockParams {
      /** BlockParams maxBytes */
      maxBytes?: Long | null;

      /** BlockParams maxGas */
      maxGas?: Long | null;

      /** BlockParams timeIotaMs */
      timeIotaMs?: Long | null;
    }

    /** Represents a BlockParams. */
    class BlockParams implements IBlockParams {
      /**
       * Constructs a new BlockParams.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.types.IBlockParams);

      /** BlockParams maxBytes. */
      public maxBytes: Long;

      /** BlockParams maxGas. */
      public maxGas: Long;

      /** BlockParams timeIotaMs. */
      public timeIotaMs: Long;

      /**
       * Creates a new BlockParams instance using the specified properties.
       * @param [properties] Properties to set
       * @returns BlockParams instance
       */
      public static create(properties?: tendermint.types.IBlockParams): tendermint.types.BlockParams;

      /**
       * Encodes the specified BlockParams message. Does not implicitly {@link tendermint.types.BlockParams.verify|verify} messages.
       * @param m BlockParams message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.types.IBlockParams, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a BlockParams message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns BlockParams
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.BlockParams;
    }

    /** Properties of an EvidenceParams. */
    interface IEvidenceParams {
      /** EvidenceParams maxAgeNumBlocks */
      maxAgeNumBlocks?: Long | null;

      /** EvidenceParams maxAgeDuration */
      maxAgeDuration?: google.protobuf.IDuration | null;

      /** EvidenceParams maxBytes */
      maxBytes?: Long | null;
    }

    /** Represents an EvidenceParams. */
    class EvidenceParams implements IEvidenceParams {
      /**
       * Constructs a new EvidenceParams.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.types.IEvidenceParams);

      /** EvidenceParams maxAgeNumBlocks. */
      public maxAgeNumBlocks: Long;

      /** EvidenceParams maxAgeDuration. */
      public maxAgeDuration?: google.protobuf.IDuration | null;

      /** EvidenceParams maxBytes. */
      public maxBytes: Long;

      /**
       * Creates a new EvidenceParams instance using the specified properties.
       * @param [properties] Properties to set
       * @returns EvidenceParams instance
       */
      public static create(properties?: tendermint.types.IEvidenceParams): tendermint.types.EvidenceParams;

      /**
       * Encodes the specified EvidenceParams message. Does not implicitly {@link tendermint.types.EvidenceParams.verify|verify} messages.
       * @param m EvidenceParams message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.types.IEvidenceParams, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes an EvidenceParams message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns EvidenceParams
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.EvidenceParams;
    }

    /** Properties of a ValidatorParams. */
    interface IValidatorParams {
      /** ValidatorParams pubKeyTypes */
      pubKeyTypes?: string[] | null;
    }

    /** Represents a ValidatorParams. */
    class ValidatorParams implements IValidatorParams {
      /**
       * Constructs a new ValidatorParams.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.types.IValidatorParams);

      /** ValidatorParams pubKeyTypes. */
      public pubKeyTypes: string[];

      /**
       * Creates a new ValidatorParams instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ValidatorParams instance
       */
      public static create(properties?: tendermint.types.IValidatorParams): tendermint.types.ValidatorParams;

      /**
       * Encodes the specified ValidatorParams message. Does not implicitly {@link tendermint.types.ValidatorParams.verify|verify} messages.
       * @param m ValidatorParams message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.types.IValidatorParams, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a ValidatorParams message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ValidatorParams
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.ValidatorParams;
    }

    /** Properties of a VersionParams. */
    interface IVersionParams {
      /** VersionParams appVersion */
      appVersion?: Long | null;
    }

    /** Represents a VersionParams. */
    class VersionParams implements IVersionParams {
      /**
       * Constructs a new VersionParams.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.types.IVersionParams);

      /** VersionParams appVersion. */
      public appVersion: Long;

      /**
       * Creates a new VersionParams instance using the specified properties.
       * @param [properties] Properties to set
       * @returns VersionParams instance
       */
      public static create(properties?: tendermint.types.IVersionParams): tendermint.types.VersionParams;

      /**
       * Encodes the specified VersionParams message. Does not implicitly {@link tendermint.types.VersionParams.verify|verify} messages.
       * @param m VersionParams message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.types.IVersionParams, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a VersionParams message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns VersionParams
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.VersionParams;
    }

    /** Properties of a HashedParams. */
    interface IHashedParams {
      /** HashedParams blockMaxBytes */
      blockMaxBytes?: Long | null;

      /** HashedParams blockMaxGas */
      blockMaxGas?: Long | null;
    }

    /** Represents a HashedParams. */
    class HashedParams implements IHashedParams {
      /**
       * Constructs a new HashedParams.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.types.IHashedParams);

      /** HashedParams blockMaxBytes. */
      public blockMaxBytes: Long;

      /** HashedParams blockMaxGas. */
      public blockMaxGas: Long;

      /**
       * Creates a new HashedParams instance using the specified properties.
       * @param [properties] Properties to set
       * @returns HashedParams instance
       */
      public static create(properties?: tendermint.types.IHashedParams): tendermint.types.HashedParams;

      /**
       * Encodes the specified HashedParams message. Does not implicitly {@link tendermint.types.HashedParams.verify|verify} messages.
       * @param m HashedParams message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.types.IHashedParams, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a HashedParams message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns HashedParams
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.HashedParams;
    }

    /** BlockIDFlag enum. */
    enum BlockIDFlag {
      BLOCK_ID_FLAG_UNKNOWN = 0,
      BLOCK_ID_FLAG_ABSENT = 1,
      BLOCK_ID_FLAG_COMMIT = 2,
      BLOCK_ID_FLAG_NIL = 3,
    }

    /** SignedMsgType enum. */
    enum SignedMsgType {
      SIGNED_MSG_TYPE_UNKNOWN = 0,
      SIGNED_MSG_TYPE_PREVOTE = 1,
      SIGNED_MSG_TYPE_PRECOMMIT = 2,
      SIGNED_MSG_TYPE_PROPOSAL = 32,
    }

    /** Properties of a PartSetHeader. */
    interface IPartSetHeader {
      /** PartSetHeader total */
      total?: number | null;

      /** PartSetHeader hash */
      hash?: Uint8Array | null;
    }

    /** Represents a PartSetHeader. */
    class PartSetHeader implements IPartSetHeader {
      /**
       * Constructs a new PartSetHeader.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.types.IPartSetHeader);

      /** PartSetHeader total. */
      public total: number;

      /** PartSetHeader hash. */
      public hash: Uint8Array;

      /**
       * Creates a new PartSetHeader instance using the specified properties.
       * @param [properties] Properties to set
       * @returns PartSetHeader instance
       */
      public static create(properties?: tendermint.types.IPartSetHeader): tendermint.types.PartSetHeader;

      /**
       * Encodes the specified PartSetHeader message. Does not implicitly {@link tendermint.types.PartSetHeader.verify|verify} messages.
       * @param m PartSetHeader message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.types.IPartSetHeader, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a PartSetHeader message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns PartSetHeader
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.PartSetHeader;
    }

    /** Properties of a Part. */
    interface IPart {
      /** Part index */
      index?: number | null;

      /** Part bytes */
      bytes?: Uint8Array | null;

      /** Part proof */
      proof?: tendermint.crypto.IProof | null;
    }

    /** Represents a Part. */
    class Part implements IPart {
      /**
       * Constructs a new Part.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.types.IPart);

      /** Part index. */
      public index: number;

      /** Part bytes. */
      public bytes: Uint8Array;

      /** Part proof. */
      public proof?: tendermint.crypto.IProof | null;

      /**
       * Creates a new Part instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Part instance
       */
      public static create(properties?: tendermint.types.IPart): tendermint.types.Part;

      /**
       * Encodes the specified Part message. Does not implicitly {@link tendermint.types.Part.verify|verify} messages.
       * @param m Part message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.types.IPart, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a Part message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Part
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.Part;
    }

    /** Properties of a BlockID. */
    interface IBlockID {
      /** BlockID hash */
      hash?: Uint8Array | null;

      /** BlockID partSetHeader */
      partSetHeader?: tendermint.types.IPartSetHeader | null;
    }

    /** Represents a BlockID. */
    class BlockID implements IBlockID {
      /**
       * Constructs a new BlockID.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.types.IBlockID);

      /** BlockID hash. */
      public hash: Uint8Array;

      /** BlockID partSetHeader. */
      public partSetHeader?: tendermint.types.IPartSetHeader | null;

      /**
       * Creates a new BlockID instance using the specified properties.
       * @param [properties] Properties to set
       * @returns BlockID instance
       */
      public static create(properties?: tendermint.types.IBlockID): tendermint.types.BlockID;

      /**
       * Encodes the specified BlockID message. Does not implicitly {@link tendermint.types.BlockID.verify|verify} messages.
       * @param m BlockID message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.types.IBlockID, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a BlockID message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns BlockID
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.BlockID;
    }

    /** Properties of a Header. */
    interface IHeader {
      /** Header version */
      version?: tendermint.version.IConsensus | null;

      /** Header chainId */
      chainId?: string | null;

      /** Header height */
      height?: Long | null;

      /** Header time */
      time?: google.protobuf.ITimestamp | null;

      /** Header lastBlockId */
      lastBlockId?: tendermint.types.IBlockID | null;

      /** Header lastCommitHash */
      lastCommitHash?: Uint8Array | null;

      /** Header dataHash */
      dataHash?: Uint8Array | null;

      /** Header validatorsHash */
      validatorsHash?: Uint8Array | null;

      /** Header nextValidatorsHash */
      nextValidatorsHash?: Uint8Array | null;

      /** Header consensusHash */
      consensusHash?: Uint8Array | null;

      /** Header appHash */
      appHash?: Uint8Array | null;

      /** Header lastResultsHash */
      lastResultsHash?: Uint8Array | null;

      /** Header evidenceHash */
      evidenceHash?: Uint8Array | null;

      /** Header proposerAddress */
      proposerAddress?: Uint8Array | null;
    }

    /** Represents a Header. */
    class Header implements IHeader {
      /**
       * Constructs a new Header.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.types.IHeader);

      /** Header version. */
      public version?: tendermint.version.IConsensus | null;

      /** Header chainId. */
      public chainId: string;

      /** Header height. */
      public height: Long;

      /** Header time. */
      public time?: google.protobuf.ITimestamp | null;

      /** Header lastBlockId. */
      public lastBlockId?: tendermint.types.IBlockID | null;

      /** Header lastCommitHash. */
      public lastCommitHash: Uint8Array;

      /** Header dataHash. */
      public dataHash: Uint8Array;

      /** Header validatorsHash. */
      public validatorsHash: Uint8Array;

      /** Header nextValidatorsHash. */
      public nextValidatorsHash: Uint8Array;

      /** Header consensusHash. */
      public consensusHash: Uint8Array;

      /** Header appHash. */
      public appHash: Uint8Array;

      /** Header lastResultsHash. */
      public lastResultsHash: Uint8Array;

      /** Header evidenceHash. */
      public evidenceHash: Uint8Array;

      /** Header proposerAddress. */
      public proposerAddress: Uint8Array;

      /**
       * Creates a new Header instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Header instance
       */
      public static create(properties?: tendermint.types.IHeader): tendermint.types.Header;

      /**
       * Encodes the specified Header message. Does not implicitly {@link tendermint.types.Header.verify|verify} messages.
       * @param m Header message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.types.IHeader, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a Header message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Header
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.Header;
    }

    /** Properties of a Data. */
    interface IData {
      /** Data txs */
      txs?: Uint8Array[] | null;
    }

    /** Represents a Data. */
    class Data implements IData {
      /**
       * Constructs a new Data.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.types.IData);

      /** Data txs. */
      public txs: Uint8Array[];

      /**
       * Creates a new Data instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Data instance
       */
      public static create(properties?: tendermint.types.IData): tendermint.types.Data;

      /**
       * Encodes the specified Data message. Does not implicitly {@link tendermint.types.Data.verify|verify} messages.
       * @param m Data message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.types.IData, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a Data message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Data
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.Data;
    }

    /** Properties of a Vote. */
    interface IVote {
      /** Vote type */
      type?: tendermint.types.SignedMsgType | null;

      /** Vote height */
      height?: Long | null;

      /** Vote round */
      round?: number | null;

      /** Vote blockId */
      blockId?: tendermint.types.IBlockID | null;

      /** Vote timestamp */
      timestamp?: google.protobuf.ITimestamp | null;

      /** Vote validatorAddress */
      validatorAddress?: Uint8Array | null;

      /** Vote validatorIndex */
      validatorIndex?: number | null;

      /** Vote signature */
      signature?: Uint8Array | null;
    }

    /** Represents a Vote. */
    class Vote implements IVote {
      /**
       * Constructs a new Vote.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.types.IVote);

      /** Vote type. */
      public type: tendermint.types.SignedMsgType;

      /** Vote height. */
      public height: Long;

      /** Vote round. */
      public round: number;

      /** Vote blockId. */
      public blockId?: tendermint.types.IBlockID | null;

      /** Vote timestamp. */
      public timestamp?: google.protobuf.ITimestamp | null;

      /** Vote validatorAddress. */
      public validatorAddress: Uint8Array;

      /** Vote validatorIndex. */
      public validatorIndex: number;

      /** Vote signature. */
      public signature: Uint8Array;

      /**
       * Creates a new Vote instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Vote instance
       */
      public static create(properties?: tendermint.types.IVote): tendermint.types.Vote;

      /**
       * Encodes the specified Vote message. Does not implicitly {@link tendermint.types.Vote.verify|verify} messages.
       * @param m Vote message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.types.IVote, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a Vote message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Vote
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.Vote;
    }

    /** Properties of a Commit. */
    interface ICommit {
      /** Commit height */
      height?: Long | null;

      /** Commit round */
      round?: number | null;

      /** Commit blockId */
      blockId?: tendermint.types.IBlockID | null;

      /** Commit signatures */
      signatures?: tendermint.types.ICommitSig[] | null;
    }

    /** Represents a Commit. */
    class Commit implements ICommit {
      /**
       * Constructs a new Commit.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.types.ICommit);

      /** Commit height. */
      public height: Long;

      /** Commit round. */
      public round: number;

      /** Commit blockId. */
      public blockId?: tendermint.types.IBlockID | null;

      /** Commit signatures. */
      public signatures: tendermint.types.ICommitSig[];

      /**
       * Creates a new Commit instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Commit instance
       */
      public static create(properties?: tendermint.types.ICommit): tendermint.types.Commit;

      /**
       * Encodes the specified Commit message. Does not implicitly {@link tendermint.types.Commit.verify|verify} messages.
       * @param m Commit message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.types.ICommit, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a Commit message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Commit
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.Commit;
    }

    /** Properties of a CommitSig. */
    interface ICommitSig {
      /** CommitSig blockIdFlag */
      blockIdFlag?: tendermint.types.BlockIDFlag | null;

      /** CommitSig validatorAddress */
      validatorAddress?: Uint8Array | null;

      /** CommitSig timestamp */
      timestamp?: google.protobuf.ITimestamp | null;

      /** CommitSig signature */
      signature?: Uint8Array | null;
    }

    /** Represents a CommitSig. */
    class CommitSig implements ICommitSig {
      /**
       * Constructs a new CommitSig.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.types.ICommitSig);

      /** CommitSig blockIdFlag. */
      public blockIdFlag: tendermint.types.BlockIDFlag;

      /** CommitSig validatorAddress. */
      public validatorAddress: Uint8Array;

      /** CommitSig timestamp. */
      public timestamp?: google.protobuf.ITimestamp | null;

      /** CommitSig signature. */
      public signature: Uint8Array;

      /**
       * Creates a new CommitSig instance using the specified properties.
       * @param [properties] Properties to set
       * @returns CommitSig instance
       */
      public static create(properties?: tendermint.types.ICommitSig): tendermint.types.CommitSig;

      /**
       * Encodes the specified CommitSig message. Does not implicitly {@link tendermint.types.CommitSig.verify|verify} messages.
       * @param m CommitSig message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.types.ICommitSig, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a CommitSig message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns CommitSig
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.CommitSig;
    }

    /** Properties of a Proposal. */
    interface IProposal {
      /** Proposal type */
      type?: tendermint.types.SignedMsgType | null;

      /** Proposal height */
      height?: Long | null;

      /** Proposal round */
      round?: number | null;

      /** Proposal polRound */
      polRound?: number | null;

      /** Proposal blockId */
      blockId?: tendermint.types.IBlockID | null;

      /** Proposal timestamp */
      timestamp?: google.protobuf.ITimestamp | null;

      /** Proposal signature */
      signature?: Uint8Array | null;
    }

    /** Represents a Proposal. */
    class Proposal implements IProposal {
      /**
       * Constructs a new Proposal.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.types.IProposal);

      /** Proposal type. */
      public type: tendermint.types.SignedMsgType;

      /** Proposal height. */
      public height: Long;

      /** Proposal round. */
      public round: number;

      /** Proposal polRound. */
      public polRound: number;

      /** Proposal blockId. */
      public blockId?: tendermint.types.IBlockID | null;

      /** Proposal timestamp. */
      public timestamp?: google.protobuf.ITimestamp | null;

      /** Proposal signature. */
      public signature: Uint8Array;

      /**
       * Creates a new Proposal instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Proposal instance
       */
      public static create(properties?: tendermint.types.IProposal): tendermint.types.Proposal;

      /**
       * Encodes the specified Proposal message. Does not implicitly {@link tendermint.types.Proposal.verify|verify} messages.
       * @param m Proposal message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.types.IProposal, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a Proposal message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Proposal
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.Proposal;
    }

    /** Properties of a SignedHeader. */
    interface ISignedHeader {
      /** SignedHeader header */
      header?: tendermint.types.IHeader | null;

      /** SignedHeader commit */
      commit?: tendermint.types.ICommit | null;
    }

    /** Represents a SignedHeader. */
    class SignedHeader implements ISignedHeader {
      /**
       * Constructs a new SignedHeader.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.types.ISignedHeader);

      /** SignedHeader header. */
      public header?: tendermint.types.IHeader | null;

      /** SignedHeader commit. */
      public commit?: tendermint.types.ICommit | null;

      /**
       * Creates a new SignedHeader instance using the specified properties.
       * @param [properties] Properties to set
       * @returns SignedHeader instance
       */
      public static create(properties?: tendermint.types.ISignedHeader): tendermint.types.SignedHeader;

      /**
       * Encodes the specified SignedHeader message. Does not implicitly {@link tendermint.types.SignedHeader.verify|verify} messages.
       * @param m SignedHeader message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.types.ISignedHeader, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a SignedHeader message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns SignedHeader
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.SignedHeader;
    }

    /** Properties of a LightBlock. */
    interface ILightBlock {
      /** LightBlock signedHeader */
      signedHeader?: tendermint.types.ISignedHeader | null;

      /** LightBlock validatorSet */
      validatorSet?: tendermint.types.IValidatorSet | null;
    }

    /** Represents a LightBlock. */
    class LightBlock implements ILightBlock {
      /**
       * Constructs a new LightBlock.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.types.ILightBlock);

      /** LightBlock signedHeader. */
      public signedHeader?: tendermint.types.ISignedHeader | null;

      /** LightBlock validatorSet. */
      public validatorSet?: tendermint.types.IValidatorSet | null;

      /**
       * Creates a new LightBlock instance using the specified properties.
       * @param [properties] Properties to set
       * @returns LightBlock instance
       */
      public static create(properties?: tendermint.types.ILightBlock): tendermint.types.LightBlock;

      /**
       * Encodes the specified LightBlock message. Does not implicitly {@link tendermint.types.LightBlock.verify|verify} messages.
       * @param m LightBlock message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.types.ILightBlock, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a LightBlock message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns LightBlock
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.LightBlock;
    }

    /** Properties of a BlockMeta. */
    interface IBlockMeta {
      /** BlockMeta blockId */
      blockId?: tendermint.types.IBlockID | null;

      /** BlockMeta blockSize */
      blockSize?: Long | null;

      /** BlockMeta header */
      header?: tendermint.types.IHeader | null;

      /** BlockMeta numTxs */
      numTxs?: Long | null;
    }

    /** Represents a BlockMeta. */
    class BlockMeta implements IBlockMeta {
      /**
       * Constructs a new BlockMeta.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.types.IBlockMeta);

      /** BlockMeta blockId. */
      public blockId?: tendermint.types.IBlockID | null;

      /** BlockMeta blockSize. */
      public blockSize: Long;

      /** BlockMeta header. */
      public header?: tendermint.types.IHeader | null;

      /** BlockMeta numTxs. */
      public numTxs: Long;

      /**
       * Creates a new BlockMeta instance using the specified properties.
       * @param [properties] Properties to set
       * @returns BlockMeta instance
       */
      public static create(properties?: tendermint.types.IBlockMeta): tendermint.types.BlockMeta;

      /**
       * Encodes the specified BlockMeta message. Does not implicitly {@link tendermint.types.BlockMeta.verify|verify} messages.
       * @param m BlockMeta message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.types.IBlockMeta, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a BlockMeta message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns BlockMeta
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.BlockMeta;
    }

    /** Properties of a TxProof. */
    interface ITxProof {
      /** TxProof rootHash */
      rootHash?: Uint8Array | null;

      /** TxProof data */
      data?: Uint8Array | null;

      /** TxProof proof */
      proof?: tendermint.crypto.IProof | null;
    }

    /** Represents a TxProof. */
    class TxProof implements ITxProof {
      /**
       * Constructs a new TxProof.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.types.ITxProof);

      /** TxProof rootHash. */
      public rootHash: Uint8Array;

      /** TxProof data. */
      public data: Uint8Array;

      /** TxProof proof. */
      public proof?: tendermint.crypto.IProof | null;

      /**
       * Creates a new TxProof instance using the specified properties.
       * @param [properties] Properties to set
       * @returns TxProof instance
       */
      public static create(properties?: tendermint.types.ITxProof): tendermint.types.TxProof;

      /**
       * Encodes the specified TxProof message. Does not implicitly {@link tendermint.types.TxProof.verify|verify} messages.
       * @param m TxProof message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.types.ITxProof, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a TxProof message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns TxProof
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.TxProof;
    }

    /** Properties of a ValidatorSet. */
    interface IValidatorSet {
      /** ValidatorSet validators */
      validators?: tendermint.types.IValidator[] | null;

      /** ValidatorSet proposer */
      proposer?: tendermint.types.IValidator | null;

      /** ValidatorSet totalVotingPower */
      totalVotingPower?: Long | null;
    }

    /** Represents a ValidatorSet. */
    class ValidatorSet implements IValidatorSet {
      /**
       * Constructs a new ValidatorSet.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.types.IValidatorSet);

      /** ValidatorSet validators. */
      public validators: tendermint.types.IValidator[];

      /** ValidatorSet proposer. */
      public proposer?: tendermint.types.IValidator | null;

      /** ValidatorSet totalVotingPower. */
      public totalVotingPower: Long;

      /**
       * Creates a new ValidatorSet instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ValidatorSet instance
       */
      public static create(properties?: tendermint.types.IValidatorSet): tendermint.types.ValidatorSet;

      /**
       * Encodes the specified ValidatorSet message. Does not implicitly {@link tendermint.types.ValidatorSet.verify|verify} messages.
       * @param m ValidatorSet message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.types.IValidatorSet, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a ValidatorSet message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns ValidatorSet
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.ValidatorSet;
    }

    /** Properties of a Validator. */
    interface IValidator {
      /** Validator address */
      address?: Uint8Array | null;

      /** Validator pubKey */
      pubKey?: tendermint.crypto.IPublicKey | null;

      /** Validator votingPower */
      votingPower?: Long | null;

      /** Validator proposerPriority */
      proposerPriority?: Long | null;
    }

    /** Represents a Validator. */
    class Validator implements IValidator {
      /**
       * Constructs a new Validator.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.types.IValidator);

      /** Validator address. */
      public address: Uint8Array;

      /** Validator pubKey. */
      public pubKey?: tendermint.crypto.IPublicKey | null;

      /** Validator votingPower. */
      public votingPower: Long;

      /** Validator proposerPriority. */
      public proposerPriority: Long;

      /**
       * Creates a new Validator instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Validator instance
       */
      public static create(properties?: tendermint.types.IValidator): tendermint.types.Validator;

      /**
       * Encodes the specified Validator message. Does not implicitly {@link tendermint.types.Validator.verify|verify} messages.
       * @param m Validator message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.types.IValidator, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a Validator message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Validator
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.Validator;
    }

    /** Properties of a SimpleValidator. */
    interface ISimpleValidator {
      /** SimpleValidator pubKey */
      pubKey?: tendermint.crypto.IPublicKey | null;

      /** SimpleValidator votingPower */
      votingPower?: Long | null;
    }

    /** Represents a SimpleValidator. */
    class SimpleValidator implements ISimpleValidator {
      /**
       * Constructs a new SimpleValidator.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.types.ISimpleValidator);

      /** SimpleValidator pubKey. */
      public pubKey?: tendermint.crypto.IPublicKey | null;

      /** SimpleValidator votingPower. */
      public votingPower: Long;

      /**
       * Creates a new SimpleValidator instance using the specified properties.
       * @param [properties] Properties to set
       * @returns SimpleValidator instance
       */
      public static create(properties?: tendermint.types.ISimpleValidator): tendermint.types.SimpleValidator;

      /**
       * Encodes the specified SimpleValidator message. Does not implicitly {@link tendermint.types.SimpleValidator.verify|verify} messages.
       * @param m SimpleValidator message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.types.ISimpleValidator, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a SimpleValidator message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns SimpleValidator
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.SimpleValidator;
    }
  }

  /** Namespace version. */
  namespace version {
    /** Properties of an App. */
    interface IApp {
      /** App protocol */
      protocol?: Long | null;

      /** App software */
      software?: string | null;
    }

    /** Represents an App. */
    class App implements IApp {
      /**
       * Constructs a new App.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.version.IApp);

      /** App protocol. */
      public protocol: Long;

      /** App software. */
      public software: string;

      /**
       * Creates a new App instance using the specified properties.
       * @param [properties] Properties to set
       * @returns App instance
       */
      public static create(properties?: tendermint.version.IApp): tendermint.version.App;

      /**
       * Encodes the specified App message. Does not implicitly {@link tendermint.version.App.verify|verify} messages.
       * @param m App message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.version.IApp, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes an App message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns App
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.version.App;
    }

    /** Properties of a Consensus. */
    interface IConsensus {
      /** Consensus block */
      block?: Long | null;

      /** Consensus app */
      app?: Long | null;
    }

    /** Represents a Consensus. */
    class Consensus implements IConsensus {
      /**
       * Constructs a new Consensus.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.version.IConsensus);

      /** Consensus block. */
      public block: Long;

      /** Consensus app. */
      public app: Long;

      /**
       * Creates a new Consensus instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Consensus instance
       */
      public static create(properties?: tendermint.version.IConsensus): tendermint.version.Consensus;

      /**
       * Encodes the specified Consensus message. Does not implicitly {@link tendermint.version.Consensus.verify|verify} messages.
       * @param m Consensus message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.version.IConsensus, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a Consensus message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Consensus
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.version.Consensus;
    }
  }
}
