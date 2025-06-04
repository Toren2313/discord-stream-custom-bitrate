import DiscordClient from "../client";
import { EventMap } from "../interfaces/EventMap";
import { ExtraArgs } from "../interfaces/IArgs";
import IEvent from "../interfaces/IEvent";
import { IPayload } from "../interfaces/IPayload";

class HeartBeatEventAck implements IEvent {
  name: keyof EventMap = "heartbeatAck";
  public once = false;

  public async run(
    client: DiscordClient,
    payload: IPayload<"heartbeatAck">,
    ...args: ExtraArgs["heartbeatAck"]
  ): Promise<void> {
    console.log(payload, args);
  }
}

export default HeartBeatEventAck;
