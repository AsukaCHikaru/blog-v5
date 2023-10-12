import { FC } from 'react';
import { QuoteBlock as QuoteBlockType } from 'types/markdown';
import { RichTextItem } from './PostBodyBlock';

export const QuoteBlock: FC<{ block: QuoteBlockType }> = ({ block }) => {
  return (
    <div className="my-8 text-center whitespace-pre-wrap text-secondDark dark:text-secondLight text-wrap-balance">
      <span className="relative">
        <span className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 text-3xl">
          &ldquo;
        </span>
        {block.children.map((item, i) => (
          <RichTextItem item={item} key={i} />
        ))}
        <span className="absolute bottom-0 right-0 transform translate-x-4 translate-y-8 text-3xl">
          &rdquo;
        </span>
      </span>
    </div>
  );
};
