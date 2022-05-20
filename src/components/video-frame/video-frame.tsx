import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
} from "@heroicons/react/solid";
import React from "react";

const CONTROLS = [
  {
    Comp: ChevronLeftIcon,
  },
  {
    Comp: PlayIcon,
  },
  {
    Comp: ChevronRightIcon,
  },
];

export const VideoFrame = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="video-main grow h-full" />

      <div className="controls w-full p-1 gap-2 bg-amber-300 inline-flex justify-center">
        {CONTROLS.map((n, idx) => (
          <button key={idx} className="btn btn-outline btn-square btn-sm">
            <n.Comp className="text-white w-6 h-6" />
          </button>
        ))}
      </div>
    </div>
  );
};
