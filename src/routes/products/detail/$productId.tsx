import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { getProduct } from "../../../services/api/products";
import DetailsHeader from "../../../components/products/products-detail/product-header/DetailHeader";
import { Grid2, Stack } from "@mui/material";
import ProductDetails from "../../../components/products/products-detail/porduct-details/ProductDetails";
import ElementBox from "../../../components/common/ElementBox";
import ElementBoxTitle from "../../../components/common/ElementBoxTitle";
import MarketplaceProductTabs from "../../../components/products/products-detail/product-marketplace/MarketplaceProductTabs";
import { getMarketplaces } from "../../../services/api/marketplace";

export const Route = createFileRoute("/products/detail/$productId")({
  loader: async ({ params }) => {
    const product = await getProduct(Number(params.productId));
    const marketplaces = await getMarketplaces();
    return { product, marketplaces };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { product, marketplaces } = useLoaderData({
    from: "/products/detail/$productId",
  });

  return (
    <>
      <DetailsHeader productSKU={product.sku} productName={product.name} />
      <Grid2 container spacing={2}>
        <Grid2 size={9}>
          <Stack spacing={2}>
            <ProductDetails product={product} />
            <MarketplaceProductTabs marketplaces={marketplaces} />
          </Stack>
        </Grid2>
        <Grid2 size={3}>
          <ElementBoxTitle title="Channels Status" />
          <ElementBox>Status</ElementBox>
        </Grid2>
      </Grid2>
    </>
  );
}
