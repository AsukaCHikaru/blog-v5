import type { AppProps } from 'next/app';
import { SiteHeader } from '@components/SiteHeader';
import { SiteFooter } from '@components/SiteFooter';
import 'styles/globals.css';
import 'styles/fonts.css';
import 'node_modules/modern-normalize/modern-normalize.css';
import { Layout } from '@components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Layout>
        <SiteHeader />
        <Component {...pageProps} />
        <SiteFooter />
      </Layout>
    </main>
  );
}
