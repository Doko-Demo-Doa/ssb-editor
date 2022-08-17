import {
  Autocomplete,
  Checkbox,
  Group,
  NumberInput,
  SegmentedControl,
  Select,
  Switch,
  Tooltip,
} from "@mantine/core";

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
        <Tooltip label="Layer number">
          <NumberInput defaultValue={0} precision={0} placeholder="Layer" />
        </Tooltip>

        <Select
          placeholder="Font"
          data={[
            { value: "arial", label: "Arial" },
            { value: "segoe-ui", label: "Segoe UI" },
            { value: "uvn-nhannang", label: "UVN-NhanNang" },
          ]}
        />

        <Autocomplete placeholder="Actor" data={["Grindfest", "Butler"]} />

        <SegmentedControl
          data={[
            { label: "Time", value: "time" },
            { label: "Frame", value: "frame" },
          ]}
        />

        <Checkbox
          sx={{ userSelect: "none" }}
          defaultChecked={false}
          label="Show original"
        />
      </Group>
    </>
  );
};
