import { SectionHeader } from '@components/SectionHeader';
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
      <SectionHeader title="ABOUT" path="/about" />
      <MainContentLayout>
        <div>
          {content.slice(1).map((block, i) => (
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
