import { Writer, Reader } from "protobufjs/minimal";
/**
 *  Coin defines a token with a denomination and an amount.
 *
 *  NOTE: The amount field is an Int which implements the custom method
 *  signatures required by gogoproto.
 */
export interface Coin {
  denom: string;
  amount: string;
}
/**
 *  DecCoin defines a token with a denomination and a decimal amount.
 *
 *  NOTE: The amount field is an Dec which implements the custom method
 *  signatures required by gogoproto.
 */
export interface DecCoin {
  denom: string;
  amount: string;
}
/**
 *  IntProto defines a Protobuf wrapper around an Int object.
 */
export interface IntProto {
  int: string;
}
/**
 *  DecProto defines a Protobuf wrapper around a Dec object.
 */
export interface DecProto {
  dec: string;
}
export declare const protobufPackage = "cosmos.base.v1beta1";
export declare const Coin: {
  encode(message: Coin, writer?: Writer): Writer;
  decode(input: Uint8Array | Reader, length?: number | undefined): Coin;
  fromJSON(object: any): Coin;
  fromPartial(object: DeepPartial<Coin>): Coin;
  toJSON(message: Coin): unknown;
};
export declare const DecCoin: {
  encode(message: DecCoin, writer?: Writer): Writer;
  decode(input: Uint8Array | Reader, length?: number | undefined): DecCoin;
  fromJSON(object: any): DecCoin;
  fromPartial(object: DeepPartial<DecCoin>): DecCoin;
  toJSON(message: DecCoin): unknown;
};
export declare const IntProto: {
  encode(message: IntProto, writer?: Writer): Writer;
  decode(input: Uint8Array | Reader, length?: number | undefined): IntProto;
  fromJSON(object: any): IntProto;
  fromPartial(object: DeepPartial<IntProto>): IntProto;
  toJSON(message: IntProto): unknown;
};
export declare const DecProto: {
  encode(message: DecProto, writer?: Writer): Writer;
  decode(input: Uint8Array | Reader, length?: number | undefined): DecProto;
  fromJSON(object: any): DecProto;
  fromPartial(object: DeepPartial<DecProto>): DecProto;
  toJSON(message: DecProto): unknown;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? {
      [K in keyof T]?: DeepPartial<T[K]>;
    }
  : Partial<T>;
export {};
