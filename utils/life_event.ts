import { signal } from "@preact/signals";
import { db } from "./db.ts";

interface LifeEvent {
  id: string;
  name: string;
  detail: string;
  date: Date;
}

export type { LifeEvent };

export const events = signal<LifeEvent[]>([]);

export async function createEvent(event: LifeEvent) {
  await db.set(["events", event.id], event);
  await syncEvents();
}

async function syncEvents() {
  const newEventEntries = await Array.fromAsync(
    db.list<LifeEvent>({ prefix: ["events"] }),
  );
  events.value = newEventEntries.map((eventEntry) => eventEntry.value);
}
