import { ReactNode } from 'react';
import styles from '@styles/MobileMenu.module.css';
import { useRouter } from 'next/router';

interface Props {
  onClose: () => void;
}

export const MobileMenu = ({ onClose }: Props) => {
  const { pathname } = useRouter();

  return (
    <>
      <div className={styles.backdrop} onClick={() => onClose()} />
      <div className={styles.menu}>
        <MenuSectionTitle active={pathname.includes('blog')}>
          blog
        </MenuSectionTitle>
        <MenuSectionTitle active={pathname === '/about'}>
          about
        </MenuSectionTitle>
      </div>
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
