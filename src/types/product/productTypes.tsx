import { z } from "zod";
import {
  marketplaceProductSchema,
  productChildSchema,
  productSchema,
} from "./productSchemas";

export type ProductChild = z.infer<typeof productChildSchema>;

export type Product = z.infer<typeof productSchema>;

export type MarketplaceProduct = z.infer<typeof marketplaceProductSchema>;
