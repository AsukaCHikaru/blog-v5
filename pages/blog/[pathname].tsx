import { FC } from 'react';
import {
  getBlogPostContent,
  getBlogPostList,
} from '../../services/markdownServices';
import { PostMetadata } from '@types';
import { SiteHead } from '@components/SiteHead';
import { MarkdownBlock } from 'types/markdown';
import { PostDetailPage } from '@components/blog/PostDetailPage';

interface Props {
  postContent: MarkdownBlock[];
  postMetadata: PostMetadata;
  last5posts: PostMetadata[];
  categoryPosts: PostMetadata[];
}

const Post: FC<Props> = ({
  postContent,
  postMetadata,
  last5posts,
  categoryPosts,
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
        postContent={postContent}
        last5posts={last5posts}
        categoryPosts={categoryPosts}
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

  const last5posts = postList.slice(0, 5);
  const categoryPosts = postList
    .filter(
      (post) => post.category === thisPost.category && post.id !== thisPost.id,
    )
    .slice(0, 5);

  return {
    props: { postContent, postMetadata: thisPost, last5posts, categoryPosts },
  };
};

export default Post;
