import { IHeartBeatAck } from "./payloads/IHeartbeatAck";
import { IHelloData } from "./payloads/IHello";

export interface IPayloadMap {
  hello: IHelloData;
  heartbeatAck: IHeartBeatAck;
  heartbeat: number;
  null: null;
}
