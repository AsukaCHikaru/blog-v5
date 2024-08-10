import { PostBodyBlock } from '@components/blog/PostBodyBlock';
import { TableOfContentColumn } from '@components/blog/TableOfContentColumn';
import {
  FullContent,
  MainContent,
  RightPanel,
} from '@components/layout/Layout';
import { isHeadingBlock } from '@utils/markdownUtils';
import { MarkdownBlock } from 'types/markdown';
import styles from '@styles/about/AboutPage.module.css';

export const AboutPage = ({ content }: { content: MarkdownBlock[] }) => {
  const headers = content.filter(isHeadingBlock);

  return (
    <>
      <FullContent>
        <div className={styles['header-wrapper']}>
          <h1 className={styles.header}>About</h1>
        </div>
      </FullContent>
      <MainContent>
        {content.map((block, i) => (
          <PostBodyBlock block={block} key={i} />
        ))}
      </MainContent>
      <RightPanel>
        <TableOfContentColumn list={headers} />
      </RightPanel>
    </>
  );
};
