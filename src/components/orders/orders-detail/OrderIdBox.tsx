import { Typography } from "@mui/material";
import ElementBox from "../../common/ElementBox";

interface Props {
  children: string;
}

export default function OrderIdBox({ children }: Props) {
  return (
    <ElementBox>
      <Typography
        variant="h5"
        sx={{
          display: "inline-block",
          padding: "0.6rem",
          fontWeight: 800,
        }}
      >
        #{children}
      </Typography>
    </ElementBox>
  );
}
