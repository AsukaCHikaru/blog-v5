import { FC, useContext, useEffect } from 'react';
import {
  getBlogPostContent,
  getBlogPostList,
} from '../../services/markdownServices';
import { SiteHead } from '@components/SiteHead';
import { PostDetailPage } from '@components/blog/PostDetailPage';
import {
  BlogCategoryList,
  convertPostListToCategories,
} from '@utils/blogUtils';
import { SiteContext } from 'pages/_app';
import { MarkdownBlock, PostMetadata } from '@utils/markdownUtils';

interface Props {
  postContent: MarkdownBlock[];
  postMetadata: PostMetadata;
  last5posts: PostMetadata[];
  categoryPosts: PostMetadata[];
  categories: BlogCategoryList;
}

const Post: FC<Props> = ({
  postContent,
  postMetadata,
  last5posts,
  categoryPosts,
  categories,
}) => {
  const title = postMetadata.title + ' | Asuka Wang';
  const context = useContext(SiteContext);

  useEffect(() => {
    if (!context) {
      return;
    }
    context.activeSection = 'blog';
    if (context.blogCategories.length) {
      return;
    }
    context.blogCategories = categories;
  }, [categories, context]);

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

  const postContent = getBlogPostContent(thisPost.pathname);

  const last5posts = postList.slice(0, 5);
  const categoryPosts = postList
    .filter(
      (post) =>
        post.category === thisPost.category &&
        post.id !== thisPost.id &&
        post.description,
    )
    .slice(0, 5);
  const categories = convertPostListToCategories(postList);

  return {
    props: {
      postContent,
      postMetadata: thisPost,
      last5posts,
      categoryPosts,
      categories,
    },
  };
};

export default Post;
