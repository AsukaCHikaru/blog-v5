import { FC, useEffect } from "react"
import { fetchNotionBlockList, fetchNotionPageList } from "../../services/notionApi";
import { NotionPageChildrenResponse } from "../../types/notion";
import { convertNotionPageListToPostSummaryList } from "../../utils/notionUtils";

const Post: FC = ({list}: {list: NotionPageChildrenResponse})=> {
  useEffect(() => {
    console.log(list);
    
  }, [list])

  
  return <div>{list.results.map((block) => {
    if (block.type === 'paragraph'){
      return block.paragraph.text?.map((item, i) => <p key={`${item.plain_text}-${i}`}>{item.plain_text}</p>)
    }
  })}</div>
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