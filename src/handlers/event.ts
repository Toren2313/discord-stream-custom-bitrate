import DiscordClient from "../client";
import IEvent from "../interfaces/IEvent";

import HelloEvent from "../events/hello";

class EventHandler {
  private _client: DiscordClient;
  private _events: IEvent[] = [new HelloEvent()];

  constructor(client: DiscordClient) {
    this._client = client;
  }
  public async handle(): Promise<void> {
    for (const _event of this._events) {
      if (_event.once) this._client.once(_event.name, async () => await _event.run());
      else this._client.on(_event.name, async () => await _event.run());
    }
  }
}

export default EventHandler;
