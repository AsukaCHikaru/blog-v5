import { CategoryList, PostSummary } from '@types';
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
  categoryList: CategoryList;
  last5posts: PostSummary[];
}

const Home = ({ postSummary, categoryList, postDetail, last5posts }: Props) => (
  <>
    <SiteHead
      title="Blog | Asuka Wang"
      description="Essays, reviews and notes."
    />
    <PostDetailPage
      postDetail={postDetail}
      postSummary={postSummary}
      categoryList={categoryList}
      last5posts={last5posts}
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
  return Object.fromEntries(map.entries());
};

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
