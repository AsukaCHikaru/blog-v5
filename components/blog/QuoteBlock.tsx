import { FC } from 'react';
import { RichTextItem } from './PostBodyBlock';
import styles from '@styles/blog/QuoteBlock.module.css';
import { QuoteBlock as QuoteBlockType } from '@asukawang/amp';

export const QuoteBlock: FC<{ block: QuoteBlockType }> = ({ block }) => (
  <blockquote className={`${styles.quoteblock} text-color-second`}>
    {block.body.map((item, i) => (
      <span key={i}>
        <RichTextItem item={item} />
      </span>
    ))}
  </blockquote>
);
