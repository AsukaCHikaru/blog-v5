import { FC } from 'react';
import { PostSummary } from '@types';
import { MarkdownBlock } from 'types/markdown';
import { PostBodyBlock } from './PostBodyBlock';
import { PostDetailPageHeader } from './PostDetailPageHeader';
import { ContentLayout } from '@components/layout/ContentLayout';

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
      <ContentLayout>
        <div className="col-span-3">
          {postDetail.map((block, i) => (
            <PostBodyBlock block={block} key={i} />
          ))}
        </div>
        <div>side</div>
      </ContentLayout>
    </div>
  );
};
