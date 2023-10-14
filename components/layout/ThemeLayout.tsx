import { FC, PropsWithChildren } from 'react';

export const ThemeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="text-dark bg-light dark:text-light dark:bg-dark">
        {children}
      </div>
    </>
  );
};
