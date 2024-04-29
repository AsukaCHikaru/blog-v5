import { PostSummary } from '@types';
import {
  getBlogPostContent,
  getBlogPostList,
} from '../../services/markdownServices';
import { SiteHead } from '@components/SiteHead';
import { PostDetailPage } from '@components/blog/PostDetailPage';
import { MarkdownBlock } from 'types/markdown';

interface Props {
  postSummary: PostSummary;
  postDetail: MarkdownBlock[];
  categoryList: [string, number][];
}

const Home = ({ postSummary, categoryList, postDetail }: Props) => (
  <>
    <SiteHead
      title="Blog | Asuka Wang"
      description="Essays, reviews and notes."
    />
    <PostDetailPage
      postDetail={postDetail}
      postSummary={postSummary}
      categoryList={categoryList}
    />
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
  const lastPost = postList[0].postSummary;
  const postDetail = getBlogPostContent(lastPost.filename);
  const categoryList = getCategoryList(
    postList.map((item) => item.postSummary),
  );
  return {
    props: {
      postSummary: lastPost,
      postDetail,
      categoryList,
    },
  };
}

export default Home;
