import { FC, PropsWithChildren } from 'react';
import styles from '@styles/blog/BelowPostDetailColumnHeader.module.css';

export const BelowPostDetailColumnHeader: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className={styles.container}>
      <div className={`${styles['double-border']} border-color`} />
      <div className={styles.title}>{children}</div>
      <div className={`${styles['double-border']} border-color`} />
    </div>
  );
};
