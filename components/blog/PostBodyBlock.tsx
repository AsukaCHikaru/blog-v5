import { FC } from 'react';
import { CodeBlock } from './CodeBlock';
import Image from 'next/image';
import { YoutubeBlock } from './YoutubeBlock';
import { QuoteBlock } from './QuoteBlock';
import { getImageSnapshotUrl, isImageSnapshot } from '@utils/stringUtils';
import { MarkdownBlock, TextBlock } from 'types/markdown';

interface Props {
  block: MarkdownBlock;
}

export const PostBodyBlock: FC<Props> = ({ block }) => {
  return (
    <div className="mb-6 text-lg lg:text-xl lg:leading-8 last:mb-0">
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
        <>
          <Image
            src={'/images/' + block.url}
            alt={block.alt || ''}
            width={600}
            height={400}
            className="m-auto"
          />
          <span className="flex justify-center text-secondDark dark:text-secondLight text-lg">
            {block.caption}
          </span>
        </>
      );

    case 'heading':
      switch (block.depth) {
        case 1:
          return (
            <h2
              className="mt-8 text-2xl lg:text-4xl font-semibold"
              id={block.children
                .map((item) => item.text)
                .join('-')
                .replace(/\s/g, '-')}
            >
              {block.children.map((child, i) => (
                <RichTextItem key={i} item={child} />
              ))}
            </h2>
          );
        case 2:
          return (
            <h3
              className="mt-8 text-xl lg:text-3xl font-semibold"
              id={block.children
                .map((item) => item.text)
                .join('-')
                .replace(/\s/g, '-')}
            >
              {block.children.map((child, i) => (
                <RichTextItem key={i} item={child} />
              ))}
            </h3>
          );
        case 3:
          return (
            <h4
              className="mt-8 text-lg lg:text-2xl font-semibold"
              id={block.children
                .map((item) => item.text)
                .join('-')
                .replace(/\s/g, '-')}
            >
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
          <ol className="list-decimal list-inside mx-8">
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
          <ul className="list-disc list-inside mx-8">
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
      return (
        <hr className="my-16 w-80 mx-auto border-secondDark dark:border-secondLight" />
      );

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
      if (isImageSnapshot(item.text)) {
        return (
          <Image
            className="mx-auto px-4 py-2"
            src={getImageSnapshotUrl(item.text)}
            alt="" // TODO
            width={500}
            height={500}
          />
        );
      }

      return <span>{item.text}</span>;

    case 'link':
      return (
        <a
          href={item.url}
          className="text-blue-400 underline"
          rel="noreferrer noopener"
          target="_blank"
        >
          {item.text}
        </a>
      );

    case 'strong':
      return <strong>{item.text}</strong>;

    case 'italic':
      return <span className="italic">{item.text}</span>;

    case 'inlineCode':
      return (
        <code className="px-1 font-courier text-gray-300 bg-gray-700 rounded-sm">
          {item.text}
        </code>
      );

    // TODO: strikethrough (need remark GFM plugin)
    default:
      return <span>FIXME</span>;
  }
};
