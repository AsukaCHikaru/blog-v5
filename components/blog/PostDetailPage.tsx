import { FC } from 'react';
import { CategoryList, PostSummary } from '@types';
import { MarkdownBlock } from 'types/markdown';
import { PostBodyBlock } from './PostBodyBlock';
import { PostDetailPageHeader } from './PostDetailPageHeader';
import { ContentLayout } from '@components/layout/ContentLayout';
import { CategoryListColumn } from './CategoryListColumn';

interface Props {
  categoryList: CategoryList;
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
        <div>{<CategoryListColumn categoryList={categoryList} />}</div>
      </ContentLayout>
    </div>
  );
};
