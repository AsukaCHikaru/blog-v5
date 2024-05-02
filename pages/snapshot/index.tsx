import { SectionHeader } from '@components/SectionHeader';
import { SiteHead } from '@components/SiteHead';
import { BlockContent } from '@components/blog/PostBodyBlock';
import { FullContentLayout } from '@components/layout/FullContentLayout';
import { parseDateToEn } from '@utils/dateTimeUtils';
import { SECTIONS } from 'consts/sections';
import { FC, useMemo } from 'react';
import { getSnapshotPageContent } from 'services/markdownServices';
import { MarkdownBlock } from 'types/markdown';

interface Props {
  content: MarkdownBlock[];
}

const SnapshotPage: FC<Props> = ({ content }) => {
  const snapshotFeed = useMemo(() => {
    const map = new Map<string, MarkdownBlock[]>();
    let currentItemTimestamp: string;
    content
      .map((item) => (item.type === 'heading' ? item.children[0].text : item))
      .forEach((item) => {
        if (typeof item === 'string') {
          currentItemTimestamp = item;
          map.set(currentItemTimestamp, []);
        } else {
          map.set(currentItemTimestamp, [
            ...(map.get(currentItemTimestamp) || []),
            item,
          ]);
        }
      });
    return map;
  }, [content]);

  return (
    <>
      <SiteHead
        title={`${SECTIONS.SNAPSHOT.label} | Asuka Wang`}
        description={SECTIONS.SNAPSHOT.description}
      />
      <SectionHeader
        title={SECTIONS.SNAPSHOT.label}
        path={SECTIONS.SNAPSHOT.url}
        description={SECTIONS.SNAPSHOT.description}
      />
      <FullContentLayout>
        {Array.from(snapshotFeed.entries()).map(([timestamp, content]) => (
          <SnapshotItem item={{ timestamp, content }} key={timestamp} />
        ))}
      </FullContentLayout>
    </>
  );
};

const SnapshotItem: FC<{
  item: {
    timestamp: string;
    content: MarkdownBlock[];
  };
}> = ({ item }) => {
  const timestamp = useMemo(() => {
    const [date, time, timezone] = item.timestamp.split(' ');
    return `${time} ${timezone}, ${parseDateToEn(date)}`;
  }, [item.timestamp]);

  return (
    <div className="mb-8 pb-4 ">
      <p className="mb-2 text-xl">
        {item.content.map((block, i) => (
          <BlockContent key={i} block={block} />
        ))}
      </p>
      <span className="text-secondDark dark:text-secondLight">{timestamp}</span>
    </div>
  );
};

export const getStaticProps = async () => {
  const content = await getSnapshotPageContent();

  return { props: { ...content } };
};

export default SnapshotPage;
