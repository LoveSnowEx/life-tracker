import { JSX } from "preact";

interface LoginProps extends JSX.HTMLAttributes<HTMLAnchorElement> {
  provider: string;
  redirectUrl: string;
}

export default function Login(props: LoginProps) {
  props.href = `/api/oauth/login?provider=${props.provider}&redirect=${
    encodeURIComponent(props.redirectUrl)
  }`;
  return <a {...props} />;
}
