import axios from "axios";
import { PostCategory, PostLanguage, PostSummary } from "../types";

import {
  NotionPageChildrenResponse,
  NotionPageListResponse,
} from "../types/notion";

const NOTION_API_TOKEN = process.env.NOTION_API_TOKEN;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
const NOTION_API_BASEURL = "https://api.notion.com/v1";

export const axiosInstance = axios.create({
  baseURL: NOTION_API_BASEURL,
  headers: {
    Authorization: `Bearer ${NOTION_API_TOKEN}`,
  },
});

export const postListFilterSorter = {
  filter: {
    property: "state",
    select: {
      equals: "Done",
    },
  },
  sorts: [
    {
      property: "published",
      direction: "descending",
    },
  ],
};

const fetchNotionPageList = async () => {
  const response = await axiosInstance.post<NotionPageListResponse>(
    `${NOTION_API_BASEURL}/databases/${NOTION_DATABASE_ID}/query`,
    postListFilterSorter
  );

  return response.data;
};

const fetchNotionBlockList = async (postId: string) => {
  const response = await axiosInstance.get<NotionPageChildrenResponse>(
    `${NOTION_API_BASEURL}/blocks/${postId}/children`
  );

  return response.data;
};

export const getNotionPageList = async (): Promise<PostSummary[]> => {
  const data = await fetchNotionPageList();

  const postSummaryList: PostSummary[] = [];

  data.results.forEach((result) => {
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
      zhTwLink: result.properties?.link_zhTW?.url || undefined,
    };
    postSummaryList.push(postSummary);
  });

  return postSummaryList;
};

export const getNotionBlockList = async (postId: string) => {
  const data = await fetchNotionBlockList(postId);
  return data;
};
