"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
class DiscordClient {
    constructor() {
        this.url = "wss://gateway.discord.gg/?v=10&encoding=json";
        this.isConnected = false;
        this.ws = new ws_1.default(this.url);
        this.ws.on("open", () => console.log("connected"));
    }
    static getInstance() {
        return (this._instance) ? this._instance : this._instance = new this();
    }
}
exports.default = DiscordClient;
