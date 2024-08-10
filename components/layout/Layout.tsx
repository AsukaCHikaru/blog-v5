import { ReactNode } from 'react';
import styles from '@styles/Layout.module.css';

export const Layout = ({
  children,
  isMenuOpen,
}: {
  children: ReactNode;
  isMenuOpen: boolean;
}) => {
  return (
    <div
      className={`text-color ${styles.container}`}
      data-is-menu-open={isMenuOpen}
    >
      {children}
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
