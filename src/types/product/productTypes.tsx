import { z } from "zod";
import {
  marketplaceProductSchema,
  productAttributeSchema,
  productAttributeTypeSchema,
  productChildSchema,
  productSchema,
} from "./productSchemas";

export type ProductAttributeType = z.infer<typeof productAttributeTypeSchema>;

export type ProductAttribute = z.infer<typeof productAttributeSchema>;

export type ProductChild = z.infer<typeof productChildSchema>;

export type Product = z.infer<typeof productSchema>;

export type MarketplaceProduct = z.infer<typeof marketplaceProductSchema>;
