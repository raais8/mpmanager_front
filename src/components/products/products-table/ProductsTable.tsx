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
import { Product } from "../../../types/product/productTypes";
import ProductsTableCollapsibleRow from "./ProductsTableCollapisbleRow";
import ProductsTableRow from "./ProductsTableRow";

interface Props {
  products: Product[];
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

export default function ProductsTable({ products, isLoading }: Props) {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell width="3%"></StyledTableCell>
            <StyledTableCell width="10%"></StyledTableCell>
            <StyledTableCell width="15%">SKU</StyledTableCell>
            <StyledTableCell width="40%">Name</StyledTableCell>
            <StyledTableCell width="32%">Marketplaces</StyledTableCell>
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
                />
              ) : (
                <ProductsTableRow key={product.id} product={product} />
              )
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
