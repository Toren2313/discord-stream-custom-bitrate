import WebSocket from "ws";

/**
 * @
 * @param {string} url gateway url you are trying to connect
 * 
 */
class DiscordClient {
    private static _instance: DiscordClient;
    private readonly url: string = "wss://gateway.discord.gg/?v=10&encoding=json";
    public ws: WebSocket;
    public isConnected: boolean = false;

    protected constructor(){
        this.ws = new WebSocket(this.url);
        this.ws.on("open", ()=>console.log("connected"))
    }

    /**
     * 
     * @returns {DiscordClient} constant instance of DiscordClient class.
    */
    static getInstance(): DiscordClient {
        return (this._instance) ? this._instance : this._instance = new this();
    }
}

export default DiscordClient