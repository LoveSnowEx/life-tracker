import { type FreshContext, type Handlers } from "$fresh/server.ts";
import { availableProviders, oauthHelpers } from "@/utils/oauth.ts";
import { type Session } from "@5t111111/fresh-session";

export const handler: Handlers = {
    async GET(req: Request, ctx: FreshContext) {
        const session = ctx.state.session as Session;
        const provider = session.get<string>("oauth:provider");
        if (!provider || !availableProviders.includes(provider)) {
            return new Response("Invalid or unsupported provider", { status: 400 });
        }
        const signOut = oauthHelpers[provider].signOut;
        return await signOut(req);
    },
}
