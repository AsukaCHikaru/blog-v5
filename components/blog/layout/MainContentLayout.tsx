import { FC, PropsWithChildren } from 'react';

export const MainContentLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="col-span-10 col-start-2 lg:col-span-8 lg:col-start-3">
      {children}
    </div>
  );
};
