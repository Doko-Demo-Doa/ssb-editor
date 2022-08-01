import { Checkbox, Group, Select, Switch } from "@mantine/core";

export const ContentToolbar = () => {
  return (
    <>
      <Group
        align="center"
        position="left"
        spacing={10}
        noWrap
        grow
        sx={{ width: "100%" }}
      >
        <Select
          placeholder="Font"
          data={[
            { value: "arial", label: "Arial" },
            { value: "segoe-ui", label: "Segoe UI" },
            { value: "uvn-nhannang", label: "UVN-NhanNang" },
          ]}
        />

        <Select
          placeholder="Font"
          transition="fade"
          data={[
            { value: "arial", label: "Arial" },
            { value: "segoe-ui", label: "Angular" },
            { value: "uvn-nhannang", label: "UVN-NhanNang" },
          ]}
        />

        <Switch size="lg" label="Use frame" color="teal" />

        <Checkbox
          sx={{ userSelect: "none" }}
          defaultChecked={false}
          label="Show original"
        />
      </Group>
    </>
  );
};
