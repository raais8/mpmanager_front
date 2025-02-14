import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ElementBox({ children }: Props) {
  return (
    <Box sx={{ backgroundColor: "#ffffff", borderRadius: "1rem" }}>
      {children}
    </Box>
  );
}
