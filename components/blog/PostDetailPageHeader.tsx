import { FC } from 'react';

import { PostSummary } from '@types';
import { parseDateToEn } from '@utils/dateTimeUtils';

interface Props {
  postSummary: PostSummary;
}

export const PostDetailPageHeader: FC<Props> = ({ postSummary }) => {
  return (
    <div className="flex flex-col gap-fb3 mb-fb5">
      <h1 className="text-fb11 font-abril leading-none">
        {postSummary.title.toUpperCase()}
      </h1>
      <h2 className="text-fb5 italic font-gentium-basic">TODO: Post Description Things I learned in my first Godot project</h2>
      <div className="text-fb3 font-noto-sans">{parseDateToEn(postSummary.publishDate)}</div>
    </div>
  );
};
