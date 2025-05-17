import { RawData } from "ws";
import IEvent from "../interfaces/IEvent";

class HeartBeatEvent implements IEvent {
  name = "event.heartbeat";
  public once = false;

  public async run(message: RawData): Promise<void> {
    console.log("[DISCORD] Sent heartbeat");
    console.log(message);
  }
}

export default HeartBeatEvent;
