import { FC, useMemo } from 'react';
import { PostMetadata } from '@types';
import { SideContentLayout } from './layout/SideContentLayout';

interface Props {
  selectedCategory?: string;
  postSummaryList: PostMetadata[];
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
    <div>
      <h2 className="text-3xl font-medium mb-4">Categories</h2>
      <ul>
        {categoryList.map((category) => (
          <li
            key={`category-${category}`}
            className={`${
              selectedCategory === category ? 'font-bold' : ''
            } mb-1 text-lg`}
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
