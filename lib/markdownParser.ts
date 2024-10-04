import { Heading } from 'mdast';

type TextBodyStyle = 'plain' | 'srong' | 'italic' | 'code';
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

  return [];
};

class Line {
  value = '';
  constructor(input: string) {
    this.value = input;
  }
  checkHeadingBlock(): HeadingBlock | Line {
    const isHeading = /^(#{1,}).+/.test(this.value);
    if (!isHeading) {
      return new Line(this.value);
    }
    return {
      type: 'heading',
      body: [],
      level: 1,
    };
  }
}

const checkHeadingBlock = (input: string) => {
  const isHeading = /^(#{1,}).+/.test(input);
  if (!isHeading) {
    return;
  }
  return {
    type: 'heading',
  };
};
