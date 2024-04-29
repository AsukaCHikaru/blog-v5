import { CategoryList } from '@types';
import { FC } from 'react';
import { SideColumnHeader } from './SideColumnHeader';
import Link from 'next/link';

interface Props {
  categoryList: CategoryList;
}

export const CategoryListColumn: FC<Props> = ({ categoryList }) => {
  return (
    <div>
      <SideColumnHeader>CATEGORY</SideColumnHeader>
      <div className="flex flex-col gap-fb2 border-l-2 border-light50 pl-fb2">
        {Object.entries(categoryList)
          .sort(
            ([, prevPostCount], [, nextPostCount]) =>
              nextPostCount - prevPostCount,
          )
          .map(([category, postNumber]) => (
            <div
              key={`category-list-item-${category}`}
              className="text-light75 hover:text-light"
            >
              <Link
                href={`/blog?category=${category}`}
                className="flex leading-fb3 items-end"
              >
                <span className="text-fb3 font-alegreya">{category}</span>
                {/** TODO: border hover does match link hover */}
                <span className="mx-fb1 flex-grow border-b border-dashed border-light50 hover:border-light" />
                <span className="text-fb3 font-noto-sans">{postNumber}</span>
                <span className="ml-fb1 text-fb2 font-noto-sans leading-none">
                  POST{postNumber > 1 ? 'S' : ''}
                </span>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
