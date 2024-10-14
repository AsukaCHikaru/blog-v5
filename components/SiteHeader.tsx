import { SECTIONS } from '../consts/sections';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useCallback } from 'react';
import styles from '@styles/SiteHeader.module.css';

interface Props {
  onToggleMenu: () => void;
  isMenuOpen: boolean;
  mobileMenu: ReactNode;
}

export const SiteHeader = ({ onToggleMenu, mobileMenu, isMenuOpen }: Props) => {
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
    <div className={styles.container} data-is-menu-open={isMenuOpen}>
      <div className={styles['nav-container']}>
        <div className={styles['section-container']}>
          {Object.values(SECTIONS).map((section) => (
            <Link
              key={section.url}
              href={section.url}
              className={`${styles['section-link']} interactive-color ${isLinkActive(section) ? 'text-color' : ''
                }`}
            >
              {section.label}
            </Link>
          ))}
          <Link
            href="/blog/feed.xml"
            target="_blank"
            className={`${styles['section-link']} interactive-color`}
          >
            rss
          </Link>
        </div>
        <button className={styles['menu-button']} onClick={onToggleMenu}>
          {isMenuOpen ? 'close menu' : 'menu'}
        </button>
        <Link href="/" className={`${styles['publication-folio']} text-color`}>
          ASUKA WANG
        </Link>
      </div>
      <div className={`${styles['divider']} border-color-100`} />
      <div className={styles['menu-wrapper']}>
        {isMenuOpen ? mobileMenu : null}
      </div>
    </div>
  );
};
