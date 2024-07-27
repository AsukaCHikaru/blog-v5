import { FC, PropsWithChildren } from 'react';
import styles from '@styles/blog/SideColumn.module.css';

export const SideColumn: FC<PropsWithChildren> = ({ children }) => {
  const handleTopClick = () => {
    document.querySelector('html')?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      <div className={styles.children}>{children}</div>
      <div className={styles['top-button-wrapper']}>
        <button
          className={`${styles['top-button']} interactive-color`}
          onClick={handleTopClick}
        >
          TOP
        </button>
      </div>
    </div>
  );
};
