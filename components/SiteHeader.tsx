import Link from 'next/link';

export const SiteHeader = () => {
  return (
    <div className="mt-12 mb-6 col-span-10 col-start-2 lg:col-span-8 lg:col-start-3 grid grid-col-10 text-center">
      <div className="col-span-10 text-xl lg:text-3xl font-extrabold">
        Asuka Wang
      </div>
      <div className="col-span-2 col-start-5 mt-4 flex justify-between">
        <Link href="/blog">BLOG</Link>
        <Link href="/snapshot">SNAPSHOT</Link>
        <Link href="/about">ABOUT</Link>
      </div>
      <div className="col-span-10 my-2 border-t border-b h-2" />
    </div>
  );
};
