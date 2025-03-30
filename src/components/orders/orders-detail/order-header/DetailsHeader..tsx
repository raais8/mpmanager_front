import { Avatar, Box, Chip, Grid2, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Marketplace } from "../../../../types/marketplace/marketplaceTypes";
import { CountryCodeAbbreviation } from "../../../../utils/formatters/orderFormatter";
import { Link } from "@tanstack/react-router";

interface Props {
  orderId: string;
  marketplace: Marketplace;
}

export default function DetailsHeader({ orderId, marketplace }: Props) {
  return (
    <Box sx={{ marginBottom: "0.6rem" }}>
      <Link
        to="/orders"
        style={{ display: "inline-block", textDecoration: "none" }}
      >
        <Box display="flex" alignItems="center">
          <ArrowBackIcon sx={{ height: "1.1rem", color: "text.secondary" }} />
          <Typography variant="body1" color="text.secondary">
            Orders
          </Typography>
        </Box>
      </Link>
      <Grid2 container spacing={1} sx={{ alignItems: "center" }}>
        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          #{orderId}
        </Typography>
        <Chip
          size="small"
          label={`${marketplace.name} ${CountryCodeAbbreviation[marketplace.country].toUpperCase()}`}
          avatar={<Avatar src={marketplace.logo_url} />}
          sx={{ backgroundColor: `${marketplace.color}` }}
        />
      </Grid2>
    </Box>
  );
}
