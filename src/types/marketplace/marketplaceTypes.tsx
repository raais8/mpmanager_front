import { z } from "zod";
import { marketplaceSchema } from "./marketplaceSchemas";

export type Marketplace = z.infer<typeof marketplaceSchema>;
