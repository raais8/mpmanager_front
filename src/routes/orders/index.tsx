import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import OrdersBox from "../../components/orders/orders-list/OrdersBox";
import { getMarketplaceList } from "../../services/api/marketplace";

export const Route = createFileRoute("/orders/")({
  loader: () => getMarketplaceList(),
  component: RouteComponent,
});

function RouteComponent() {
  const marketplaces = useLoaderData({
    from: "/orders/",
  });

  return (
    <>
      <OrdersBox marketplaces={marketplaces} />
    </>
  );
}
