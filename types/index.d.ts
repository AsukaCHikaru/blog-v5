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
};

export type CategoryList = {
  [key: string]: number;
};
