import { PostSummary } from '@types';
import { PostListPage } from '@components/blog/PostListPage';
import { getBlogPostList } from '../services/markdownServices';

interface Props {
  postSummaryList: PostSummary[];
}

const Home = ({ postSummaryList }: Props) => (
  <PostListPage postSummaryList={postSummaryList} />
);

export async function getStaticProps() {
  const postList = await getBlogPostList();
  const postSummaryList = postList.map((post) => post.postSummary);
  return {
    props: {
      postSummaryList,
    },
  };
}

export default Home;
