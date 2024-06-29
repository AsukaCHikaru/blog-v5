import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeLayout } from '@components/layout/ThemeLayout';
import { SiteHeader } from '@components/SiteHeader';
import { SiteFooter } from '@components/SiteFooter';
import { SiteLayout } from '@components/layout/SiteLayout';
import { fonts } from 'styles/fonts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={fonts.join(' ')}>
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
