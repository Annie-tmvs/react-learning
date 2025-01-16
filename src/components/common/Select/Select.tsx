import Box from "@mui/material/Box";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { SelectedType } from "./Select.type";

export default function BasicSelect(props: SelectedType) {
  const { label, defaultValue, option, sx, onChange, value } = props;

  return (
    <Box sx={{ minWidth: 120 }}>
      <DemoItem label={label}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={defaultValue}
          sx={sx}
          onChange={onChange}
          value={value}
        >
          {option ? (
            option.map((item: any, index: number) => (
              <MenuItem key={index} value={item.name}>
                {item.name}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>No Data</MenuItem>
          )}
        </Select>
      </DemoItem>
    </Box>
  );
}
