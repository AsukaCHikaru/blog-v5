import { FC, PropsWithChildren } from 'react';
import styles from '@styles/SiteLayout.module.css';

export const SiteLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
