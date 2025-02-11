import { generatePostTileList } from './blogUtils';
import { faker } from '@faker-js/faker';
import { PostMetadata } from './markdownUtils';

const generateDummmyPost = (): PostMetadata => ({
  title: faker.lorem.sentence({ min: 3, max: 10 }),
  description: faker.lorem.sentences({ min: 1, max: 4 }),
  pathname: faker.lorem.slug({ min: 3, max: 10 }),
  category: faker.lorem.word(),
  topic: faker.lorem.word(),
  publishDate: faker.date.past().toString(),
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

  describe('tile count matches post count', () => {
    test('size = 4', () => {
      const posts = generateDummyPostList();
      const tiles = generatePostTileList(posts);
      expect(tiles.flatMap((row) => row).length).toEqual(posts.length);
    });
    test('size = 2', () => {
      const posts = generateDummyPostList();
      const tiles = generatePostTileList(posts, 2);
      expect(tiles.flatMap((row) => row).length).toEqual(posts.length);
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
      expect(rowSizes).toEqual(Array(rowSizes.length).fill(4));
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
      expect(rowSizes_size2).toEqual(Array(rowSizes_size2.length).fill(2));
    });
  });
});
