import {
  Avatar,
  Box,
  Checkbox,
  Chip,
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
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ChangeEvent, useState } from "react";
import {
  CountryCodeAbbreviation,
  OrderStatusColor,
  OrderStatusName,
} from "../../../utils/formatters/orderFormatter";
import { Order } from "../../../types/order/orderTypes";
import { Link } from "@tanstack/react-router";

interface Props {
  orders: Order[];
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

export default function OrdersTable({ orders, isLoading }: Props) {
  const [selectedOrders, setSelectedOrders] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState<number | null>(null);

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
              <StyledTableCell sx={{ width: "13%" }}>
                Marketplace
              </StyledTableCell>
              <StyledTableCell sx={{ width: "15%" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  Order ID
                  <VisibilityIcon
                    sx={{
                      height: "1rem",
                      marginLeft: "0.3rem",
                    }}
                  />
                </Box>
              </StyledTableCell>
              <StyledTableCell sx={{ width: "15%" }}>
                Customer Name
              </StyledTableCell>
              <StyledTableCell sx={{ width: "20%" }}>
                Order Date
              </StyledTableCell>
              <StyledTableCell sx={{ width: "10%" }}>
                Order Total
              </StyledTableCell>
              <StyledTableCell sx={{ width: "12%" }}>
                Order Status
              </StyledTableCell>
              <StyledTableCell sx={{ width: "10%" }}>Ticket</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={10} align="center">
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
              <>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <StyledTableCell padding="checkbox">
                      <Checkbox
                        onChange={(event) =>
                          handleChangeSelection(event, order.id)
                        }
                        checked={selectedOrders.includes(order.id)}
                      />
                    </StyledTableCell>
                    <StyledTableCell>
                      <Chip
                        size="small"
                        label={`${order.marketplace.name} ${CountryCodeAbbreviation[order.marketplace.country].toUpperCase()}`}
                        avatar={<Avatar src={order.marketplace.logo_url} />}
                        sx={{ backgroundColor: `${order.marketplace.color}` }}
                      />
                    </StyledTableCell>
                    <StyledTableCell>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Link
                          to="/orders/detail/$orderId"
                          params={{ orderId: String(order.id) }}
                          style={{
                            textDecoration: "none",
                            color: "black",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.textDecoration = "underline";
                            setIsHovered(order.id);
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.textDecoration = "none";
                            setIsHovered(null);
                          }}
                        >
                          #{order.order_id}
                        </Link>
                        <Box width="1rem" display="flex">
                          {isHovered === order.id && (
                            <VisibilityIcon
                              sx={{
                                height: "1rem",
                                marginLeft: "0.3rem",
                              }}
                            />
                          )}
                        </Box>
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell>
                      {order.customer.bill_firstname}{" "}
                      {order.customer.bill_lastname}
                    </StyledTableCell>
                    <StyledTableCell>{order.order_date}</StyledTableCell>
                    <StyledTableCell>{order.total_price}€</StyledTableCell>
                    <StyledTableCell>
                      <Chip
                        size="small"
                        label={OrderStatusName[order.status]}
                        style={{
                          backgroundColor: OrderStatusColor[order.status],
                        }}
                      />
                    </StyledTableCell>
                    <StyledTableCell>{order.ticket}</StyledTableCell>
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
