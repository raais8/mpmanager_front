import {
  Checkbox,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ES from "country-flag-icons/react/3x2/ES";
import FR from "country-flag-icons/react/3x2/FR";
import { ChangeEvent, useState } from "react";
import { Country } from "../../../types/order/orderEnums";
import { OrderStatusName } from "../../../utils/formatters/orderFormatter";
import { Order } from "../../../types/order/orderTypes";
import BackLabel from "../../common/BackLabel";

interface Props {
  orders: Order[];
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

const stautsColors = [
  "#FFE082",
  "#FFCC80",
  "#90CAF9",
  "#A5D6A7",
  "#EF9A9A",
  "#E0E0E0",
  "#CE93D8",
];

export default function OrdersTable({ orders, selectedMarketplaces }: Props) {
  const [selectedOrders, setSelectedOrders] = useState<number[]>([]);
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
                    <BackLabel backgroundColor={stautsColors[order.status]}>
                      {OrderStatusName[order.status]}
                    </BackLabel>
                  </StyledTableCell>
                  <StyledTableCell>{order.ticket}</StyledTableCell>
                </TableRow>
              ) : null
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
