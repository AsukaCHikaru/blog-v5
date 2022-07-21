import { PostSummary } from "../types";
import { getNotionBlockList, getNotionPageList } from "./notionApiService";

const run = async () => {
  let notionPageList: PostSummary[] = [];
  try {
    notionPageList = await getNotionPageList();
    console.info('Notion page list fetched.')
  } catch (error) {
    console.error(error);
  }
  
  notionPageList?.forEach(async (page) => {
    try {
      console.info(`Start fetching post ${page.title}`);
      const post = await getNotionBlockList(page.id)
      console.log(post);
      console.info(`Post ${page.title} fetched.`)
    } catch (error) {
      console.error(error);
    }
  })
}

run();
