/**
 * @see https://github.com/CosmWasm/cosmwasm-plus/blob/v0.3.2/packages/cw0/src/expiration.rs#L14
 */
export declare type Expiration =
  | {
      readonly at_height: number;
    }
  | {
      readonly at_time: number;
    }
  | {
      readonly never: Record<any, never>;
    };
