import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { getOrder } from "../../services/api/orders";
import OrderIdBox from "../../components/orders/orders-detail/OrderIdBox";
import { Grid2 } from "@mui/material";
import OrderSourcerBox from "../../components/orders/orders-detail/OrderSourceBox";
import OrderItemsBox from "../../components/orders/orders-detail/OrderItemsBox";

export const Route = createFileRoute("/orders/$orderId")({
  loader: ({ params }) => getOrder(Number(params.orderId)),
  component: RouteComponent,
});

function RouteComponent() {
  const order = useLoaderData({ from: "/orders/$orderId" });

  return (
    <>
      <Grid2 container spacing={2}>
        <OrderSourcerBox
          marketplaceLogo={order.marketplace.logo_url}
          country={order.customer.bill_country}
        />
        <OrderIdBox>{order.order_id}</OrderIdBox>
      </Grid2>
      <OrderItemsBox />
    </>
  );
}
