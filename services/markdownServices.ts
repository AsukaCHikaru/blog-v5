import fs from 'fs';
import { resolve } from 'path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import {
  convertFrontmatterToSummary,
  convertMDAST,
  parseFrontmatter,
} from '../utils/markdownUtils';

export const getPostList = async () => {
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
      const rawMDAST = unified()
        .use(remarkParse)
        .use(remarkFrontmatter)
        .parse(markdown);
      const postData = convertMDAST(rawMDAST);
      const frontmatter = parseFrontmatter(rawMDAST);
      const postSummary = convertFrontmatterToSummary(frontmatter);
      return { postSummary, postData };
    })
    .sort(
      (prev, next) =>
        new Date(next.postSummary.publishDate).getTime() -
        new Date(prev.postSummary.publishDate).getTime(),
    );
  return allPostsData;
};

export const getPostContent = (name: string) => {
  const postFolderPath = resolve(`contents/blog/${name}.md`);
  const markdown = fs.readFileSync(postFolderPath, 'utf-8');
  const rawMDAST = unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .parse(markdown);
  const postData = convertMDAST(rawMDAST).slice(1);

  // Filter and parse image
  const parsedPostData = postData.map((block) => {
    if (block.type !== 'paragraph') return block;
    if (block.children[0].type !== 'text') return block;
    if (!block.children[0].value.startsWith('![[')) return block;
    const findImage = /\!\[\[(.+)\]\](\n)?(.+)?/.exec(block.children[0].value);
    if (findImage === null) return block;
    const imagePath = findImage[1];
    const caption = findImage[3];
    return {
      type: 'paragraph',
      children: [
        { type: 'image', title: caption || '', url: imagePath, alt: 'TODO' },
      ],
    };
  });

  return parsedPostData;
};

export const GetAboutPageContent = async () => {
  const contentPath = resolve('contents/about');
  const filePath = fs
    .readdirSync(contentPath)
    .filter((name) => name.endsWith('.md'))?.[0];
  const rawContent = fs.readFileSync(contentPath + '/' + filePath, 'utf-8');

  const rawMDAST = unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .parse(rawContent);

  const content = convertMDAST(rawMDAST);
  const frontmatter = parseFrontmatter(rawMDAST);

  return { content, frontmatter };
};

export const getSnapshotPageContent = async () => {
  const contentPath = resolve('contents/snapshot');
  const filePath = fs
    .readdirSync(contentPath)
    .filter((name) => name.endsWith('.md'))?.[0];
  const rawContent = fs.readFileSync(contentPath + '/' + filePath, 'utf-8');
  const rawMDAST = unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .parse(rawContent);

  const content = convertMDAST(rawMDAST);
  const frontmatter = parseFrontmatter(rawMDAST);

  return { content, frontmatter };
};
