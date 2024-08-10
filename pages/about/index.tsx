import { SiteHead } from '@components/SiteHead';
import { SECTIONS } from 'consts/sections';
import { FC } from 'react';
import { getAboutPageContent } from 'services/markdownServices';
import { MarkdownBlock } from 'types/markdown';
import { AboutPage } from '@components/about/AboutPage';

interface Props {
  content: MarkdownBlock[];
}

export const About: FC<Props> = ({ content }) => {
  return (
    <>
      <SiteHead
        title={`${SECTIONS.ABOUT.label} | Asuka Wang`}
        description={SECTIONS.ABOUT.description}
      />
      <AboutPage content={content} />
    </>
  );
};

export const getStaticProps = async () => {
  const content = await getAboutPageContent();

  return { props: { ...content } };
};

export default About;
