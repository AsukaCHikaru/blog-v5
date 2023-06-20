import { PostLanguage, PostSummary } from '../types';

export const convertFrontmatterToSummary = (
  frontmatter: Record<string, string>,
): PostSummary => {
  const postSummary: PostSummary = {
    id: frontmatter.pathname,
    title: frontmatter.title,
    category: frontmatter.category,
    language: [frontmatter.language as PostLanguage],
    tags: frontmatter.tags?.split(/,\s?/) || [],
    publishDate: frontmatter.published,
    pathname: frontmatter.pathname,
    zhTwLink: null,
    filename: frontmatter.filename,
  };
  return postSummary;
};
