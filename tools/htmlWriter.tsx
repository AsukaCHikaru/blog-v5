import { existsSync, readdirSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { renderToStaticMarkup } from "react-dom/server";

export const writePostDetailPageHtml = async () => {
  console.info("Start writing post detail page html");

  const postDetailPageComponentList = readdirSync(
    resolve(__dirname, "../src", "pages")
  );

  const templateHtml = readFileSync(
    resolve(__dirname, "../templates", "index.html"),
    { encoding: "utf-8" }
  );

  postDetailPageComponentList.forEach(async (postDetailPage) => {
    const filePath = resolve(__dirname, "../src", "pages", postDetailPage);
    if (!existsSync(filePath)) {
      return;
    }

    const file = await import(filePath);
    const PostDetailPageComponent =
      file[`Post${postDetailPage.replace(/-/g, "").replace(".tsx", "")}`];

    if (!PostDetailPageComponent) {
      return;
    }

    const html = renderToStaticMarkup(<PostDetailPageComponent />);

    const output = templateHtml.replace(
      '<div id="app-root"></div>',
      `<div id="app-root">${html}</div>`
    );

    writeFileSync(
      resolve(
        __dirname,
        "../dist",
        "post",
        postDetailPage.replace(/\.tsx$/, ".html")
      ),
      output
    );
  });
};
