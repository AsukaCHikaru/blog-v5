import fs from 'fs';
import { resolve } from 'path';
import {
  convertFrontmatterToMetadata,
  parseMarkdown,
} from '../utils/markdownUtils';

const CONTENTS_PATH = 'public/contents';

export const getBlogPostList = async () => {
  const postFolderPath = resolve(CONTENTS_PATH, 'blog');
  const fileNames = fs
    .readdirSync(postFolderPath)
    .filter((name) => name.endsWith('.md'));
  const allPostsData = fileNames
    .map((fileName) => {
      const markdown = fs.readFileSync(
        resolve(postFolderPath, fileName),
        'utf-8',
      );
      const { frontmatter } = parseMarkdown(markdown);
      const postMetadata = convertFrontmatterToMetadata(frontmatter);

      return { postMetadata };
    })
    .sort(
      (prev, next) =>
        new Date(next.postMetadata.publishDate).getTime() -
        new Date(prev.postMetadata.publishDate).getTime(),
    )
    .map((item) => item.postMetadata);
  return allPostsData;
};

export const getBlogPostContent = (pathname: string) => {
  const postPath = resolve(CONTENTS_PATH, 'blog', `${pathname}.md`);
  const markdown = fs.readFileSync(postPath, 'utf-8');
  const { content } = parseMarkdown(markdown);

  return content;
};

export const getAboutPageContent = async () => {
  const contentPath = resolve(CONTENTS_PATH, 'about');
  const filePath = fs
    .readdirSync(contentPath)
    .filter((name) => name.endsWith('.md'))?.[0];
  const markdown = fs.readFileSync(contentPath + '/' + filePath, 'utf-8');
  const { frontmatter, content } = parseMarkdown(markdown);

  return { content, frontmatter };
};
