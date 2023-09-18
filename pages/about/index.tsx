import { SiteHeader } from '@components/SiteHeader';
import { PostBodyBlock } from '@components/blog/PostBodyBlock';
import { GridLayout } from '@components/blog/layout/GridLayout';
import { MainContentLayout } from '@components/blog/layout/MainContentLayout';
import { Content } from 'mdast';
import { FC } from 'react';
import { GetAboutPageContent } from 'services/markdownServices';

interface Props {
  content: Content[];
}

export const AboutPage: FC<Props> = ({ content }) => {
  return (
    <GridLayout>
      <SiteHeader />
      <MainContentLayout>
        <h1>ABOUT</h1>
        <div>
          {content.map((block, i) => (
            <PostBodyBlock block={block} key={i} />
          ))}
        </div>
      </MainContentLayout>
    </GridLayout>
  );
};

export const getStaticProps = async () => {
  const content = await GetAboutPageContent();

  return { props: { ...content } };
};

export default AboutPage;
