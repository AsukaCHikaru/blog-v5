import React, { FC } from "react";
import { PostSummary } from "../../types";

interface Props {
  postSummary: PostSummary;
}

export const PostDetailPageHeader: FC<Props> = ({ postSummary }) => {
  return (
    <div>
      {postSummary.title}
      <div>{postSummary.publishDate}</div>
      <div>
        {/** TODO: use link */}
        {postSummary.tags.map((tag) => (
          <span key={`tag-${tag}`}>{tag}</span>
        ))}
      </div>
    </div>
  );
};
