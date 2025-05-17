import DiscordClient from "../client";
import IEvent from "../interfaces/IEvent";

import HelloEvent from "../events/hello";
import HeartBeatEvent from "../events/heartbeat";
import { RawData } from "ws";

class EventHandler {
  private _client: DiscordClient;
  private _events: IEvent[] = [new HelloEvent(), new HeartBeatEvent()];

  constructor(client: DiscordClient) {
    this._client = client;
  }
  public async handle(): Promise<void> {
    for (const _event of this._events) {
      if (_event.once) this._client.once(_event.name, async (messageData: RawData) => await _event.run(messageData));
      else this._client.on(_event.name, async (messageData: RawData) => await _event.run(messageData));
    }
  }
}

export default EventHandler;
