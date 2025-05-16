import { IHelloData } from "./IHelloData";
import { IPayloadMap } from "./IPayloadMap";

export interface IPayload<T extends keyof IPayloadMap = keyof IPayloadMap> {
  op: number;
  d: IPayloadMap[T];
  s?: number;
  t: string;
}

//export type DataTypes = IHelloData | IHeartBeatData;
