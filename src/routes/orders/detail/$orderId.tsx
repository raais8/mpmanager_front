import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { getOrder } from "../../../services/api/orders";
import { Grid2, Stack } from "@mui/material";
import ShipTimeline from "../../../components/orders/orders-detail/order-timeline/ShipTimeline";
import ItemsBox from "../../../components/orders/orders-detail/order-items/ItemsBox";
import DetailsBox from "../../../components/orders/orders-detail/order-details/DetailsBox";
import NotesBox from "../../../components/orders/orders-detail/order-notes/NotesBox";
import DetailsHeader from "../../../components/orders/orders-detail/order-header/DetailsHeader.";
import {
  CountryCodeName,
  OrderStatusName,
} from "../../../utils/formatters/orderFormatter";

export const Route = createFileRoute("/orders/detail/$orderId")({
  loader: ({ params }) => getOrder(Number(params.orderId)),
  component: RouteComponent,
});

function RouteComponent() {
  const order = useLoaderData({ from: "/orders/detail/$orderId" });

  return (
    <>
      <DetailsHeader
        orderId={order.order_id}
        marketplace={order.marketplace}
        country={order.customer.bill_country}
      />
      <Grid2 container spacing={2}>
        <Grid2 size={10}>
          <Stack>
            <ItemsBox items={order.order_items} />
            <Grid2 container spacing={2}>
              <DetailsBox
                title="General"
                details={[
                  { title: "Order ID", value: order.order_id },
                  { title: "Marketplace", value: order.marketplace.name },
                  { title: "Status", value: OrderStatusName[order.status] },
                  { title: "Order Date", value: order.order_date },
                  { title: "Total Price", value: order.total_price },
                  { title: "Carrier", value: order.carrier.name },
                ]}
              />
              <DetailsBox
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
                  {
                    title: "Country",
                    value: CountryCodeName[order.customer.bill_country],
                  },
                ]}
              />
              <DetailsBox
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
                  {
                    title: "Country",
                    value: CountryCodeName[order.customer.ship_country],
                  },
                ]}
              />
            </Grid2>
          </Stack>
        </Grid2>
        <Grid2 size={2}>
          <Stack>
            <ShipTimeline />
            <NotesBox orderId={order.id} orderNotes={order.notes} />
          </Stack>
        </Grid2>
      </Grid2>
    </>
  );
}
