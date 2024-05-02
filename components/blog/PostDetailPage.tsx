import { FC } from 'react';
import { CategoryList, PostSummary } from '@types';
import { MarkdownBlock } from 'types/markdown';
import { PostBodyBlock } from './PostBodyBlock';
import { PostDetailPageHeader } from './PostDetailPageHeader';
import { ContentLayout } from '@components/layout/ContentLayout';
import { CategoryListColumn } from './CategoryListColumn';
import { ArchiveColumn } from './ArchiveColumn';
import { TableOfContentColumn } from './TableOfContentColumn';
import { SideColumn } from './SideColumn';
import { isHeadingBlock } from '@utils/markdownUtils';

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
  const headers = postDetail.filter(isHeadingBlock);

  return (
    <div>
      <PostDetailPageHeader postSummary={postSummary} />
      <ContentLayout>
        <div className="col-span-3">
          {postDetail.map((block, i) => (
            <PostBodyBlock block={block} key={i} />
          ))}
        </div>
        <SideColumn>
          {headers.length ? <TableOfContentColumn list={headers} /> : null}
          <ArchiveColumn postList={last5posts} />
          <CategoryListColumn categoryList={categoryList} />
        </SideColumn>
      </ContentLayout>
    </div>
  );
};
