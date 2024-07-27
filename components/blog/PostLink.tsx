import Link from 'next/link';
import { FC } from 'react';
import styles from '@styles/blog/PostLink.module.css';
import { PostMetadata } from '@types';
import { parseDateToEn } from '@utils/dateTimeUtils';

interface Props {
  postMetadata: PostMetadata;
}

export const PostLink: FC<Props> = ({ postMetadata }) => {
  return (
    <li className={`${styles.container} interactive-color`}>
      <div className={styles.title}>
        <Link href={`/blog/${postMetadata.pathname}`}>
          {postMetadata.title}
        </Link>
      </div>
      {postMetadata.description ? (
        <div className={styles.description}>{postMetadata.description}</div>
      ) : null}
      <div>
        <span className={styles['publish-date']}>
          {parseDateToEn(postMetadata.publishDate)}
        </span>
      </div>
    </li>
  );
};
