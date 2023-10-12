import { FC } from 'react';
import { ImageBlock } from 'types/markdown';

export const YoutubeBlock: FC<{ item: ImageBlock }> = ({ item }) => {
  const url = /youtube\.com/.test(item.url)
    ? item.url.replace(/watch\?v=/, 'embed/')
    : /youtu\.be/.test(item.url)
    ? item.url.replace(
        /https:\/\/youtu\.be\/(\w+)/,
        'https://youtube.com/embed/$1',
      )
    : undefined;

  if (!url) {
    return null;
  }

  return (
    <div className="flex justify-center my-6">
      <div className="iframeWrapper w-full h-[27rem] mx-2">
        <iframe className="w-full h-full" id="ytplayer" src={url} />
      </div>
    </div>
  );
};
