import { PostSummary } from '@types';
import { getBlogPostList } from '../../../services/markdownServices';
import { SiteHead } from '@components/SiteHead';
import { PostListPage } from '@components/blog/PostListPage';

interface Props {
  postList: PostSummary[];
}

const Home = ({ postList }: Props) => (
  <>
    <SiteHead
      title="Blog | Asuka Wang"
      description="Essays, reviews and notes."
    />
    <PostListPage postList={postList} />
  </>
);

export async function getStaticProps() {
  const postList = await getBlogPostList();
  return {
    props: {
      postList,
    },
  };
}

export default Home;
