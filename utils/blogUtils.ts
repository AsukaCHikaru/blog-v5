import { PostMetadata } from '@types';
import { HeadingBlock } from 'types/markdown';

type TileSize = 1 | 2 | 3;

export type PostTile = {
  size: TileSize;
  title: string;
  description: string;
  publishDate: string;
  pathname: string;
};

const TITLE_SIZE_2_THRESHOLD = 30;
const DESCRIPTION_SIZE_2_THRESHOLD = 160;

export const generatePostTileList = (
  posts: PostMetadata[],
  rowSize: number = 4,
): PostTile[][] => {
  const result: PostTile[][] = [];
  const getRowSize = (row: PostTile[]) =>
    row.reduce((acc, cur) => acc + cur.size, 0);

  const flatTileList = posts.map(convertPostMetadataToTile);

  let row: PostTile[] = [];

  flatTileList.forEach((tile) => {
    if (rowSize - getRowSize(row) < tile.size) {
      const size1Post = row.find((post) => post.size === 1);
      if (size1Post) {
        size1Post.size = 2;
      }
      if (getRowSize(row) === rowSize) {
        result.push([...row]);
        row = [];
      }
    }
    if (rowSize - getRowSize(row) >= tile.size) {
      row.push(tile);
    }

    if (getRowSize(row) === rowSize) {
      result.push([...row]);
      row = [];
    }
  });

  if (row.length !== 0) {
    result.push([...row]);
  }

  return result;
};

const convertPostMetadataToTile = (post: PostMetadata): PostTile => ({
  size:
    post.title.length > TITLE_SIZE_2_THRESHOLD ||
    (post.description || '').length > DESCRIPTION_SIZE_2_THRESHOLD
      ? 2
      : 1,
  title: post.title,
  description: post.description || '',
  publishDate: post.publishDate,
  pathname: post.pathname,
});

export const convertHeaderLabelToId = (header: HeadingBlock) =>
  header.children
    .map((item) => item.text)
    .join('-')
    .replace(/[\s\.,\(\)]/g, '-')
    .toLowerCase();

export type BlogCategoryList = { name: string; count: number }[];
export const convertPostListToCategories = (
  postList: PostMetadata[],
): BlogCategoryList => {
  const categories = postList.map((post) => post.category);

  const categoryCountList: { name: string; count: number }[] = [];
  categories.forEach((category) => {
    const thisCategoryCountItem = categoryCountList.find(
      (item) => item.name === category,
    );
    if (thisCategoryCountItem) {
      thisCategoryCountItem.count += 1;
    } else {
      categoryCountList.push({ name: category, count: 1 });
    }
  });

  return categoryCountList;
};
