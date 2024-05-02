import { FC } from 'react';
import { HeadingBlock } from 'types/markdown';
import { SideColumnHeader } from './SideColumnHeader';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  list: HeadingBlock[];
}

export const TableOfContentColumn: FC<Props> = ({ list }) => {
  return (
    <div>
      <SideColumnHeader>TABLE OF CONTENT</SideColumnHeader>
      <div>
        {list.map((header) => (
          <HeaderLink block={header} key={header.children[0].text} />
        ))}
      </div>
    </div>
  );
};

const HeaderLink: FC<{ block: HeadingBlock }> = ({ block }) => {
  const { pathname } = useRouter();
  return (
    <div className="flex">
      {Array(block.depth - 1)
        .fill(0)
        .map((_, i) => (
          <div className="w-fb2" key={i} />
        ))}
      <Link href={`${pathname}#${123}`}>
        {block.children.map((item) => item.text)}
      </Link>
    </div>
  );
};
