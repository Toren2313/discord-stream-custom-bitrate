import DiscordClient from "../client";
import { EventMap } from "../interfaces/EventMap";
import IEvent from "../interfaces/IEvent";

class HeartBeatEvent implements IEvent {
  name: keyof EventMap = "heartbeat";
  public once = false;

  public async run(client: DiscordClient): Promise<void> {
    console.log(`[201] recived heartbeat with interval: ${client.interval} and ${client.sequence} sequences`);
  }
}

export default HeartBeatEvent;
