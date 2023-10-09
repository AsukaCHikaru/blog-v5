import { FC, PropsWithChildren } from 'react';

export const ThemeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="text-foreground bg-background dark:text-background dark:bg-foreground">
        {children}
      </div>
    </>
  );
};
