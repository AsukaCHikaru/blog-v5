import Head from 'next/head';
import { FC } from 'react';

interface Props {
  title: string;
  description: string;
}

export const SiteHead: FC<Props> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="twitter:title" content={title} />
    </Head>
  );
};
