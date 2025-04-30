export type PostMetadata = {
  id: string;
  title: string;
  category: string;
  topic: string;
  tags: string[];
  publishDate: string;
  pathname: string;
  description?: string; // TODO: remove optional after description for all posts are completed
};

export const convertFrontmatterToMetadata = (
  frontmatter: Record<string, string | string[] | number>,
): PostMetadata => {
  const postMetadata: PostMetadata = {
    id: typeof frontmatter.pathname === 'string' ? frontmatter.pathname : '',
    title: typeof frontmatter.title === 'string' ? frontmatter.title : '',
    description:
      typeof frontmatter.description === 'string'
        ? frontmatter.description
        : '',
    category:
      typeof frontmatter.category === 'string' ? frontmatter.category : '',
    topic: typeof frontmatter.topic === 'string' ? frontmatter.topic : '',
    tags: Array.isArray(frontmatter.tags)
      ? frontmatter.tags
      : typeof frontmatter.tags === 'string'
      ? frontmatter.tags.split(/,\s?/)
      : [],
    publishDate:
      typeof frontmatter.published === 'string' ? frontmatter.published : '',
    pathname:
      typeof frontmatter.pathname === 'string' ? frontmatter.pathname : '',
  };
  return postMetadata;
};
