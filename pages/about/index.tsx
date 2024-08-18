import { SiteHead } from '@components/SiteHead';
import { SECTIONS } from 'consts/sections';
import { FC, useContext, useEffect } from 'react';
import { getAboutPageContent } from 'services/markdownServices';
import { AboutPage } from '@components/about/AboutPage';
import { SiteContext } from 'pages/_app';
import { MarkdownBlock } from '@utils/markdownUtils';

interface Props {
  content: MarkdownBlock[];
}

export const About: FC<Props> = ({ content }) => {
  const context = useContext(SiteContext);

  useEffect(() => {
    if (!context) {
      return;
    }
    context.activeSection = 'about';
  }, [context]);

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
