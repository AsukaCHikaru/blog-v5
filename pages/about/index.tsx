import { SectionHeader } from '@components/SectionHeader';
import { SiteHead } from '@components/SiteHead';
import { PostBodyBlock } from '@components/blog/PostBodyBlock';
import { FullContentLayout } from '@components/layout/FullContentLayout';
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
        description={SECTIONS.ABOUT.description}
      />
      <FullContentLayout>
        <div>
          {content.map((block, i) => (
            <PostBodyBlock block={block} key={i} />
          ))}
        </div>
      </FullContentLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const content = await getAboutPageContent();

  return { props: { ...content } };
};

export default AboutPage;
