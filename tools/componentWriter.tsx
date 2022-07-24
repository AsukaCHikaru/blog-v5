import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { renderToStaticMarkup } from "react-dom/server";

import { PostSummary } from "../types";
import { NotionBlock } from "../types/notion";
import { PostBodyBlock } from "../templates/PostBodyBlock";

export const writeRoutes = async (postList: PostSummary[]) => {
  const rawAppPage = await readFileSync(
    resolve(__dirname, "../templates", "App.tsx"),
    { encoding: "utf-8" }
  );

  const imports: string[] = [];
  const routes: string[] = [];

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
};

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

export const writePostDetailPage = async (
  postName: string,
  blockList: NotionBlock[]
) => {
  const stringifiedBlockList: string[] = [];
  blockList.forEach((block) => {
    const blockComponent = <PostBodyBlock key={block.id} block={block} />;
    const stringifiedBlock = renderToStaticMarkup(blockComponent);
    stringifiedBlockList.push(stringifiedBlock);
  });

  const rawPostDetailPage = await readFileSync(
    resolve(__dirname, "../templates", "PostDetailPage.tsx"),
    { encoding: "utf-8" }
  );

  const postDetailPage = rawPostDetailPage
    .replace("PostDetailPage", `Post${postName.replace(/-/g, "")}`)
    .replace("//template_post_content", stringifiedBlockList.join(""));

  await writeFileSync(
    resolve(__dirname, "../src", "pages", `${postName}.tsx`),
    postDetailPage
  );
};
