import { FC, PropsWithChildren } from 'react';

export const ContentLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-full grid grid-cols-4 gap-fb3">{children}</div>;
};
