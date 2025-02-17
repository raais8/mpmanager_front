import ElementBox from "../../common/ElementBox";
import OrdersTable from "./OrdersTable";
import MarketplaceFilter from "./MarketplaceFilter";
import { useEffect, useState } from "react";
import { Marketplace } from "../../../types/marketplace/marketplaceTypes";
import { getMarketplaces } from "../../../services/api/marketplace";
import OrdersSerach from "./OrdersSearch";
import { Grid2 } from "@mui/material";
import { getOrderList } from "../../../services/api/orders";
import { Order } from "../../../types/order/orderTypes";

export default function OrdersBox() {
  const [maketplaces, setMarketplaces] = useState<Marketplace[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [ordersCount, setOrdersCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [ordersPerPage, setOrdersPerPage] = useState<number>(4);
  const [selectedMarketplaces, setSelectedMarketplaces] = useState<number[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchMarketplaces = async () => {
      setIsLoading(true);
      try {
        const marketplaces = await getMarketplaces();
        setMarketplaces(marketplaces);
        setSelectedMarketplaces(
          marketplaces.map((marketplace: Marketplace) => marketplace.id)
        );
      } catch (error) {
        console.error("Error fetching marketplaces:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarketplaces();
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        const { orders, ordersCount } = await getOrderList(
          currentPage,
          ordersPerPage
        );
        setOrders(orders);
        setOrdersCount(ordersCount);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, [currentPage, ordersPerPage]);

  return (
    <ElementBox>
      <Grid2
        container
        spacing={2}
        justifyContent={"space-between"}
        sx={{ padding: "0.6rem" }}
      >
        <Grid2 size={2}>
          <MarketplaceFilter
            marketplaces={maketplaces}
            onMarketplaceSelectionChange={setSelectedMarketplaces}
          />
        </Grid2>
        <Grid2 size={2}>
          <OrdersSerach />
        </Grid2>
      </Grid2>
      <OrdersTable
        orders={orders}
        ordersCount={ordersCount}
        onCurrentPageChange={setCurrentPage}
        onOrdersPerPageChange={setOrdersPerPage}
        selectedMarketplaces={selectedMarketplaces}
      />
    </ElementBox>
  );
}
