import { FC } from 'react';
import { HeadingBlock } from 'types/markdown';
import { SideColumnHeader } from './SideColumnHeader';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ParsedUrlQuery, stringify } from 'querystring';

interface Props {
  list: HeadingBlock[];
}

export const TableOfContentColumn: FC<Props> = ({ list }) => {
  return (
    <div>
      <SideColumnHeader>TABLE OF CONTENT</SideColumnHeader>
      <ul className="ml-fb3 list-outside list-disc interactive-list-color">
        {list.map((header) => (
          <HeaderLink block={header} key={header.children[0].text} />
        ))}
      </ul>
    </div>
  );
};

const getPathname = (query: ParsedUrlQuery) => {
  const stringifiedQuery = stringify(query);
  return '/blog/' + (stringifiedQuery ? stringifiedQuery.split('=')[1] : '');
};

const HeaderLink: FC<{ block: HeadingBlock }> = ({ block }) => {
  const router = useRouter();
  const pathname = getPathname(router.query);
  const text = block.children.map((item) => item.text);
  return (
    <li className="mt-fb2">
      {Array(block.depth - 1)
        .fill(0)
        .map((_, i) => (
          <div className="w-fb2" key={i} />
        ))}
      <Link
        href={`${pathname}#${text.join('-').replace(/\s/g, '-')}`}
        className="font-serif text-fb3 leading-none interactive-color"
      >
        {text}
      </Link>
    </li>
  );
};
