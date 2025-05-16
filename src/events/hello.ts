import IEvent from "../interfaces/IEvent";

class HelloEvent implements IEvent {
  name = "event.hello";
  public once = true;

  public async run(): Promise<void> {
    console.log("hello working");
  }
}

export default HelloEvent;
