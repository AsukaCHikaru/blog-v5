import { FC } from 'react';
import { RichTextItem } from './PostBodyBlock';
import { Blockquote } from 'mdast';

export const QuoteBlock: FC<{ block: Blockquote }> = ({ block }) => {
  if (block.children[0].type !== 'paragraph') {
    return <span>FIXME</span>;
  }

  return (
    <div className="my-8 text-center whitespace-pre-wrap text-secondDark dark:text-secondLight text-wrap-balance">
      <span className="relative">
        <span className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 text-3xl">
          &ldquo;
        </span>
        {block.children[0].children.map((item, i) => (
          <RichTextItem item={item} key={i} />
        ))}
        <span className="absolute bottom-0 right-0 transform translate-x-4 translate-y-8 text-3xl">
          &rdquo;
        </span>
      </span>
    </div>
  );
};
