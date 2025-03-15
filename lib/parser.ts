export type TextBodyStyle = 'plain' | 'strong' | 'italic' | 'code';
export type TextBody = {
  type: 'textBody';
  style: TextBodyStyle;
  value: string;
};
export type Link = {
  type: 'link';
  body: TextBody[];
  url: string;
};

export type ParagraphBlock = {
  type: 'paragraph';
  body: (TextBody | Link)[];
};

export type HeadingBlock = {
  type: 'heading';
  body: TextBody[];
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export type QuoteBlock = {
  type: 'quote';
  body: TextBody[];
};

type Block = ParagraphBlock | HeadingBlock | QuoteBlock;

function parseTextStyle(text: string): (TextBody | Link)[] {
  const tokens: (TextBody | Link)[] = [];
  let currentText = '';
  let i = 0;

  while (i < text.length) {
    if (text[i] === '*' && text[i + 1] === '*') {
      // Handle strong text
      if (currentText) {
        tokens.push({ type: 'textBody', style: 'plain', value: currentText });
        currentText = '';
      }
      i += 2;
      let strongText = '';
      while (i < text.length && !(text[i] === '*' && text[i + 1] === '*')) {
        strongText += text[i];
        i++;
      }
      tokens.push({ type: 'textBody', style: 'strong', value: strongText });
      i += 2;
    } else if (text[i] === '*') {
      // Handle italic text
      if (currentText) {
        tokens.push({ type: 'textBody', style: 'plain', value: currentText });
        currentText = '';
      }
      i++;
      let italicText = '';
      while (i < text.length && text[i] !== '*') {
        italicText += text[i];
        i++;
      }
      tokens.push({ type: 'textBody', style: 'italic', value: italicText });
      i++;
    } else if (text[i] === '`') {
      // Handle code text
      if (currentText) {
        tokens.push({ type: 'textBody', style: 'plain', value: currentText });
        currentText = '';
      }
      i++;
      let codeText = '';
      while (i < text.length && text[i] !== '`') {
        codeText += text[i];
        i++;
      }
      tokens.push({ type: 'textBody', style: 'code', value: codeText });
      i++;
    } else if (text[i] === '[') {
      // Handle link
      if (currentText) {
        tokens.push({ type: 'textBody', style: 'plain', value: currentText });
        currentText = '';
      }
      i++;
      let linkText = '';
      while (i < text.length && text[i] !== ']') {
        linkText += text[i];
        i++;
      }
      i++; // Skip ]
      if (text[i] === '(') {
        i++;
        let url = '';
        while (i < text.length && text[i] !== ')') {
          url += text[i];
          i++;
        }
        tokens.push({
          type: 'link',
          body: [{ type: 'textBody', style: 'plain', value: linkText }],
          url,
        });
      }
      i++;
    } else {
      currentText += text[i];
      i++;
    }
  }

  if (currentText) {
    tokens.push({ type: 'textBody', style: 'plain', value: currentText });
  }

  return tokens;
}

function identifyBlockType(line: string): {
  type: 'paragraph' | 'heading' | 'quote';
  level?: number;
} {
  if (line.startsWith('#')) {
    const match = line.match(/^(#{1,6})\s/);
    if (match) {
      return { type: 'heading', level: match[1].length };
    }
  }
  if (line.startsWith('> ')) {
    return { type: 'quote' };
  }
  return { type: 'paragraph' };
}

export function parseBlock(markdown: string): Block {
  const blockType = identifyBlockType(markdown);

  if (blockType.type === 'heading') {
    const content = markdown.replace(/^#{1,6}\s/, '');
    return {
      type: 'heading',
      level: blockType.level as 1 | 2 | 3 | 4 | 5 | 6,
      body: parseTextStyle(content).filter(
        (token): token is TextBody => token.type === 'textBody',
      ),
    };
  }

  if (blockType.type === 'quote') {
    const content = markdown
      .split('\n')
      .map((line) => line.replace(/^>\s?/, ''))
      .join('\n');
    return {
      type: 'quote',
      body: parseTextStyle(content).filter(
        (token): token is TextBody => token.type === 'textBody',
      ),
    };
  }

  return {
    type: 'paragraph',
    body: parseTextStyle(markdown),
  };
}
