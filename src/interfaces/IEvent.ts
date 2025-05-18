import { EventMap } from "./EventMap";

export default interface IEvent {
  name: keyof EventMap;
  run(...args: unknown[]): Promise<void>;
  once: boolean;
}
