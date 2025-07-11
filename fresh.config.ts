import tailwind from "$fresh/plugins/tailwind.ts";
import { defineConfig } from "$fresh/server.ts";
import { sessionPlugin } from "@5t111111/fresh-session";
import { config } from "./utils/config.ts";

export default defineConfig({
  plugins: [
    tailwind(),
    sessionPlugin({
      // Key must be at least 32 characters long.
      encryptionKey: config.appKey,
      // Optional; the session does not expire if not provided.
      expireAfterSeconds: 60 * 60 * 24,
      // Optional; default is "session".
      sessionCookieName: "my_session",
      // Optional; see https://jsr.io/@std/http/doc/cookie/~/Cookie
      cookieOptions: { path: "/", httpOnly: true, sameSite: "Lax" },
    }),
  ],
});
