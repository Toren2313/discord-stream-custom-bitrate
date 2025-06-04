import DiscordClient from "../client";
import { ExtraArgs } from "./IArgs";
import { IPayload } from "./IPayload";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type EventMap = {
  ready: [DiscordClient, args?: ExtraArgs];
  hello: [DiscordClient, IPayload<"hello">, args?: ExtraArgs];
  identify: [DiscordClient, args?: ExtraArgs];
  heartbeat: [DiscordClient, IPayload<"heartbeat">, args?: ExtraArgs];
  heartbeatAck: [DiscordClient, IPayload<"heartbeatAck">, args?: ExtraArgs];
};
