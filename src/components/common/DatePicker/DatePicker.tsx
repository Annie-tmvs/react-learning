import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DatePickerType } from "./DatePicker.type";
import dayjs from "dayjs";

const DatePickerCutom = (props: DatePickerType) => {
  const { label, defaultValue, views, format, maxDate, minDate, onChange, sx } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoItem label={label}>
        <DatePicker
          defaultValue={dayjs(defaultValue)}
          views={views}
          format={format ? format : "DD/MM/YYYY"}
          maxDate={maxDate ? dayjs(maxDate) : undefined}
          minDate={minDate ? dayjs(minDate) : undefined}
          onChange={onChange? onChange: null}
          sx={sx}
        />
      </DemoItem>
    </LocalizationProvider>
  );
};

export default DatePickerCutom;
