import { FC } from 'react';
import { CategoryList, PostSummary } from '@types';
import { MarkdownBlock } from 'types/markdown';
import { PostBodyBlock } from './PostBodyBlock';
import { PostDetailPageHeader } from './PostDetailPageHeader';
import { ContentLayout } from '@components/layout/ContentLayout';
import { CategoryListColumn } from './CategoryListColumn';
import { ArchiveColumn } from './ArchiveColumn';

interface Props {
  categoryList: CategoryList;
  postSummary: PostSummary;
  postDetail: MarkdownBlock[];
  last5posts: PostSummary[];
}

export const PostDetailPage: FC<Props> = ({
  categoryList,
  postSummary,
  postDetail,
  last5posts,
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
        <div className="flex flex-col gap-fb5">
          <ArchiveColumn postList={last5posts} />
          <CategoryListColumn categoryList={categoryList} />
        </div>
      </ContentLayout>
    </div>
  );
};
