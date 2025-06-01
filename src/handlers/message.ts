import { RawData } from "ws";
import DiscordClient from "../client";
import { IPayload } from "../interfaces/IPayload";

class MessageHandler {
  private _client: DiscordClient;

  constructor(client: DiscordClient) {
    this._client = client;
  }

  public async handle(): Promise<void> {
    this._client.ws.on("message", (data: RawData) => {
      const payload = this.parseData(data);

      /**
       *  * 1 - heartbeat (recive/send)
       *  * 10 - hello (recive)
       *  * 11 - hearbeat ACK (recive)
       */

      switch (payload.op) {
        case 1: {
          const heartBeatPayload = payload as IPayload<"heartbeat">;
          this._client.emit("heartbeat", this._client, heartBeatPayload);
          console.log(`[201] heartbeat event triggered, payload: ${payload}`);
          break;
        }

        case 10: {
          const helloPayload = payload as IPayload<"hello">;
          this._client.emit("hello", this._client, helloPayload);
          console.log(`[201] hello event triggered, payload: ${payload}`);
          break;
        }

        case 11: {
          const heartbeatAckPayload = payload as IPayload<"heartbeatAck">;
          this._client.emit("heartbeatAck", this._client, heartbeatAckPayload);
          console.log(`[201] heartbeatAck event triggered, payload: ${payload}`);
          break;
        }
        default: {
          console.log(`[404] status code not found, payload: ${payload}}`);
        }
      }
    });
  }

  private parseData(data: RawData): IPayload {
    return JSON.parse(data.toString());
  }
}

export default MessageHandler;
