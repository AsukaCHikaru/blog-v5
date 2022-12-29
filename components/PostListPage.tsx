import Head from "next/head";
import { FC } from "react";

import { PostSummary } from "../types";
import { Footer } from "./Footer";
import { Layout } from "./Layout";
import { PostLink } from "./PostLink";
import { PostListPageHeader } from "./PostListPageHeader";

interface Props {
  postSummaryList: PostSummary[];
}

export const PostListPage: FC<Props> = ({ postSummaryList }) => {
  return (
    <>
    <Head>
      <title>The work is undone.</title>
      <meta name="description" content="asukachikaru's blog"/>
      <meta property="og:title" content="The work is undone." />
      <meta property="twitter:title" content="The work is undone." />
    </Head>
    <Layout>
      <PostListPageHeader />
      <div>
        {postSummaryList.map((postSummary) => {
          return <PostLink postSummary={postSummary} key={postSummary.id} />;
        })}
      </div>
      <Footer />
    </Layout>
    </>
  );
};
