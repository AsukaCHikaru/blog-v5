import type { AppProps } from 'next/app';
import { SiteHeader } from '@components/SiteHeader';
import { SiteFooter } from '@components/SiteFooter';
import 'styles/globals.css';
import 'styles/fonts.css';
import 'node_modules/modern-normalize/modern-normalize.css';
import { Layout } from '@components/layout/Layout';
import { useState } from 'react';
import { MobileMenu } from '@components/MobileMenu';

export default function App({ Component, pageProps }: AppProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main>
      <Layout isMenuOpen={isMenuOpen}>
        <SiteHeader
          onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
          isMenuOpen={isMenuOpen}
          mobileMenu={<MobileMenu onClose={() => setIsMenuOpen(false)} />}
        />
        <Component {...pageProps} />
        <SiteFooter />
      </Layout>
    </main>
  );
}
