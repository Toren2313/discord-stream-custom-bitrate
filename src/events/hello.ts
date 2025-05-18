import { EventMap } from "../interfaces/EventMap";
import IEvent from "../interfaces/IEvent";
import { IPayload } from "../interfaces/IPayload";

class HelloEvent implements IEvent {
  name: keyof EventMap = "hello";
  public once = true;

  public async run(...args: IPayload<"hello">[]): Promise<void> {
    const payload = args[0];
    console.log("[DISCORD] Sent hello");
    console.log(payload.d.heartbeat_interval);
  }
}

export default HelloEvent;
