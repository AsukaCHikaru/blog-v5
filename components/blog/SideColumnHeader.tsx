import { FC, PropsWithChildren } from 'react';

export const SideColumnHeader: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="text-fb3 py-fb1 mb-fb3 border-t border-b border-light text-center">
      {children}
    </div>
  );
};
