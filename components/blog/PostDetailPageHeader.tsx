import { FC } from 'react';
import styles from '@styles/blog/PostDetailPageHeader.module.css';
import { parseDateToEn } from '@utils/dateTimeUtils';
import { MainContent } from '@components/layout/Layout';

interface Props {
  title: string;
  description?: string;
  publishDate: string;
}

export const PostDetailPageHeader: FC<Props> = ({
  title,
  description,
  publishDate,
}) => {
  return (
    <div className={styles.container}>
      <MainContent>
        <h1 className={styles.title}>{title}</h1>
        {description ? (
          <h2 className={styles.description}>{description}</h2>
        ) : null}
        <div className={styles['publish-date']}>
          {parseDateToEn(publishDate)}
        </div>
      </MainContent>
    </div>
  );
};
