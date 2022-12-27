import { FC } from "react"
import { PostBodyBlock } from "../../components/PostBodyBlock";
import { fetchNotionBlockList, fetchNotionPageList } from "../../services/notionApi";
import { NotionPageChildrenResponse } from "../../types/notion";
import { convertNotionPageListToPostSummaryList } from "../../utils/notionUtils";

interface Props {
  list: NotionPageChildrenResponse
}

const Post: FC<Props> = ({list})=> { 
  return <div>{list.results.map((block) => <PostBodyBlock block={block}  key={block.id}/>)}</div>
}

export const getStaticPaths = async () => {
  const notionPageList = await fetchNotionPageList();
  const postSummaryList = convertNotionPageListToPostSummaryList(notionPageList);

  const paths = postSummaryList.map(postSummary => ({
    params: { pathname: postSummary.pathname}
  }))

  return {paths, fallback: false}
}

export const getStaticProps = async ({params}:  {params: {pathname: string}}) => {
  const notionPageList = await fetchNotionPageList();
  const postSummaryList = convertNotionPageListToPostSummaryList(notionPageList);

  const thisPost = postSummaryList.find(postSummary => postSummary.pathname === params.pathname);
  
  if (!thisPost) {
    return {props: {}}
  }
  
  const notionPageBlockListResponse = await fetchNotionBlockList(thisPost.id);
  const notionPageBlockList = await notionPageBlockListResponse.json();
  
  return {props: {list: notionPageBlockList}}
}

export default Post;