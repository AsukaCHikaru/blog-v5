import Link from 'next/link';
import { FC } from 'react';

import { PostMetadata } from '@types';
import { parseDateToEn } from '@utils/dateTimeUtils';

interface Props {
  postMetadata: PostMetadata;
}

export const PostLink: FC<Props> = ({ postMetadata }) => {
  return (
    <li className="flex flex-col gap-fb1 lg:gap-fb2 mt-fb5 lg:mt-fb8 first-of-type:mt-0 interactive-color">
      <div className="font-abril text-fb5 lg:text-fb8 leading-none">
        <Link href={`/blog/${postMetadata.pathname}`}>
          {postMetadata.title}
        </Link>
      </div>
      {postMetadata.description ? (
        <div className="font-gentium-basic text-fb3 lg:text-[28px] leading-tight">
          {postMetadata.description}
        </div>
      ) : null}
      <div className="">
        <span className="font-noto-sans text-fb2 lg:text-fb3 leading-none">
          {parseDateToEn(postMetadata.publishDate)}
        </span>
      </div>
    </li>
  );
};
