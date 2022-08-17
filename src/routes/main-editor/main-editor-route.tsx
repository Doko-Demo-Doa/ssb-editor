import { ContentToolbar } from "@/components/content-toolbar/content-toolbar";
import { SubLines } from "@/components/sub-lines/sub-lines";
import { VideoFrame } from "@/components/video-frame/video-frame";
import { Waveform } from "@/components/waveform/waveform";
import {
  AspectRatio,
  Group,
  Stack,
  Textarea,
  ActionIcon,
  Modal,
  Checkbox,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBold,
  IconItalic,
  IconUnderline,
  IconStrikethrough,
  IconShadow,
  IconCheck,
} from "@tabler/icons";
import { MainLayout } from "@/routes/main-layout";

export const MainEditorRoute = () => {
  const [opened, handlers] = useDisclosure(false);

  return (
    <MainLayout>
      <Group grow>
        <AspectRatio ratio={16 / 10}>
          <VideoFrame />
        </AspectRatio>

        <AspectRatio ratio={16 / 10}>
          <Stack>
            <Waveform />
            <Group position="left" spacing="md" noWrap sx={{ width: "100%" }}>
              <Checkbox label="Comment" />
              <ActionIcon variant="filled">
                <IconBold size={16} />
              </ActionIcon>
              <ActionIcon variant="filled">
                <IconItalic size={16} />
              </ActionIcon>
              <ActionIcon variant="filled">
                <IconUnderline size={16} />
              </ActionIcon>
              <ActionIcon variant="filled">
                <IconStrikethrough size={16} />
              </ActionIcon>
              <ActionIcon variant="filled">
                <IconShadow size={16} />
              </ActionIcon>
              <ActionIcon
                variant="filled"
                color="teal"
                onClick={() => handlers.open()}
              >
                <IconCheck size={16} />
              </ActionIcon>
            </Group>

            <ContentToolbar />

            <Modal
              opened={opened}
              onClose={() => handlers.close()}
              title="Introduce yourself!"
            >
              {/* Modal content */}
            </Modal>

            <Textarea
              styles={(theme) => ({
                root: {
                  height: "100%",
                  width: "100%",
                },
                wrapper: {
                  height: "100%",
                },
                input: {
                  height: "100%",
                },
              })}
            />
          </Stack>
        </AspectRatio>
      </Group>

      <SubLines />
    </MainLayout>
  );
};
