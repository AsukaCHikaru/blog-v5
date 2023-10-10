import { PostSummary } from '@types';
import { PostListPage } from '@components/blog/PostListPage';
import { getBlogPostList } from '../../services/markdownServices';
import { SiteHead } from '@components/SiteHead';

interface Props {
  postSummaryList: PostSummary[];
}

const Home = ({ postSummaryList }: Props) => (
  <>
    <SiteHead
      title="Blog | Asuka Wang"
      description="Essays, reviews and notes."
    />
    <PostListPage postSummaryList={postSummaryList} />
  </>
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
