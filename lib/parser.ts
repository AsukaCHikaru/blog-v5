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

  const flushCurrentText = () => {
    if (currentText) {
      tokens.push({ type: 'textBody', style: 'plain', value: currentText });
      currentText = '';
    }
  };

  while (i < text.length) {
    if (text[i] === '*' && text[i + 1] === '*') {
      // Handle strong text
      flushCurrentText();
      i += 2;
      let strongText = '';
      let foundClosing = false;
      while (i < text.length) {
        if (text[i] === '*' && text[i + 1] === '*') {
          foundClosing = true;
          break;
        }
        strongText += text[i];
        i++;
      }
      if (foundClosing) {
        tokens.push({ type: 'textBody', style: 'strong', value: strongText });
        i += 2;
      } else {
        currentText += '**' + strongText;
      }
    } else if (text[i] === '*') {
      // Handle italic text
      flushCurrentText();
      i++;
      let italicText = '';
      let foundClosing = false;
      while (i < text.length) {
        if (text[i] === '*') {
          foundClosing = true;
          break;
        }
        italicText += text[i];
        i++;
      }
      if (foundClosing) {
        tokens.push({ type: 'textBody', style: 'italic', value: italicText });
        i++;
      } else {
        currentText += '*' + italicText;
      }
    } else if (text[i] === '`') {
      // Handle code text
      flushCurrentText();
      i++;
      let codeText = '';
      let foundClosing = false;
      while (i < text.length) {
        if (text[i] === '`') {
          foundClosing = true;
          break;
        }
        codeText += text[i];
        i++;
      }
      if (foundClosing) {
        tokens.push({ type: 'textBody', style: 'code', value: codeText });
        i++;
      } else {
        currentText += '`' + codeText;
      }
    } else if (text[i] === '[') {
      // Handle link
      flushCurrentText();
      const startIndex = i;
      i++;
      let linkText = '';
      let foundClosing = false;
      while (i < text.length) {
        if (text[i] === ']') {
          foundClosing = true;
          break;
        }
        linkText += text[i];
        i++;
      }

      if (foundClosing && i + 1 < text.length && text[i + 1] === '(') {
        i += 2; // Skip ] and (
        let url = '';
        let foundUrl = false;
        while (i < text.length) {
          if (text[i] === ')') {
            foundUrl = true;
            break;
          }
          url += text[i];
          i++;
        }
        if (foundUrl) {
          tokens.push({
            type: 'link',
            body: [{ type: 'textBody', style: 'plain', value: linkText }],
            url,
          });
          i++;
        } else {
          currentText += text.substring(startIndex, i);
        }
      } else {
        currentText += text.substring(startIndex, i + (foundClosing ? 1 : 0));
      }
    } else if (text[i] === '_') {
      // Handle underscore as italic
      flushCurrentText();
      i++;
      let italicText = '';
      let foundClosing = false;
      while (i < text.length) {
        if (text[i] === '_') {
          foundClosing = true;
          break;
        }
        italicText += text[i];
        i++;
      }
      if (foundClosing) {
        tokens.push({ type: 'textBody', style: 'italic', value: italicText });
        i++;
      } else {
        currentText += '_' + italicText;
      }
    } else {
      currentText += text[i];
      i++;
    }
  }

  flushCurrentText();
  return tokens;
}

function identifyBlockType(line: string):
  | {
      type: 'heading';
      level: number;
    }
  | {
      type: 'quote';
    }
  | {
      type: 'paragraph';
    } {
  if (line.startsWith('#')) {
    const match = line.match(/^(#{1,6})\s+/);
    if (match) {
      return { type: 'heading', level: match[1].length };
    }
  }
  if (line.startsWith('>')) {
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
    const body = parseTextStyle(content).filter(
      (token): token is TextBody => token.type === 'textBody',
    );
    return {
      type: 'quote',
      body:
        body.length === 0
          ? [{ type: 'textBody', style: 'plain', value: '' }]
          : body,
    };
  }

  return {
    type: 'paragraph',
    body: parseTextStyle(markdown),
  };
}
