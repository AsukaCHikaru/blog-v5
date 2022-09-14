import React from "react";
import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { renderToString } from "react-dom/server";

import { PostSummary } from "../types";
import { NotionBlock, NotionPageChildrenResponse } from "../types/notion";
import { PostBodyBlock } from "../templates/PostBodyBlock";

export const writeRoutes = async (postList: PostSummary[]) => {
  console.info("Writing routes.");

  const rawAppPage = await readFileSync(
    resolve(__dirname, "../templates", "App.tsx"),
    { encoding: "utf-8" }
  );

  const imports: string[] = [];
  const routes: string[] = ['<Route path="/" element={<PostListPage />} />'];

  postList.forEach((postSummary) => {
    if (postSummary.category !== "programming") {
      const importString = `import { Post${postSummary.pathname.replace(
        /-/g,
        ""
      )} } from './pages/${postSummary.pathname}';`;
      const routeString = `<Route path="/post/${
        postSummary.pathname
      }" element={<Post${postSummary.pathname.replace(/-/g, "")} />} />`;
      imports.push(importString);
      routes.push(routeString);
    }
  });

  const appPage = rawAppPage
    .replace("//template_import_post_details", imports.join(""))
    .replace(/\/\/template_remove\s/g, "")
    .replace("//template_routes", routes.join(""));

  await writeFileSync(resolve(__dirname, "../src", "App.tsx"), appPage);

  console.info("Routes writing completed.");
};

export const writePostListPage = async (postList: PostSummary[]) => {
  console.info("Writing post list page.");

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

  await mkdirSync(resolve(__dirname, "../src", "pages"));
  await writeFileSync(
    resolve(__dirname, "../src", "pages", "PostListPage.tsx"),
    postListPage
  );

  console.info("Post list page writing completed.");
};

export const writePostDetailPage = async (
  postSummary: PostSummary,
  blockList: NotionBlock[]
) => {
  console.info(`Writing post "${postSummary.pathname}".`);

  const stringifiedBlockList: string[] = [];
  blockList.forEach((block) => {
    const blockComponent = <PostBodyBlock key={block.id} block={block} />;
    const stringifiedBlock = renderToString(blockComponent).replace(
      "class=",
      "className="
    );
    stringifiedBlockList.push(stringifiedBlock);
  });

  const rawPostDetailPage = await readFileSync(
    resolve(__dirname, "../templates", "PostDetailPage.tsx"),
    { encoding: "utf-8" }
  );

  const postDetailPage = rawPostDetailPage
    .replace(/\/\/template_remove\s/g, "")
    .replace(
      "const PostDetailPage",
      `const Post${postSummary.pathname.replace(/-/g, "")}`
    )
    .replace(
      "//template_post_header",
      `<PostDetailPageHeader postSummary={${JSON.stringify(postSummary)}} />`
    )
    .replace("//template_post_content", stringifiedBlockList.join(""));

  await writeFileSync(
    resolve(__dirname, "../src", "pages", `${postSummary.pathname}.tsx`),
    postDetailPage
  );

  console.info(`Post "${postSummary.pathname}" writing completed.`);
};

export const writeAllPostDetailPage = (
  postSummaryList: PostSummary[],
  postDetailList: Record<string, NotionPageChildrenResponse>
) => {
  const writingPromiseList = postSummaryList.map((postSummary) => {
    return writePostDetailPage(
      postSummary,
      postDetailList[postSummary.id].results
    );
  });

  return Promise.allSettled(writingPromiseList);
};
