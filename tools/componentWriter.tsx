import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

import { PostSummary } from "../types";

export const writePostListPage = async (postList: PostSummary[]) => {
  const data = `import { PostSummary } from '../types';
  
export const postList: PostSummary[] = ${JSON.stringify(postList)};`;

  await writeFileSync(resolve(__dirname, "../src", "data.ts"), data);

  const rawPostListPage = await readFileSync(
    resolve(__dirname, "../templates", "PostListPage.tsx"),
    { encoding: "utf-8" }
  );
  const postListPage = rawPostListPage
    .replace(/\/\/template_remove\s/g, "")
    .replace(
      "//template_map_post_link",
      `{postList.map((postSummary) => <PostLink key={postSummary.pathname} postSummary={postSummary} />)}`
    );

  await writeFileSync(
    resolve(__dirname, "../src", "pages", "PostListPage.tsx"),
    postListPage
  );
};
