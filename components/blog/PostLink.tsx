import Link from 'next/link';
import { FC } from 'react';

import { PostSummary } from '../../types';
import { parseDateToEn } from '../../utils/dateTimeUtils';

interface Props {
  postSummary: PostSummary;
}

export const PostLink: FC<Props> = ({ postSummary }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl lg:text-4xl mb-1 font-medium hover:underline text-wrap-balance leading-6 lg:leading-[3rem]">
        <Link href={`/post/${postSummary.pathname}`}>{postSummary.title}</Link>
      </h3>
      <div className="mb-1">
        <span
          className={`inline-block h-5 text-sm lg:text-lg leading-5 mr-2 pr-2 ${!!postSummary
            .tags.length}`}
        >
          {parseDateToEn(postSummary.publishDate)}
        </span>
      </div>
    </div>
  );
};
