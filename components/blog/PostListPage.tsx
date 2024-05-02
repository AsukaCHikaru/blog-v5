import { FC } from 'react';
import { PostMetadata } from '@types';
import { PostLink } from './PostLink';
import { ContentLayout } from '@components/layout/ContentLayout';
import { SideColumn } from './SideColumn';

interface Props {
  postList: PostMetadata[];
}

export const PostListPage: FC<Props> = ({ postList }) => {
  return (
    <>
      <h1 className="text-fb13 leading-none mb-fb13 font-noto-sans font-extralight">
        ARCHIVE
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
