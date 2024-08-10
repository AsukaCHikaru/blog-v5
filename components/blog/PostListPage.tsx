import { FC, useEffect, useMemo, useState } from 'react';
import { PostMetadata } from '@types';
import { PostLink } from './PostLink';
import { SideColumn } from './SideColumn';
import styles from '@styles/blog/PostListPage.module.css';
import { MainContent } from '@components/layout/Layout';
import { generatePostTileList } from '@utils/blogUtils';
import { PostListTile } from './PostListTile';

interface Props {
  postList: PostMetadata[];
  category?: string;
}

export const PostListPage: FC<Props> = ({ postList, category }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const postTileList = useMemo(() => {
    if (isClient) {
      return generatePostTileList(
        postList,
        document.body.clientWidth < 768 ? 2 : 4,
      );
    }
    return generatePostTileList(postList);
  }, [postList, isClient]);

  return (
    <MainContent>
      <h1 className={styles.header} data-archive={category === undefined}>
        {category || 'ARCHIVE'}
      </h1>
      <div className={styles['main-content']}>
        {postTileList.map((row, i) => (
          <div key={`post-tile-row-${i}`} className={styles['post-tile-row']}>
            {row.map((post) => (
              <PostListTile
                postTile={post}
                key={`post-tile-${post.pathname}`}
              />
            ))}
          </div>
        ))}
      </div>
    </MainContent>
  );
};
