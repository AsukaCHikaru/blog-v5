import { PostMetadata } from '@types';
import { FC } from 'react';
import { parseDateToEn } from '@utils/dateTimeUtils';
import Link from 'next/link';

interface Props {
  postList: PostMetadata[];
}

export const ArchiveList: FC<Props> = ({ postList }) => {
  return (
    <div className="flex flex-col gap-fb3">
      {postList.map((post) => (
        <Link
          key={post.pathname}
          className="
            flex flex-col gap-fb1 interactive-color
            pb-fb2 border-b border-color last-of-type:border-none last-of-type:pb-0
            lg:pb-0 lg:border-none
          "
          href={`/blog/${post.pathname}`}
        >
          <div className="text-fb5 lg:text-fb3 font-abril leading-none text-wrap-balance">
            {post.title}
          </div>
          {post.description ? (
            <div className="text-fb3 lg:text-fb3 font-gentium-basic leading-none">
              {post.description}
            </div>
          ) : null}
          <div className="text-fb2 leading-none font-noto-sans">
            {parseDateToEn(post.publishDate)}
          </div>
        </Link>
      ))}
      <div>
        <Link href="/blog/archive" className="flex items-end lg:justify-end">
          <span className="font-noto-sans text-fb3 leading-none interactive-color">
            FULL LIST
          </span>
        </Link>
      </div>
    </div>
  );
};
