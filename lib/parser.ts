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

type QuoteBlock = {
  type: 'quote';
  body: TextBody[];
};
