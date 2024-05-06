import { type CategoryList as CategoryListType } from '@types';
import { FC } from 'react';
import Link from 'next/link';

interface Props {
  categoryList: CategoryListType;
}

export const CategoryList: FC<Props> = ({ categoryList }) => {
  return (
    <div className="flex flex-col gap-fb2 lg:border-l-2 border-color lg:pl-fb2">
      {Object.entries(categoryList)
        .sort(
          ([, prevPostCount], [, nextPostCount]) =>
            nextPostCount - prevPostCount,
        )
        .map(([category, postNumber]) => (
          <div key={`category-list-item-${category}`}>
            <Link
              href={`/blog/archive?category=${category}`}
              className="flex leading-fb3 items-end interactive-color"
            >
              <span className="text-fb3 font-alegreya">{category}</span>
              {/** TODO: border hover does match link hover */}
              <span className="mx-fb1 flex-grow border-b border-dashed border-color" />
              <span className="text-fb3 font-noto-sans">{postNumber}</span>
              <span className="ml-fb1 text-fb2 font-noto-sans leading-none">
                POST{postNumber > 1 ? 'S' : ''}
              </span>
            </Link>
          </div>
        ))}
    </div>
  );
};
