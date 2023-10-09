import { PostSummary } from '@types';
import { PostListPage } from '@components/blog/PostListPage';
import { getPostList } from '../../services/markdownServices';
import Head from 'next/head';

interface Props {
  postSummaryList: PostSummary[];
}

const Home = ({ postSummaryList }: Props) => (
  <>
    <Head>
      <title>Blog | Asuka Wang</title>
      <meta name="description" content="Essays, reviews and notes." />
      <meta property="og:title" content="Blog | Asuka Wang" />
      <meta property="twitter:title" content="Blog | Asuka Wang" />
    </Head>
    <PostListPage postSummaryList={postSummaryList} />
  </>
);

export async function getStaticProps() {
  const postList = await getPostList();
  const postSummaryList = postList.map((post) => post.postSummary);
  return {
    props: {
      postSummaryList,
    },
  };
}

export default Home;
