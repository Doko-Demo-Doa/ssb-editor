import { ContentToolbar } from "@/components/content-toolbar/content-toolbar";
import {
  AspectRatio,
  Group,
  Image,
  Stack,
  Textarea,
  ActionIcon,
} from "@mantine/core";
import {
  IconBold,
  IconItalic,
  IconUnderline,
  IconStrikethrough,
  IconShadow,
  IconCheck,
} from "@tabler/icons";
import { MainLayout } from "../main-layout";

export const MainEditorRoute = () => {
  return (
    <MainLayout>
      <Group grow>
        <AspectRatio ratio={16 / 10}>
          <Image
            styles={(theme) => ({
              root: {
                backgroundColor: "blue",
              },
            })}
            src="https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            alt="Panda"
          />
        </AspectRatio>

        <AspectRatio ratio={16 / 10}>
          <Stack>
            <Group
              align="self-start"
              position="left"
              spacing={10}
              noWrap
              sx={{ width: "100%" }}
            >
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
              <ActionIcon variant="filled" color="teal">
                <IconCheck size={16} />
              </ActionIcon>
            </Group>

            <ContentToolbar />

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
    </MainLayout>
  );
};
