import { PostSummary } from "../types";
import { fetchNotionPageList } from "../services/notionApi";
import { convertNotionPageListToPostSummaryList } from "../utils/notionUtils";
import { PostListPage } from "../components/PostListPage";

interface Props {
  postSummaryList: PostSummary[];
}

const Home = ({ postSummaryList }: Props) => (
  <PostListPage postSummaryList={postSummaryList} />
);

export async function getStaticProps() {
  const notionPageList = await fetchNotionPageList();
  const postSummaryList =
    convertNotionPageListToPostSummaryList(notionPageList);

  return {
    props: {
      postSummaryList,
    },
  };
}

export default Home;
