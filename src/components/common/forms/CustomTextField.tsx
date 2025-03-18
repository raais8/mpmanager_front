import { TextField, TextFieldProps } from "@mui/material";
import { forwardRef } from "react";

type Props = TextFieldProps & {
  error?: string;
};

const CustomTextField = forwardRef<HTMLInputElement, Props>(
  ({ ...props }, ref) => {
    return (
      <TextField
        {...props}
        inputRef={ref}
        error
        helperText="Error"
        variant="filled"
        size="small"
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
);

export default CustomTextField;
