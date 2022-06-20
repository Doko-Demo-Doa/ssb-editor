import React from "react";

interface Props {}

export const StatusBar: React.FC<Props> = () => {
  return (
    <div className="h-6 px-6 text-white bg-rose-700">
      {"Data saved to C:\\"}
    </div>
  );
};
