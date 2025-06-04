import DiscordClient from "../client";
import { EventMap } from "../interfaces/EventMap";
import IEvent from "../interfaces/IEvent";
import { IPayload } from "../interfaces/IPayload";

class HelloEvent implements IEvent {
  name: keyof EventMap = "hello";
  public once = true;

  public async run(client: DiscordClient, payload: IPayload<"hello">): Promise<void> {
    client.interval = payload.d.heartbeat_interval;
    client.ws.send(
      JSON.stringify({
        op: 1,
        d: null,
      }),
    );

    setInterval(async () => {
      const payload: object = {
        op: 1,
        d: client.sequence ?? null,
      };

      await client.ws.send(JSON.stringify(payload));
      console.log(`[201] sended heartbeat with interval: ${client.interval} and ${client.sequence} sequences`);
      client.isConnected = true;
    }, client.interval);
  }
}

export default HelloEvent;
