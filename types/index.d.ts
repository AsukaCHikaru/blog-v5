export type PostCategory = "gaming" | "programming" | "others";

export type PostLanguage = "enUS" | "zhTW";

export type PostSummary = {
  id: string;
  title: string;
  category: PostCategory;
  language: PostLanguage[];
  tags: string[];
  publishDate: string;
  pathname: string;
  zhTwLink: string | null;
};