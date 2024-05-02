import { FC } from 'react';
import { PostSummary } from '@types';
import { PostLink } from './PostLink';
import { ContentLayout } from '@components/layout/ContentLayout';

interface Props {
  postList: PostSummary[];
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
              return <PostLink postSummary={post} key={post.id} />;
            })}
          </ul>
        </div>
      </ContentLayout>
    </>
  );
};
