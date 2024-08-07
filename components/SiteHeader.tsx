import { SECTIONS } from '../consts/sections';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useCallback, useState } from 'react';
import styles from '@styles/SiteHeader.module.css';

export const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <>
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
          <button
            className={styles['menu-button']}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 'close menu' : 'menu'}
          </button>
          <Link
            href="/"
            className={`${styles['publication-folio']} text-color`}
          >
            ASUKA WANG
          </Link>
        </div>
        <div className={`${styles['divider']} border-color-100`} />
      </div>
      {isMenuOpen ? (
        <>
          <div
            className={styles.backdrop}
            onClick={() => setIsMenuOpen(false)}
          />
          <div className={styles.menu}>
            <MenuSectionTitle active={pathname.includes('blog')}>
              blog
            </MenuSectionTitle>
            <MenuSectionTitle active={pathname === '/about'}>
              about
            </MenuSectionTitle>
          </div>
        </>
      ) : null}
    </>
  );
};

const MenuSectionTitle = ({
  children,
  active,
}: {
  children: ReactNode;
  active: boolean;
}) => {
  return (
    <div
      className={`${styles['menu-section-title']} interactive-color`}
      data-active={active}
    >
      {children}
    </div>
  );
};
