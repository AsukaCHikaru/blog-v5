import { FC } from 'react';
import styles from '@styles/SiteFooter.module.css';

export const SiteFooter: FC = () => {
  return (
    <div className={`${styles.container} border-color`}>
      <a
        href="https://asukachikaru.com"
        rel="noopener noreferrer"
        target="_blank"
        className={`${styles.link} interactive-color`}
      >
        asukachikaru.com 2018-
      </a>
    </div>
  );
};
