import { FC } from 'react';
import { HeadingBlock } from 'types/markdown';
import { SideColumnHeader } from './SideColumnHeader';

interface Props {
  list: HeadingBlock[];
}

export const TableOfContentColumn: FC<Props> = ({ list }) => {
  return (
    <div>
      <SideColumnHeader>TABLE OF CONTENT</SideColumnHeader>
      <div>
        {list.map((header) => (
          <div key={header.children[0].text}>
            {header.children.map((item) => item.text)}
          </div>
        ))}
      </div>
    </div>
  );
};
