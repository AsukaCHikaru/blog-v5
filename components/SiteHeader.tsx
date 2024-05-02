import { SECTIONS } from 'consts/sections';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

export const SiteHeader = () => {
  const { pathname } = useRouter();

  const isLinkActive = useCallback(
    (section: (typeof SECTIONS)[keyof typeof SECTIONS]) => {
      return (
        (pathname === '/' && section.isHome) || pathname.startsWith(section.url)
      );
    },
    [pathname],
  );

  return (
    <>
      <div className="flex justify-between w-full mt-fb8 mb-fb2">
        <div className="w-fit flex gap-fb3">
          {Object.values(SECTIONS).map((section) => (
            <Link
              key={section.url}
              href={section.url}
              className={`text-fb3 leading-fb5 opacity-75 ${
                isLinkActive(section) ? 'opacity-100' : ''
              } hover:opacity-100`}
            >
              {section.label}
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="text-fb5 leading-fb5 font-abhaya-libre font-bold"
        >
          ASUKA WANG
        </Link>
      </div>
      <div className="mb-fb3 border-t-2 border-b h-2 border-dark dark:border-light" />
    </>
  );
};
