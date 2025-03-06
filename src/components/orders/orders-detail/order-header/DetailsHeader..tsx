import { Box, Grid2, Typography } from "@mui/material";
import { Country } from "../../../../types/order/orderEnums";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BackLabel from "../../../common/BackLabel";
import Flag from "../../../common/Flag";
import { Marketplace } from "../../../../types/marketplace/marketplaceTypes";
import {
  CountryCodeColor,
  CountryCodeName,
} from "../../../../utils/formatters/orderFormatter";
import { Link } from "@tanstack/react-router";

interface Props {
  orderId: string;
  marketplace: Marketplace;
  country: Country;
}

export default function DetailsHeader({
  orderId,
  marketplace,
  country,
}: Props) {
  return (
    <Box sx={{ marginBottom: "1rem" }}>
      <Link
        to="/orders"
        search={{}}
        style={{ display: "inline-block", textDecoration: "none" }}
      >
        <Box display="flex" alignItems="center">
          <ArrowBackIcon sx={{ height: "1.1rem", color: "text.secondary" }} />
          <Typography variant="body1" color="text.secondary">
            Orders
          </Typography>
        </Box>
      </Link>
      <Grid2 container spacing={2} sx={{ alignItems: "center" }}>
        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          #{orderId}
        </Typography>
        <BackLabel backgroundColor={marketplace.color}>
          <img
            src={marketplace.logo_url}
            style={{ height: "18px", marginRight: "0.6rem" }}
          />
          {marketplace.name}
        </BackLabel>
        <BackLabel backgroundColor={CountryCodeColor[country]}>
          <Box
            sx={{
              display: "flex",
              alignContent: "center",
              marginRight: "0.6rem",
            }}
          >
            <Flag country={country} size={18} />
          </Box>
          {CountryCodeName[country]}
        </BackLabel>
      </Grid2>
    </Box>
  );
}
