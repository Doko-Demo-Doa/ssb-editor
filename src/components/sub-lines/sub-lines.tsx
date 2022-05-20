import React from "react";

interface Props {}

const dummyLines = [
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test 2",
];

export const SubLines: React.FC<Props> = () => {
  return (
    <div className="overflow-y-scroll">
      {dummyLines.map((n, idx) => (
        <div className={idx % 2 === 1 ? "bg-slate-500" : "bg-green-200"}>
          {n}
        </div>
      ))}
    </div>
  );
};
