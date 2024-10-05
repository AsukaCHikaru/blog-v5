import { Heading } from 'mdast';

type TextBodyStyle = 'plain' | 'strong' | 'italic' | 'code';
type TextBody = {
  type: 'textBody';
  style: TextBodyStyle;
  value: string;
};
type Link = {
  type: 'link';
  body: TextBody[];
  url: string;
};

type ParagraphBlock = {
  type: 'paragraph';
  body: (TextBody | Link)[];
};

type HeadingBlock = {
  type: 'heading';
  body: TextBody[];
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

type ImageBlock = {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
};

type ListBlock = {
  type: 'list';
  ordered: boolean;
  body: (TextBody | Link)[];
};

type QuoteBlock = {
  type: 'quote';
  body: (TextBody | Link)[];
};

type CodeBlock = {
  type: 'code';
  lang?: string;
  body: string;
};

type DividerBlock = {
  type: 'divider';
};

type MarkdownBlock =
  | ParagraphBlock
  | HeadingBlock
  | ImageBlock
  | ListBlock
  | QuoteBlock
  | CodeBlock
  | DividerBlock;

export const parse = (input: string): MarkdownBlock[] => {
  const lines = input.split('\n').filter((line) => line !== '');

  const parsed = lines.map((line) => {
    if (/^#{1,}\s.+$/.test(line)) {
      return parseHeadingBlock(line);
    }
    return parseParagraphBlock(line);
  });

  return parsed;
};

export const parseTextBody = (input: string): TextBody[] => {
  const result = [];
  let toBeParsed = input;
  let plainBuffer = '';
  while (toBeParsed.length > 0) {
    const findStrong = /^\*{2}([^*]+)\*{2}/.exec(toBeParsed);
    if (findStrong) {
      if (plainBuffer.length) {
        result.push({
          type: 'textBody',
          style: 'plain',
          value: plainBuffer,
        } satisfies TextBody);
        plainBuffer = '';
      }
      result.push({
        type: 'textBody',
        style: 'strong',
        value: findStrong[1],
      } satisfies TextBody);
      toBeParsed = toBeParsed.slice(findStrong[0].length);
      continue;
    }
    const findItalic = /^\*{1}([^*]+)\*{1}/.exec(toBeParsed);

    if (findItalic) {
      if (plainBuffer.length) {
        result.push({
          type: 'textBody',
          style: 'plain',
          value: plainBuffer,
        } satisfies TextBody);
        plainBuffer = '';
      }
      result.push({
        type: 'textBody',
        style: 'italic',
        value: findItalic[1],
      } satisfies TextBody);
      toBeParsed = toBeParsed.slice(findItalic[0].length);
      continue;
    }
    const findCode = /^`{1}([^*]+)`{1}/.exec(toBeParsed);

    if (findCode) {
      if (plainBuffer.length) {
        result.push({
          type: 'textBody',
          style: 'plain',
          value: plainBuffer,
        } satisfies TextBody);
        plainBuffer = '';
      }
      result.push({
        type: 'textBody',
        style: 'code',
        value: findCode[1],
      } satisfies TextBody);
      toBeParsed = toBeParsed.slice(findCode[0].length);
      continue;
    }
    plainBuffer += toBeParsed[0];
    toBeParsed = toBeParsed.slice(1);
    if (plainBuffer.length && !toBeParsed.length) {
      result.push({
        type: 'textBody',
        style: 'plain',
        value: plainBuffer,
      } satisfies TextBody);
      plainBuffer = '';
    }
  }

  return result;
};

const parseParagraphBlock = (input: string): ParagraphBlock => ({
  type: 'paragraph',
  body: parseTextBody(input),
});

const parseHeadingBlock = (input: string): HeadingBlock => {
  const [, hashes, rawBody] = /^(#+)\s(.+)$/.exec(input) || [];
  const level = hashes.length as 1 | 2 | 3 | 4 | 5 | 6;
  const body = parseTextBody(rawBody);

  return {
    type: 'heading',
    level,
    body,
  };
};
