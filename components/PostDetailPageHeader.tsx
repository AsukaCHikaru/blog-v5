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
        <span className={`inline-block h-6 leading-6 mr-2 pr-2 ${!!postSummary.tags.length }`}>
        {parseDateToEn(postSummary.publishDate)}
        </span>
      </div>
    </div>
  );
};
