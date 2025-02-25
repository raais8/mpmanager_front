import { styled } from "@mui/material";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)({
  display: "flex",
  backgroundColor: "#efefef",
  borderRadius: "0.6rem",
  paddingLeft: "14px",
  maxHeight: "2rem",
});

export default function MainButton() {
  return <StyledButton variant="contained">Test</StyledButton>;
}
