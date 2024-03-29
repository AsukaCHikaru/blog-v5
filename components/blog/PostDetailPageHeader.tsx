import { FC } from 'react';

import { PostSummary } from '@types';
import { parseDateToEn } from '@utils/dateTimeUtils';

interface Props {
  postSummary: PostSummary;
}

export const PostDetailPageHeader: FC<Props> = ({ postSummary }) => {
  return (
    <div className="mb-6 col-span-10 col-start-2 lg:col-span-8 lg:col-start-3 text-center">
      <h1 className="mb-2 text-4xl lg:text-6xl lg:leading-tight font-extrabold">
        {postSummary.title}
      </h1>
      <div className="text-md lg:text-xl">
        <span className={`inline-block mr-2 pr-2 ${!!postSummary.tags.length}`}>
          {parseDateToEn(postSummary.publishDate)}
        </span>
      </div>
    </div>
  );
};
