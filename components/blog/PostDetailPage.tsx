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
  RightWideContent,
} from '@components/layout/Layout';

interface Props {
  categoryList: CategoryListType;
  postMetadata: PostMetadata;
  postDetail: MarkdownBlock[];
  last5posts: PostMetadata[];
}

export const PostDetailPage: FC<Props> = ({ postMetadata, postDetail }) => {
  const headers = postDetail.filter(isHeadingBlock);

  return (
    <>
      <RightWideContent>
        <PostDetailPageHeader postMetadata={postMetadata} />
      </RightWideContent>
      <MainContent>
        {postDetail.map((block, i) => (
          <PostBodyBlock block={block} key={i} />
        ))}
      </MainContent>
      <RightPanel>
        {headers.length ? <TableOfContentColumn list={headers} /> : null}
      </RightPanel>
    </>
  );
};
