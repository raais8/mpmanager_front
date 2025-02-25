import { Box, styled } from "@mui/material";
import ElementBox from "../../common/ElementBox";
import Flag from "../../common/Flag";

interface Props {
  marketplaceLogo: string;
  country: number;
}

const StyledElementBox = styled(ElementBox)({
  display: "flex",
  alignItems: "center",
});

export default function OrderSourcerBox({ marketplaceLogo, country }: Props) {
  return (
    <StyledElementBox>
      <Box sx={{ padding: "0.6rem", display: "flex", alignContent: "center" }}>
        <img
          src={marketplaceLogo}
          style={{ height: "2rem", marginRight: "0.6rem" }}
        />
        <Flag country={country} size={40} realSize={32} />
      </Box>
    </StyledElementBox>
  );
}
