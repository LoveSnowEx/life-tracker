import "$std/dotenv/load.ts";
import { safeEnv, string, url } from "@safe-env/safe-env";

const env = safeEnv({
  BASE_URL: url({
    defaultValue: new URL("http://localhost:8000"),
    optional: true,
  }),
  APP_KEY: string({ defaultValue: "" }),
});

export const config = {
  hostname: env.BASE_URL.hostname,
  port: Number(env.BASE_URL.port),
  protocol: env.BASE_URL.protocol,
  appKey: env.APP_KEY,
  baseUrl: env.BASE_URL,
};
