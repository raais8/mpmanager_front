import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectProps,
} from "@mui/material";
import { forwardRef } from "react";

type Props = SelectProps & {
  label: string;
  options: string[];
};

const CustomSelect = forwardRef<HTMLSelectElement, Props>(
  ({ label, options, ...props }, ref) => {
    return (
      <FormControl variant="filled" size="small" sx={{ display: "flex" }}>
        <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
        <Select
          {...props}
          ref={ref}
          labelId={`${label}-select-label`}
          disableUnderline
          sx={{ borderRadius: "0.6rem" }}
          inputRef={ref} // Permite que RHF maneje el input
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
);

export default CustomSelect;
