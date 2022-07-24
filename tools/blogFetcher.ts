import { writeFileSync, readFileSync } from "fs";
import { resolve } from "path";

import { PostSummary } from "../types";
import { getNotionBlockList, getNotionPageList } from "./notionApiService";

const run = async () => {
  let notionPageList: PostSummary[] = [];
  try {
    notionPageList = await getNotionPageList();
    console.info("Notion page list fetched.");

    const data = `import { PostSummary } from '../types';
  
export const postList: PostSummary[] = ${JSON.stringify(notionPageList)};`;

    await writeFileSync(resolve(__dirname, "../src", "data.ts"), data);

    const rawPostListPage = await readFileSync(
      resolve(__dirname, "../templates", "PostListPage.tsx"),
      { encoding: "utf-8" }
    );
    const postListPage = rawPostListPage
      .replace(
        "//template_import_post_link",
        "import { PostLink } from '../components/PostLink';"
      )
      .replace("//template_import_data", "import { postList } from '../data';")
      .replace(
        "//template_map_post_link",
        `{postList.map((postSummary) => <PostLink key={postSummary.pathname} postSummary={postSummary} />)}`
      );

    await writeFileSync(
      resolve(__dirname, "../src", "pages", "PostListPage.tsx"),
      postListPage
    );
  } catch (error) {
    console.error(error);
  }

  notionPageList?.forEach(async (page) => {
    try {
      console.info(`Start fetching post ${page.title}`);
      const post = await getNotionBlockList(page.id);
      // console.log(post);
      console.info(`Post ${page.title} fetched.`);
    } catch (error) {
      console.error(error);
    }
  });
};

run();
