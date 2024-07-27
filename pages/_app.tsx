import type { AppProps } from 'next/app';
import { ThemeLayout } from '@components/layout/ThemeLayout';
import { SiteHeader } from '@components/SiteHeader';
import { SiteFooter } from '@components/SiteFooter';
import { SiteLayout } from '@components/layout/SiteLayout';
import { fonts } from 'styles/fonts';
import 'styles/globals.css';
import 'node_modules/modern-normalize/modern-normalize.css';

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
