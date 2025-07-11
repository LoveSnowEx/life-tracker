import LoginAnchor from "../../components/LoginAnchor.tsx";
import { PageProps } from "$fresh/server.ts";

export default function LoginPage(pageProps: PageProps) {
  const redirectUrl = pageProps.url.href;

  return (
    <div>
      <LoginAnchor provider="google" redirectUrl={redirectUrl}>
        Login with Google
      </LoginAnchor>
    </div>
  );
}
