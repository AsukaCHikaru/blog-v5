import { FC, PropsWithChildren } from 'react';
import styles from '@styles/blog/SideColumnHeader.module.css';

export const SideColumnHeader: FC<PropsWithChildren> = ({ children }) => {
  return <div className={`${styles.container} border-color`}>{children}</div>;
};
