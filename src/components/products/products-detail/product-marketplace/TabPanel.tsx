import { Box } from "@mui/material";
import { Marketplace } from "../../../../types/marketplace/marketplaceTypes";

interface Props {
  marketplace?: Marketplace;
}

export default function TabPanel({ marketplace }: Props) {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        padding: "0.6rem",
        borderRadius: "0.6rem",
        borderTopLeftRadius: 0,
      }}
    >
      {marketplace?.name}
    </Box>
  );
}
