import { FC } from 'react';
import { type CategoryList as CategoryListType, PostMetadata } from '@types';
import { MarkdownBlock } from 'types/markdown';
import { PostBodyBlock } from './PostBodyBlock';
import { PostDetailPageHeader } from './PostDetailPageHeader';
import { TableOfContentColumn } from './TableOfContentColumn';
import { isHeadingBlock } from '@utils/markdownUtils';
import {
  MainContent,
  RightPanel,
  FullContent,
} from '@components/layout/Layout';
import { AdditionalPostList } from './AdditionPostList';
import styles from '@styles/blog/PostDetailPage.module.css';

interface Props {
  categoryList: CategoryListType;
  postMetadata: PostMetadata;
  postContent: MarkdownBlock[];
  last5posts: PostMetadata[];
}

export const PostDetailPage: FC<Props> = ({
  postMetadata,
  postContent,
  last5posts,
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
        {postContent.map((block, i) => (
          <PostBodyBlock block={block} key={i} />
        ))}
        <div className={styles['additional-list-container']}>
          <AdditionalPostList
            postList={last5posts}
            category={postMetadata.category}
          />
          <AdditionalPostList postList={last5posts} />
        </div>
      </MainContent>
      <RightPanel>
        {headers.length ? <TableOfContentColumn list={headers} /> : null}
      </RightPanel>
    </>
  );
};
