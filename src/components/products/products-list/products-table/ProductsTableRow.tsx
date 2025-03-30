import {
  Avatar,
  Box,
  Chip,
  styled,
  TableCell,
  tableCellClasses,
  TableRow,
} from "@mui/material";
import { Product } from "../../../../types/product/productTypes";
import { Marketplace } from "../../../../types/marketplace/marketplaceTypes";
import { CountryCodeAbbreviation } from "../../../../utils/formatters/orderFormatter";

interface Props {
  product: Product;
  marketplaces: Marketplace[];
}

const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f7f7f7",
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: "#ffffff",
  },
});

export default function ProductsTableRow({ product, marketplaces }: Props) {
  return (
    <>
      <TableRow>
        <StyledTableCell></StyledTableCell>
        <StyledTableCell>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
              height: "60px",
              width: "60px",
            }}
          >
            <img
              src={product.image}
              width="100%"
              height="100%"
              style={{ objectFit: "contain" }}
            />
          </Box>
        </StyledTableCell>
        <StyledTableCell>{product.sku}</StyledTableCell>
        <StyledTableCell>{product.name}</StyledTableCell>
        <StyledTableCell>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {product.marketplaces.map((marketplace) => {
              const mp = marketplaces.find((m) => m.id === marketplace.id);
              return mp ? (
                <Chip
                  key={mp.id}
                  size="small"
                  label={`${mp.name} ${CountryCodeAbbreviation[mp.country].toUpperCase()}`}
                  avatar={<Avatar src={mp.logo_url} />}
                  sx={{ backgroundColor: `${mp.color}` }}
                />
              ) : null;
            })}
          </Box>
        </StyledTableCell>
      </TableRow>
    </>
  );
}
