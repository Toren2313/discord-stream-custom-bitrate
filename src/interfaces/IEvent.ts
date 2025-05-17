export default interface IEvent {
  name: string;
  run(...args): Promise<void>;
  once: boolean;
}
