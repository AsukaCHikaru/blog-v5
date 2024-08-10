import { ReactNode } from 'react';
import styles from '@styles/MobileMenu.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
  onClose: () => void;
}

export const MobileMenu = ({ onClose }: Props) => {
  const { pathname } = useRouter();

  return (
    <>
      <div className={styles.backdrop} onClick={() => onClose()} />
      <div className={styles.menu}>
        <MenuSectionTitle
          active={pathname.includes('blog')}
          label="blog"
          path="/blog"
          onTitleClick={onClose}
        />
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
