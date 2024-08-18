import { FC } from 'react';
import { RichTextItem } from './PostBodyBlock';
import styles from '@styles/blog/QuoteBlock.module.css';
import { QuoteBlock as QuoteBlockType } from '@utils/markdownUtils';

export const QuoteBlock: FC<{ block: QuoteBlockType }> = ({ block }) => {
  return (
    <div className={`${styles.container} text-color-second`}>
      <span className={styles.wrapper}>
        <span className={styles['quote-mark-start']}>&ldquo;</span>
        {block.children.map((item, i) => (
          <RichTextItem item={item} key={i} />
        ))}
        <span className={styles['quote-mark-end']}>&rdquo;</span>
      </span>
    </div>
  );
};
