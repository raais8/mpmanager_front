import ElementBox from "../../common/ElementBox";
import OrdersTable from "./OrdersTable";
import { useState } from "react";
import { Marketplace } from "../../../types/marketplace/marketplaceTypes";
import { Grid2 } from "@mui/material";
import { getCustomerList, getOrderList } from "../../../services/api/orders";
import { Order } from "../../../types/order/orderTypes";
import OrdersAdd from "./OrdersAdd";
import { useQuery } from "@tanstack/react-query";
import TableMarketplaceFilter from "../../common/tables/TableMarketplaceFilter";
import TableSerach from "../../common/tables/TableSearch";
import CustomTablePagination from "../../common/tables/CustomTablePagination";

interface Props {
  marketplaces: Marketplace[];
}

export default function OrdersBox({ marketplaces }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [ordersPerPage, setOrdersPerPage] = useState<number>(4);
  const [searchField, setSearchField] = useState<string>("");
  const [selectedMarketplaces, setSelectedMarketplaces] = useState<number[]>(
    marketplaces.map((marketplace) => marketplace.id)
  );

  // Get orders
  const { data, isPending: isPendingOrders } = useQuery({
    queryKey: [
      "orders",
      currentPage + 1,
      ordersPerPage,
      searchField,
      selectedMarketplaces,
    ],
    queryFn: () =>
      getOrderList(
        currentPage + 1,
        ordersPerPage,
        searchField,
        selectedMarketplaces.toString()
      ),
  });

  const orders: Order[] = data?.orders;
  const ordersCount = data?.ordersCount;
  const ordersCustomers = data?.orders?.map((order: Order) => order.customer);

  // Get customers
  const { data: customers = [], isPending: isPendingCustomers } = useQuery({
    queryKey: ["customers", ordersCustomers],
    queryFn: () => getCustomerList(ordersCustomers),
    enabled: !!ordersCustomers,
  });

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
    console.log(selection);
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
        <Grid2 size={3}>
          <TableMarketplaceFilter
            marketplaces={marketplaces}
            selectedMarketplaces={selectedMarketplaces}
            onMarketplaceSelectionChange={handleOnMarketplaceSelectionChange}
          />
        </Grid2>
        <Grid2 container>
          <Grid2 sx={{ display: "flex" }}>
            <OrdersAdd />
          </Grid2>
          <Grid2 sx={{ display: "flex" }}>
            <TableSerach onSearch={handleSearch} />
          </Grid2>
        </Grid2>
      </Grid2>
      {isPendingOrders || isPendingCustomers ? (
        <div>Loading...</div>
      ) : (
        <>
          <OrdersTable
            orders={orders}
            marketplaces={marketplaces}
            customers={customers}
            isLoading={isPendingOrders || isPendingCustomers}
          />
          <CustomTablePagination
            count={ordersCount}
            page={!ordersCount || ordersCount <= 0 ? 0 : currentPage}
            rowsPerPage={ordersPerPage}
            onPageChange={handleOnPageChange}
            onRowsPerPageChange={handleOnRowsPerPageChange}
          />
        </>
      )}
    </ElementBox>
  );
}
