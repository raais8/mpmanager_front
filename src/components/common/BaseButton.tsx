import { Button, Tooltip } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  tooltip?: string;
  onClick?: () => void;
}

export default function BaseButton({ children, tooltip, onClick }: Props) {
  return (
    <Tooltip title={tooltip}>
      <Button
        variant="text"
        disableRipple
        sx={{
          background: "#efefef",
          borderRadius: "0.6rem",
          padding: "0",
          "&:hover": { background: "#efefef" },
        }}
        onClick={onClick}
      >
        {children}
      </Button>
    </Tooltip>
  );
}
