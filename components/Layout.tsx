import { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="max-w-3xl mx-auto">{children}</div>;
};
