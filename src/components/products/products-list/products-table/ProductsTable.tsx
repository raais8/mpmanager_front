import {
  Box,
  CircularProgress,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Product } from "../../../../types/product/productTypes";
import ProductsTableCollapsibleRow from "./ProductsTableCollapisbleRow";
import ProductsTableRow from "./ProductsTableRow";
import { Marketplace } from "../../../../types/marketplace/marketplaceTypes";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface Props {
  products: Product[];
  marketplaces: Marketplace[];
  isLoading: boolean;
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

export default function ProductsTable({
  products,
  marketplaces,
  isLoading,
}: Props) {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead sx={{ borderTop: "1px solid rgba(224, 224, 224, 1)" }}>
          <TableRow>
            <StyledTableCell width="5%"></StyledTableCell>
            <StyledTableCell width="5%"></StyledTableCell>
            <StyledTableCell width="12%">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                SKU
                <VisibilityIcon
                  sx={{
                    height: "1rem",
                    marginLeft: "0.3rem",
                  }}
                />
              </Box>
            </StyledTableCell>
            <StyledTableCell width="38%">Name</StyledTableCell>
            <StyledTableCell width="40%">Marketplaces</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={4} align="center">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100px",
                  }}
                >
                  <CircularProgress />
                </Box>
              </TableCell>
            </TableRow>
          ) : (
            products?.map((product) =>
              product.children.length > 0 ? (
                <ProductsTableCollapsibleRow
                  key={product.id}
                  product={product}
                  marketplaces={marketplaces}
                />
              ) : (
                <ProductsTableRow
                  key={product.id}
                  product={product}
                  marketplaces={marketplaces}
                />
              )
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
