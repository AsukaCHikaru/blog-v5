import { FC } from 'react';
import { parseDateToEn } from '@utils/dateTimeUtils';
import Link from 'next/link';
import styles from '@styles/blog/ArchiveList.module.css';
import { PostMetadata } from '@utils/markdownUtils';

interface Props {
  postList: PostMetadata[];
}

export const ArchiveList: FC<Props> = ({ postList }) => {
  return (
    <div className={styles.container}>
      {postList.map((post) => (
        <Link
          key={post.pathname}
          className={`${styles.link} interactive-color border-color`}
          href={`/blog/${post.pathname}`}
        >
          <div className={styles.title}>{post.title}</div>
          {post.description ? (
            <div className={styles.description}>{post.description}</div>
          ) : null}
          <div className={styles['publish-date']}>
            {parseDateToEn(post.publishDate)}
          </div>
        </Link>
      ))}
      <div className={styles['full-link-wrapper']}>
        <Link
          href="/blog/archive"
          className={`${styles['full-link']} interactive-color`}
        >
          FULL LIST
        </Link>
      </div>
    </div>
  );
};
