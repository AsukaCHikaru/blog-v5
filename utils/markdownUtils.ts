import { PostSummary } from "../types";

export const convertFrontmatterToSummary = (frontmatter: Record<string, string>): PostSummary => {
  const postSummary: PostSummary = {
    id: frontmatter.pathname,
    title: frontmatter.title,
    category:
      // frontmatter.category as PostCategory,
      'others',
    language:
    ['enUS'],
    tags:
      frontmatter.tags?.split(',') || [],
    publishDate: frontmatter.published,
    pathname: frontmatter.pathname,
    zhTwLink: null
  };
  return postSummary;
}