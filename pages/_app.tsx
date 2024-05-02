import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {
  Abhaya_Libre,
  Abril_Fatface,
  Alegreya,
  Amiri,
  Gentium_Book_Basic,
  Gentium_Book_Plus,
  Gentium_Plus,
  Lora,
  Noto_Sans,
  Noto_Serif_JP,
} from '@next/font/google';
import { ThemeLayout } from '@components/layout/ThemeLayout';
import { SiteHeader } from '@components/SiteHeader';
import { SiteFooter } from '@components/SiteFooter';
import { SiteLayout } from '@components/layout/SiteLayout';

const abhayaLibre = Abhaya_Libre({
  weight: ['700'],
  display: 'swap',
  variable: '--font-abhaya-libre',
});
const notoSerifJp = Noto_Serif_JP({
  weight: ['400', '500', '900'],
  display: 'swap',
  variable: '--font-jp',
});
const gentiumBasic = Gentium_Plus({
  weight: ['400'],
  display: 'swap',
  style: ['italic'],
  variable: '--font-gentium-basic',
});
const notoSans = Noto_Sans({
  weight: ['200'],
  display: 'swap',
  variable: '--font-noto-sans',
});
const alegreya = Alegreya({
  weight: ['400'],
  display: 'swap',
  variable: '--font-alegreya',
});
const abril = Abril_Fatface({
  weight: ['400'],
  display: 'swap',
  variable: '--font-abril',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`
        ${notoSerifJp.variable}
        ${notoSans.variable}
        ${abhayaLibre.variable}
        ${gentiumBasic.variable}
        ${alegreya.variable}
        ${abril.variable}
        font-serif`}
    >
      <ThemeLayout>
        <SiteLayout>
          <SiteHeader />
          <Component {...pageProps} />
          <SiteFooter />
        </SiteLayout>
      </ThemeLayout>
    </main>
  );
}
