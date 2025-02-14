import { createFileRoute } from "@tanstack/react-router";
import OrdersTable from "../components/OrdersTable";
import OrdersFilterRow from "../components/OrdersFilterRow";
import { Box } from "@mui/material";

export const Route = createFileRoute("/orders")({
  component: Orders,
});

function Orders() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "0.6rem",
        }}
      >
        <OrdersFilterRow />
        <OrdersTable />
      </Box>
    </>
  );
}
