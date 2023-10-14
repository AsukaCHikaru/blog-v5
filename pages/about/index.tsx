import { SectionHeader } from '@components/SectionHeader';
import { SiteHead } from '@components/SiteHead';
import { PostBodyBlock } from '@components/blog/PostBodyBlock';
import { MainContentLayout } from '@components/blog/layout/MainContentLayout';
import { SECTIONS } from 'consts/sections';
import { FC } from 'react';
import { getAboutPageContent } from 'services/markdownServices';
import { MarkdownBlock } from 'types/markdown';

interface Props {
  content: MarkdownBlock[];
}

export const AboutPage: FC<Props> = ({ content }) => {
  return (
    <>
      <SiteHead
        title={`${SECTIONS.ABOUT.title} | Asuka Wang`}
        description={SECTIONS.ABOUT.description}
      />
      <SectionHeader
        title={SECTIONS.ABOUT.title}
        path={SECTIONS.ABOUT.path}
        description={SECTIONS.ABOUT.description.toUpperCase()}
      />
      <MainContentLayout>
        <div>
          {content.slice(1).map((block, i) => (
            <PostBodyBlock block={block} key={i} />
          ))}
        </div>
      </MainContentLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const content = await getAboutPageContent();

  return { props: { ...content } };
};

export default AboutPage;
