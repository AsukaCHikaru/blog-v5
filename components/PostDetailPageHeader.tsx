import Link from "next/link";
import { FC } from "react";

import { PostSummary } from "../types";
import { parseDateToEn } from "../utils/dateTimeUtils";

interface Props {
  postSummary: PostSummary;
}

export const PostDetailPageHeader: FC<Props> = ({ postSummary }) => {
  return (
    <div>
      <h1>{postSummary.title}</h1>
      <div>{parseDateToEn(postSummary.publishDate)}</div>
      <div>
        {postSummary.tags.map((tag) => {
          return (
            <span key={`${postSummary.id}-tag-${tag}`}>
              <Link href={`/tag/${tag}`}>#{tag}</Link>
            </span>
          );
        })}
      </div>
    </div>
  );
};
