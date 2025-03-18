import { createFileRoute } from "@tanstack/react-router";
import ProductsBox from "../../components/products/ProductsBox";

export const Route = createFileRoute("/products/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <ProductsBox />
    </>
  );
}
