import DiscordClient from "../client";
import { EventMap } from "../interfaces/EventMap";
import IEvent from "../interfaces/IEvent";

class IdentifyEvent implements IEvent {
  name: keyof EventMap = "identify";
  public once = false;

  public async run(client: DiscordClient): Promise<void> {
    console.log(`[201] sended identify`);

    const identifyPayload: object = {
      op: 2,
      d: {
        token: "",
        properties: {
          os: "linux",
          browser: "firefox",
          device: "firefox",
        },
        compress: false,
        presence: {
          activities: [],
          status: "online",
          since: 0,
          afk: false,
        },
        capabilities: 16381,
        client_state: {
          api_code_version: 8,
          guild_versions: {},
        },
      },
    };

    client.ws.send(JSON.stringify(identifyPayload));
  }
}

export default IdentifyEvent;
