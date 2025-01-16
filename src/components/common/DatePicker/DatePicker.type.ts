import { Dayjs } from "dayjs";

export interface DatePickerType {
  label?: string;
  defaultValue?: string | Dayjs | null | undefined;
  minDate?: string;
  maxDate?: string;
  views?: any;
  format?: string;
  onChange?: any;
  sx?: any;
}
