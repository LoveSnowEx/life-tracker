import { FreshContext } from "$fresh/src/server/mod.ts";
import { availableProviders, oauthHelpers } from "@/utils/oauth.ts";
import { State } from "@/utils/state.ts";
import { Session } from "@5t111111/fresh-session";


export const handler = [
    function sessionMiddleware(req: Request, ctx: FreshContext<State>) {
        if (!ctx.state.session) {
            ctx.state.session = new Session();
        }
        ctx.state.session.set("a", "b");
        return ctx.next();
    },
    function oauthMiddleware(req: Request, ctx: FreshContext<State>) {
        // console.log(ctx.state.session.get("a")); // Debugging line to check session flash
        console.log("destination:", ctx.destination);
        console.log("url:", ctx.url.pathname);
        // if (ctx.destination == "static") {
        //     return ctx.next();
        // }
        // const session = ctx.state.session as Session;
        // console.log("fixed session:", session);
        // const provider = session.get("oauth:provider");

        // if (!provider || !availableProviders.includes(provider)) {
        //     // console.error("Invalid or unsupported provider:", provider);
        //     return ctx.next();
        // }

        // const getSessionId = oauthHelpers[provider].getSessionId;

        // const oauthUserId = session.get("oauth:user:id");
        // if (oauthUserId === undefined) {
        //     if (!ctx.url.pathname.startsWith("/api/oauth")) {
        //         return Response.redirect("/login", 307);
        //     }
        // }
        return ctx.next();
    },
];
