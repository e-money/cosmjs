/* eslint-disable @typescript-eslint/naming-convention */
import { toAscii } from "@cosmjs/encoding";
import { Uint64 } from "@cosmjs/math";
import Long from "long";

import { Channel } from "../codec/ibc/core/channel/v1/channel";
import {
  QueryChannelResponse,
  QueryChannelsResponse,
  QueryClientImpl as ChannelQueryClientImpl,
  QueryConnectionChannelsResponse,
  QueryNextSequenceReceiveResponse,
  QueryPacketAcknowledgementResponse,
  QueryPacketAcknowledgementsResponse,
  QueryPacketCommitmentResponse,
  QueryPacketCommitmentsResponse,
  QueryUnreceivedAcksResponse,
  QueryUnreceivedPacketsResponse,
} from "../codec/ibc/core/channel/v1/query";
import {
  QueryClientConnectionsResponse,
  QueryClientImpl as ConnectionQueryClientImpl,
  QueryConnectionResponse,
  QueryConnectionsResponse,
} from "../codec/ibc/core/connection/v1/query";
import { QueryClient } from "./queryclient";
import { toObject } from "./utils";

export interface IbcExtension {
  readonly ibc: {
    readonly channel: (portId: string, channelId: string) => Promise<Channel | null>;
    readonly packetCommitment: (portId: string, channelId: string, sequence: number) => Promise<Uint8Array>;
    readonly packetAcknowledgement: (
      portId: string,
      channelId: string,
      sequence: number,
    ) => Promise<Uint8Array>;
    readonly nextSequenceReceive: (portId: string, channelId: string) => Promise<number | null>;
    readonly unverified: {
      // Queries for ibc.core.channel.v1
      readonly channel: (portId: string, channelId: string) => Promise<QueryChannelResponse>;
      readonly channels: (paginationKey?: Uint8Array) => Promise<QueryChannelsResponse>;
      readonly connectionChannels: (
        connection: string,
        paginationKey?: Uint8Array,
      ) => Promise<QueryConnectionChannelsResponse>;
      readonly packetCommitment: (
        portId: string,
        channelId: string,
        sequence: number,
      ) => Promise<QueryPacketCommitmentResponse>;
      readonly packetCommitments: (
        portId: string,
        channelId: string,
        paginationKey?: Uint8Array,
      ) => Promise<QueryPacketCommitmentsResponse>;
      readonly packetAcknowledgement: (
        portId: string,
        channelId: string,
        sequence: number,
      ) => Promise<QueryPacketAcknowledgementResponse>;
      readonly packetAcknowledgements: (
        portId: string,
        channelId: string,
        paginationKey?: Uint8Array,
      ) => Promise<QueryPacketAcknowledgementsResponse>;
      readonly unreceivedPackets: (
        portId: string,
        channelId: string,
        packetCommitmentSequences: readonly number[],
      ) => Promise<QueryUnreceivedPacketsResponse>;
      readonly unreceivedAcks: (
        portId: string,
        channelId: string,
        packetCommitmentSequences: readonly number[],
      ) => Promise<QueryUnreceivedAcksResponse>;
      readonly nextSequenceReceive: (
        portId: string,
        channelId: string,
      ) => Promise<QueryNextSequenceReceiveResponse>;

      // Queries for ibc.core.connection.v1

      readonly connection: (connectionId: string) => Promise<QueryConnectionResponse>;
      readonly connections: (paginationKey?: Uint8Array) => Promise<QueryConnectionsResponse>;
      readonly clientConnections: (clientId: string) => Promise<QueryClientConnectionsResponse>;
    };
  };
}

