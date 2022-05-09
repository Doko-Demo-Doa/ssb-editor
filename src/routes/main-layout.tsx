import React from "react";

interface Props {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return <div className="main-layout w-full h-full">{children}</div>;
};
