import { fetchPostDetailList, fetchPostSummaryList } from "./blogFetcher";
import {
  writeAllPostDetailPage,
  writePostListPage,
  writeRoutes,
} from "./componentWriter";
import { writePostDetailPageHtml } from "./htmlWriter";

const build = async () => {
  const notionPostSummaryList = await fetchPostSummaryList();
  const notionPostDetailList = await fetchPostDetailList(notionPostSummaryList);

  await writeRoutes(notionPostSummaryList);
  await writePostListPage(notionPostSummaryList);

  await writeAllPostDetailPage(
    notionPostSummaryList.filter((post) => post.category !== "programming"),
    notionPostDetailList
  );

  await writePostDetailPageHtml();
};

build();
