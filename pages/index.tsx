import { PostMetadata } from '@types';
import {
  getBlogPostContent,
  getBlogPostList,
} from '../services/markdownServices';
import { SiteHead } from '@components/SiteHead';
import { PostDetailPage } from '@components/blog/PostDetailPage';
import { MarkdownBlock } from 'types/markdown';

interface Props {
  postMetadata: PostMetadata;
  postContent: MarkdownBlock[];
  last5posts: PostMetadata[];
  categoryPosts: PostMetadata[];
}

const Home = ({
  postMetadata,
  postContent,
  last5posts,
  categoryPosts = [],
}: Props) => (
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

export async function getStaticProps() {
  const postList = await getBlogPostList();
  const lastPost = postList[0];
  const postContent = getBlogPostContent(lastPost.filename);
  const last5posts = postList.slice(0, 5);
  const categoryPosts = postList
    .filter(
      (post) =>
        post.category === lastPost.category &&
        post.id !== lastPost.id &&
        post.description,
    )
    .slice(0, 5);

  return {
    props: {
      postMetadata: lastPost,
      postContent,
      last5posts,
      categoryPosts,
    },
  };
}

export default Home;
