import { IHeartBeatAck } from "./IHeartbeatAck";
import { IHelloData } from "./IHelloData";

export interface IPayloadMap {
  hello: IHelloData;
  heartbeatAck: IHeartBeatAck;
  heartbeat: number;
}
