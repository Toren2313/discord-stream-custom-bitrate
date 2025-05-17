import { IHeartBeatAck } from "./IHeartbeatAck";
import { IHelloData } from "./IHelloData";

export interface IPayloadMap {
  hello: IHelloData;
  heartbeat_ack: IHeartBeatAck;
  number: number;
}

// export type opCodoes =
