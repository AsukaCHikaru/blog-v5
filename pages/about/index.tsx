import { SectionHeader } from '@components/SectionHeader';
import { SiteHead } from '@components/SiteHead';
import { SiteHeader } from '@components/SiteHeader';
import { PostBodyBlock } from '@components/blog/PostBodyBlock';
import { GridLayout } from '@components/blog/layout/GridLayout';
import { MainContentLayout } from '@components/blog/layout/MainContentLayout';
import { ThemeLayout } from '@components/blog/layout/ThemeLayout';
import { SECTIONS } from 'consts/sections';
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
        title={`${SECTIONS.ABOUT.title} | Asuka Wang`}
        description={SECTIONS.ABOUT.description}
      />
      <ThemeLayout>
        <GridLayout>
          <SiteHeader />
          <SectionHeader
            title={SECTIONS.ABOUT.title}
            path={SECTIONS.ABOUT.path}
          />
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
