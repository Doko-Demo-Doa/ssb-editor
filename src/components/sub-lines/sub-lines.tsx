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
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
];

export const SubLines: React.FC<Props> = () => {
  return (
    <div className="overflow-y-auto">
      {dummyLines.map((n, idx) => (
        <div className={idx % 2 === 1 ? "bg-slate-500" : "bg-green-200"}>
          {n}
        </div>
      ))}
    </div>
  );
};
