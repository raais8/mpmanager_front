import { Box, Button, Grid2 } from "@mui/material";
import {
  Product,
  ProductAttribute,
} from "../../../../types/product/productTypes";
import ElementBox from "../../../common/ElementBox";
import ImageCarousel from "../../../common/ImageCarousel";
import CustomTextField from "../../../common/forms/CustomTextField";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { productSchema } from "../../../../types/product/productSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { patchProduct } from "../../../../services/api/products";
import { useEffect, useState } from "react";

interface Props {
  product: Product;
}

type formData = z.infer<typeof productSchema>;

export default function ProductDetails({ product }: Props) {
  const images = [product.image, String(product.attributes[1].data)];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      id: product.id,
      parent: product.parent,
      name: product.name,
      sku: product.sku,
      reference: product.reference,
      price: product.price,
      stock: product.stock,
      image: product.image,
      marketplaces: product.marketplaces,
      attributes: product.attributes,
      children: product.children,
    },
  });

  const onSubmit: SubmitHandler<formData> = async (data) => {
    await patchProduct(product.id, data);
    console.log("Product updated successfully", data);
  };

  // const submitWithErrorHandling = handleSubmit(
  //   (data) => {
  //     console.log("Success:", data);
  //   },
  //   (errors) => {
  //     console.log("Form validation errors:", errors);
  //   }
  // );

  return (
    <ElementBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <form onSubmit={submitWithErrorHandling}> */}
        <Box sx={{ padding: "0.6rem" }}>
          <Grid2 container spacing={2}>
            <Grid2 size={2} sx={{ display: "flex", justifyContent: "center" }}>
              <ImageCarousel images={images} />
            </Grid2>
            <Grid2 size={10}>
              <Grid2 container spacing={2}>
                <Grid2 size={6}>
                  <CustomTextField
                    label="Name"
                    name="name"
                    register={() => register("name")}
                    defaultValue={product.name}
                  />
                </Grid2>
                <Grid2 size={3}>
                  <CustomTextField
                    label="SKU"
                    name="sku"
                    register={() => register("sku")}
                    defaultValue={product.sku}
                  />
                </Grid2>
                <Grid2 size={3}>
                  <CustomTextField
                    label="Reference"
                    name="reference"
                    register={() => register("reference")}
                    defaultValue={product.reference}
                  />
                </Grid2>
                <Grid2 size={3}>
                  <CustomTextField
                    label="Price"
                    name="price"
                    register={() => register("price", { valueAsNumber: true })}
                    defaultValue={product.price}
                    error={errors.price ? true : false}
                    helperText={errors.price?.message}
                    adornment="€"
                  />
                </Grid2>
                <Grid2 size={3}>
                  <CustomTextField
                    label="Stock"
                    name="stock"
                    register={() => register("stock", { valueAsNumber: true })}
                    defaultValue={product.stock}
                    error={errors.stock ? true : false}
                    helperText={errors.stock?.message}
                  />
                </Grid2>
                {product.attributes.map((attribute) => (
                  <Grid2 key={attribute.id} size={3}>
                    test
                  </Grid2>
                ))}
              </Grid2>
            </Grid2>
          </Grid2>
        </Box>
        <Button type="submit">Save</Button>
      </form>
    </ElementBox>
  );
}
