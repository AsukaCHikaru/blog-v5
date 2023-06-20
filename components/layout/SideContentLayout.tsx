import { FC, PropsWithChildren } from 'react';

export const SideContentLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="hidden lg:block col-span-3">{children}</div>;
};
