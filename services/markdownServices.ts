import fs from 'fs';
import { resolve } from 'path';
import { convertFrontmatterToMetadata } from '../utils/markdownUtils';
import { parse as amp } from '@asukawang/amp';

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
      const { frontmatter } = amp(markdown);
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
  const { blocks } = amp(markdown);

  return blocks;
};

export const getAboutPageContent = async () => {
  const filePath = resolve(CONTENTS_PATH, 'about', 'about-page.md');
  const markdown = fs.readFileSync(filePath, 'utf-8');
  const { frontmatter, blocks } = amp(markdown);

  return { frontmatter, blocks };
};
