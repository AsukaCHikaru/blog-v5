import { FC } from "react";

import { PostListPage } from "../../components/PostListPage";
import { POST_CATEGORIES } from "../../consts/categories";
import { fetchNotionPageList } from "../../services/notionApi";
import { PostSummary } from "../../types";
import { convertNotionPageListToPostSummaryList } from "../../utils/notionUtils";

interface Props {
  postSummaryList: PostSummary[];
}

const PostTagPage: FC<Props> = ({ postSummaryList }) => {
  return <PostListPage postSummaryList={postSummaryList} />;
};

export const getStaticPaths = async () => {
  const paths = POST_CATEGORIES.map((category) => ({
    params: { category },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params,
}: {
  params: { category: string };
}) => {
  const notionPageList = await fetchNotionPageList();
  const postSummaryList =
    convertNotionPageListToPostSummaryList(notionPageList);

  const filteredPostSummaryList = postSummaryList.filter(
    (postSummary) => postSummary.category === params.category
  );

  return { props: { postSummaryList: filteredPostSummaryList } };
};

export default PostTagPage;
