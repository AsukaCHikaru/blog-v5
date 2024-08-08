import { PostMetadata } from '@types';

type TileSize = 1 | 2 | 3;

export type PostTile = {
  size: TileSize;
  title: string;
  description: string;
  publishDate: string;
  pathname: string;
};

export const generatePostTileList = (posts: PostMetadata[]): PostTile[][] => {
  const result: PostTile[][] = [];

  let currentRow: PostTile[] = [];
  posts.forEach((post) => {
    const baseSize: TileSize = post.title.length > 30 ? 2 : 1;
    if (currentRow.length === 0) {
      currentRow.push({ size: baseSize, ...convertPostMetadataToTile(post) });
      return;
    }
    currentRow.push({ size: baseSize, ...convertPostMetadataToTile(post) });
    const currentRowSize = currentRow.reduce((acc, cur) => acc + cur.size, 0);
    if (baseSize === 2 && currentRowSize === 3) {
      currentRow[1].size = 2;
    }
    if (currentRowSize === 4) {
      result.push([...currentRow]);
      currentRow = [];
      return;
    }
  });

  return result;
};

const convertPostMetadataToTile = (
  post: PostMetadata,
): Omit<PostTile, 'size'> => ({
  title: post.title,
  description: post.description || '',
  publishDate: post.publishDate,
  pathname: post.pathname,
});
