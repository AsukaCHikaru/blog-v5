import { FC } from 'react';
import styles from '@styles/blog/PostDetailPageHeader.module.css';
import { PostMetadata } from '@types';
import { parseDateToEn } from '@utils/dateTimeUtils';

interface Props {
  postMetadata: PostMetadata;
}

export const PostDetailPageHeader: FC<Props> = ({ postMetadata }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{postMetadata.title}</h1>
      {postMetadata.description ? (
        <h2 className={styles.description}>{postMetadata.description}</h2>
      ) : null}
      <div className={styles['publish-date']}>
        {parseDateToEn(postMetadata.publishDate)}
      </div>
    </div>
  );
};
