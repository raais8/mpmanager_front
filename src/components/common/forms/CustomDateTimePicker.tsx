import {
  DateTimePicker,
  LocalizationProvider,
  renderTimeViewClock,
  DateTimePickerProps,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { forwardRef } from "react";
import { Dayjs } from "dayjs";

type Props = DateTimePickerProps<Dayjs> & {};

const CustomDateTimePicker = forwardRef<HTMLInputElement, Props>(
  ({ ...props }, ref) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          {...props}
          slotProps={{
            textField: {
              size: "small",
              variant: "filled",
              inputRef: ref,
              InputProps: {
                disableUnderline: true,
                sx: { borderRadius: "0.6rem" },
              },
            },
          }}
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
          }}
          sx={{ display: "flex" }}
        />
      </LocalizationProvider>
    );
  }
);

export default CustomDateTimePicker;
