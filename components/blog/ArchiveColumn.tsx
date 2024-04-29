import { PostSummary } from '@types';
import { FC } from 'react';
import { SideColumnHeader } from './SideColumnHeader';
import { parseDateToEn } from '@utils/dateTimeUtils';

interface Props {
  postList: PostSummary[];
}

export const ArchiveColumn: FC<Props> = ({ postList }) => {
  return (
    <div>
      <SideColumnHeader>ARCHIVE</SideColumnHeader>
      <div className="flex flex-col gap-fb3">
        {postList.map((post) => (
          <div key={post.pathname} className="flex flex-col gap-fb1">
            <div className="text-fb3 leading-tight">{post.title}</div>
            <div className="text-fb2 leading-none font-noto-sans">
              {parseDateToEn(post.publishDate)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
