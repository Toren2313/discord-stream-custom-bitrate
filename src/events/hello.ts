import IEvent from "../interfaces/IEvent";
import { IPayload } from "../interfaces/IPayload";

class HelloEvent implements IEvent {
  name = "event.hello";
  public once = true;

  public async run(message: IPayload): Promise<void> {
    console.log("[DISCORD] Sent hello");
    console.log(message);
  }
}

export default HelloEvent;
