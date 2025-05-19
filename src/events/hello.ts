import DiscordClient from "../client";
import { EventMap } from "../interfaces/EventMap";
import IEvent from "../interfaces/IEvent";
import { IPayload } from "../interfaces/IPayload";

class HelloEvent implements IEvent {
  name: keyof EventMap = "hello";
  public once = true;

  public async run(client: DiscordClient, ...args: IPayload<"hello">[]): Promise<void> {
    console.log("[DISCORD] Sent hello");

    const payload = args[0];
    console.log(payload);
  }
}

export default HelloEvent;
