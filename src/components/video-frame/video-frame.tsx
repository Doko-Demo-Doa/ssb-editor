import {
  Box,
  Paper,
  Slider,
  Stack,
  Group,
  ActionIcon,
  Select,
  Space,
} from "@mantine/core";
import { IconPlayerEject, IconPlayerPlay } from "@tabler/icons-react";

export const VideoFrame = () => {
  return (
    <Paper p="md">
      <Stack sx={{ width: "100%", height: "100%" }} justify="flex-start">
        <Box sx={{ flexGrow: 1, backgroundColor: "darkorange" }}>Test</Box>

        <Stack spacing="xs">
          <Slider sx={{ userSelect: "none", flexGrow: 1 }} />

          <Space h="xs" />

          <Group>
            <ActionIcon variant="filled">
              <IconPlayerPlay size={16} />
            </ActionIcon>
            <ActionIcon variant="filled">
              <IconPlayerEject size={16} />
            </ActionIcon>

            <Select
              placeholder="Video Size"
              data={[
                { value: "100", label: "100%" },
                { value: "50", label: "50%" },
                { value: "25", label: "25%" },
              ]}
            />
          </Group>
        </Stack>
      </Stack>
    </Paper>
  );
};
