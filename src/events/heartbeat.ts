import { EventMap } from "../interfaces/EventMap";
import IEvent from "../interfaces/IEvent";
import { IPayload } from "../interfaces/IPayload";

class HeartBeatEvent implements IEvent {
  name: keyof EventMap = "heartbeat";
  public once = false;

  public async run(payload: IPayload<"heartbeat">): Promise<void> {
    console.log("[DISCORD] Sent heartbeat");
    console.log(payload.d);
  }
}

export default HeartBeatEvent;
