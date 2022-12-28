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
      <h1 className="mb-2 text-6xl font-semibold">{postSummary.title}</h1>
      <div className="text-xl">
        <span className={`inline-block h-6 leading-6 mr-2 pr-2 ${!!postSummary.tags.length && 'border-r'}`}>

        {parseDateToEn(postSummary.publishDate)}
        </span>
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
