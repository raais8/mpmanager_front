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
import { Country } from "../../../types/order/orderEnums";
import { OrderStatusName } from "../../../utils/formatters/orderFormatter";
import { Order } from "../../../types/order/orderTypes";

interface Props {
  orders: Order[];
  ordersCount: number;
  onCurrentPageChange: (value: number) => void;
  onOrdersPerPageChange: (value: number) => void;
  selectedMarketplaces: number[];
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

export default function OrdersTable({
  orders,
  ordersCount,
  onCurrentPageChange,
  onOrdersPerPageChange,
  selectedMarketplaces,
}: Props) {
  const [selectedOrders, setSelectedOrders] = useState<number[]>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(4);

  const allSelectedOrders =
    selectedOrders.length === orders.length && orders.length > 0;

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
      const allIds = orders.map((order) => order.id);
      setSelectedOrders(allIds);
    } else {
      setSelectedOrders([]);
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    onCurrentPageChange(newPage + 1);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    onCurrentPageChange(1);
    onOrdersPerPageChange(+event.target.value);
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
              <StyledTableCell>Marketplace</StyledTableCell>
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
            {orders.map((order) =>
              selectedMarketplaces.includes(order.marketplace.id) ? (
                <TableRow key={order.id}>
                  <StyledTableCell padding="checkbox">
                    <Checkbox
                      onChange={(event) =>
                        handleChangeSelection(event, order.id)
                      }
                      checked={selectedOrders.includes(order.id)}
                    />
                  </StyledTableCell>
                  <StyledTableCell>{order.marketplace.name}</StyledTableCell>
                  <StyledTableCell sx={{ paddingTop: "0.6rem" }}>
                    {order.customer.bill_country === Country.ES ? (
                      <ES title="Spain" style={{ width: "25px" }} />
                    ) : (
                      <FR title="France" style={{ width: "25px" }} />
                    )}
                  </StyledTableCell>
                  <StyledTableCell>{order.order_id}</StyledTableCell>
                  <StyledTableCell>
                    {order.customer.bill_firstname}{" "}
                    {order.customer.bill_lastname}
                  </StyledTableCell>
                  <StyledTableCell>{order.order_date}</StyledTableCell>
                  <StyledTableCell>{order.total_price}</StyledTableCell>
                  <StyledTableCell>
                    {OrderStatusName[order.status]}
                  </StyledTableCell>
                  <StyledTableCell>{order.ticket}</StyledTableCell>
                </TableRow>
              ) : null
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        rowsPerPageOptions={[4, 25, 50, 100]}
        count={ordersCount}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          display: "flex",
          justifyContent: "end",
          borderBottom: "none",
        }}
      />
    </>
  );
}
