import {
  getBlogPostContent,
  getBlogPostList,
} from '../services/markdownServices';
import { SiteHead } from '@components/SiteHead';
import { PostDetailPage } from '@components/blog/PostDetailPage';
import { useContext, useEffect } from 'react';
import { SiteContext } from './_app';
import {
  BlogCategoryList,
  convertPostListToCategories,
} from '@utils/blogUtils';
import { PostMetadata } from '@utils/markdownUtils';
import { Block } from '@asukawang/amp';

interface Props {
  postMetadata: PostMetadata;
  postContent: Block[];
  last5posts: PostMetadata[];
  categoryPosts: PostMetadata[];
  categories: BlogCategoryList;
}

const Home = ({
  postMetadata,
  postContent,
  last5posts,
  categoryPosts = [],
  categories,
}: Props) => {
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
      <SiteHead title="Asuka Wang" description="Asuka Wang's personal site." />
      <PostDetailPage
        postContent={postContent}
        postMetadata={postMetadata}
        last5posts={last5posts}
        categoryPosts={categoryPosts}
      />
    </>
  );
};

export async function getStaticProps() {
  const postList = await getBlogPostList();
  const lastPost = postList[0];
  const postContent = getBlogPostContent(lastPost.pathname);
  const last5posts = postList.slice(0, 5);
  const categoryPosts = postList
    .filter(
      (post) =>
        post.category === lastPost.category &&
        post.id !== lastPost.id &&
        post.description,
    )
    .slice(0, 5);
  const categories = convertPostListToCategories(postList);

  return {
    props: {
      postMetadata: lastPost,
      postContent,
      last5posts,
      categoryPosts,
      categories,
    },
  };
}

export default Home;
