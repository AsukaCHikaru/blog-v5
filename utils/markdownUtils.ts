import { PostLanguage, PostSummary } from '../types';
import { YAML, Root } from 'mdast';

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

export const parseFrontmatter = (input: Root): Record<string, string> => {
  const rawFrontmatter = input.children[0] as YAML;
  const result: Record<string, string> = {};
  rawFrontmatter.value.split('\n').forEach((entry) => {
    const findKeyValue = /^(\w+):\s["']?(.+?)["']?$/.exec(entry);
    if (findKeyValue !== null) {
      const key = findKeyValue[1];
      const value = findKeyValue[2];
      result[key] = value;
    }
  });
  return result;
};

export const removePositionFromMDAST = (input: Root) => {
  return input.children.map((block) => {
    const { position, ...rest } = block;
    return rest;
  });
};
