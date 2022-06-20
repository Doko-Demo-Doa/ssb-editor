import React from "react";
import {
  BiBold,
  BiItalic,
  BiPause,
  BiPlay,
  BiShapeCircle,
  BiUnderline,
} from "react-icons/bi";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  PauseIcon,
} from "@heroicons/react/solid";
import { IconTyping } from "../../types";

interface Props {
  iconName: IconTyping;
  className?: string;
}

export const CustomIcon: React.FC<Props> = ({ iconName, className }) => {
  if (iconName === "text-bold") return <BiBold className={className} />;
  if (iconName === "text-italic") return <BiItalic className={className} />;
  if (iconName === "text-underline")
    return <BiUnderline className={className} />;
  if (iconName === "text-color-primary")
    return <BiShapeCircle className={className} />;
  if (iconName === "media-play") return <PlayIcon className={className} />;
  if (iconName === "media-pause") return <PauseIcon className={className} />;

  return <BiBold className={className} />;
};
