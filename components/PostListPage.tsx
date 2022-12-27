import { FC } from "react";

import { PostSummary } from "../types";
import { Footer } from "./Footer";
import { PostLink } from "./PostLink";
import { PostListPageHeader } from "./PostListPageHeader";

interface Props {
  postSummaryList: PostSummary[];
}

export const PostListPage: FC<Props> = ({ postSummaryList }) => {
  return (
    <>
      <PostListPageHeader />
      <div>
        {postSummaryList.map((postSummary) => {
          return <PostLink postSummary={postSummary} key={postSummary.id} />;
        })}
      </div>
      <Footer />
    </>
  );
};
