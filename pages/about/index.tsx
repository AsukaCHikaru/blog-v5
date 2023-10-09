import { SectionHeader } from '@components/SectionHeader';
import { SiteHeader } from '@components/SiteHeader';
import { PostBodyBlock } from '@components/blog/PostBodyBlock';
import { GridLayout } from '@components/blog/layout/GridLayout';
import { MainContentLayout } from '@components/blog/layout/MainContentLayout';
import { ThemeLayout } from '@components/blog/layout/ThemeLayout';
import { Content } from 'mdast';
import Head from 'next/head';
import { FC } from 'react';
import { GetAboutPageContent } from 'services/markdownServices';

interface Props {
  content: Content[];
}

export const AboutPage: FC<Props> = ({ content }) => {
  return (
    <>
      <Head>
        <title>About | Asuka Wang</title>
        <meta
          name="description"
          content="Introduction about me and this site."
        />
        <meta property="og:title" content="About | Asuka Wang" />
        <meta property="twitter:title" content="About | Asuka Wang" />
      </Head>
      <ThemeLayout>
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
      </ThemeLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const content = await GetAboutPageContent();

  return { props: { ...content } };
};

export default AboutPage;
