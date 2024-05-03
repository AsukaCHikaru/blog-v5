export type PostLanguage = 'enUS' | 'zhTW';

export type PostMetadata = {
  id: string;
  title: string;
  category: string;
  language: PostLanguage[];
  tags: string[];
  publishDate: string;
  pathname: string;
  zhTwLink: string | null;
  filename: string;
  description?: string; // TODO: remove optional after description for all posts are completed
};

export type CategoryList = {
  [key: string]: number;
};
