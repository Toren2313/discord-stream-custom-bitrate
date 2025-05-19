import DiscordClient from "../client";
import { EventMap } from "./EventMap";

export default interface IEvent {
  name: keyof EventMap;
  run(client: DiscordClient, ...args: unknown[]): Promise<void>;
  once: boolean;
}
