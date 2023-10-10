import Head from 'next/head';
import { FC } from 'react';

import { Content } from 'mdast';
import { Footer } from '@components/blog/Footer';
import { PostBodyBlock } from '@components/blog/PostBodyBlock';
import { PostDetailPageHeader } from '@components/blog/PostDetailPageHeader';
import { GridLayout } from '@components/blog/layout/GridLayout';
import { MainContentLayout } from '@components/blog/layout/MainContentLayout';
import { getBlogPostContent, getBlogPostList } from '../../services/markdownServices';
import { PostSummary } from '@types';
import { SiteHeader } from '@components/SiteHeader';
import { ThemeLayout } from '@components/blog/layout/ThemeLayout';

interface Props {
  postContent: Content[];
  postSummary: PostSummary;
}

const Post: FC<Props> = ({ postContent, postSummary }) => {
  const title = postSummary.title + ' | Asuka Wang';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Asuka Wang's blog" />
        <meta property="og:title" content={title} />
        <meta property="twitter:title" content={title} />
      </Head>
      <ThemeLayout>
        <GridLayout>
          <SiteHeader />
          <PostDetailPageHeader postSummary={postSummary} />
          <MainContentLayout>
            {postContent.map((block, i) => (
              <PostBodyBlock block={block} key={i} />
            ))}
          </MainContentLayout>
          <Footer />
        </GridLayout>
      </ThemeLayout>
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
