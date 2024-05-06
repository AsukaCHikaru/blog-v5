import { FC } from 'react';
import { type CategoryList as CategoryListType, PostMetadata } from '@types';
import { MarkdownBlock } from 'types/markdown';
import { PostBodyBlock } from './PostBodyBlock';
import { PostDetailPageHeader } from './PostDetailPageHeader';
import { ContentLayout } from '@components/layout/ContentLayout';
import { CategoryList } from './CategoryList';
import { ArchiveList } from './ArchiveList';
import { TableOfContentColumn } from './TableOfContentColumn';
import { SideColumn } from './SideColumn';
import { isHeadingBlock } from '@utils/markdownUtils';
import { SideColumnHeader } from './SideColumnHeader';
import { BelowPostDetailColumnHeader } from './BelowPostDetailColumnHeader';

interface Props {
  categoryList: CategoryListType;
  postMetadata: PostMetadata;
  postDetail: MarkdownBlock[];
  last5posts: PostMetadata[];
}

export const PostDetailPage: FC<Props> = ({
  categoryList,
  postMetadata,
  postDetail,
  last5posts,
}) => {
  const headers = postDetail.filter(isHeadingBlock);

  return (
    <div>
      <PostDetailPageHeader postMetadata={postMetadata} />
      <ContentLayout>
        <div className="col-span-4 lg:col-span-3">
          {postDetail.map((block, i) => (
            <PostBodyBlock block={block} key={i} />
          ))}
        </div>
        <SideColumn>
          {headers.length ? <TableOfContentColumn list={headers} /> : null}
          <div>
            <SideColumnHeader>ARCHIVE</SideColumnHeader>
            <ArchiveList postList={last5posts} />
          </div>
          <div>
            <SideColumnHeader>CATEGORY</SideColumnHeader>
            <CategoryList categoryList={categoryList} />
          </div>
        </SideColumn>
        <div className="lg:hidden col-span-4 flex flex-col gap-fb3">
          <div className="mt-fb5 mb-fb2 border border-color" />
          <div className="px-fb2">
            <BelowPostDetailColumnHeader>ARCHIVE</BelowPostDetailColumnHeader>
            <ArchiveList postList={last5posts} />
          </div>
          <div className="px-fb2">
            <BelowPostDetailColumnHeader>CATEGORY</BelowPostDetailColumnHeader>
            <CategoryList categoryList={categoryList} />
          </div>
        </div>
      </ContentLayout>
    </div>
  );
};
