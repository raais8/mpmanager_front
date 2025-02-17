import { createFileRoute } from "@tanstack/react-router";
import OrdersBox from "../components/orders/orders-box/OrdersBox";

export const Route = createFileRoute("/orders")({
  component: Orders,
});

function Orders() {
  return (
    <>
      <OrdersBox />
    </>
  );
}
