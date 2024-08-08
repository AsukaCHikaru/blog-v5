import { PostTile } from '@utils/blogUtils';
import Link from 'next/link';
import styles from '@styles/blog/PostListTile.module.css';
import { parseDateToEn } from '@utils/dateTimeUtils';

export const PostListTile = ({ postTile }: { postTile: PostTile }) => (
  <Link
    href={`/blog/${postTile.pathname}`}
    data-size={postTile.size}
    className={styles.container}
  >
    <div>
      <div className={styles.title}>{postTile.title}</div>
      <div className={styles.description}>{postTile.description}</div>
    </div>
    <div className={styles['publish-date']}>
      {parseDateToEn(postTile.publishDate)}
    </div>
  </Link>
);
