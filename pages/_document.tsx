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
          const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'DARK'
            : 'LIGHT';
          if (savedTheme === "DARK" || systemTheme === "DARK") {
            html.classList.add('dark');
            html.style.backgroundColor = "#27211F";
          } else {
            html.classList.remove('dark');
            html.style.backgroundColor = "#F5F2E8";
          }
        }
      `}</Script>
      </body>
    </Html>
  );
}
