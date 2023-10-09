import Link from 'next/link';
import { DarkModeButton } from './DarkModeButton';

export const SiteHeader = () => {
  return (
    <div className="mt-12 mb-6 col-span-10 col-start-2 lg:col-span-8 lg:col-start-3 grid grid-cols-10 text-center">
      <div className="col-start-1 col-span-10 text-xl lg:text-3xl font-extrabold">
        Asuka Wang
      </div>
      <div
        className="
      col-span-6 col-start-3 lg:col-span-6 lg:col-start-3
      mt-4 flex justify-between
      leading-[32px] lg:leading-[40px]
      text-xs lg:text-base
      "
      >
        <Link href="/blog">BLOG</Link>
        <Link href="/snapshot">SNAPSHOT</Link>
        <Link href="/about">ABOUT</Link>
      </div>
      <div className="col-span-1 col-start-10 mt-4 flex justify-end">
        <DarkModeButton />
      </div>
      <div className="col-span-10 my-2 border-t border-b h-2 border-foreground dark:border-background" />
    </div>
  );
};
