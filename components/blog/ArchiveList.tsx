import { PostMetadata } from '@types';
import { FC } from 'react';
import { SideColumnHeader } from './SideColumnHeader';
import { parseDateToEn } from '@utils/dateTimeUtils';
import Link from 'next/link';

interface Props {
  postList: PostMetadata[];
}

export const ArchiveList: FC<Props> = ({ postList }) => {
  return (
    <div>
      <SideColumnHeader>ARCHIVE</SideColumnHeader>
      <div className="flex flex-col gap-fb3">
        {postList.map((post) => (
          <Link
            key={post.pathname}
            className="flex flex-col gap-fb1 interactive-color"
            href={`/blog/${post.pathname}`}
          >
            <div className="text-fb3 font-abril leading-none text-wrap-balance">
              {post.title}
            </div>
            <div className="text-fb2 leading-none font-noto-sans">
              {parseDateToEn(post.publishDate)}
            </div>
          </Link>
        ))}
        <Link href="/blog/archive" className="flex items-end justify-end">
          <span className="font-noto-sans text-fb3 leading-none interactive-color">
            FULL LIST
          </span>
        </Link>
      </div>
    </div>
  );
};
