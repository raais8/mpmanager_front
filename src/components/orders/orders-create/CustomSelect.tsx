import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { UseFormRegister } from "react-hook-form";

interface MarketplaceOption {
  key: number;
  value: string;
}

interface Props {
  label: string;
  name: string;
  options: MarketplaceOption[];
  error?: string;
  register: UseFormRegister<any>;
}

export default function CustomSelect({
  label,
  name,
  options,
  error,
  register,
  ...props
}: Props) {
  return (
    <FormControl variant="filled" size="small" sx={{ display: "flex" }}>
      <InputLabel id={name}>{label}</InputLabel>
      <Select
        {...(register(name), { setValueAs: (value: string) => Number(value) })}
        {...props}
        defaultValue={1}
        labelId={name}
        disableUnderline
        sx={{ borderRadius: "0.6rem" }}
      >
        {options.map((option) => (
          <MenuItem key={option.key} value={+option.key}>
            {option.value}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
