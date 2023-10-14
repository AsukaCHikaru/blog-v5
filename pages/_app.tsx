import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Noto_Serif_JP } from '@next/font/google';
import { ThemeLayout } from '@components/layout/ThemeLayout';
import { GridLayout } from '@components/layout/GridLayout';
import { SiteHeader } from '@components/SiteHeader';
import { Footer } from '@components/blog/Footer';

const notoSerifJp = Noto_Serif_JP({
  weight: ['400', '500', '900'],
  display: 'swap',
  variable: '--font-jp',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${notoSerifJp.variable} font-serif`}>
      <ThemeLayout>
        <GridLayout>
          <SiteHeader />
          <Component {...pageProps} />
          <Footer />
        </GridLayout>
      </ThemeLayout>
    </main>
  );
}
