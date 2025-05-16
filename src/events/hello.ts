import DiscordClient from "../client";
import IEvent from "../interfaces/IEvent";

class HelloEvent implements IEvent {
  name: string = "event.hello";
  public once = true;

  public async run(): Promise<void> {
    console.log("hello working");
  }
}

export default HelloEvent;
