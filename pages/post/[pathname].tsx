import { FC } from "react";
import { PostBodyBlock } from "../../components/PostBodyBlock";
import { PostDetailPageHeader } from "../../components/PostDetailPageHeader";
import {
  fetchNotionBlockList,
  fetchNotionPageList,
} from "../../services/notionApi";
import { PostSummary } from "../../types";
import { NotionPageChildrenResponse } from "../../types/notion";
import { convertNotionPageListToPostSummaryList } from "../../utils/notionUtils";

interface Props {
  list: NotionPageChildrenResponse;
  postSummary: PostSummary;
}

const Post: FC<Props> = ({ list, postSummary }) => {
  return (
    <div>
      <PostDetailPageHeader postSummary={postSummary} />
      {list.results.map((block) => (
        <PostBodyBlock block={block} key={block.id} />
      ))}
    </div>
  );
};

export const getStaticPaths = async () => {
  const notionPageList = await fetchNotionPageList();
  const postSummaryList =
    convertNotionPageListToPostSummaryList(notionPageList);

  const paths = postSummaryList.map((postSummary) => ({
    params: { pathname: postSummary.pathname },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params,
}: {
  params: { pathname: string };
}) => {
  const notionPageList = await fetchNotionPageList();
  const postSummaryList =
    convertNotionPageListToPostSummaryList(notionPageList);

  const thisPost = postSummaryList.find(
    (postSummary) => postSummary.pathname === params.pathname
  );

  if (!thisPost) {
    return { props: {} };
  }

  const notionPageBlockListResponse = await fetchNotionBlockList(thisPost.id);
  const notionPageBlockList = await notionPageBlockListResponse.json();

  return { props: { list: notionPageBlockList, postSummary: thisPost } };
};

export default Post;
