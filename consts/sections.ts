type Section = {
  label: string;
  url: string;
  isHome: boolean;
  description: string;
};
export const SECTIONS: Record<string, Section> = {
  BLOG: {
    url: '/blog',
    label: 'blog',
    description: 'Essays, reviews and notes',
    isHome: true,
  },
  ABOUT: {
    url: '/about',
    label: 'about',
    description: 'Introduction about me and this site',
    isHome: false,
  },
  // SNAPSHOT: {
  //   path: '/snapshot',
  //   title: 'SNAPSHOT',
  //   description: 'A raw and brief capture of my thoughts in past moments',
  // },
} as const;
