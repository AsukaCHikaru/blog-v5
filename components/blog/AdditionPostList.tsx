import styles from '@styles/blog/AdditionalPostList.module.css';
import Link from 'next/link';
import { parseDateToEn } from '@utils/dateTimeUtils';
import { PostMetadata } from '@utils/markdownUtils';

export const AdditionalPostList = ({
  postList,
  category,
}: {
  postList: PostMetadata[];
  category?: string;
}) => (
  <div className={styles.container}>
    {category ? (
      <div className={styles['category-link']}>
        More from
        <Link href={`/blog/archive?category=${category}`}>{category}</Link>
      </div>
    ) : (
      <Link href="/blog/archive" className={styles['archive-link']}>
        Archive
      </Link>
    )}
    <div className={styles['card-list']}>
      {postList.map((post) => (
        <PostCard post={post} key={`additional-post-card-${post.id}`} />
      ))}
    </div>
  </div>
);

const PostCard = ({ post }: { post: PostMetadata }) => (
  <Link className={styles.card} href={`/blog/${post.pathname}`}>
    <div>
      <div className={styles['card-title']}>{post.title}</div>
      {post.description ? (
        <div className={styles['card-description']}>{post.description}</div>
      ) : null}
    </div>
    <div className={styles['card-publish-date']}>
      {parseDateToEn(post.publishDate)}
    </div>
  </Link>
);
