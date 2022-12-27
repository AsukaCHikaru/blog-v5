import { FC } from "react";
import Link from "next/link";

import { PostCategory } from "../types";
import { POST_CATEGORIES } from "../consts/categories";

export const PostListPageHeader: FC = () => {
  return (
    <div>
      <h1>
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
    <div>
      <Link href={category === "all" ? "/" : `/category/${category}`}>
        {category.toUpperCase()}
      </Link>
    </div>
  );
};
