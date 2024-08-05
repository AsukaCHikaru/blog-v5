import { CategoryList, PostMetadata } from '@types';
import {
  getBlogPostContent,
  getBlogPostList,
} from '../services/markdownServices';
import { SiteHead } from '@components/SiteHead';
import { PostDetailPage } from '@components/blog/PostDetailPage';
import { MarkdownBlock } from 'types/markdown';
import { getCategoryList } from '@utils/markdownUtils';

interface Props {
  postMetadata: PostMetadata;
  postContent: MarkdownBlock[];
  categoryList: CategoryList;
  last5posts: PostMetadata[];
}

const Home = ({
  postMetadata,
  categoryList,
  postContent,
  last5posts,
}: Props) => (
  <>
    <SiteHead title="Asuka Wang" description="Asuka Wang's personal site." />
    <PostDetailPage
      postContent={postContent}
      postMetadata={postMetadata}
      categoryList={categoryList}
      last5posts={last5posts}
    />
  </>
);

export async function getStaticProps() {
  const postList = await getBlogPostList();
  const lastPost = postList[0];
  const postContent = getBlogPostContent(lastPost.filename);
  const categoryList = getCategoryList(postList.map((item) => item));
  const last5posts = postList.slice(0, 5);
  return {
    props: {
      postMetadata: lastPost,
      postContent,
      categoryList,
      last5posts,
    },
  };
}

export default Home;
