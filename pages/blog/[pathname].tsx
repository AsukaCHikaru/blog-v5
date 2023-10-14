import { FC } from 'react';
import { PostBodyBlock } from '@components/blog/PostBodyBlock';
import { PostDetailPageHeader } from '@components/blog/PostDetailPageHeader';
import {
  getBlogPostContent,
  getBlogPostList,
} from '../../services/markdownServices';
import { PostSummary } from '@types';
import { SiteHead } from '@components/SiteHead';
import { MarkdownBlock } from 'types/markdown';
import { FullContentLayout } from '@components/layout/FullContentLayout';

interface Props {
  postContent: MarkdownBlock[];
  postSummary: PostSummary;
}

const Post: FC<Props> = ({ postContent, postSummary }) => {
  const title = postSummary.title + ' | Asuka Wang';

  return (
    <>
      <SiteHead title={title} description="Asuka Wang's blog" />
      <PostDetailPageHeader postSummary={postSummary} />
      <FullContentLayout>
        {postContent.map((block, i) => (
          <PostBodyBlock block={block} key={i} />
        ))}
      </FullContentLayout>
    </>
  );
};

export const getStaticPaths = async () => {
  const postList = await getBlogPostList();
  const postSummaryList = postList.map((post) => post.postSummary);

  const paths = postSummaryList.map((postSummary) => ({
    params: { pathname: postSummary.pathname },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params,
}: {
  params: { pathname: string };
}) => {
  const postList = await getBlogPostList();
  const postSummaryList = postList.map((post) => post.postSummary);

  const thisPost = postSummaryList.find(
    (postSummary) => postSummary.pathname === params.pathname,
  );

  if (!thisPost) {
    return { props: {} };
  }

  const postContent = getBlogPostContent(thisPost.filename);

  return { props: { postContent, postSummary: thisPost } };
};

export default Post;
