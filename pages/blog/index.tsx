import { CategoryList, PostMetadata } from '@types';
import {
  getBlogPostContent,
  getBlogPostList,
} from '../../services/markdownServices';
import { SiteHead } from '@components/SiteHead';
import { PostDetailPage } from '@components/blog/PostDetailPage';
import { MarkdownBlock } from 'types/markdown';
import { getCategoryList } from '@utils/markdownUtils';
import { SECTIONS } from 'consts/sections';

interface Props {
  postMetadata: PostMetadata;
  postDetail: MarkdownBlock[];
  categoryList: CategoryList;
  last5posts: PostMetadata[];
}

const Home = ({
  postMetadata,
  categoryList,
  postDetail,
  last5posts,
}: Props) => (
  <>
    <SiteHead
      title="Blog | Asuka Wang"
      description={SECTIONS.BLOG.description}
    />
    <PostDetailPage
      postDetail={postDetail}
      postMetadata={postMetadata}
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
      postMetadata: lastPost,
      postDetail,
      categoryList,
      last5posts,
    },
  };
}

export default Home;
