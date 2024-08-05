import { ReactNode } from 'react';
import styles from '@styles/Layout.module.css';

export const Layout = ({ children }: { children: ReactNode }) => {
  return <div className={`text-color ${styles.container}`}>{children}</div>;
};
