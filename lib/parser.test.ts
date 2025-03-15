import {
  type ParagraphBlock,
  type HeadingBlock,
  type QuoteBlock,
  parseBlock,
} from './parser';

describe('Markdown Parser', () => {
  describe('Text Block Parser', () => {
    describe('Paragraph', () => {
      test('parses plain text paragraph', () => {
        const input = 'This is a plain text paragraph';
        const expected: ParagraphBlock = {
          type: 'paragraph',
          body: [
            {
              type: 'textBody',
              style: 'plain',
              value: 'This is a plain text paragraph',
            },
          ],
        };
        expect(parseBlock(input)).toEqual(expected);
      });

      test('parses paragraph with strong text', () => {
        const input = 'This is **strong** text';
        const expected: ParagraphBlock = {
          type: 'paragraph',
          body: [
            {
              type: 'textBody',
              style: 'plain',
              value: 'This is ',
            },
            {
              type: 'textBody',
              style: 'strong',
              value: 'strong',
            },
            {
              type: 'textBody',
              style: 'plain',
              value: ' text',
            },
          ],
        };
        expect(parseBlock(input)).toEqual(expected);
      });

      test('parses paragraph with italic text', () => {
        const input = 'This is *italic* text';
        const expected: ParagraphBlock = {
          type: 'paragraph',
          body: [
            {
              type: 'textBody',
              style: 'plain',
              value: 'This is ',
            },
            {
              type: 'textBody',
              style: 'italic',
              value: 'italic',
            },
            {
              type: 'textBody',
              style: 'plain',
              value: ' text',
            },
          ],
        };
        expect(parseBlock(input)).toEqual(expected);
      });

      test('parses paragraph with code', () => {
        const input = 'This is `code` text';
        const expected: ParagraphBlock = {
          type: 'paragraph',
          body: [
            {
              type: 'textBody',
              style: 'plain',
              value: 'This is ',
            },
            {
              type: 'textBody',
              style: 'code',
              value: 'code',
            },
            {
              type: 'textBody',
              style: 'plain',
              value: ' text',
            },
          ],
        };
        expect(parseBlock(input)).toEqual(expected);
      });

      test('parses paragraph with mixed styles', () => {
        const input = 'This is **strong** and *italic* and `code` text';
        const expected: ParagraphBlock = {
          type: 'paragraph',
          body: [
            {
              type: 'textBody',
              style: 'plain',
              value: 'This is ',
            },
            {
              type: 'textBody',
              style: 'strong',
              value: 'strong',
            },
            {
              type: 'textBody',
              style: 'plain',
              value: ' and ',
            },
            {
              type: 'textBody',
              style: 'italic',
              value: 'italic',
            },
            {
              type: 'textBody',
              style: 'plain',
              value: ' and ',
            },
            {
              type: 'textBody',
              style: 'code',
              value: 'code',
            },
            {
              type: 'textBody',
              style: 'plain',
              value: ' text',
            },
          ],
        };
        expect(parseBlock(input)).toEqual(expected);
      });

      test('parses paragraph with link', () => {
        const input = 'Here is a [link](https://example.com)';
        const expected: ParagraphBlock = {
          type: 'paragraph',
          body: [
            {
              type: 'textBody',
              style: 'plain',
              value: 'Here is a ',
            },
            {
              type: 'link',
              body: [
                {
                  type: 'textBody',
                  style: 'plain',
                  value: 'link',
                },
              ],
              url: 'https://example.com',
            },
          ],
        };
        expect(parseBlock(input)).toEqual(expected);
      });
    });

    describe('Heading', () => {
      test('parses h1 heading', () => {
        const input = '# Heading 1';
        const expected: HeadingBlock = {
          type: 'heading',
          level: 1,
          body: [
            {
              type: 'textBody',
              style: 'plain',
              value: 'Heading 1',
            },
          ],
        };
        expect(parseBlock(input)).toEqual(expected);
      });

      test('parses h2 heading', () => {
        const input = '## Heading 2';
        const expected: HeadingBlock = {
          type: 'heading',
          level: 2,
          body: [
            {
              type: 'textBody',
              style: 'plain',
              value: 'Heading 2',
            },
          ],
        };
        expect(parseBlock(input)).toEqual(expected);
      });

      test('parses heading with styled text', () => {
        const input = '# Heading with **strong** text';
        const expected: HeadingBlock = {
          type: 'heading',
          level: 1,
          body: [
            {
              type: 'textBody',
              style: 'plain',
              value: 'Heading with ',
            },
            {
              type: 'textBody',
              style: 'strong',
              value: 'strong',
            },
            {
              type: 'textBody',
              style: 'plain',
              value: ' text',
            },
          ],
        };
        expect(parseBlock(input)).toEqual(expected);
      });
    });

    describe('Quote', () => {
      test('parses quote block', () => {
        const input = '> This is a quote';
        const expected: QuoteBlock = {
          type: 'quote',
          body: [
            {
              type: 'textBody',
              style: 'plain',
              value: 'This is a quote',
            },
          ],
        };
        expect(parseBlock(input)).toEqual(expected);
      });

      test('parses quote with styled text', () => {
        const input = '> Quote with **strong** and *italic* text';
        const expected: QuoteBlock = {
          type: 'quote',
          body: [
            {
              type: 'textBody',
              style: 'plain',
              value: 'Quote with ',
            },
            {
              type: 'textBody',
              style: 'strong',
              value: 'strong',
            },
            {
              type: 'textBody',
              style: 'plain',
              value: ' and ',
            },
            {
              type: 'textBody',
              style: 'italic',
              value: 'italic',
            },
            {
              type: 'textBody',
              style: 'plain',
              value: ' text',
            },
          ],
        };
        expect(parseBlock(input)).toEqual(expected);
      });

      describe('Edge Cases', () => {
        test('handles empty text', () => {
          const input = '';
          const expected: ParagraphBlock = {
            type: 'paragraph',
            body: [],
          };
          expect(parseBlock(input)).toEqual(expected);
        });

        test('handles unclosed strong style', () => {
          const input = 'This is **unclosed strong';
          const expected: ParagraphBlock = {
            type: 'paragraph',
            body: [
              {
                type: 'textBody',
                style: 'plain',
                value: 'This is ',
              },
              {
                type: 'textBody',
                style: 'plain',
                value: '**unclosed strong',
              },
            ],
          };
          expect(parseBlock(input)).toEqual(expected);
        });

        test('handles unclosed italic style', () => {
          const input = 'This is *unclosed italic';
          const expected: ParagraphBlock = {
            type: 'paragraph',
            body: [
              {
                type: 'textBody',
                style: 'plain',
                value: 'This is ',
              },
              {
                type: 'textBody',
                style: 'plain',
                value: '*unclosed italic',
              },
            ],
          };
          expect(parseBlock(input)).toEqual(expected);
        });

        test('handles unclosed code style', () => {
          const input = 'This is `unclosed code';
          const expected: ParagraphBlock = {
            type: 'paragraph',
            body: [
              {
                type: 'textBody',
                style: 'plain',
                value: 'This is ',
              },
              {
                type: 'textBody',
                style: 'plain',
                value: '`unclosed code',
              },
            ],
          };
          expect(parseBlock(input)).toEqual(expected);
        });

        test('handles malformed link', () => {
          const input = 'This is a [broken link](';
          const expected: ParagraphBlock = {
            type: 'paragraph',
            body: [
              {
                type: 'textBody',
                style: 'plain',
                value: 'This is a ',
              },
              {
                type: 'textBody',
                style: 'plain',
                value: '[broken link](',
              },
            ],
          };
          expect(parseBlock(input)).toEqual(expected);
        });

        test('handles nested styles', () => {
          const input = 'This is **strong *with italic* inside**';
          const expected: ParagraphBlock = {
            type: 'paragraph',
            body: [
              {
                type: 'textBody',
                style: 'plain',
                value: 'This is ',
              },
              {
                type: 'textBody',
                style: 'strong',
                value: 'strong *with italic* inside',
              },
            ],
          };
          expect(parseBlock(input)).toEqual(expected);
        });

        test('handles multiple consecutive styles', () => {
          const input = '**strong**_italic_`code`';
          const expected: ParagraphBlock = {
            type: 'paragraph',
            body: [
              {
                type: 'textBody',
                style: 'strong',
                value: 'strong',
              },
              {
                type: 'textBody',
                style: 'italic',
                value: 'italic',
              },
              {
                type: 'textBody',
                style: 'code',
                value: 'code',
              },
            ],
          };
          expect(parseBlock(input)).toEqual(expected);
        });

        test('handles heading with no content', () => {
          const input = '#';
          const expected: ParagraphBlock = {
            type: 'paragraph',
            body: [
              {
                type: 'textBody',
                style: 'plain',
                value: '#',
              },
            ],
          };
          expect(parseBlock(input)).toEqual(expected);
        });

        test('handles quote with no content', () => {
          const input = '>';
          const expected: QuoteBlock = {
            type: 'quote',
            body: [
              {
                type: 'textBody',
                style: 'plain',
                value: '',
              },
            ],
          };
          expect(parseBlock(input)).toEqual(expected);
        });

        test('handles excessive heading level', () => {
          const input = '####### Too many hashes';
          const expected: ParagraphBlock = {
            type: 'paragraph',
            body: [
              {
                type: 'textBody',
                style: 'plain',
                value: '####### Too many hashes',
              },
            ],
          };
          expect(parseBlock(input)).toEqual(expected);
        });
      });
    });
  });
  describe('Integration Tests', () => {
    describe('Blog Content', () => {
      test('parses heading with Japanese text', () => {
        const input = '# Reflection from a story';
        const expected: HeadingBlock = {
          type: 'heading',
          level: 1,
          body: [
            {
              type: 'textBody',
              style: 'plain',
              value: 'Reflection from a story',
            },
          ],
        };
        expect(parseBlock(input)).toEqual(expected);
      });

      test('parses quote from game dialogue', () => {
        const input =
          "> Mountain Celeste is a strange place.\n> You might see things. Things you ain't ready to see.";
        const expected: QuoteBlock = {
          type: 'quote',
          body: [
            {
              type: 'textBody',
              style: 'plain',
              value:
                "Mountain Celeste is a strange place.\nYou might see things. Things you ain't ready to see.",
            },
          ],
        };
        expect(parseBlock(input)).toEqual(expected);
      });

      test('parses paragraph with link', () => {
        const input =
          '而第二款，[The Game Awards](https://thegameawards.com/) 的 2018 年的年度最佳獨立遊戲〈Celeste〉';
        const expected: ParagraphBlock = {
          type: 'paragraph',
          body: [
            {
              type: 'textBody',
              style: 'plain',
              value: '而第二款，',
            },
            {
              type: 'link',
              body: [
                {
                  type: 'textBody',
                  style: 'plain',
                  value: 'The Game Awards',
                },
              ],
              url: 'https://thegameawards.com/',
            },
            {
              type: 'textBody',
              style: 'plain',
              value: ' 的 2018 年的年度最佳獨立遊戲〈Celeste〉',
            },
          ],
        };
        expect(parseBlock(input)).toEqual(expected);
      });
    });
  });
});
