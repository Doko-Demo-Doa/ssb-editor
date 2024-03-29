import React, { useState } from "react";
import { Text, ScrollArea } from "@mantine/core";

interface Props {}

const dummyLines = [
  "test",
  "test",
  "test 3434",
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
  "test",
  "test 2",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test last",
];

export const SubLines: React.FC<Props> = () => {
  const [selected, setSelected] = useState(-1);

  return (
    <ScrollArea>
      {dummyLines.map((n, idx) => (
        <Text
          key={idx}
          sx={(theme) => ({
            backgroundColor:
              idx % 2 === 0 ? theme.colors.dark : theme.colors.gray,
          })}
          onClick={() => setSelected(idx)}
        >
          {n}
        </Text>
      ))}
    </ScrollArea>
  );
};
