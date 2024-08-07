import { FC } from 'react';
import { PostMetadata } from '@types';
import { PostLink } from './PostLink';
import { SideColumn } from './SideColumn';
import styles from '@styles/blog/PostListPage.module.css';
import { MainContent } from '@components/layout/Layout';

interface Props {
  postList: PostMetadata[];
  category?: string;
}

export const PostListPage: FC<Props> = ({ postList, category }) => {
  return (
    <MainContent>
      <h1 className={styles.header} data-archive={category === undefined}>
        {category || 'ARCHIVE'}
      </h1>
      <div className={styles['main-content']}>
        <ul>
          {postList.map((post) => {
            return <PostLink postMetadata={post} key={post.id} />;
          })}
        </ul>
      </div>
      <SideColumn />
    </MainContent>
  );
};
