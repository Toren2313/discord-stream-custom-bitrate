import { IHelloData } from "./IHelloData";

export interface IPayload {
    op: number,
    d: IHelloData,
    s?: number,
    t: string,
}

//export type DataTypes = IHelloData | IHeartBeatData;