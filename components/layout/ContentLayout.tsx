import { FC, PropsWithChildren } from 'react';
import styles from '@styles/ContentLayout.module.css';

export const ContentLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
