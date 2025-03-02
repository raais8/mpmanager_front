import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { getOrder } from "../../services/api/orders";
import OrderIdBox from "../../components/orders/orders-detail/OrderIdBox";
import { Grid2, Stack } from "@mui/material";
import OrderSourcerBox from "../../components/orders/orders-detail/OrderSourceBox";
import OrderItemsBox from "../../components/orders/orders-detail/OrderItemsBox";
import ShipTimeline from "../../components/orders/orders-detail/ShipTimeline";
import DetailFieldsBox from "../../components/orders/orders-detail/DetailFieldsBox";
import OrderNotesBox from "../../components/orders/orders-detail/OrderNotesBox";

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
      <Grid2 container spacing={2}>
        <Grid2 size={10}>
          <Stack>
            <OrderItemsBox items={order.order_items} />
            <Grid2 container spacing={2}>
              <DetailFieldsBox
                title="General"
                details={[
                  { title: "Order ID", value: order.order_id },
                  { title: "Marketplace", value: order.marketplace.name },
                  { title: "Status", value: order.status },
                  { title: "Order Date", value: order.order_date },
                  { title: "Total Price", value: order.total_price },
                  { title: "Carrier", value: order.carrier.name },
                ]}
              />
              <DetailFieldsBox
                title="Billing"
                details={[
                  { title: "First Name", value: order.customer.bill_firstname },
                  { title: "Last Name", value: order.customer.bill_lastname },
                  { title: "Email", value: order.customer.bill_email },
                  { title: "Phone", value: order.customer.bill_phone },
                  { title: "Company", value: order.customer.bill_company },
                  { title: "Address", value: order.customer.bill_address },
                  { title: "City", value: order.customer.bill_city },
                  { title: "Zip Code", value: order.customer.bill_zipcode },
                  { title: "Country", value: order.customer.bill_country },
                ]}
              />
              <DetailFieldsBox
                title="Shipping"
                details={[
                  { title: "First Name", value: order.customer.ship_firstname },
                  { title: "Last Name", value: order.customer.ship_lastname },
                  { title: "Email", value: order.customer.ship_email },
                  { title: "Phone", value: order.customer.ship_phone },
                  { title: "Company", value: order.customer.ship_company },
                  { title: "Address", value: order.customer.ship_address },
                  { title: "City", value: order.customer.ship_city },
                  { title: "Zip Code", value: order.customer.ship_zipcode },
                  { title: "Country", value: order.customer.ship_country },
                ]}
              />
            </Grid2>
          </Stack>
        </Grid2>
        <Grid2 size={2}>
          <Stack>
            <ShipTimeline />
            <OrderNotesBox notes="" />
          </Stack>
        </Grid2>
      </Grid2>
    </>
  );
}
