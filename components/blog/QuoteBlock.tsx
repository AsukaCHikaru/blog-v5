import { FC } from 'react';
import { RichTextItem } from './PostBodyBlock';
import styles from '@styles/blog/QuoteBlock.module.css';
import { QuoteBlock as QuoteBlockType } from '@utils/markdownUtils';

export const QuoteBlock: FC<{ block: QuoteBlockType }> = ({ block }) => (
  <blockquote className={`${styles.quoteblock} text-color-second`}>
    {block.children.map((item, i) => (
      <p key={i}>
        <RichTextItem item={item} key={i} />
      </p>
    ))}
  </blockquote>
);
