import fs from 'fs';
import { resolve } from 'path';
import {
  convertFrontmatterToSummary,
  parseMarkdown,
} from '../utils/markdownUtils';

export const getBlogPostList = async () => {
  const postFolderPath = resolve('contents/blog');
  const fileNames = fs
    .readdirSync(postFolderPath)
    .filter((name) => name.endsWith('.md'));
  const allPostsData = fileNames
    .map((fileName) => {
      const markdown = fs.readFileSync(
        postFolderPath + '/' + fileName,
        'utf-8',
      );
      const { frontmatter } = parseMarkdown(markdown);
      const postSummary = convertFrontmatterToSummary(frontmatter);

      return { postSummary };
    })
    .sort(
      (prev, next) =>
        new Date(next.postSummary.publishDate).getTime() -
        new Date(prev.postSummary.publishDate).getTime(),
    )
    .map((item) => item.postSummary);
  return allPostsData;
};

export const getBlogPostContent = (name: string) => {
  const postFolderPath = resolve(`contents/blog/${name}.md`);
  const markdown = fs.readFileSync(postFolderPath, 'utf-8');
  const { content } = parseMarkdown(markdown);

  return content;
};

export const getAboutPageContent = async () => {
  const contentPath = resolve('contents/about');
  const filePath = fs
    .readdirSync(contentPath)
    .filter((name) => name.endsWith('.md'))?.[0];
  const markdown = fs.readFileSync(contentPath + '/' + filePath, 'utf-8');
  const { frontmatter, content } = parseMarkdown(markdown);

  return { content, frontmatter };
};

export const getSnapshotPageContent = async () => {
  const contentPath = resolve('contents/snapshot');
  const filePath = fs
    .readdirSync(contentPath)
    .filter((name) => name.endsWith('.md'))?.[0];
  const markdown = fs.readFileSync(contentPath + '/' + filePath, 'utf-8');
  const { frontmatter, content } = parseMarkdown(markdown);

  return { content, frontmatter };
};
