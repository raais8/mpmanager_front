import { useQuery } from "@tanstack/react-query";
import ElementBox from "../../common/ElementBox";
import ProductsTable from "./products-table/ProductsTable";
import { getProductList } from "../../../services/api/products";
import { useEffect, useState } from "react";
import { Grid2 } from "@mui/material";
import { Product } from "../../../types/product/productTypes";
import { getMarketplaces } from "../../../services/api/marketplace";
import { Marketplace } from "../../../types/marketplace/marketplaceTypes";
import CustomTablePagination from "../../common/tables/CustomTablePagination";
import TableMarketplaceFilter from "../../common/tables/TableMarketplaceFilter";
import TableSerach from "../../common/tables/TableSearch";

export default function ProductsBox() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [productsPerPage, setProductsPerPage] = useState<number>(4);
  const [searchField, setSearchField] = useState<string>("");
  const [selectedMarketplaces, setSelectedMarketplaces] = useState<number[]>(
    []
  );

  const { data: marketplaces = [], isLoading: isLoadingMarketplaces } =
    useQuery<Marketplace[]>({
      queryKey: ["marketplaces"],
      queryFn: getMarketplaces,
    });

  const { data, isLoading } = useQuery<{
    products: Product[];
    productsCount: number;
  }>({
    queryKey: [
      "products",
      currentPage,
      productsPerPage,
      searchField,
      selectedMarketplaces,
    ],
    queryFn: () =>
      getProductList(
        currentPage + 1,
        productsPerPage,
        searchField,
        selectedMarketplaces.toString()
      ),
  });

  const products = data?.products ?? [];
  const productsCount = data?.productsCount ?? 0;

  useEffect(() => {
    if (marketplaces.length > 0) {
      setSelectedMarketplaces(
        marketplaces.map((marketplace) => marketplace.id)
      );
    }
  }, [marketplaces]);

  const handleOnPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleOnRowsPerPageChange = (rowsNumber: number) => {
    setProductsPerPage(rowsNumber);
    setCurrentPage(0);
  };

  const handleSearch = (searchValue: string) => {
    setCurrentPage(0);
    setSearchField(searchValue);
  };

  const handleOnMarketplaceSelectionChange = (selection: number[]) => {
    setCurrentPage(0);
    setSelectedMarketplaces(selection);
  };

  return (
    <>
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
              onMarketplaceSelectionChange={handleOnMarketplaceSelectionChange}
            />
          </Grid2>
          <Grid2 container>
            <Grid2 sx={{ display: "flex" }}>
              <TableSerach onSearch={handleSearch} />
            </Grid2>
          </Grid2>
        </Grid2>
        <ProductsTable
          products={products}
          marketplaces={marketplaces}
          isLoading={isLoadingMarketplaces && isLoading}
        />
        <CustomTablePagination
          count={productsCount}
          page={!productsCount || productsCount <= 0 ? 0 : currentPage}
          onPageChange={(pageNumber) => handleOnPageChange(pageNumber)}
          rowsPerPage={productsPerPage}
          onRowsPerPageChange={(rowsNumber) =>
            handleOnRowsPerPageChange(rowsNumber)
          }
        />
      </ElementBox>
    </>
  );
}
