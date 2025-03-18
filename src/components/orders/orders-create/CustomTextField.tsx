import { TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  error?: string;
  register: UseFormRegister<any>;
}

export default function CustomTextField({
  label,
  name,
  error,
  register,
  ...props
}: Props) {
  return (
    <TextField
      {...register(name)}
      {...props}
      label={label}
      variant="filled"
      size="small"
      error={Boolean(error)}
      helperText={error}
      sx={{ display: "flex" }}
      slotProps={{
        input: {
          disableUnderline: true,
          sx: { borderRadius: "0.6rem" },
        },
      }}
    />
  );
}
