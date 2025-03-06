import {
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { OrderItem } from "../../../../types/order/orderTypes";

interface Props {
  items: OrderItem[];
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

export default function ItemsTable({ items }: Props) {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell
              colSpan={5}
              align="center"
              sx={{ borderTopLeftRadius: "0.6rem" }}
            >
              Details
            </StyledTableCell>

            <StyledTableCell
              align="center"
              sx={{ borderTopRightRadius: "0.6rem" }}
            >
              Price
            </StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell width="5%"></StyledTableCell>
            <StyledTableCell width="10%">SKU</StyledTableCell>
            <StyledTableCell width="40%">Description</StyledTableCell>
            <StyledTableCell align="right" width="15%">
              Quantity
            </StyledTableCell>
            <StyledTableCell align="right" width="15%">
              Unit
            </StyledTableCell>
            <StyledTableCell align="right" width="15%">
              Sum
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index}>
              <StyledTableCell>
                <Box sx={{ display: "flex" }}>
                  <img
                    src={item.marketplace_product.product.image}
                    height="60px"
                  />
                </Box>
              </StyledTableCell>
              <StyledTableCell>
                {item.marketplace_product.product.sku}
              </StyledTableCell>
              <StyledTableCell>
                {item.marketplace_product.product.name}
              </StyledTableCell>
              <StyledTableCell align="right">{item.quantity}</StyledTableCell>
              <StyledTableCell align="right">
                {item.purchase_price}€
              </StyledTableCell>
              <StyledTableCell align="right">
                {item.purchase_price * item.quantity}€
              </StyledTableCell>
            </TableRow>
          ))}
          <TableRow>
            <StyledTableCell
              rowSpan={3}
              colSpan={3}
              sx={{ borderBottom: "none", borderBottomLeftRadius: "0.6rem" }}
            />
            <StyledTableCell colSpan={2} sx={{ fontWeight: "bold" }}>
              Subtotal
            </StyledTableCell>
            <StyledTableCell align="right">12.45€</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell sx={{ fontWeight: "bold" }}>Tax</StyledTableCell>
            <StyledTableCell align="right">2%</StyledTableCell>
            <StyledTableCell align="right">14.45€</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell
              colSpan={2}
              sx={{ fontWeight: "bold", borderBottom: "none" }}
            >
              Total
            </StyledTableCell>
            <StyledTableCell
              align="right"
              sx={{ borderBottom: "none", borderBottomRightRadius: "0.6rem" }}
            >
              45.78€
            </StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
