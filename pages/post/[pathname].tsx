import Head from 'next/head';
import { FC } from 'react';

import { Content } from 'mdast';
import { Footer } from '../../components/Footer';
import { PostBodyBlock } from '../../components/PostBodyBlock';
import { PostDetailPageHeader } from '../../components/PostDetailPageHeader';
import { GridLayout } from '../../components/layout/GridLayout';
import { MainContentLayout } from '../../components/layout/MainContentLayout';
import { getPostContent, getPostList } from '../../services/markdownServices';
import { PostSummary } from '../../types';

interface Props {
  postContent: Content[];
  postSummary: PostSummary;
}

const Post: FC<Props> = ({ postContent, postSummary }) => {
  const title = postSummary.title + ' | The work is undone.';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="asukachikaru's blog" />
        <meta property="og:title" content={title} />
        <meta property="twitter:title" content={title} />
      </Head>
      <GridLayout>
        <PostDetailPageHeader postSummary={postSummary} />
        <MainContentLayout>
          {postContent.map((block, i) => (
            <PostBodyBlock block={block} key={i} />
          ))}
        </MainContentLayout>
        <Footer />
      </GridLayout>
    </>
  );
};

export const getStaticPaths = async () => {
  const postList = await getPostList();
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
  const postList = await getPostList();
  const postSummaryList = postList.map((post) => post.postSummary);

  const thisPost = postSummaryList.find(
    (postSummary) => postSummary.pathname === params.pathname,
  );

  if (!thisPost) {
    return { props: {} };
  }

  const postContent = getPostContent(thisPost.filename);

  return { props: { postContent, postSummary: thisPost } };
};

export default Post;
