import { createFileRoute } from "@tanstack/react-router";
import OrderCreateForm from "../../components/orders/orders-create/OrderCreateForm";

export const Route = createFileRoute("/orders/create")({
  component: RouteComponent,
});

function RouteComponent() {
  return <OrderCreateForm />;
}
