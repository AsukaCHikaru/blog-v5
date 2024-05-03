import {
  HeadingBlock,
  ListBlock,
  MarkdownBlock,
  TextBlock,
} from 'types/markdown';
import { PostLanguage, PostMetadata } from '../types';
import { YAML, Content, PhrasingContent, Paragraph, List } from 'mdast';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';

const parseFrontmatter = (rawFrontmatter: YAML): Record<string, string> => {
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

const parseTextBlock = (contents: PhrasingContent[]): TextBlock[] => {
  return contents
    .map((content) => {
      if (content.type === 'text') {
        return {
          type: 'plain',
          text: content.value,
        };
      }
      if (content.type === 'strong') {
        return {
          type: 'strong',
          text: parseTextBlock(content.children)[0].text,
        };
      }
      if (content.type === 'emphasis') {
        return {
          type: 'italic',
          text: parseTextBlock(content.children)[0].text,
        };
      }
      if (content.type === 'link') {
        return {
          type: 'link',
          text: parseTextBlock(content.children)[0].text,
          url: content.url,
        };
      }
      if (content.type === 'inlineCode') {
        return {
          type: 'inlineCode',
          text: content.value,
        };
      }
    })
    .filter((block) => block) as TextBlock[];
};

const parseParagraphContent = (content: Paragraph): MarkdownBlock => {
  if (content.children[0].type === 'image') {
    return {
      type: 'image',
      caption: content.children[0].title ?? null,
      url: content.children[0].url,
      alt: content.children[0].alt ?? null,
    };
  }
  if (
    content.children[0].type === 'text' &&
    /^!\[\[.+\]\]/.test(content.children[0].value)
  ) {
    const match = /^!\[\[(.+)\]\]\n(.*)$/.exec(content.children[0].value);
    if (match?.length) {
      return {
        type: 'image',
        url: match[1],
        caption: match[2],
        alt: null,
      };
    }
  }
  return {
    type: 'paragraph',
    children: parseTextBlock(content.children),
  };
};

const parseListContent = (content: List): ListBlock => {
  return {
    type: 'list',
    ordered: !!content.ordered,
    children: content.children.map((child) => ({
      type: 'listItem',
      children: (child.children as Paragraph[]).flatMap((child) =>
        parseTextBlock(child.children),
      ),
    })),
  };
};

const parseRawContent = (rawContent: Content[]): MarkdownBlock[] => {
  const result: MarkdownBlock[] = [];

  rawContent.forEach((content) => {
    if (content.type === 'heading') {
      result.push({
        type: 'heading',
        children: parseTextBlock(content.children),
        depth: content.depth,
      });
    }

    if (content.type === 'paragraph') {
      result.push(parseParagraphContent(content));
    }

    if (content.type === 'list') {
      result.push(parseListContent(content));
    }

    if (content.type === 'code') {
      result.push({
        type: 'code',
        lang: content.lang ?? undefined,
        text: content.value,
      });
    }

    if (content.type === 'blockquote') {
      result.push({
        type: 'quote',
        children: parseTextBlock(
          (
            content.children.filter(
              (c) => c.type === 'paragraph',
            )[0] as Paragraph
          ).children,
        ),
      });
    }

    if (content.type === 'thematicBreak') {
      result.push({
        type: 'thematicBreak',
      });
    }
  });

  return result;
};

export const parseMarkdown = (raw: string) => {
  const rawMDAST = unified().use(remarkParse).use(remarkFrontmatter).parse(raw);
  const [rawFrontmatter, ...rawContent] = rawMDAST.children;
  const frontmatter = parseFrontmatter(rawFrontmatter as YAML);
  const content = parseRawContent(rawContent);

  return {
    frontmatter,
    content,
  };
};

export const convertFrontmatterToMetadata = (
  frontmatter: Record<string, string>,
): PostMetadata => {
  const postMetadata: PostMetadata = {
    id: frontmatter.pathname,
    title: frontmatter.title,
    description: frontmatter.description || '',
    category: frontmatter.category,
    language: [frontmatter.language as PostLanguage],
    tags: frontmatter.tags?.split(/,\s?/) || [],
    publishDate: frontmatter.published,
    pathname: frontmatter.pathname,
    zhTwLink: null,
    filename: frontmatter.filename,
  };
  return postMetadata;
};

export const isHeadingBlock = (block: MarkdownBlock): block is HeadingBlock =>
  block.type === 'heading';

export const getCategoryList = (list: PostMetadata[]) => {
  const map = new Map<string, number>();
  list.forEach(({ category }) => {
    const current = map.get(category);
    if (current) map.set(category, current + 1);
    else map.set(category, 1);
  });
  return Object.fromEntries(map.entries());
};
