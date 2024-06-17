import { FC } from 'react';
import {
  getBlogPostContent,
  getBlogPostList,
} from '../../services/markdownServices';
import { CategoryList, PostMetadata } from '@types';
import { SiteHead } from '@components/SiteHead';
import { MarkdownBlock } from 'types/markdown';
import { PostDetailPage } from '@components/blog/PostDetailPage';
import { getCategoryList } from '@utils/markdownUtils';

interface Props {
  postContent: MarkdownBlock[];
  postMetadata: PostMetadata;
  categoryList: CategoryList;
  last5posts: PostMetadata[];
}

const Post: FC<Props> = ({
  postContent,
  postMetadata,
  last5posts,
  categoryList,
}) => {
  const title = postMetadata.title + ' | Asuka Wang';

  return (
    <>
      <SiteHead
        title={title}
        description={postMetadata.description || "Asuka Wang's blog"}
      />
      <PostDetailPage
        postMetadata={postMetadata}
        postDetail={postContent}
        categoryList={categoryList}
        last5posts={last5posts}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  const postList = await getBlogPostList();

  const paths = postList.map((postMetadata) => ({
    params: { pathname: postMetadata.pathname },
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
    (postMetadata) => postMetadata.pathname === params.pathname,
  );

  if (!thisPost) {
    return { props: {} };
  }

  const postContent = getBlogPostContent(thisPost.filename);

  const categoryList = getCategoryList(postList.map((item) => item));
  const last5posts = postList.slice(0, 5);

  return {
    props: { postContent, postMetadata: thisPost, categoryList, last5posts },
  };
};

export default Post;
