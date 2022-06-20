import React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  PauseIcon,
} from "@heroicons/react/solid";
import { CustomIcon } from "../icon/custom-icon";

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

      <div className="px-2 pt-1">
        <input
          type="range"
          min="0"
          max="100"
          className="range range-accent range-xs"
        />
      </div>

      <div className="controls w-full p-1 gap-2 inline-flex justify-center">
        <button className="btn btn-outline btn-square btn-sm">
          <label className="swap swap-rotate">
            <input type="checkbox" />

            <CustomIcon
              iconName="media-play"
              className="swap-on fill-current w-6"
            />
            <CustomIcon
              iconName="media-pause"
              className="swap-off fill-current w-6"
            />
          </label>
        </button>
      </div>
    </div>
  );
};
