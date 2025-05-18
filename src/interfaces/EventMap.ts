import { IPayload } from "./IPayload";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type EventMap = {
  hello: [IPayload<"hello">];
  heartbeat: [IPayload<"heartbeat">];
  heartbeatAck: [IPayload<"heartbeatAck">];
};
