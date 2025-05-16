import { RawData } from "ws";
import DiscordClient from "../client";
import { IPayload } from "../interfaces/IPayload";

class MessageHandler {
  private _client: DiscordClient;
  private _messageData: IPayload;

  constructor(client: DiscordClient) {
    this._client = client;
  }

  public async handle(): Promise<void> {
    this._client.ws.on("message", (data: RawData) => {
      this._messageData = this.parseData(data);

      /**
       *  * 1 - heartbeat (recive/send)
       *  * 10 - hello (recive)
       *  * 11 - hearbeat ACK (recive)
       */

      switch (this._messageData.op) {
        case 1: {
          this._client.emit("event.heartbeat", this._messageData, this._client.ws);
          break;
        }

        case 10: {
          this._client.emit("event.hello", this._messageData, this._client.ws);
          break;
        }

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

export default MessageHandler;
