import fs from 'fs';
import { resolve } from 'path'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'
import { YAML, Root } from 'mdast';
import { convertFrontmatterToSummary } from '../utils/markdownUtils';

export const getPostList =  async () => {
    const postFolderPath = resolve('posts');
    const fileNames = fs.readdirSync(postFolderPath);
    const allPostsData = fileNames.map(fileName => {
        const markdown = fs.readFileSync(postFolderPath + '/' + fileName, 'utf-8');
        const rawMDAST =  unified().use(remarkParse).use(remarkFrontmatter).parse(markdown);
        const postData = convertMDAST(rawMDAST);
        const frontmatter = parseFrontmatter(rawMDAST);
        const postSummary = convertFrontmatterToSummary(frontmatter);
        return { postSummary, postData };
    })
    return allPostsData;
}

const parseFrontmatter = (input: Root): Record<string, string>  => {
  const rawFrontmatter = input.children[0] as YAML;
  const result: Record<string, string> = {};
  rawFrontmatter.value.split('\n').forEach(entry => {
    const [key, value] = entry.split(': ');
    result[key] = value;
  })
  return result;
}

const convertMDAST = (input: Root) => {
  return input.children.map(block => {
    const { position, ...rest } = block;
    return rest
  });
}

export const getPostContent = (name: string) => {
  const postFolderPath = resolve(`posts/${name}.md`);
  const markdown = fs.readFileSync(postFolderPath, 'utf-8');
  const rawMDAST =  unified().use(remarkParse).use(remarkFrontmatter).parse(markdown);
  const postData = convertMDAST(rawMDAST).slice(1);
  return postData;
}