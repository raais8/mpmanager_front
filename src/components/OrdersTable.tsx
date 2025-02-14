import {
  Checkbox,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import ES from "country-flag-icons/react/3x2/ES";
import FR from "country-flag-icons/react/3x2/FR";
import { ChangeEvent, useState } from "react";

const rows = [
  {
    id: 1,
    orderID: "#12345",
    customerName: "John Doe",
    orderDate: "2021-10-01",
    orderTotal: "$100",
    orderStatus: "Delivered",
    ticket: "15521",
    source: "amazon",
    country: "Spain",
  },
  {
    id: 2,
    orderID: "#12346",
    customerName: "Jane Doe",
    orderDate: "2021-10-02",
    orderTotal: "$200",
    orderStatus: "Pending",
    ticket: "15523",
    source: "agrijardin",
    country: "France",
  },
];

const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f7f7f7",
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: "#ffffff",
  },
});

export default function OrdersTable() {
  const [selectedOrders, setSelectedOrders] = useState<number[]>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(25);

  const allSelectedOrders =
    selectedOrders.length === rows.length && rows.length > 0;

  const handleChangeSelection = (
    event: ChangeEvent<HTMLInputElement>,
    orderIndex: number
  ) => {
    if (event.target.checked) {
      setSelectedOrders([...selectedOrders, orderIndex]);
    } else {
      setSelectedOrders(selectedOrders.filter((order) => order !== orderIndex));
    }
  };

  const handleChangeSelectionAll = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const allIds = rows.map((row) => row.id);
      setSelectedOrders(allIds);
    } else {
      setSelectedOrders([]);
    }
  };

  return (
    <>
      <TableContainer>
        <Table size="small">
          <TableHead sx={{ borderTop: "1px solid rgba(224, 224, 224, 1)" }}>
            <TableRow>
              <StyledTableCell padding="checkbox">
                <Checkbox
                  onChange={handleChangeSelectionAll}
                  checked={allSelectedOrders}
                />
              </StyledTableCell>
              <StyledTableCell>Soruce</StyledTableCell>
              <StyledTableCell>Country</StyledTableCell>
              <StyledTableCell>Order ID</StyledTableCell>
              <StyledTableCell>Customer Name</StyledTableCell>
              <StyledTableCell>Order Date</StyledTableCell>
              <StyledTableCell>Order Total</StyledTableCell>
              <StyledTableCell>Order Status</StyledTableCell>
              <StyledTableCell>Ticket</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <StyledTableCell padding="checkbox">
                  <Checkbox
                    onChange={(event) => handleChangeSelection(event, row.id)}
                    checked={selectedOrders.includes(row.id)}
                  />
                </StyledTableCell>
                <StyledTableCell>{row.source}</StyledTableCell>
                <StyledTableCell>
                  {row.country === "Spain" ? (
                    <ES title="Spain" style={{ width: "25px" }} />
                  ) : (
                    <FR title="France" style={{ width: "25px" }} />
                  )}
                </StyledTableCell>
                <StyledTableCell>{row.orderID}</StyledTableCell>
                <StyledTableCell>{row.customerName}</StyledTableCell>
                <StyledTableCell>{row.orderDate}</StyledTableCell>
                <StyledTableCell>{row.orderTotal}</StyledTableCell>
                <StyledTableCell>{row.orderStatus}</StyledTableCell>
                <StyledTableCell>{row.ticket}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        rowsPerPageOptions={[25, 50, 100]}
        count={rows.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={() => console.log("test")}
        sx={{
          display: "flex",
          justifyContent: "end",
          borderBottom: "none",
        }}
      />
    </>
  );
}
