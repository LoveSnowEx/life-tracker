import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import IconPlus from 'https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/plus.tsx';

export function ButtonCreate(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center"
    >
        <IconPlus color="white" size={32} />
    </button>
  );
}
