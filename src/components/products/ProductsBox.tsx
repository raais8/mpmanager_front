import { useQuery } from "@tanstack/react-query";
import ElementBox from "../common/ElementBox";
import ProductsTable from "./products-table/ProductsTable";
import { getProductList } from "../../services/api/products";
import { useState } from "react";
import { Grid2 } from "@mui/material";
import { Product } from "../../types/product/productTypes";
import { getMarketplaces } from "../../services/api/marketplace";
import { Marketplace } from "../../types/marketplace/marketplaceTypes";
import CustomTablePagination from "../common/tables/CustomTablePagination";

export default function ProductsBox() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [productsPerPage, setProductsPerPage] = useState<number>(4);

  // const { data: marketplaces, isLoading: isLoadingMarketplaces } = useQuery<{
  //   marketplaces: Marketplace[];
  // }>({
  //   queryKey: ["marketplaces"],
  //   queryFn: getMarketplaces,
  // });

  const { data, isLoading } = useQuery<{
    products: Product[];
    productsCount: number;
  }>({
    queryKey: ["products", currentPage, productsPerPage],
    queryFn: () => getProductList(currentPage + 1, productsPerPage),
  });

  const products = data?.products ?? [];
  const productsCount = data?.productsCount ?? 0;

  const handleOnPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleOnRowsPerPageChange = (rowsNumber: number) => {
    setProductsPerPage(rowsNumber);
    setCurrentPage(0);
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
          <Grid2 size={2}></Grid2>
          <Grid2 container>
            <Grid2 sx={{ display: "flex" }}></Grid2>
          </Grid2>
        </Grid2>
        <ProductsTable products={products} isLoading={isLoading} />
        <CustomTablePagination
          count={productsCount}
          page={currentPage}
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
