import { FC, PropsWithChildren } from 'react';

export const BelowPostDetailColumnHeader: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="flex gap-fb2 mb-fb1">
      <div className="flex-grow my-auto border-t border-b border-color h-[3px]" />
      <div className="font-noto-sans text-fb2 font-thin">{children}</div>
      <div className="flex-grow my-auto border-t border-b border-color h-[3px]" />
    </div>
  );
};
