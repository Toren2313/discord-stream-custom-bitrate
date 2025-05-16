export default interface IEvent {
  name: string;
  run(): Promise<void>;
  once: boolean;
}
