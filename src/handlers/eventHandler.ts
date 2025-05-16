import { RawData } from "ws";
import DiscordClient from "../client";
import { IPayload } from "../interfaces/IPayload";

class EventHandler {
  private _client: DiscordClient;
  private _messageData: IPayload;

  constructor(client: DiscordClient) {
    this._client = client;
  }

  public async handle(): Promise<void> {
    this._client.ws.on("message", (data: RawData) => {
      this._messageData = this.parseData(data);
      console.log(this._messageData);

      switch (this._messageData.op) {
        /**
         *  * 1 - heartbeat (recive/send)
         */
        case 1: {
          this._client.emit("event.heartbeat", this._messageData, this._client.ws);
          break;
        }
        /**
         *  * 10 - hello (recive)
         */
        case 10: {
          this._client.emit("event.hello", this._messageData, this._client.ws);
          break;
        }
        /**
         *  * 11 - hearbeat ACK (recive)
         */
        case 10: {
          this._client.emit("event.heartbeatAck", this._messageData, this._client.ws);
          break;
        }
      }
    });
  }

  private parseData(data: RawData): IPayload {
    return JSON.parse(data.toString());
  }
}

export default EventHandler;
