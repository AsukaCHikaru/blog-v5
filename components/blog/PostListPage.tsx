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
  return (
    <>
      {category ? (
        <h1 className="mb-fb13 text-fb13 font-gentium-basic leading-none">
          {category}
        </h1>
      ) : (
        <h1 className="mb-fb13 text-fb13  font-noto-sans leading-none font-extralight">
          ARCHIVE
        </h1>
      )}
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
