import DiscordClient from "../client";
import { EventMap } from "../interfaces/EventMap";
import { ExtraArgs } from "../interfaces/IArgs";
import IEvent from "../interfaces/IEvent";

class HeartBeatEvent implements IEvent {
  name: keyof EventMap = "ready";
  public once = false;

  public async run(client: DiscordClient, ...args: ExtraArgs["ready"]): Promise<void> {
    console.log(client, args);
  }
}

export default HeartBeatEvent;
