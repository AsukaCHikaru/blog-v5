import { ReactNode, useState } from 'react';
import styles from '@styles/Layout.module.css';
import { SiteHeader } from '@components/SiteHeader';
import { SiteFooter } from '@components/SiteFooter';
import { MobileMenu } from '@components/MobileMenu';

export const Layout = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`text-color ${styles.container}`}
      data-is-menu-open={isMenuOpen}
    >
      <SiteHeader
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        isMenuOpen={isMenuOpen}
        mobileMenu={<MobileMenu onClose={() => setIsMenuOpen(false)} />}
      />

      {children}
      <SiteFooter />
    </div>
  );
};

export const FullContent = ({ children }: { children: ReactNode }) => {
  return <div className={styles['full-content']}>{children}</div>;
};

export const MainContent = ({ children }: { children: ReactNode }) => {
  return <div className={styles['main-content']}>{children}</div>;
};
export const LeftPanel = ({ children }: { children: ReactNode }) => {
  return <div className={styles['left-panel']}>{children}</div>;
};
export const RightPanel = ({ children }: { children: ReactNode }) => {
  return <div className={styles['right-panel']}>{children}</div>;
};
export const RightWideContent = ({ children }: { children: ReactNode }) => {
  return <div className={styles['right-wide-content']}>{children}</div>;
};
