import { z } from "zod/v4";
import { config } from "@/utils/config.ts";
import { type Session } from "@5t111111/fresh-session";
import { type FreshContext, type Handlers } from "$fresh/server.ts";
import { availableProviders, oauthHelpers } from "@/utils/oauth.ts";
import { State } from "@/utils/state.ts";

const loginSchema = z.object({
    provider: z.literal(availableProviders),
    redirect: z.string().optional().default(config.baseUrl.toString()),
});

export const handler: Handlers<any, State> = {
    async GET(req: Request, ctx: FreshContext<State>) {
        console.log(ctx.state.session.get("a")); // Debugging line to check session flash

        const params = Object.fromEntries(ctx.url.searchParams);

        const parsedParams = loginSchema.safeParse(params);

        if (!parsedParams.success) {
            return new Response("Invalid parameters", { status: 400 });
        }

        const {
            provider,
            redirect,
        } = parsedParams.data;

        ctx.state.session.set("oauth:provider", provider);
        ctx.state.session.set("oauth:redirect", redirect);

        return await oauthHelpers[provider].signIn(req);
    },
}
