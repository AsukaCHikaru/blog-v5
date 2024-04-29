import { PostSummary } from '@types';
import { PostListPage } from '@components/blog/PostListPage';
import { getBlogPostList } from '../../services/markdownServices';
import { SiteHead } from '@components/SiteHead';

interface Props {
  postSummaryList: PostSummary[];
  categoryList: [string, number][];
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

const getCategoryList = (list: PostSummary[]) => {
  const map = new Map<string, number>();
  list.forEach(({ category }) => {
    const current = map.get(category);
    if (current) map.set(category, current + 1);
    else map.set(category, 1);
  });
  return Array.from(map.entries()).sort((prev, next) => next[1] - prev[1]);
};

export async function getStaticProps() {
  const postList = await getBlogPostList();
  const postSummaryList = postList.map((post) => post.postSummary);
  console.log(getCategoryList(postList.map((item) => item.postSummary)));
  return {
    props: {
      postSummaryList,
      categoryList: getCategoryList(postList.map((item) => item.postSummary)),
    },
  };
}

export default Home;
