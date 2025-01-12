import { FC } from 'react';
import { CodeBlock } from './CodeBlock';
import Image from 'next/image';
import { YoutubeBlock } from './YoutubeBlock';
import { QuoteBlock } from './QuoteBlock';
import styles from '@styles/blog/PostBodyBlock.module.css';
import { convertHeaderLabelToId } from '@utils/blogUtils';
import { MarkdownBlock, TextBlock } from '@utils/markdownUtils';
import { D2FigureBlock } from './D2FigureBlock';

interface Props {
  block: MarkdownBlock;
}

export const PostBodyBlock: FC<Props> = ({ block }) => {
  return (
    <div className={styles.wrapper}>
      <BlockContent block={block} />
    </div>
  );
};

export const BlockContent: FC<Props> = ({ block }) => {
  switch (block.type) {
    case 'paragraph':
      return (
        <>
          {block.children.map((child, i) => (
            <RichTextItem key={i} item={child} />
          ))}
        </>
      );

    case 'image':
      if (/youtube\.com/.test(block.url) || /youtu\.be/.test(block.url)) {
        return <YoutubeBlock item={block} />;
      }
      return (
        <figure>
          <Image
            src={'/images/' + block.url}
            alt={block.alt || ''}
            width={600}
            height={400}
            className={styles.image}
          />
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
      switch (block.depth) {
        case 1:
          return (
            <h2 className={styles.h2} id={convertHeaderLabelToId(block)}>
              {block.children.map((child, i) => (
                <RichTextItem key={i} item={child} />
              ))}
            </h2>
          );
        case 2:
          return (
            <h3 className={styles.h3} id={convertHeaderLabelToId(block)}>
              {block.children.map((child, i) => (
                <RichTextItem key={i} item={child} />
              ))}
            </h3>
          );
        case 3:
          return (
            <h4 className={styles.h4} id={convertHeaderLabelToId(block)}>
              {block.children.map((child, i) => (
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
            {block.children.map((child, i) => (
              <li key={i}>
                {child.children.map((child) => (
                  <RichTextItem key={i} item={child} />
                ))}
              </li>
            ))}
          </ol>
        );
      } else {
        return (
          <ul className={styles.ul}>
            {block.children.map((child, i) => (
              <li key={i}>
                {child.children.map((child) => (
                  <RichTextItem key={i} item={child} />
                ))}
              </li>
            ))}
          </ul>
        );
      }

    case 'code':
      return <CodeBlock lan={block.lang}>{block.text}</CodeBlock>;

    case 'quote':
      return <QuoteBlock block={block} />;

    case 'thematicBreak':
      return <hr className={`${styles.br} border-color`} />;

    default:
      return null;
  }
};

interface RichTextItemProps {
  item: TextBlock;
}

export const RichTextItem: FC<RichTextItemProps> = ({ item }) => {
  switch (item.type) {
    case 'plain':
      if (item.text.startsWith('::d2')) {
        return <D2FigureBlock>{item.text}</D2FigureBlock>;
      }
      return <>{item.text}</>;

    case 'link':
      return (
        <a
          href={item.url}
          className={styles.link}
          rel="noreferrer noopener"
          target="_blank"
        >
          {item.text}
        </a>
      );

    case 'strong':
      return <strong>{item.text}</strong>;

    case 'italic':
      return <em>{item.text}</em>;

    case 'inlineCode':
      return <code className={styles['inline-code']}>{item.text}</code>;

    // TODO: strikethrough (need remark GFM plugin)
    default:
      return <span>FIXME</span>;
  }
};
