import { FC } from 'react';

import { PostMetadata } from '@types';
import { parseDateToEn } from '@utils/dateTimeUtils';

interface Props {
  postMetadata: PostMetadata;
}

export const PostDetailPageHeader: FC<Props> = ({ postMetadata }) => {
  return (
    <div className="flex flex-col gap-fb1 mb-fb8">
      <h1 className="text-fb13 font-abril leading-none">
        {postMetadata.title.toUpperCase()}
      </h1>
      {postMetadata.description ? (
        <h2 className="text-fb5 italic font-gentium-basic leading-tight">
          {postMetadata.description}
        </h2>
      ) : null}
      <div className="text-fb3 font-noto-sans">
        {parseDateToEn(postMetadata.publishDate)}
      </div>
    </div>
  );
};
