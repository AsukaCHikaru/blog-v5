import Link from 'next/link';
import { FC } from 'react';

export const PostListPageHeader: FC = () => {
  return (
    <div className="mb-6 col-span-10 col-start-2 lg:col-span-9 lg:col-start-3">
      <h1 className="mb-2 text-5xl lg:text-7xl font-extrabold text-center">
        <Link href="/">BLOG</Link>
      </h1>
      <div>TODO: blog description</div>
    </div>
  );
};
