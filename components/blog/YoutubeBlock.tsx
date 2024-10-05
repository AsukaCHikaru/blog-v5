import { FC } from 'react';
import styles from '@styles/blog/YoutubeBlock.module.css';
import { ImageBlock } from '@utils/markdownUtils';

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
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <iframe className={styles.iframe} id="ytplayer" src={url} />
      </div>
    </div>
  );
};
