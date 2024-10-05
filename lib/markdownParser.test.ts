import fs from 'fs';
import path from 'path';
import { parse, parseTextBody } from './markdownParser';

const file = fs.readFileSync(
  path.resolve(process.cwd(), 'public', 'contents', 'mock', 'parser-tester.md'),
  'utf-8',
);

describe('markdownParser', () => {
  const parsed = parse(file);
  describe('parseTextBody', () => {
    test('parses plain text', () => {
      expect(parseTextBody('plain text')).toEqual([
        {
          type: 'textBody',
          style: 'plain',
          value: 'plain text',
        },
      ]);
    });
    test('parses strong text', () => {
      expect(parseTextBody('**strong text**')).toEqual([
        {
          type: 'textBody',
          style: 'strong',
          value: 'strong text',
        },
      ]);
    });
    test('parses italic text', () => {
      expect(parseTextBody('*italic text*')).toEqual([
        {
          type: 'textBody',
          style: 'italic',
          value: 'italic text',
        },
      ]);
    });
    test('parses code text', () => {
      expect(parseTextBody('`code text`')).toEqual([
        {
          type: 'textBody',
          style: 'code',
          value: 'code text',
        },
      ]);
    });
    test('parse hybrid text', () => {
      expect(parseTextBody('Plain **strong** *italic* `code` text')).toEqual([
        {
          type: 'textBody',
          style: 'plain',
          value: 'Plain ',
        },
        {
          type: 'textBody',
          style: 'strong',
          value: 'strong',
        },
        {
          type: 'textBody',
          style: 'plain',
          value: ' ',
        },
        {
          type: 'textBody',
          style: 'italic',
          value: 'italic',
        },
        {
          type: 'textBody',
          style: 'plain',
          value: ' ',
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
      ]);
    });
  });
  describe('base blocks', () => {
    test('parses paragraph block', () => {
      expect(parsed).toContain({
        type: 'paragraph',
        body: [
          {
            type: 'textBody',
            value:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          },
        ],
      });
    });
  });
});
