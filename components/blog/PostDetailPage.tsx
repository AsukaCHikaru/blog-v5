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
import styles from '@styles/blog/PostDetailPage.module.css';

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
        <div className={styles['main-content-container']}>
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
        <div className={styles['below-content-container']}>
          <div className={`${styles['below-content-divider']} border-color`} />
          <div className={styles['below-content-wrapper']}>
            <BelowPostDetailColumnHeader>ARCHIVE</BelowPostDetailColumnHeader>
            <ArchiveList postList={last5posts} />
          </div>
          <div className={styles['below-content-wrapper']}>
            <BelowPostDetailColumnHeader>CATEGORY</BelowPostDetailColumnHeader>
            <CategoryList categoryList={categoryList} />
          </div>
        </div>
      </ContentLayout>
    </div>
  );
};
