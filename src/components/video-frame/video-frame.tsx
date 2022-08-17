import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  PauseIcon,
} from "@heroicons/react/solid";
import {
  Box,
  Paper,
  Container,
  Slider,
  Stack,
  Group,
  ActionIcon,
  Select,
  Space,
} from "@mantine/core";
import { CustomButton } from "@/components/button/custom-button";
import { IconBold, IconPlayerEject, IconPlayerPlay } from "@tabler/icons";

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
