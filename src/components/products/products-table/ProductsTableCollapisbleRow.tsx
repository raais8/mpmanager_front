import {
  Box,
  Collapse,
  IconButton,
  styled,
  TableCell,
  tableCellClasses,
  TableRow,
} from "@mui/material";
import { Product } from "../../../types/product/productTypes";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useState } from "react";

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

export default function ProductsTableCollapsibleRow({ product }: Props) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <TableRow>
        <StyledTableCell>
          <IconButton size="small" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img src={product.image} height="60px" />
          </Box>
        </StyledTableCell>
        <StyledTableCell>{product.sku}</StyledTableCell>
        <StyledTableCell>{product.name}</StyledTableCell>
        <StyledTableCell></StyledTableCell>
      </TableRow>
      <TableRow>
        <StyledTableCell colSpan={5} sx={{ paddingTop: 0, paddingBottom: 0 }}>
          <Collapse in={!collapsed} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              {product.children.map((child) => (
                <p>{child.name}</p>
              ))}
            </Box>
          </Collapse>
        </StyledTableCell>
      </TableRow>
    </>
  );
}
