import { SectionHeader } from '@components/SectionHeader';
import { SiteHead } from '@components/SiteHead';
import { SiteHeader } from '@components/SiteHeader';
import { PostBodyBlock } from '@components/blog/PostBodyBlock';
import { GridLayout } from '@components/blog/layout/GridLayout';
import { MainContentLayout } from '@components/blog/layout/MainContentLayout';
import { ThemeLayout } from '@components/blog/layout/ThemeLayout';
import { Content } from 'mdast';
import { FC } from 'react';
import { getAboutPageContent } from 'services/markdownServices';

interface Props {
  content: Content[];
}

export const AboutPage: FC<Props> = ({ content }) => {
  return (
    <>
      <SiteHead
        title="About | Asuka Wang"
        description="Introduction about me and this site."
      />
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
  const content = await getAboutPageContent();

  return { props: { ...content } };
};

export default AboutPage;
