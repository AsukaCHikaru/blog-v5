import { FC, useMemo } from 'react';
import { PostSummary } from '../types';

interface Props {
  selectedCategory?: string;
  postSummaryList: PostSummary[];
  onCategoryClick: (category: string) => void;
}

export const CategoryList: FC<Props> = ({
  selectedCategory,
  postSummaryList,
  onCategoryClick,
}) => {
  const categoryList = useMemo(() => {
    const result: string[] = [];
    postSummaryList.forEach(({ category }) => {
      if (result.includes(category)) {
        return;
      }
      result.push(category);
    });
    return result.sort();
  }, [postSummaryList]);

  return (
    <div className="hidden lg:block col-span-3">
      <h2 className="text-2xl font-medium mb-4">Categories</h2>
      <ul>
        {categoryList.map((category) => (
          <li
            key={`category-${category}`}
            className={`${
              selectedCategory === category ? 'font-bold' : ''
            } mb-1`}
          >
            <button onClick={() => onCategoryClick(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
