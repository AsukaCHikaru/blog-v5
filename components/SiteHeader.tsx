import { SECTIONS } from '../consts/sections';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import styles from '@styles/SiteHeader.module.css';

export const SiteHeader = () => {
  const { pathname } = useRouter();

  const isLinkActive = useCallback(
    (section: (typeof SECTIONS)[keyof typeof SECTIONS]) => {
      return (
        (pathname === '/' && section.isHome) || pathname.startsWith(section.url)
      );
    },
    [pathname],
  );

  return (
    <div className={styles.container}>
      <div className={styles['nav-container']}>
        <div className={styles['section-container']}>
          {Object.values(SECTIONS).map((section) => (
            <Link
              key={section.url}
              href={section.url}
              className={`${styles['section-link']} interactive-color ${
                isLinkActive(section) ? 'text-color' : ''
              }`}
            >
              {section.label}
            </Link>
          ))}
        </div>
        <Link href="/" className={`${styles['publication-folio']} text-color`}>
          ASUKA WANG
        </Link>
      </div>
      <div className={`${styles['divider']} border-color-100`} />
    </div>
  );
};
