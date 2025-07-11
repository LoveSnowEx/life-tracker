import { type FreshContext, type Handlers } from "$fresh/server.ts";
import { availableProviders, oauthHelpers, oauthUserFetchFunctions } from "@/utils/oauth.ts";
import { type Session } from "@5t111111/fresh-session";
import { config } from "@/utils/config.ts";

export const handler: Handlers = {
    async GET(req: Request, ctx: FreshContext) {
        const session = ctx.state.session as Session;

        const provider = session.get<string>("oauth:provider");
        const redirectUrl = session.get<string>("oauth:redirect") || config.baseUrl.toString();

        if (!provider || !availableProviders.includes(provider)) {
            return Response.redirect(redirectUrl, 307);
        }

        const handleCallback = oauthHelpers[provider].handleCallback

        const { response, sessionId, tokens } = await handleCallback(req);

        if (!response.ok) {
            session.set("oauth:provider", null);
        }

        console.log("response:", response);
        console.log("sessionId:", sessionId);
        console.log("tokens:", tokens);

        const oauthUserFetchFunction = oauthUserFetchFunctions[provider];

        const oauthUser = await oauthUserFetchFunction(tokens);

        console.log("oauthUser:", oauthUser);

        session.set("oauth:user:id", oauthUser.id);
        session.set("oauth:user:name", oauthUser.name);
        return response;
    },
}
