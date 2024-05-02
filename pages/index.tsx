import { CategoryList, PostSummary } from '@types';
import {
  getBlogPostContent,
  getBlogPostList,
} from '../services/markdownServices';
import { SiteHead } from '@components/SiteHead';
import { PostDetailPage } from '@components/blog/PostDetailPage';
import { MarkdownBlock } from 'types/markdown';
import { getCategoryList } from '@utils/markdownUtils';

interface Props {
  postSummary: PostSummary;
  postDetail: MarkdownBlock[];
  categoryList: CategoryList;
  last5posts: PostSummary[];
}

const Home = ({ postSummary, categoryList, postDetail, last5posts }: Props) => (
  <>
    <SiteHead title="Asuka Wang" description="Asuka Wang's personal site." />
    <PostDetailPage
      postDetail={postDetail}
      postSummary={postSummary}
      categoryList={categoryList}
      last5posts={last5posts}
    />
  </>
);

export async function getStaticProps() {
  const postList = await getBlogPostList();
  const lastPost = postList[0];
  const postDetail = getBlogPostContent(lastPost.filename);
  const categoryList = getCategoryList(postList.map((item) => item));
  const last5posts = postList.slice(0, 5);
  return {
    props: {
      postSummary: lastPost,
      postDetail,
      categoryList,
      last5posts,
    },
  };
}

export default Home;
