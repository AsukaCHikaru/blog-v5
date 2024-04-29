import Link from 'next/link';

const SECTIONS: { label: string; url: string }[] = [
  {
    label: 'BLOG',
    url: '/blog',
  },
  {
    label: 'ABOUT',
    url: '/about',
  },
];

export const SiteHeader = () => {
  return (
    <>
      <div className="flex justify-between w-full mt-fb8 mb-fb2">
        <div className="w-fit flex gap-fb3">
          {SECTIONS.map((section) => (
            // TODO: active color
            <Link
              key={section.url}
              href={section.url}
              className="text-fb3 leading-fb5"
            >
              {section.label}
            </Link>
          ))}
        </div>
        <Link href="/" className="text-fb5 leading-fb5">
          Asuka Wang
        </Link>
      </div>
      <div className="mb-fb3 border-t-2 border-b h-2 border-dark dark:border-light" />
    </>
  );
};
