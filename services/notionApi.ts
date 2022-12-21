import { NotionPageListResponse } from "../types/notion";

const postListFilterSorter = {
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


export const fetchNotionPageList = async (): Promise<NotionPageListResponse> => {
  const res = await fetch(`https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`, {
    method: 'POST',
    headers: new Headers({
      'Authorization': `Bearer ${process.env.NOTION_API_TOKEN}`,
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(postListFilterSorter),
  });
  const notionPageList: NotionPageListResponse = await res.json();
  
  return notionPageList;
}