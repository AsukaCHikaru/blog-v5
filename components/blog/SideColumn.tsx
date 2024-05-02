import { FC, PropsWithChildren } from 'react';

export const SideColumn: FC<PropsWithChildren> = ({ children }) => {
  const handleTopClick = () => {
    document.querySelector('html')?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-fb5">{children}</div>
      <div className="self-end mt-fb5">
        <button
          className="font-noto-sans text-fb3 text-light75 hover:text-light"
          onClick={handleTopClick}
        >
          TOP
        </button>
      </div>
    </div>
  );
};
