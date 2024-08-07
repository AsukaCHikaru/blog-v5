import type { AppProps } from 'next/app';
import { ThemeLayout } from '@components/layout/ThemeLayout';
import { SiteHeader } from '@components/SiteHeader';
import { SiteFooter } from '@components/SiteFooter';
import { SiteLayout } from '@components/layout/SiteLayout';
import 'styles/globals.css';
import 'styles/fonts.css';
import 'node_modules/modern-normalize/modern-normalize.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
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
