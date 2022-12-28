import Link from "next/link";
import { FC } from "react";

import { PostSummary } from "../types";
import { parseDateToEn } from "../utils/dateTimeUtils";

interface Props {
  postSummary: PostSummary;
}

export const PostDetailPageHeader: FC<Props> = ({ postSummary }) => {
  return (
    <div className="mt-8 mb-4">
      <h1 className="mb-2 text-5xl font-semibold">{postSummary.title}</h1>
      <div className="text-xl">{parseDateToEn(postSummary.publishDate)}</div>
      <div>
        {postSummary.tags.map((tag) => {
          return (
            <span className="mr-2 text-lg" key={`${postSummary.id}-tag-${tag}`}>
              <Link href={`/tag/${tag}`}>#{tag}</Link>
            </span>
          );
        })}
      </div>
    </div>
  );
};
