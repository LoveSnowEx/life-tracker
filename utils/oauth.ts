import { createGoogleOAuthConfig, createHelpers, type Helpers, type OAuth2ClientConfig, type Tokens } from "jsr:@deno/kv-oauth";
import { config } from "./config.ts";

export const getLoginUrl = (provider: string) => new URL(`/api/oauth/${provider}/login`, config.baseUrl);
export const logoutUrl = new URL(`/api/oauth/logout`, config.baseUrl);
const callbackUrl = new URL(`/api/oauth/callback`, config.baseUrl);

export class oauthUser {
  id: string;
  name: string;
  email?: string;

  constructor(id: string, name: string, email?: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

const oauthConfigFactory: Record<string, () => OAuth2ClientConfig> = {
  google: () => createGoogleOAuthConfig(
    {
      redirectUri: callbackUrl.toString(),
      scope: "https://www.googleapis.com/auth/userinfo.profile"
    })
};

export const oauthUserFetchFunctions: Record<string, (tokens: Tokens) => Promise<oauthUser>> = {
  google: async (tokens: Tokens) => {
    const response = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: {
        Authorization: `Bearer ${tokens.accessToken}`
      }
    });
    const user = await response.json();
    return new oauthUser(
      user.sub,
      user.name,
    );
  },
};

export const oauthHelpers: Record<string, Helpers> = Object.fromEntries(
  Object.entries(oauthConfigFactory).map(([provider, configFactory]) => {
    try {
      const oauthConfig = configFactory();
      return [
        provider,
        createHelpers(oauthConfig)
      ];
    } catch {
      return [provider, undefined];
    }
  }).filter(([, helper]) => helper !== undefined)
);

export const availableProviders = Object.keys(oauthHelpers);
