import { FormControl, TextField } from "@mui/material";

interface Props {
  id: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export default function CustomTextField({
  id,
  name,
  value,
  onChange,
  disabled = false,
}: Props) {
  return (
    <FormControl
      sx={{
        display: "flex",
      }}
    >
      <TextField
        id={`${id}-textfield`}
        variant="filled"
        size="small"
        label={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        slotProps={{
          input: {
            disableUnderline: true,
            sx: { borderRadius: "0.6rem" },
          },
        }}
      />
    </FormControl>
  );
}
