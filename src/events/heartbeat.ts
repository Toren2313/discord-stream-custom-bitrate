import DiscordClient from "../client";
import { EventMap } from "../interfaces/EventMap";
import IEvent from "../interfaces/IEvent";
import { IPayload } from "../interfaces/IPayload";

class HeartBeatEvent implements IEvent {
  name: keyof EventMap = "heartbeat";
  public once = false;

  public async run(client: DiscordClient, ...args: IPayload<"heartbeat">[]): Promise<void> {
    const payload = args[0];
    console.log("[DISCORD] Sent heartbeat");

    console.log(payload.d);
  }
}

export default HeartBeatEvent;
