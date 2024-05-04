import { FC } from 'react';
import { PostMetadata } from '@types';
import { PostLink } from './PostLink';
import { ContentLayout } from '@components/layout/ContentLayout';
import { SideColumn } from './SideColumn';

interface Props {
  postList: PostMetadata[];
  category?: string;
}

export const PostListPage: FC<Props> = ({ postList, category }) => {
  const headerTypography = category
    ? 'font-gentium-basic'
    : 'font-noto-sans font-thin';

  return (
    <>
      <h1 className={`mb-fb13 text-fb13 leading-none ${headerTypography}`}>
        {category || 'ARCHIVE'}
      </h1>
      <ContentLayout>
        <div className="col-span-3">
          <ul>
            {postList.map((post) => {
              return <PostLink postMetadata={post} key={post.id} />;
            })}
          </ul>
        </div>
        <SideColumn />
      </ContentLayout>
    </>
  );
};
