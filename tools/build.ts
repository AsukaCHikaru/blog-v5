import { fetchPostDetailList, fetchPostSummaryList } from "./blogFetcher";
import {
  writePostDetailPage,
  writePostListPage,
  writeRoutes,
} from "./componentWriter";

const build = async () => {
  const notionPostSummaryList = await fetchPostSummaryList();
  const notionPostDetailList = await fetchPostDetailList(notionPostSummaryList);

  await writeRoutes(notionPostSummaryList);
  await writePostListPage(notionPostSummaryList);

  notionPostSummaryList.forEach(async (postSummary) => {
    await writePostDetailPage(
      postSummary.pathname,
      notionPostDetailList[postSummary.id].results
    );
  });
};

build();
