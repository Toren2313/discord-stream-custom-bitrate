import DiscordClient from "../client";
import { IPayload } from "./IPayload";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type EventMap = {
  hello: [DiscordClient, IPayload<"hello">];
  heartbeat: [DiscordClient, IPayload<"heartbeat">];
  heartbeatAck: [DiscordClient, IPayload<"heartbeatAck">];
};
