import { SiteHead } from '@components/SiteHead';
import { SECTIONS } from 'consts/sections';
import { FC, useContext, useEffect } from 'react';
import { getAboutPageContent } from 'services/markdownServices';
import { AboutPage } from '@components/about/AboutPage';
import { SiteContext } from 'pages/_app';
import { Block } from '@asukawang/amp';

interface Props {
  content: Block[];
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
  const { blocks } = await getAboutPageContent();

  return { props: { content: blocks } };
};

export default About;
