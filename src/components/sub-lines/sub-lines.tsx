import clsx from "clsx";
import React, { useState } from "react";

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
  const [selected, setSelected] = useState(-1);

  return (
    <div className="overflow-y-auto select-none">
      {dummyLines.map((n, idx) => (
        <div
          key={idx}
          onClick={() => setSelected(idx)}
          className={clsx(
            idx % 2 === 1 ? "bg-slate-100" : "bg-white",
            selected === idx ? "bg-green-200" : "",
            "text-slate-700 h-8 flex items-center px-6"
          )}
        >
          {n}
        </div>
      ))}
    </div>
  );
};
