import { PostMetadata } from '@types';

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
    if (row.length === 0) {
      row.push(tile);

      if (getRowSize(row) === rowSize) {
        result.push([...row]);
        row = [];
      }
      return;
    }

    if (rowSize - getRowSize(row) === 1 && tile.size === 2) {
      const size1Post = row.find((post) => post.size === 1);
      if (size1Post) {
        size1Post.size = 2;
      }
      result.push([...row]);
      row = [tile];
      return;
    }

    row.push(tile);

    if (getRowSize(row) === rowSize) {
      result.push([...row]);
      row = [];
    }
  });

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
