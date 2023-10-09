import { SectionHeader } from '@components/SectionHeader';
import { SiteHeader } from '@components/SiteHeader';
import { BlockContent } from '@components/blog/PostBodyBlock';
import { GridLayout } from '@components/blog/layout/GridLayout';
import { MainContentLayout } from '@components/blog/layout/MainContentLayout';
import { ThemeLayout } from '@components/blog/layout/ThemeLayout';
import { parseDateToEn } from '@utils/dateTimeUtils';
import { Content } from 'mdast';
import Head from 'next/head';
import { FC, useMemo } from 'react';
import { getSnapshotPageContent } from 'services/markdownServices';

interface Props {
  content: Content[];
}

const SnapshotPage: FC<Props> = ({ content }) => {
  const snapshotFeed = useMemo(() => {
    const map = new Map<string, Content[]>();
    let currentItemTimestamp: string;
    content
      .slice(1)
      .map((item) =>
        item.type === 'heading' && item.children[0].type === 'text'
          ? item.children[0].value
          : item,
      )
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
      <Head>
        <title>Snapshot | Asuka Wang</title>
        <meta
          name="description"
          content="Raw, unorganized thoughts and ideas."
        />
        <meta property="og:title" content="Snapshot | Asuka Wang" />
        <meta property="twitter:title" content="Snapshot | Asuka Wang" />
      </Head>
      <ThemeLayout>
        <GridLayout>
          <SiteHeader />
          <SectionHeader title="SNAPSHOT" path="/snapshot" />
          <MainContentLayout>
            {Array.from(snapshotFeed.entries()).map(([timestamp, content]) => (
              <SnapshotItem item={{ timestamp, content }} key={timestamp} />
            ))}
          </MainContentLayout>
        </GridLayout>
      </ThemeLayout>
    </>
  );
};

const SnapshotItem: FC<{
  item: {
    timestamp: string;
    content: Content[];
  };
}> = ({ item }) => {
  const timestamp = useMemo(() => {
    const [date, time, timezone] = item.timestamp.split(' ');
    return `${time} ${timezone}, ${parseDateToEn(date)}`;
  }, [item.timestamp]);

  return (
    <div className="mb-8 pb-4 ">
      <div className="mb-2">
        {item.content.map((block, i) => (
          <p key={i} className="text-xl">
            <BlockContent block={block} />
          </p>
        ))}
      </div>
      <span className="text-gray-400">{timestamp}</span>
    </div>
  );
};

export const getStaticProps = async () => {
  const content = await getSnapshotPageContent();

  return { props: { ...content } };
};

export default SnapshotPage;
