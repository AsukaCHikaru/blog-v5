import { ReactNode } from 'react';
import styles from '@styles/MobileMenu.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useCustomApi } from 'hooks/useCustomApi';

interface Props {
  onClose: () => void;
}

export const MobileMenu = ({ onClose }: Props) => {
  const { pathname } = useRouter();
  const { data: categories } = useCustomApi<{ name: string; count: number }[]>(
    '/api/blog/getCategories',
  );

  return (
    <>
      <div className={styles.backdrop} onClick={() => onClose()} />
      <div className={styles.menu}>
        <MenuSectionTitle
          active={pathname.includes('blog')}
          label="blog"
          path="/blog"
          onTitleClick={onClose}
        >
          {pathname.includes('blog') ? (
            <ul className={styles['category-container']}>
              {categories
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
          active={pathname === '/about'}
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
  path,
  onTitleClick,
}: {
  children?: ReactNode;
  active: boolean;
  label: string;
  path: string;
  onTitleClick: () => void;
}) => {
  return (
    <div data-active={active}>
      <Link
        href={path}
        className={`${styles['menu-section-title']} interactive-color`}
        data-active={active}
        onClick={onTitleClick}
      >
        {label}
      </Link>
      {children}
    </div>
  );
};
