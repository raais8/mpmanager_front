import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import {
  getCustomer,
  getOrder,
  getOrderItemList,
} from "../../../services/api/orders";
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
import { getMarketplace } from "../../../services/api/marketplace";

export const Route = createFileRoute("/orders/detail/$orderId")({
  loader: async ({ params }) => {
    const order = await getOrder(Number(params.orderId));
    const orderItems = await getOrderItemList(order.id);
    const customer = await getCustomer(order.customer);
    const marketplace = await getMarketplace(order.marketplace);
    return { order, orderItems, customer, marketplace };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { order, orderItems, customer, marketplace } = useLoaderData({
    from: "/orders/detail/$orderId",
  });

  return (
    <>
      <DetailsHeader orderId={order.order_id} marketplace={marketplace} />
      <Grid2 container spacing={2}>
        <Grid2 size={10}>
          <Stack>
            <ItemsBox items={orderItems} />
            <Grid2 container spacing={2}>
              <DetailsBox
                title="General"
                details={[
                  { title: "Order ID", value: order.order_id },
                  { title: "Marketplace", value: marketplace.name },
                  { title: "Status", value: OrderStatusName[order.status] },
                  { title: "Order Date", value: order.order_date },
                  { title: "Total Price", value: order.total_price },
                  { title: "Carrier", value: order.carrier },
                ]}
              />
              <DetailsBox
                title="Billing"
                details={[
                  { title: "First Name", value: customer.bill_firstname },
                  { title: "Last Name", value: customer.bill_lastname },
                  { title: "Email", value: customer.bill_email },
                  { title: "Phone", value: customer.bill_phone },
                  { title: "Company", value: customer.bill_company },
                  { title: "Address", value: customer.bill_address },
                  { title: "City", value: customer.bill_city },
                  { title: "Zip Code", value: customer.bill_zipcode },
                  {
                    title: "Country",
                    value: CountryCodeName[customer.bill_country],
                  },
                ]}
              />
              <DetailsBox
                title="Shipping"
                details={[
                  { title: "First Name", value: customer.ship_firstname },
                  { title: "Last Name", value: customer.ship_lastname },
                  { title: "Email", value: customer.ship_email },
                  { title: "Phone", value: customer.ship_phone },
                  { title: "Company", value: customer.ship_company },
                  { title: "Address", value: customer.ship_address },
                  { title: "City", value: customer.ship_city },
                  { title: "Zip Code", value: customer.ship_zipcode },
                  {
                    title: "Country",
                    value: CountryCodeName[customer.ship_country],
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
