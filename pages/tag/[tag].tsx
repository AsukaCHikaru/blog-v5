import { FC } from "react";

import { PostListPage } from "../../components/PostListPage";
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
  const notionPageList = await fetchNotionPageList();
  const postSummaryList =
    convertNotionPageListToPostSummaryList(notionPageList);

  const tagList: string[] = [];
  postSummaryList
    .map((postsSummary) => postsSummary.tags)
    .flat()
    .forEach((tag) => {
      if (!tagList.includes(tag)) {
        tagList.push(tag);
      }
    });

  const paths = tagList.map((tag) => ({ params: { tag } }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params,
}: {
  params: { tag: string };
}) => {
  const notionPageList = await fetchNotionPageList();
  const postSummaryList =
    convertNotionPageListToPostSummaryList(notionPageList);

  const filteredPostSummaryList = postSummaryList.filter((postSummary) =>
    postSummary.tags.includes(params.tag)
  );

  return { props: { postSummaryList: filteredPostSummaryList } };
};

export default PostTagPage;
