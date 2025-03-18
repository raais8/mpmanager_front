import { createFileRoute } from "@tanstack/react-router";
import CreateForm from "../../components/orders/orders-create/CreateForm";

export const Route = createFileRoute("/orders/create")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CreateForm />;
}
