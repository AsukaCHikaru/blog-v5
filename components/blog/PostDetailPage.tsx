import { FC } from 'react';
import { PostBodyBlock } from './PostBodyBlock';
import { PostDetailPageHeader } from './PostDetailPageHeader';
import { TableOfContentColumn } from './TableOfContentColumn';
import {
  isHeadingBlock,
  MarkdownBlock,
  PostMetadata,
} from '@utils/markdownUtils';
import {
  MainContent,
  RightPanel,
  FullContent,
} from '@components/layout/Layout';
import { AdditionalPostList } from './AdditionPostList';
import styles from '@styles/blog/PostDetailPage.module.css';

interface Props {
  postMetadata: PostMetadata;
  postContent: MarkdownBlock[];
  last5posts: PostMetadata[];
  categoryPosts: PostMetadata[];
}

export const PostDetailPage: FC<Props> = ({
  postMetadata,
  postContent,
  last5posts,
  categoryPosts = [],
}) => {
  const headers = postContent.filter(isHeadingBlock);

  return (
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
      <RightPanel>
        {headers.length ? <TableOfContentColumn list={headers} /> : null}
      </RightPanel>
    </>
  );
};
