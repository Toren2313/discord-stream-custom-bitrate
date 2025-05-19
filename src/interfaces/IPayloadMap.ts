import { IHeartBeatAck } from "./payloads/IHeartbeatAck";
import { IHelloData } from "./payloads/IHello";
import { IHeartbeat } from "./payloads/IHeartbeat";

export interface IPayloadMap {
  hello: IHelloData;
  heartbeatAck: IHeartBeatAck;
  heartbeat: IHeartbeat;
}
