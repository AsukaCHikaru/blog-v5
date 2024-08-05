import { FC } from 'react';
import { HeadingBlock } from 'types/markdown';
import { SideColumnHeader } from './SideColumnHeader';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ParsedUrlQuery, stringify } from 'querystring';
import styles from '@styles/blog/TableOfContentColumn.module.css';

interface Props {
  list: HeadingBlock[];
}

export const TableOfContentColumn: FC<Props> = ({ list }) => {
  return (
    <div className={styles.container}>
      <ul className={`${styles.ul} interactive-list-color`}>
        {list.map((header) => (
          <HeaderLink block={header} key={header.children[0].text} />
        ))}
      </ul>
    </div>
  );
};

const getPathname = (pathname: string, query: ParsedUrlQuery) => {
  const stringifiedQuery = stringify(query);
  return stringifiedQuery
    ? pathname.replace('[pathname]', stringifiedQuery.split('=')[1])
    : pathname;
};

const HeaderLink: FC<{ block: HeadingBlock }> = ({ block }) => {
  const router = useRouter();
  const pathname = getPathname(router.pathname, router.query);
  const text = block.children.map((item) => item.text);
  return (
    <li className={styles.li}>
      {Array(block.depth - 1)
        .fill(0)
        .map((_, i) => (
          <div className={styles.indent} key={i} />
        ))}
      <Link
        href={`${pathname}#${text.join('-').replace(/\s/g, '-')}`}
        className={`${styles.link} interactive-color`}
      >
        {text}
      </Link>
    </li>
  );
};
