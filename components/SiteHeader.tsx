import { SECTIONS } from 'consts/sections';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { DarkModeButton } from './DarkModeButton';

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
    <div className="mt-fb1 lg:mt-fb2">
      <div className="flex justify-between lg:justify-end">
        <button className="block lg:hidden font-noto-sans text-fb2 leading-none interactive-color">
          MENU
        </button>
        <DarkModeButton />
      </div>
      <div className="flex justify-between w-full mt-fb8 mb-fb2">
        <div className="w-fit flex flex-col lg:flex-row gap-fb1 lg:gap-fb3">
          {Object.values(SECTIONS).map((section) => (
            <Link
              key={section.url}
              href={section.url}
              className={`text-fb2 lg:text-fb3 leading-fb3 lg:leading-fb5 interactive-color ${
                isLinkActive(section) ? 'text-color' : ''
              }`}
            >
              {section.label}
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="text-fb3 lg:text-fb5 leading-none font-abhaya-libre font-bold"
        >
          ASUKA WANG
        </Link>
      </div>
      <div className="mb-fb3 border-t-2 border-b h-2 border-color-100" />
    </div>
  );
};
