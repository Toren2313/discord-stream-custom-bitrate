import DiscordClient from "../client";
import { EventMap } from "../interfaces/EventMap";
import IEvent from "../interfaces/IEvent";
import { IPayload } from "../interfaces/IPayload";

class HeartBeatEventAck implements IEvent {
  name: keyof EventMap = "heartbeatAck";
  public once = false;

  public async run(client: DiscordClient, ...args: IPayload<"heartbeatAck">[]): Promise<void> {
    client.sequence = args[0].s;
  }
}

export default HeartBeatEventAck;
