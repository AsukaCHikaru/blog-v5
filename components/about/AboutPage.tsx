import { Block } from '@asukawang/amp';
import { PostBodyBlock } from '@components/blog/PostBodyBlock';
import { FullContent, MainContent } from '@components/layout/Layout';
import styles from '@styles/about/AboutPage.module.css';

export const AboutPage = ({ content }: { content: Block[] }) => (
  <>
    <FullContent>
      <div className={styles['header-wrapper']}>
        <h1 className={styles.header}>About</h1>
      </div>
    </FullContent>
    <MainContent>
      <article className={styles.article}>
        {content.map((block, i) => (
          <PostBodyBlock block={block} key={i} />
        ))}
      </article>
    </MainContent>
  </>
);
