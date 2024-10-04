import fs from 'fs';
import path from 'path';
import { parse } from './markdownParser';

const file = fs.readFileSync(
  path.resolve(process.cwd(), 'public', 'contents', 'mock', 'parser-tester.md'),
  'utf-8',
);

describe('markdownParser', () => {
  const parsed = parse(file);
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
