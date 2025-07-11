/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import freshConfig from "./fresh.config.ts";
import { config } from "./utils/config.ts";


await start(manifest, {
    hostname: config.hostname,
    port: config.port,
    ...freshConfig
});
