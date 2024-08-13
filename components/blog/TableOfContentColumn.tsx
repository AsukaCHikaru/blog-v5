import { FC, ReactNode, useCallback } from 'react';
import { HeadingBlock } from 'types/markdown';
import styles from '@styles/blog/TableOfContentColumn.module.css';
import { convertHeaderLabelToId } from '@utils/blogUtils';

const DESKTOP_SITE_HEADER_HEIGHT = 56;
const DESKTOP_HEADER_MARGIN_TOP = 20;

interface Props {
  list: HeadingBlock[];
}

export const TableOfContentColumn: FC<Props> = ({ list }) => {
  const handleLinkClick = useCallback((query: string) => {
    const targetHeader = document.querySelector(`#${query}`);
    if (!targetHeader) {
      return;
    }
    window.scrollBy({
      top:
        targetHeader.getBoundingClientRect().top -
        DESKTOP_HEADER_MARGIN_TOP -
        DESKTOP_SITE_HEADER_HEIGHT,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className={styles.container}>
      <ul className={`${styles.ul} interactive-list-color`}>
        {list.map((header) => {
          const text = header.children.map((item) => item.text).join(' ');
          const query = convertHeaderLabelToId(header);

          return (
            <HeaderLink
              key={header.children[0].text}
              onClick={() => handleLinkClick(query)}
              indent={header.depth - 1}
            >
              {text}
            </HeaderLink>
          );
        })}
      </ul>
    </div>
  );
};

const HeaderLink: FC<{
  onClick: () => void;
  children: ReactNode;
  indent: number;
}> = ({ onClick, children, indent }) => {
  return (
    <li className={styles.li}>
      {Array(indent)
        .fill(0)
        .map((_, i) => (
          <div className={styles.indent} key={i} />
        ))}
      <button role="link" className={styles.link} onClick={onClick}>
        {children}
      </button>
    </li>
  );
};
