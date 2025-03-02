import { styled, Tooltip } from "@mui/material";
import { ReactNode } from "@tanstack/react-router";

const StyledLabel = styled("div")({
  borderRadius: "0.6rem",
  display: "inline-block",
  padding: "0.075rem 0.6rem",
});

interface Props {
  children: ReactNode;
  backgroundColor: string;
  tooltip?: string;
}

export default function BackLabel({
  children,
  backgroundColor,
  tooltip,
}: Props) {
  return (
    <Tooltip title={tooltip}>
      <StyledLabel sx={{ backgroundColor }}>{children}</StyledLabel>
    </Tooltip>
  );
}
