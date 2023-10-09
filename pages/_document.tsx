import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script strategy="beforeInteractive" id="theme-document">{`
        if (typeof window !== "undefined") {
          const savedTheme = localStorage.getItem("ASUKACHIKARU_THEME");
          console.log(savedTheme)
          if (savedTheme === "DARK") {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
      `}</Script>
      </body>
    </Html>
  );
}
