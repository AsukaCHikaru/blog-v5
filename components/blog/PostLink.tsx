import Link from 'next/link';
import { FC } from 'react';

import { PostSummary } from '@types';
import { parseDateToEn } from '@utils/dateTimeUtils';

interface Props {
  postSummary: PostSummary;
}

export const PostLink: FC<Props> = ({ postSummary }) => {
  return (
    <li className="flex flex-col gap-fb2 mt-fb8 first-of-type:mt-0">
      <div className="font-abril text-fb8 leading-none">
        <Link href={`/blog/${postSummary.pathname}`}>{postSummary.title}</Link>
      </div>
      <div className="font-gentium-basic text-fb5 leading-none">
        TODO: Description
      </div>
      <div className="">
        <span className="font-noto-sans text-fb3 leading-none">
          {parseDateToEn(postSummary.publishDate)}
        </span>
      </div>
    </li>
  );
};
