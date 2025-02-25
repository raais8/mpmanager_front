import { createFileRoute } from "@tanstack/react-router";
import OrdersBox from "../../components/orders/orders-list/OrdersBox";

export const Route = createFileRoute("/orders/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <OrdersBox />
    </>
  );
}
