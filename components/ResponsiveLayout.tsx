import { FC, PropsWithChildren } from 'react';

export const ResponsiveLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="max-w-3xl mx-auto flex xl:max-w-5xl">{children}</div>;
};
