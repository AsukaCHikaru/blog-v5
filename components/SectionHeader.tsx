import Link from 'next/link';
import { FC } from 'react';

interface Props {
  title: string;
  path: string;
  description: string;
}

export const SectionHeader: FC<Props> = ({ title, path, description }) => {
  return (
    <div className="mb-8 col-span-10 col-start-2 lg:col-span-8 lg:col-start-3">
      <h1 className="mb-2 text-5xl lg:text-7xl font-extrabold text-center">
        <Link href={path}>{title}</Link>
      </h1>
      <h3 className="text-center text-lg lg:text-2xl text-wrap-balance">
        {description}
      </h3>
    </div>
  );
};
