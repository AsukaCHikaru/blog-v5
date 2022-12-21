import { PostCategory, PostLanguage, PostSummary } from "../types";
import { NotionPageListResponse } from "../types/notion";

export const convertNotionPageListToPostSummaryList = (pageList: NotionPageListResponse): PostSummary[] => {

  const postSummaryList: PostSummary[] = [];

  pageList.results.forEach((result) => {
    const postSummary: PostSummary = {
      id: result.id,
      title: result.properties?.Name.title[0].plain_text || "",
      category:
        (result.properties?.category.select.name as PostCategory) || "others",
      language:
        (result.properties?.language.multi_select.map(
          (select) => select.name
        ) as PostLanguage[]) || [],
      tags:
        result.properties?.tags.multi_select.map((select) => select.name) || [],
      publishDate: result.properties?.published.date.start || "",
      pathname: result.properties?.pathname.rich_text[0].plain_text || "",
      zhTwLink: result.properties?.link_zhTW?.url || null,
    };
    postSummaryList.push(postSummary);
  });

  return postSummaryList;
};