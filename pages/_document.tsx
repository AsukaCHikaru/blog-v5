import { LOCAL_STORAGE_KEYS } from 'consts/storageKeys';
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
          const savedTheme = localStorage.getItem("${LOCAL_STORAGE_KEYS.THEME}");
          const html = document.documentElement;
          if (savedTheme === "DARK") {
            html.classList.add('dark');
            html.style.backgroundColor = "#222222";
          } else {
            html.classList.remove('dark');
            html.style.backgroundColor = "#dddddd";
          }
        }
      `}</Script>
      </body>
    </Html>
  );
}
