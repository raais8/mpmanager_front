import {
  Box,
  styled,
  TableCell,
  tableCellClasses,
  TableRow,
} from "@mui/material";
import { Product } from "../../../types/product/productTypes";

interface Props {
  product: Product;
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

export default function ProductsTableRow({ product }: Props) {
  return (
    <>
      <TableRow>
        <StyledTableCell></StyledTableCell>
        <StyledTableCell>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img src={product.image} height="60px" />
          </Box>
        </StyledTableCell>
        <StyledTableCell>{product.sku}</StyledTableCell>
        <StyledTableCell>{product.name}</StyledTableCell>
        <StyledTableCell></StyledTableCell>
      </TableRow>
    </>
  );
}
