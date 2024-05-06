import { FC } from 'react';
import { CategoryList, PostMetadata } from '@types';
import { MarkdownBlock } from 'types/markdown';
import { PostBodyBlock } from './PostBodyBlock';
import { PostDetailPageHeader } from './PostDetailPageHeader';
import { ContentLayout } from '@components/layout/ContentLayout';
import { CategoryListColumn } from './CategoryListColumn';
import { ArchiveColumn } from './ArchiveColumn';
import { TableOfContentColumn } from './TableOfContentColumn';
import { SideColumn } from './SideColumn';
import { isHeadingBlock } from '@utils/markdownUtils';
import Link from 'next/link';
import { parseDateToEn } from '@utils/dateTimeUtils';

interface Props {
  categoryList: CategoryList;
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
          <ArchiveColumn postList={last5posts} />
          <CategoryListColumn categoryList={categoryList} />
        </SideColumn>
        <div className="lg:hidden col-span-4 flex flex-col gap-fb3">
          <div className="my-fb5 border-2 border-light" />
          <div className="px-fb2">
            <div className="flex gap-fb2 mb-fb1">
              <div className="flex-grow my-auto border-t border-b border-color h-[3px]" />
              <div className="font-noto-sans text-fb2 font-thin">ARCHIVE</div>
              <div className="flex-grow my-auto border-t border-b border-color h-[3px]" />
            </div>
            <ul>
              {last5posts.map((post) => (
                <li
                  key={post.pathname}
                  className="my-fb3 pb-fb2 flex flex-col gap-fb1 border-b border-color interactive-color last-of-type:border-none"
                >
                  <Link
                    href={`/blog/${post.pathname}`}
                    className="font-abril text-fb5 leading-none"
                  >
                    {post.title}
                  </Link>
                  {post.description ? (
                    <div className="font-gentium-basic text-fb3 leading-none">
                      {post.description}
                    </div>
                  ) : null}
                  <div className="font-noto-sans text-fb2 leading-none">
                    {parseDateToEn(post.publishDate)}
                  </div>
                </li>
              ))}
              <Link
                href="/blog/archive"
                className="font-noto-sans text-fb3 leading-none font-thin"
              >
                FULL LIST
              </Link>
            </ul>
          </div>
          <div className="px-fb2">
            <div className="flex gap-fb2 mb-fb1">
              <div className="flex-grow my-auto border-t border-b border-color h-[3px]" />
              <div className="font-noto-sans text-fb2 font-thin text-light">
                CATEGORY
              </div>
              <div className="flex-grow my-auto border-t border-b border-color h-[3px]" />
            </div>
            <ul>
              {Object.entries(categoryList)
                .sort(
                  ([, prevPostCount], [, nextPostCount]) =>
                    nextPostCount - prevPostCount,
                )
                .map(([category, postCount]) => (
                  <li
                    key={`category-${category}`}
                    className="my-fb2 flex flex-col gap-fb1 interactive-color"
                  >
                    <Link
                      href={`/blog/archive?category=${category}`}
                      className="flex items-end"
                    >
                      <span className="font-alegreya text-fb3 leading-none">
                        {category}
                      </span>
                      <div className="mx-fb1 flex-grow border-b border-dashed border-color" />
                      <span className="font-noto-sans text-fb3 leading-none">
                        {postCount}
                      </span>
                      <span className="ml-fb1 font-noto-sans text-fb2 leading-none">
                        POST{postCount > 1 ? 'S' : ''}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </ContentLayout>
    </div>
  );
};
