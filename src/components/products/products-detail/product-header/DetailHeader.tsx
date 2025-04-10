import { Box, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "@tanstack/react-router";

interface Props {
  productSKU: string;
  productName: string;
}

export default function DetailsHeader({ productSKU, productName }: Props) {
  return (
    <Box sx={{ marginBottom: "0.6rem" }}>
      <Link
        to="/products"
        style={{ display: "inline-block", textDecoration: "none" }}
      >
        <Box display="flex" alignItems="center">
          <ArrowBackIcon sx={{ height: "1.1rem", color: "text.secondary" }} />
          <Typography variant="body1" color="text.secondary">
            Products
          </Typography>
        </Box>
      </Link>
      <Stack spacing={1} sx={{ marginTop: "0.5rem" }}>
        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          {productSKU}
        </Typography>
        {productName}
      </Stack>
    </Box>
  );
}
