import { FC } from 'react';
import { PostBodyBlock } from './PostBodyBlock';
import { PostDetailPageHeader } from './PostDetailPageHeader';
import { MainContent, FullContent } from '@components/layout/Layout';
import { AdditionalPostList } from './AdditionPostList';
import styles from '@styles/blog/PostDetailPage.module.css';
import { PostMetadata } from '@utils/markdownUtils';
import { Block } from '@asukawang/amp';

interface Props {
  postMetadata: PostMetadata;
  postContent: Block[];
  last5posts: PostMetadata[];
  categoryPosts: PostMetadata[];
}

export const PostDetailPage: FC<Props> = ({
  postMetadata,
  postContent,
  last5posts,
  categoryPosts = [],
}) => (
  <>
    <FullContent>
      <PostDetailPageHeader
        title={postMetadata.title}
        description={postMetadata.description}
        publishDate={postMetadata.publishDate}
      />
    </FullContent>
    <MainContent>
      <article className={styles.article}>
        {postContent.map((block, i) => (
          <PostBodyBlock block={block} key={i} />
        ))}
      </article>
      <div className={styles['additional-list-container']}>
        {categoryPosts.length ? (
          <AdditionalPostList
            postList={categoryPosts}
            category={postMetadata.category}
          />
        ) : null}
        <AdditionalPostList postList={last5posts} />
      </div>
    </MainContent>
  </>
);
