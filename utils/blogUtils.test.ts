import { PostMetadata } from '@types';
import { generatePostTileList } from './blogUtils';
import { faker } from '@faker-js/faker';

const generateDummmyPost = (): PostMetadata => ({
  title: faker.lorem.sentence({ min: 3, max: 10 }),
  description: faker.lorem.sentences({ min: 1, max: 4 }),
  pathname: faker.lorem.slug({ min: 3, max: 10 }),
  category: faker.lorem.word(),
  language: ['enUS'],
  publishDate: faker.date.past().toString(),
  zhTwLink: null,
  filename: faker.system.fileName(),
  id: faker.lorem.slug({ min: 3, max: 10 }),
  tags: [],
});

const generateDummyPostList = () =>
  Array(50)
    .fill(0)
    .map((_) => generateDummmyPost());

describe('generatePostTileList', () => {
  test('returns empty list if input is an empty list', () => {
    const posts: PostMetadata[] = [];
    expect(generatePostTileList(posts)).toEqual([]);
  });

  describe('returns non-empty list if input is not an empty list', () => {
    test('size = 4', () => {
      const tilePostList = generatePostTileList(generateDummyPostList());
      expect(tilePostList.length).toBeTruthy();
    });
    test('size = 2', () => {
      const tilePostList_size2 = generatePostTileList(
        generateDummyPostList(),
        2,
      );
      expect(tilePostList_size2.length).toBeTruthy();
    });
  });

  describe('no row is empty', () => {
    test('size = 4', () => {
      const tilePostList = generatePostTileList(generateDummyPostList());
      expect(tilePostList.every((row) => row.length !== 0)).toBe(true);
    });
    test('size = 2', () => {
      const tilePostList_size2 = generatePostTileList(
        generateDummyPostList(),
        2,
      );
      expect(tilePostList_size2.every((row) => row.length !== 0)).toBe(true);
    });
  });

  describe('every row except last row has a size of rowSize', () => {
    test('size = 4', () => {
      const tilePostList = generatePostTileList(generateDummyPostList());
      const rowSizes = tilePostList
        .map((row) => row)
        .map((row) => row.reduce((acc, cur) => acc + cur.size, 0))
        .slice(0, -1);
      expect(rowSizes.every((size) => size === 4)).toBe(true);
    });
    test('size = 2', () => {
      const tilePostList_size2 = generatePostTileList(
        generateDummyPostList(),
        2,
      );
      const rowSizes_size2 = tilePostList_size2
        .map((row) => row)
        .map((row) => row.reduce((acc, cur) => acc + cur.size, 0))
        .slice(0, -1);
      expect(rowSizes_size2.every((size) => size === 2)).toBe(true);
    });
  });
});
