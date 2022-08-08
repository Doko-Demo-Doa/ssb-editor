import React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  PauseIcon,
} from "@heroicons/react/solid";
import { Box, Paper, Slider } from "@mantine/core";

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
    <Paper>
      <Slider
        marks={[
          { value: 20, label: "20%" },
          { value: 50, label: "50%" },
          { value: 80, label: "80%" },
        ]}
      />
    </Paper>
  );
};
