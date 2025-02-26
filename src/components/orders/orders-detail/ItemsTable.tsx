import {
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const StyledTableCell = styled(TableCell)({
  borderRadius: "0.6rem",
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f7f7f7",
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: "#ffffff",
  },
});

export default function ItemsTable() {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell colSpan={3} align="center">
              Details
            </StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell width="55%">Description</StyledTableCell>
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
          <TableRow>
            <StyledTableCell>Test product</StyledTableCell>
            <StyledTableCell align="right">4.45€</StyledTableCell>
            <StyledTableCell align="right">3</StyledTableCell>
            <StyledTableCell align="right">12.34€</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell rowSpan={3} sx={{ borderBottom: "none" }} />
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
            <StyledTableCell align="right" sx={{ borderBottom: "none" }}>
              45.78€
            </StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
