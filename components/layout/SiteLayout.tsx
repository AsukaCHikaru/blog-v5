import { FC, PropsWithChildren } from 'react';

export const SiteLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="mx-auto max-w-[1280px]">{children}</div>;
};
