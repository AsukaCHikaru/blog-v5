import { FC } from "react";
import Link from "next/link";

import { PostCategory } from "../types";
import { POST_CATEGORIES } from "../consts/categories";

export const PostListPageHeader: FC = () => {
  return (
    <div className="mt-8 mb-4">
      <h1 className="mb-2 text-5xl font-semibold">
        <Link href="/">The work is undone.</Link>
      </h1>
      <div className="flex">
        <CategoryLink category="all" />
        {POST_CATEGORIES.map((category) => {
          return (
            <CategoryLink key={`category-${category}`} category={category} />
          );
        })}
        <a
          href="https://asukachikaru.com"
          rel="noreferrer noopener"
          target="_blank"
          className='pl-2 inline-block h-5 leading-5 font-courier text-lg'
        >
          ABOUT
        </a>
      </div>
    </div>
  );
};

interface CategoryLinkProps {
  category: PostCategory | "all";
}

const CategoryLink: FC<CategoryLinkProps> = ({ category }) => {
  return (
    <div className="px-2 font-courier text-lg border-r first:pl-0 h-5 leading-5">
      <Link href={category === "all" ? "/" : `/category/${category}`}>
        {category.toUpperCase()}
      </Link>
    </div>
  );
};
