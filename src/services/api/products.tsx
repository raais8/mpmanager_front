import { Product, ProductChild } from "../../types/product/productTypes";
import axiosInstance from "./axiosInstance";

export const getProductList = async (page?: number, limit?: number) => {
  try {
    const response = await axiosInstance.get("products/api/product-list", {
      params: { page, limit },
    });
    const productsCount = response.data["count"];
    const products = response.data["results"].map((item: Product) => ({
      id: item.id,
      parent: item.parent,
      name: item.name,
      sku: item.sku,
      reference: item.reference,
      price: item.price,
      stock: item.stock,
      image: item.image,
      marketplaces: item.marketplaces.map((marketplace) => ({
        id: marketplace,
      })),
      children: item.children.map((child: ProductChild) => ({
        id: child.id,
        parent: child.parent,
        name: child.name,
        sku: child.sku,
        reference: child.reference,
        price: child.price,
        stock: child.stock,
        image: child.image,
        marketplaces: child.marketplaces.map((marketplace) => ({
          id: marketplace,
        })),
      })),
    }));
    return { products, productsCount };
  } catch (error) {
    throw error;
  }
};
