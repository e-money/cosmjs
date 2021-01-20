/* eslint-disable @typescript-eslint/naming-convention */
import { assert } from "@cosmjs/utils";

import { BaseAccount } from "../codec/cosmos/auth/v1beta1/auth";
import { QueryClientImpl } from "../codec/cosmos/auth/v1beta1/query";
import { Any } from "../codec/google/protobuf/any";
import { QueryClient } from "./queryclient";
import { toAccAddress, toObject } from "./utils";

export interface AuthExtension {
  readonly auth: {
    readonly account: (address: string) => Promise<BaseAccount | null>;
    readonly unverified: {
      readonly account: (address: string) => Promise<BaseAccount | null>;
    };
  };
}

export function setupAuthExtension(base: QueryClient): AuthExtension {
  // Use this service to get easy typed access to query methods
  // This cannot be used to for proof verification
  const queryService = new QueryClientImpl({
    request: (_: string, method: string, requestData: Uint8Array): Promise<Uint8Array> => {
      // Parts of the path are unavailable, so we hardcode them here. See https://github.com/protobufjs/protobuf.js/issues/1229
      const path = `/cosmos.auth.v1beta1.Query/${method}`;
      return base.queryUnverified(path, requestData);
    },
  });

  return {
    auth: {
      account: async (address: string): Promise<BaseAccount | null> => {
        // https://github.com/cosmos/cosmos-sdk/blob/8cab43c8120fec5200c3459cbf4a92017bb6f287/x/auth/types/keys.go#L29-L32
        const key = Uint8Array.from([0x01, ...toAccAddress(address)]);
        const responseData = await base.queryVerified("acc", key);
        if (responseData.length === 0) return null;
        const account = Any.decode(responseData);
        switch (account.typeUrl) {
          case "/cosmos.auth.v1beta1.BaseAccount": {
            return toObject(BaseAccount.decode(account.value));
          }
          default:
            throw new Error(`Unsupported type: '${account.typeUrl}'`);
        }
      },
      unverified: {
        account: async (address: string): Promise<BaseAccount | null> => {
          const { account } = await queryService.Account({ address: address });
          if (!account) return null;
          switch (account.typeUrl) {
            case "/cosmos.auth.v1beta1.BaseAccount": {
              assert(account.value);
              return toObject(BaseAccount.decode(account.value));
            }
            default:
              throw new Error(`Unsupported type: '${account.typeUrl}'`);
          }
        },
      },
    },
  };
}