export function setupIbcExtension(base: QueryClient): IbcExtension {
  // Use this service to get easy typed access to query methods
  // This cannot be used to for proof verification

  const channelQueryService = new ChannelQueryClientImpl({
    request: (_: string, method: string, requestData: Uint8Array): Promise<Uint8Array> => {
      // Parts of the path are unavailable, so we hardcode them here. See https://github.com/protobufjs/protobuf.js/issues/1229
      const path = `/ibc.core.channel.v1.Query/${method}`;
      return base.queryUnverified(path, requestData);
    },
  });

  const connectionQueryService = new ConnectionQueryClientImpl({
    request: (_: string, method: string, requestData: Uint8Array): Promise<Uint8Array> => {
      // Parts of the path are unavailable, so we hardcode them here. See https://github.com/protobufjs/protobuf.js/issues/1229
      const path = `/ibc.core.connection.v1.Query/${method}`;
      return base.queryUnverified(path, requestData);
    },
  });

  return {
    ibc: {
      channel: async (portId: string, channelId: string) => {
        // keeper: https://github.com/cosmos/cosmos-sdk/blob/3bafd8255a502e5a9cee07391cf8261538245dfd/x/ibc/04-channel/keeper/keeper.go#L55-L65
        // key: https://github.com/cosmos/cosmos-sdk/blob/ef0a7344af345882729598bc2958a21143930a6b/x/ibc/24-host/keys.go#L117-L120
        const key = toAscii(`channelEnds/ports/${portId}/channels/${channelId}`);
        const responseData = await base.queryVerified("ibc", key);
        return responseData.length ? toObject(Channel.decode(responseData)) : null;
      },
      packetCommitment: async (portId: string, channelId: string, sequence: number) => {
        // keeper: https://github.com/cosmos/cosmos-sdk/blob/3bafd8255a502e5a9cee07391cf8261538245dfd/x/ibc/04-channel/keeper/keeper.go#L128-L133
        // key: https://github.com/cosmos/cosmos-sdk/blob/ef0a7344af345882729598bc2958a21143930a6b/x/ibc/24-host/keys.go#L183-L185
        const key = toAscii(`commitments/ports/${portId}/channels/${channelId}/packets/${sequence}`);
        const responseData = await base.queryVerified("ibc", key);
        // keeper code doesn't parse, but returns raw
        return responseData;
      },
      packetAcknowledgement: async (portId: string, channelId: string, sequence: number) => {
        // keeper: https://github.com/cosmos/cosmos-sdk/blob/3bafd8255a502e5a9cee07391cf8261538245dfd/x/ibc/04-channel/keeper/keeper.go#L159-L166
        // key: https://github.com/cosmos/cosmos-sdk/blob/ef0a7344af345882729598bc2958a21143930a6b/x/ibc/24-host/keys.go#L153-L156
        const key = toAscii(`acks/ports/${portId}/channels/${channelId}/acknowledgements/${sequence}`);
        const responseData = await base.queryVerified("ibc", key);
        // keeper code doesn't parse, but returns raw
        return responseData;
      },
      nextSequenceReceive: async (portId: string, channelId: string) => {
        // keeper: https://github.com/cosmos/cosmos-sdk/blob/3bafd8255a502e5a9cee07391cf8261538245dfd/x/ibc/04-channel/keeper/keeper.go#L92-L101
        // key: https://github.com/cosmos/cosmos-sdk/blob/ef0a7344af345882729598bc2958a21143930a6b/x/ibc/24-host/keys.go#L133-L136
        const key = toAscii(`seqAcks/ports/${portId}/channels/${channelId}/nextSequenceAck`);
        const responseData = await base.queryVerified("ibc", key);
        return responseData.length ? Uint64.fromBytes(responseData).toNumber() : null;
      },

      unverified: {
        // Queries for ibc.core.channel.v1
        channel: async (portId: string, channelId: string) => {
          const response = await channelQueryService.Channel({ portId: portId, channelId: channelId });
          return toObject(response);
        },
        channels: async (paginationKey?: Uint8Array) => {
          const request = {
            pagination: paginationKey
              ? {
                  key: paginationKey,
                  offset: Long.fromNumber(0),
                  limit: Long.fromNumber(0),
                  countTotal: false,
                }
              : undefined,
          };
          const response = await channelQueryService.Channels(request);
          return toObject(response);
        },
        connectionChannels: async (connection: string, paginationKey?: Uint8Array) => {
          const request = {
            connection: connection,
            pagination: paginationKey
              ? {
                  key: paginationKey,
                  offset: Long.fromNumber(0),
                  limit: Long.fromNumber(0),
                  countTotal: false,
                }
              : undefined,
          };
          const response = await channelQueryService.ConnectionChannels(request);
          return toObject(response);
        },
        packetCommitment: async (portId: string, channelId: string, sequence: number) => {
          const response = await channelQueryService.PacketCommitment({
            portId: portId,
            channelId: channelId,
            sequence: Long.fromNumber(sequence),
          });
          return toObject(response);
        },
        packetCommitments: async (portId: string, channelId: string, paginationKey?: Uint8Array) => {
          const request = {
            channelId: channelId,
            portId: portId,
            pagination: paginationKey
              ? {
                  key: paginationKey,
                  offset: Long.fromNumber(0),
                  limit: Long.fromNumber(0),
                  countTotal: false,
                }
              : undefined,
          };
          const response = await channelQueryService.PacketCommitments(request);
          return toObject(response);
        },
        packetAcknowledgement: async (portId: string, channelId: string, sequence: number) => {
          const response = await channelQueryService.PacketAcknowledgement({
            portId: portId,
            channelId: channelId,
            sequence: Long.fromNumber(sequence),
          });
          return toObject(response);
        },
        packetAcknowledgements: async (portId: string, channelId: string, paginationKey?: Uint8Array) => {
          const response = await channelQueryService.PacketAcknowledgements({
            portId: portId,
            channelId: channelId,
            pagination: paginationKey
              ? {
                  key: paginationKey,
                  offset: Long.fromNumber(0),
                  limit: Long.fromNumber(0),
                  countTotal: false,
                }
              : undefined,
          });
          return toObject(response);
        },
        unreceivedPackets: async (
          portId: string,
          channelId: string,
          packetCommitmentSequences: readonly number[],
        ) => {
          const response = await channelQueryService.UnreceivedPackets({
            portId: portId,
            channelId: channelId,
            packetCommitmentSequences: packetCommitmentSequences.map((s) => Long.fromNumber(s)),
          });
          return toObject(response);
        },
        unreceivedAcks: async (portId: string, channelId: string, packetAckSequences: readonly number[]) => {
          const response = await channelQueryService.UnreceivedAcks({
            portId: portId,
            channelId: channelId,
            packetAckSequences: packetAckSequences.map((s) => Long.fromNumber(s)),
          });
          return toObject(response);
        },
        nextSequenceReceive: async (portId: string, channelId: string) => {
          const response = await channelQueryService.NextSequenceReceive({
            portId: portId,
            channelId: channelId,
          });
          return toObject(response);
        },

        // Queries for ibc.core.connection.v1

        connection: async (connectionId: string) => {
          const response = await connectionQueryService.Connection({ connectionId: connectionId });
          return toObject(response);
        },
        connections: async (paginationKey?: Uint8Array) => {
          const request = {
            pagination: paginationKey
              ? {
                  key: paginationKey,
                  offset: Long.fromNumber(0),
                  limit: Long.fromNumber(0),
                  countTotal: false,
                }
              : undefined,
          };
          const response = await connectionQueryService.Connections(request);
          return toObject(response);
        },
        clientConnections: async (clientId: string) => {
          const response = await connectionQueryService.ClientConnections({ clientId: clientId });
          return toObject(response);
        },
      },
    },
  };
}
