import { FC } from 'react';
import styles from '@styles/SiteFooter.module.css';

export const SiteFooter: FC = () => {
  return (
    <div className={`${styles.container} interactive-color border-color`}>
      <a
        href="https://asukachikaru.com"
        rel="noopener noreferrer"
        target="_blank"
        className={styles.link}
      >
        asukachikaru.com
      </a>{' '}
      2018-
    </div>
  );
};
