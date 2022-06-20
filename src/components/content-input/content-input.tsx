import React from "react";

interface Props {}

export const ContentInput: React.FC<Props> = () => {
  return (
    <textarea
      className="textarea textarea-primary w-full grow my-1"
      placeholder="Enter content here..."
    />
  );
};
