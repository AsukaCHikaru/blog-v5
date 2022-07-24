import { PostSummary } from "../types";
import { getNotionBlockList, getNotionPageList } from "./notionApiService";
import {
  writePostDetailPage,
  writePostListPage,
  writeRoutes,
} from "./componentWriter";

const run = async () => {
  let notionPageList: PostSummary[] = [];
  try {
    notionPageList = await getNotionPageList();
    console.info("Notion page list fetched.");

    await writeRoutes(notionPageList);
    await writePostListPage(notionPageList);
  } catch (error) {
    console.error(error);
  }

  notionPageList?.forEach(async (page) => {
    try {
      console.info(`Start fetching post ${page.title}`);
      const post = await getNotionBlockList(page.id);

      if (page.category !== "programming") {
        writePostDetailPage(page.pathname, post.results);
      }

      console.info(`Post ${page.title} fetched.`);
    } catch (error) {
      console.error(error);
    }
  });
};

run();
