import Link from 'next/link';
import { FC } from 'react';

interface Props {
  title: string;
  path: string;
}

export const SectionHeader: FC<Props> = ({ title, path }) => {
  return (
    <div className="mb-6 col-span-10 col-start-2 lg:col-span-9 lg:col-start-3">
      <h1 className="mb-2 text-5xl lg:text-7xl font-extrabold text-center">
        <Link href={path}>{title}</Link>
      </h1>
    </div>
  );
};
