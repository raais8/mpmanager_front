import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface Props {
  id: string;
  name: string;
  options: string[];
}

export default function CustomSelect({ id, name, options }: Props) {
  return (
    <FormControl
      variant="filled"
      size="small"
      sx={{
        display: "flex",
      }}
    >
      <InputLabel id={`${id}-select-label`}>{name}</InputLabel>
      <Select
        labelId={`${id}-select-label`}
        id={`${id}-select`}
        disableUnderline
        sx={{ borderRadius: "0.6rem" }}
      >
        {options.map((option) => (
          <MenuItem key={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
