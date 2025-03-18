import { z } from "zod";
import { marketplaceSchema } from "../marketplace/marketplaceSchemas";

export const productChildSchema = z.object({
  id: z.number().min(0),
  parent: z.number().min(0),
  name: z.number().min(0),
  sku: z.string(),
  reference: z.string(),
  price: z.number().min(0),
  stock: z.number().min(0).int(),
  image: z.string().url(),
  marketplaces: z.array(marketplaceSchema.pick({ id: true })),
});

export const productSchema = z.object({
  id: z.number().min(0),
  parent: z.number().min(0),
  name: z.string(),
  sku: z.string(),
  reference: z.string(),
  price: z.number().min(0),
  stock: z.number().min(0).int(),
  image: z.string().url(),
  marketplaces: z.array(marketplaceSchema.pick({ id: true })),
  children: z.array(productChildSchema),
});

export const marketplaceProductSchema = z.object({
  id: z.number().min(0),
  product: productSchema,
  marketplace: marketplaceSchema,
});
