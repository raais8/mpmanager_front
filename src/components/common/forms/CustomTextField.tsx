import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";

type Props = TextFieldProps & {
  label: string;
  name: string;
  register: (name: string) => ReturnType<UseFormRegister<any>>;
  adornment?: string;
};

const CustomTextField = forwardRef<HTMLInputElement, Props>(
  ({ label, name, register, adornment, ...props }, ref) => {
    return (
      <TextField
        {...register(name)}
        {...props}
        inputRef={ref}
        label={label}
        variant="filled"
        size="small"
        sx={{ display: "flex" }}
        slotProps={{
          input: {
            disableUnderline: true,
            endAdornment: adornment ? (
              <InputAdornment position="start">{adornment}</InputAdornment>
            ) : null,
            sx: { borderRadius: "0.6rem" },
          },
        }}
      />
    );
  }
);

export default CustomTextField;
