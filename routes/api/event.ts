import { Handlers } from "$fresh/server.ts";
import { ulid } from "@std/ulid";
import { createEvent, events } from "../../utils/life_event.ts";
import type { LifeEvent } from "../../utils/life_event.ts";

export const handler: Handlers = {
  GET(_req, _ctx) {
    return new Response(JSON.stringify(events.value));
  },
  async POST(req, _ctx) {
    let newEvent: LifeEvent | undefined;
    try {
      newEvent = await req.json() as LifeEvent;
      if (!newEvent.name || !newEvent.detail || !newEvent.date) {
        throw new Error("Missing required fields: name, detail, date");
      }
    } catch {
      return new Response("Invalid JSON format or missing fields", { status: 400 });
    }

    newEvent.id = ulid();
    await createEvent(newEvent);
    return new Response(JSON.stringify(newEvent), { status: 201 });
  },
};
