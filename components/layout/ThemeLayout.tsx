import { FC, PropsWithChildren } from 'react';

export const ThemeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="text-color">{children}</div>
    </>
  );
};
