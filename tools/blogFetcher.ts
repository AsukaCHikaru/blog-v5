import { PostSummary } from "../types";
import { NotionPageChildrenResponse } from "../types/notion";
import { getNotionBlockList, getNotionPageList } from "./notionApiService";

export const fetchPostSummaryList = async () => {
  console.info("Start fetching Notion page list.");
  let notionPageList: PostSummary[] = [];
  try {
    notionPageList = await getNotionPageList();
    console.info("Notion page list fetched.");
  } catch (error) {
    console.error(error);
  }

  return notionPageList;
};

export const fetchPostDetailList = async (
  notionPostSummaryList: PostSummary[]
) => {
  console.info("Start fetching all pages.");

  const notionPageDetailList: Record<string, NotionPageChildrenResponse> = {};
  const notionPostDetailPromiseList = notionPostSummaryList.map((postSummary) =>
    getNotionBlockList(postSummary.id)
  );

  try {
    await Promise.allSettled(notionPostDetailPromiseList).then(
      (postDetailList) => {
        postDetailList.forEach((postDetail, i) => {
          if (postDetail.status !== "fulfilled") {
            return;
          }
          notionPageDetailList[notionPostSummaryList[i].id] = postDetail.value;
        });
      }
    );
    console.info("All page fetched.");
  } catch (error) {
    console.error(error);
  }

  return notionPageDetailList;
};
