import { FC } from 'react';
import { CodeBlock } from './CodeBlock';
import Image from 'next/image';
import { YoutubeBlock } from './YoutubeBlock';
import { QuoteBlock } from './QuoteBlock';
import styles from '@styles/blog/PostBodyBlock.module.css';
import { convertHeaderLabelToId } from '@utils/blogUtils';
import { D2FigureBlock } from './D2FigureBlock';
import { Block, Link, TextBody } from '@asukawang/amp';

interface Props {
  block: Block;
}

export const PostBodyBlock: FC<Props> = ({ block }) => (
  <BlockContent block={block} />
);

const BlockContent: FC<Props> = ({ block }) => {
  switch (block.type) {
    case 'paragraph':
      return (
        <p>
          {block.body.map((child, i) => (
            <RichTextItem key={i} item={child} />
          ))}
        </p>
      );

    case 'image':
      if (/youtube\.com/.test(block.url) || /youtu\.be/.test(block.url)) {
        return <YoutubeBlock item={block} />;
      }

      return (
        <figure className={styles.figure}>
          {block.url.endsWith('.mp4') ? (
            <video
              src={'/images/' + block.url}
              controls={false}
              autoPlay={true}
              loop={true}
              muted={true}
              className={styles.video}
              playsInline={true}
            />
          ) : (
            <Image
              src={'/images/' + block.url}
              alt={block.altText || ''}
              width={600}
              height={400}
              className={styles.image}
            />
          )}
          {block.caption ? (
            <figcaption
              className={`${styles['image-caption']} text-color-second`}
            >
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );

    case 'heading':
      switch (block.level) {
        case 1:
          return (
            <h2 className={styles.h2} id={convertHeaderLabelToId(block)}>
              {block.body.map((child, i) => (
                <RichTextItem key={i} item={child} />
              ))}
            </h2>
          );
        case 2:
          return (
            <h3 className={styles.h3} id={convertHeaderLabelToId(block)}>
              {block.body.map((child, i) => (
                <RichTextItem key={i} item={child} />
              ))}
            </h3>
          );
        case 3:
          return (
            <h4 className={styles.h4} id={convertHeaderLabelToId(block)}>
              {block.body.map((child, i) => (
                <RichTextItem key={i} item={child} />
              ))}
            </h4>
          );
        default:
          return null;
      }

    case 'list':
      if (block.ordered) {
        return (
          <ol className={styles.ol}>
            {block.items.map((child, i) => (
              <li key={i}>
                {child.body.map((child) => (
                  <RichTextItem key={i} item={child} />
                ))}
              </li>
            ))}
          </ol>
        );
      } else {
        return (
          <ul className={styles.ul}>
            {block.items.map((child, i) => (
              <li key={i}>
                {child.body.map((child) => (
                  <RichTextItem key={i} item={child} />
                ))}
              </li>
            ))}
          </ul>
        );
      }

    case 'code':
      return <CodeBlock lan={block.lang}>{block.body}</CodeBlock>;

    case 'quote':
      return <QuoteBlock block={block} />;

    case 'thematicBreak':
      return <hr className={`${styles.br} border-color`} />;

    default:
      return null;
  }
};

interface RichTextItemProps {
  item: TextBody | Link;
}

export const RichTextItem: FC<RichTextItemProps> = ({ item }) => {
  switch (item.type) {
    case 'link':
      return (
        <a
          href={item.url}
          className={styles.link}
          rel={item.url.startsWith('/') ? undefined : 'noreferrer noopener'}
          target={item.url.startsWith('/') ? undefined : '_blank'}
        >
          {item.body.map((child, i) => (
            <RichTextItem key={i} item={child} />
          ))}
        </a>
      );
    case 'textBody':
      switch (item.style) {
        case 'plain':
          if (item.value.startsWith('::d2')) {
            return <D2FigureBlock>{item.value}</D2FigureBlock>;
          }
          return <>{item.value}</>;
        case 'strong':
          return <strong>{item.value}</strong>;
        case 'italic':
          return <em>{item.value}</em>;
        case 'code':
          return <code className={styles['inline-code']}>{item.value}</code>;
        default:
          throw new Error(`Invalid text style ${item.style satisfies never}`);
      }
    default:
      throw new Error(`Invalid block type`);
  }
};
