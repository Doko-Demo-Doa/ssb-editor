import React from "react";

interface Props {}

export const ContentInput: React.FC<Props> = () => {
  return (
    <textarea
      className="textarea textarea-primary w-full h-full my-1"
      placeholder="Bio"
    />
  );
};
