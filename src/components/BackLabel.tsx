import { styled, Tooltip } from "@mui/material";

const StyledLabel = styled("div")({
  borderRadius: "0.6rem",
  display: "inline-block",
  paddingLeft: "0.4rem",
  paddingRight: "0.4rem",
});

interface Props {
  value: string;
  backgroundColor: string;
  tooltip?: string;
}

export default function BackLabel({ value, backgroundColor, tooltip }: Props) {
  return (
    <Tooltip title={tooltip}>
      <StyledLabel sx={{ backgroundColor }}>{value}</StyledLabel>
    </Tooltip>
  );
}
