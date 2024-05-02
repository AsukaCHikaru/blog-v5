import { FC } from 'react';
import {
  getBlogPostContent,
  getBlogPostList,
} from '../../services/markdownServices';
import { CategoryList, PostSummary } from '@types';
import { SiteHead } from '@components/SiteHead';
import { MarkdownBlock } from 'types/markdown';
import { PostDetailPage } from '@components/blog/PostDetailPage';
import { getCategoryList } from '@utils/markdownUtils';

interface Props {
  postContent: MarkdownBlock[];
  postSummary: PostSummary;
  categoryList: CategoryList;
  last5posts: PostSummary[];
}

const Post: FC<Props> = ({
  postContent,
  postSummary,
  last5posts,
  categoryList,
}) => {
  const title = postSummary.title + ' | Asuka Wang';

  return (
    <>
      <SiteHead title={title} description="Asuka Wang's blog" />
      <PostDetailPage
        postSummary={postSummary}
        postDetail={postContent}
        categoryList={categoryList}
        last5posts={last5posts}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  const postList = await getBlogPostList();

  const paths = postList.map((postSummary) => ({
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

  const thisPost = postList.find(
    (postSummary) => postSummary.pathname === params.pathname,
  );

  if (!thisPost) {
    return { props: {} };
  }

  const postContent = getBlogPostContent(thisPost.filename);

  const categoryList = getCategoryList(postList.map((item) => item));
  const last5posts = postList.slice(0, 5);

  return {
    props: { postContent, postSummary: thisPost, categoryList, last5posts },
  };
};

export default Post;
