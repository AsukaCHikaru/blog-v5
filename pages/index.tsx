import { PostSummary } from '@types';
import { PostListPage } from '@components/blog/PostListPage';
import { getBlogPostList } from '../services/markdownServices';
import { SiteHead } from '@components/SiteHead';
import { SECTIONS } from 'consts/sections';

interface Props {
  postSummaryList: PostSummary[];
}

const Home = ({ postSummaryList }: Props) => (
  <>
    <SiteHead
      title={`${SECTIONS.BLOG.title} | Asuka Wang`}
      description={SECTIONS.BLOG.description}
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
