import DiscordClient from "../client";
import { EventMap } from "../interfaces/EventMap";
import IEvent from "../interfaces/IEvent";
import { IPayload } from "../interfaces/IPayload";

class HeartBeatEventAck implements IEvent {
  name: keyof EventMap = "heartbeatAck";
  public once = false;

  public async run(client: DiscordClient, ...args: IPayload<"heartbeatAck">[]): Promise<void> {
    // const payload: IPayload<"heartbeat"> = {
    //   op: 1,
    //   d: args[0].s,
    //   t: args[0].t,
    // };

    client.sequence = args[0].s;

    //client.emit("heartbeat", client, payload);
  }
}

export default HeartBeatEventAck;
