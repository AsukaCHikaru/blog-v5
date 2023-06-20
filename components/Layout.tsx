import { FC, PropsWithChildren } from 'react';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-12 gap-0 lg:gap-4">
      {children}
    </div>
  );
};
