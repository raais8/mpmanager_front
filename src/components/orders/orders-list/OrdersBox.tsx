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
import { useQuery } from "@tanstack/react-query";

export default function OrdersBox() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [ordersPerPage, setOrdersPerPage] = useState<number>(4);
  const [searchField, setSearchField] = useState<string>("");
  const [selectedMarketplaces, setSelectedMarketplaces] = useState<number[]>(
    []
  );

  const {
    data: marketplaces = [],
    isPending: isPendingMarketplaces,
    isError: isErrorMarketplaces,
  } = useQuery<Marketplace[]>({
    queryKey: ["marketplaces"],
    queryFn: getMarketplaces,
  });

  const {
    data,
    isLoading: isLoadingOrders,
    isError: isErrorOrders,
  } = useQuery({
    queryKey: [
      "orders",
      currentPage,
      ordersPerPage,
      searchField,
      selectedMarketplaces,
    ],
    queryFn: () =>
      getOrderList(
        searchField ? undefined : currentPage + 1,
        searchField ? undefined : ordersPerPage,
        searchField,
        selectedMarketplaces.toString()
      ),
  });

  const orders: Order[] = data?.orders || [];
  const ordersCount = data?.ordersCount || 0;

  useEffect(() => {
    if (marketplaces.length > 0) {
      setSelectedMarketplaces(
        marketplaces.map((marketplace) => marketplace.id)
      );
    }
  }, [marketplaces]);

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
          {isPendingMarketplaces ? (
            <div>Loading...</div>
          ) : (
            <MarketplaceFilter
              marketplaces={marketplaces}
              onMarketplaceSelectionChange={handleOnMarketplaceSelectionChange}
            />
          )}
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
      <OrdersTable orders={orders} isLoading={isLoadingOrders} />
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
