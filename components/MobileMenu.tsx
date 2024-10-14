import React, { ReactNode, useContext } from 'react';
import styles from '@styles/MobileMenu.module.css';
import Link from 'next/link';
import { SiteContext } from 'pages/_app';

interface Props {
  onClose: () => void;
}

export const MobileMenu = ({ onClose }: Props) => {
  const context = useContext(SiteContext);
  return (
    <>
      <div className={styles.backdrop} onClick={() => onClose()} />
      <div className={styles.menu}>
        <MenuSectionTitle
          active={context?.activeSection === 'blog'}
          label="blog"
          path="/blog"
          rssLink={
            <Link
              href="/blog/feed.xml"
              target="_blank"
              className={`${styles['menu-section-title']} interactive-color`}
            >
              rss
            </Link>
          }
          onTitleClick={onClose}
        >
          {context?.activeSection === 'blog' ? (
            <ul className={styles['category-container']}>
              {context?.blogCategories
                ?.sort((prev, next) => next.count - prev.count)
                .map((category) => (
                  <li key={`menu-blog-category-${category}`}>
                    <Link
                      href={`/blog/archive?category=${category.name}`}
                      onClick={onClose}
                      className={`${styles['category-link']}`}
                    >
                      {category.name}
                      <div />
                      <span>
                        {category.count} post{category.count > 1 ? 's' : ''}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          ) : null}
        </MenuSectionTitle>
        <MenuSectionTitle
          active={context?.activeSection === 'about'}
          label="about"
          path="/about"
          onTitleClick={onClose}
        />
      </div>
    </>
  );
};

const MenuSectionTitle = ({
  children,
  active,
  label,
  rssLink,
  path,
  onTitleClick,
}: {
  children?: ReactNode;
  active: boolean;
  label: string;
  rssLink?: ReactNode;
  path: string;
  onTitleClick: () => void;
}) => {
  return (
    <div data-active={active}>
      <div className={styles['menu-section-container']}>
        <Link
          href={path}
          className={`${styles['menu-section-title']} interactive-color`}
          data-active={active}
          onClick={onTitleClick}
        >
          {label}
        </Link>
        {rssLink}
      </div>
      {children}
    </div>
  );
};
