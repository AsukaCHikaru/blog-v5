import Link from "next/link";
import { FC } from "react";

import { PostSummary } from "../types";
import { parseDateToEn } from "../utils/dateTimeUtils";

interface Props {
  postSummary: PostSummary;
}

export const PostLink: FC<Props> = ({ postSummary }) => {
  return (
    <div className="mt-2">
      <h3 className="text-4xl">
        <Link href={`/post/${postSummary.pathname}`}>{postSummary.title}</Link>
      </h3>
      <div>{parseDateToEn(postSummary.publishDate)}</div>
      <div>
        {postSummary.tags.map((tag) => (
          <span className="mr-2" key={`${postSummary.id}-${tag}`}>
            <Link href={`/tag/${tag}`}>#{tag}</Link>
          </span>
        ))}
      </div>
    </div>
  );
};
