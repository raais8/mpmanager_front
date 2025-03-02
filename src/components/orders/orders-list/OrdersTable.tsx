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
  Tooltip,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ChangeEvent, useState } from "react";
import { OrderStatusName } from "../../../utils/formatters/orderFormatter";
import { Order } from "../../../types/order/orderTypes";
import BackLabel from "../../common/BackLabel";
import { Link } from "@tanstack/react-router";
import Flag from "../../common/Flag";

interface Props {
  orders: Order[];
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

export default function OrdersTable({ orders }: Props) {
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
              <StyledTableCell padding="checkbox" sx={{ width: "5%" }}>
                <Checkbox
                  onChange={handleChangeSelectionAll}
                  checked={allSelectedOrders}
                />
              </StyledTableCell>
              <StyledTableCell sx={{ width: "5%" }}>
                Marketplace
              </StyledTableCell>
              <StyledTableCell sx={{ width: "5%" }}>Country</StyledTableCell>
              <StyledTableCell sx={{ width: "15%" }}>Order ID</StyledTableCell>
              <StyledTableCell sx={{ width: "15%" }}>
                Customer Name
              </StyledTableCell>
              <StyledTableCell sx={{ width: "20%" }}>
                Order Date
              </StyledTableCell>
              <StyledTableCell sx={{ width: "10%" }}>
                Order Total
              </StyledTableCell>
              <StyledTableCell sx={{ width: "10%" }}>
                Order Status
              </StyledTableCell>
              <StyledTableCell sx={{ width: "10%" }}>Ticket</StyledTableCell>
              <StyledTableCell sx={{ width: "10%" }}>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <StyledTableCell padding="checkbox">
                  <Checkbox
                    onChange={(event) => handleChangeSelection(event, order.id)}
                    checked={selectedOrders.includes(order.id)}
                  />
                </StyledTableCell>
                <StyledTableCell
                  sx={{ paddingTop: "0.6rem", paddingBottom: "0.1rem" }}
                >
                  <img
                    src={order.marketplace.logo_url}
                    style={{ height: "24px" }}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <Flag country={order.customer.bill_country} size={22} />
                </StyledTableCell>
                <StyledTableCell>{order.order_id}</StyledTableCell>
                <StyledTableCell>
                  {order.customer.bill_firstname} {order.customer.bill_lastname}
                </StyledTableCell>
                <StyledTableCell>{order.order_date}</StyledTableCell>
                <StyledTableCell>{order.total_price}€</StyledTableCell>
                <StyledTableCell>
                  <BackLabel backgroundColor={stautsColors[order.status]}>
                    {OrderStatusName[order.status]}
                  </BackLabel>
                </StyledTableCell>
                <StyledTableCell>{order.ticket}</StyledTableCell>
                <StyledTableCell>
                  <Link
                    to="/orders/$orderId"
                    params={{ orderId: String(order.id) }}
                  >
                    <Tooltip title={`View ${order.order_id}`}>
                      <VisibilityIcon
                        sx={{ height: "22px", color: "rgba(0, 0, 0, 0.87)" }}
                      />
                    </Tooltip>
                  </Link>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
