import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Serif_JP } from "@next/font/google";

const notoSerifJp = Noto_Serif_JP({ weight: ["200", "400", "600", "900"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${notoSerifJp.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
