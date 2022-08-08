import React from "react";
import { Stack } from "@mantine/core";

interface Props {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return <Stack sx={{ height: "100%" }}>{children}</Stack>;
};
