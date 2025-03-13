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
import OrdersTablePagination from "./OrdersTablePagination ";
import OrdersAdd from "./OrdersAdd";

export default function OrdersBox() {
  const [marketplaces, setMarketplaces] = useState<Marketplace[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [ordersCount, setOrdersCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [ordersPerPage, setOrdersPerPage] = useState<number>(4);
  const [searchField, setSearchField] = useState<string>("");
  const [selectedMarketplaces, setSelectedMarketplaces] = useState<number[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        const { orders, ordersCount } = await getOrderList(
          searchField ? undefined : currentPage + 1,
          searchField ? undefined : ordersPerPage,
          searchField,
          selectedMarketplaces.toString()
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
  }, [currentPage, ordersPerPage, searchField, selectedMarketplaces]);

  useEffect(() => {
    const fetchMarketplaces = async () => {
      try {
        const marketplaces = await getMarketplaces();
        setMarketplaces(marketplaces);
        setSelectedMarketplaces(
          marketplaces.map((marketplace: Marketplace) => marketplace.id)
        );
      } catch (error) {
        console.error("Error fetching marketplaces:", error);
      } finally {
      }
    };

    fetchMarketplaces();
  }, []);

  const handleOnPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (searchValue: string) => {
    setCurrentPage(0);
    setSearchField(searchValue);
  };

  const handleOnRowsPerPageChange = (count: number) => {
    setCurrentPage(0);
    setOrdersPerPage(count);
  };

  const handleOnMarketplaceSelectionChange = (selection: number[]) => {
    setCurrentPage(0);
    setSelectedMarketplaces(selection);
  };

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
            marketplaces={marketplaces}
            onMarketplaceSelectionChange={handleOnMarketplaceSelectionChange}
          />
        </Grid2>
        <Grid2 container>
          <Grid2 sx={{ display: "flex" }}>
            <OrdersAdd />
          </Grid2>
          <Grid2 sx={{ display: "flex" }}>
            <OrdersSerach onSearch={handleSearch} />
          </Grid2>
        </Grid2>
      </Grid2>
      <OrdersTable orders={orders} isLoading={isLoading} />
      <OrdersTablePagination
        count={ordersCount}
        page={currentPage}
        rowsPerPage={ordersPerPage}
        onPageChange={handleOnPageChange}
        onRowsPerPageChange={handleOnRowsPerPageChange}
      />
    </ElementBox>
  );
}
