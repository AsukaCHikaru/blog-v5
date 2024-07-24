import { type CategoryList as CategoryListType } from '@types';
import { FC } from 'react';
import Link from 'next/link';
import styles from '@styles/blog/CategoryList.module.css';

interface Props {
  categoryList: CategoryListType;
}

export const CategoryList: FC<Props> = ({ categoryList }) => {
  return (
    <div className={styles.container}>
      {Object.entries(categoryList)
        .sort(
          ([, prevPostCount], [, nextPostCount]) =>
            nextPostCount - prevPostCount,
        )
        .map(([category, postNumber]) => (
          <div key={`category-list-item-${category}`}>
            <Link
              href={`/blog/archive?category=${category}`}
              className={`${styles.link} interactive-color`}
            >
              <span className={styles.category}>{category}</span>
              {/** TODO: border hover does match link hover */}
              <span className={`${styles.border} border-color`} />
              <span className={styles['post-number']}>{postNumber}</span>
              <span className={styles['post-number-label']}>
                POST{postNumber > 1 ? 'S' : ''}
              </span>
            </Link>
          </div>
        ))}
    </div>
  );
};
