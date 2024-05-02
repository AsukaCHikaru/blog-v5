type Section = {
  label: string;
  url: string;
  isHome: boolean;
  description: string;
};
export const SECTIONS: Record<string, Section> = {
  ABOUT: {
    url: '/about',
    label: 'ABOUT',
    description: 'Introduction about me and this site',
    isHome: false,
  },
  BLOG: {
    url: '/blog',
    label: 'BLOG',
    description: 'Essays, reviews and notes',
    isHome: true,
  },
  // SNAPSHOT: {
  //   path: '/snapshot',
  //   title: 'SNAPSHOT',
  //   description: 'A raw and brief capture of my thoughts in past moments',
  // },
} as const;
