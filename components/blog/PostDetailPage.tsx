import { FC } from 'react';
import { PostSummary } from '@types';
import { MarkdownBlock } from 'types/markdown';
import { PostBodyBlock } from './PostBodyBlock';
import { PostDetailPageHeader } from './PostDetailPageHeader';

interface Props {
  categoryList: [string, number][];
  postSummary: PostSummary;
  postDetail: MarkdownBlock[];
}

export const PostDetailPage: FC<Props> = ({
  categoryList,
  postSummary,
  postDetail,
}) => {
  return (
    <div>
      <PostDetailPageHeader postSummary={postSummary} />
      {postDetail.map((block, i) => (
        <PostBodyBlock block={block} key={i} />
      ))}
    </div>
  );
};
