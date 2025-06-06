import { EventEmitter } from "events";
import WebSocket from "ws";
import MessageHandler from "./handlers/message";
import EventHandler from "./handlers/event";

class DiscordClient extends EventEmitter {
  private static _instance: DiscordClient;
  private readonly _url: string = "wss://gateway.discord.gg/?v=10&encoding=json";

  private _messageHandler: MessageHandler;
  private _eventHandler: EventHandler;

  public ws: WebSocket;
  public isConnected = false;

  protected constructor() {
    super();

    this._eventHandler = new EventHandler(this);
    this._messageHandler = new MessageHandler(this);
    this.ws = new WebSocket(this._url);

    this.ws.once("open", () => {
      this.isConnected = true;
      this.init();
    });
  }

  private async init(): Promise<void> {
    await Promise.all([await this._messageHandler.handle(), await this._eventHandler.handle()]);
  }

  /**
   *
   * @returns {DiscordClient} constant instance of DiscordClient class.
   */
  static getInstance(): DiscordClient {
    return this._instance ? this._instance : (this._instance = new this());
  }
}

export default DiscordClient;
