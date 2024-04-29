import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Noto_Serif_JP } from '@next/font/google';
import { ThemeLayout } from '@components/layout/ThemeLayout';
import { SiteHeader } from '@components/SiteHeader';
import { SiteFooter } from '@components/SiteFooter';
import { SiteLayout } from '@components/layout/SiteLayout';

const notoSerifJp = Noto_Serif_JP({
  weight: ['400', '500', '900'],
  display: 'swap',
  variable: '--font-jp',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${notoSerifJp.variable} font-serif`}>
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
