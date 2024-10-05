import Link from 'next/link';
import { FC } from 'react';
import styles from '@styles/blog/PostLink.module.css';
import { parseDateToEn } from '@utils/dateTimeUtils';
import { PostMetadata } from '@utils/markdownUtils';

interface Props {
  postMetadata: PostMetadata;
}

export const PostLink: FC<Props> = ({ postMetadata }) => {
  return (
    <li className={styles.container}>
      <Link
        href={`/blog/${postMetadata.pathname}`}
        className={`${styles.title} interactive-color`}
      >
        {postMetadata.title}
        {postMetadata.description ? (
          <div className={styles.description}>{postMetadata.description}</div>
        ) : null}
        <div>
          <span className={styles['publish-date']}>
            {parseDateToEn(postMetadata.publishDate)}
          </span>
        </div>
      </Link>
    </li>
  );
};
