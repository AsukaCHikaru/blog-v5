import { FC, useMemo } from "react";
import Link from "next/link";
import {useRouter} from 'next/router'

import { PostCategory } from "../types";
import { POST_CATEGORIES } from "../consts/categories";

export const PostListPageHeader: FC = () => {
  return (
    <div className="mt-8 mb-4">
      <h1 className="mb-2 text-6xl font-semibold">
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
  const {asPath} = useRouter();
  
  const selectedCategory = useMemo(() => asPath.replace(/\/category\/(\w+)/, '$1') as PostCategory, [asPath])

  return (
    <div className={`px-2 font-courier text-lg border-r border-r-foreground dark:border-r-background first:pl-0 h-5 leading-5 hover:underline ${selectedCategory === category && 'font-bold'}`}>
      <Link href={category === "all" ? "/" : `/category/${category}`}>
        {category.toUpperCase()}
      </Link>
    </div>
  );
};
