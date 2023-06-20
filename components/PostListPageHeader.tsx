import { FC } from 'react';
import Link from 'next/link';

export const PostListPageHeader: FC = () => {
  return (
    <div className="my-12 col-span-10 col-start-2 lg:col-span-9 lg:col-start-3">
      <h1 className="mb-2 text-6xl font-extrabold">
        <Link href="/">The work is undone.</Link>
      </h1>
      <div className="flex  font-courier text-lg">
        <a
          href="https://asukachikaru.com"
          rel="noreferrer noopener"
          target="_blank"
          className="underline"
        >
          asukachikaru
        </a>
        {"'s blog"}
      </div>
    </div>
  );
};
