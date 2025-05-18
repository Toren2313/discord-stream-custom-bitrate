import DiscordClient from "../client";
import IEvent from "../interfaces/IEvent";
import HelloEvent from "../events/hello";
import HeartBeatEvent from "../events/heartbeat";

class EventHandler {
  private _client: DiscordClient;
  private _events: IEvent[] = [new HelloEvent(), new HeartBeatEvent()];

  constructor(client: DiscordClient) {
    this._client = client;
  }
  public async handle(): Promise<void> {
    for (const _event of this._events) {
      const listener = (...args: unknown[]) => _event.run(...(args as Parameters<typeof _event.run>));
      if (_event.once) {
        this._client.once(_event.name, listener);
      } else {
        this._client.on(_event.name, listener);
      }
    }
  }
}

export default EventHandler;
