import { z } from "zod";
import {
  carrierSchema,
  customerSchema,
  orderItemSchema,
  orderSchema,
} from "./orderSchemas";

export type Customer = z.infer<typeof customerSchema>;

export type Carrier = z.infer<typeof carrierSchema>;

export type OrderItem = z.infer<typeof orderItemSchema>;

export type Order = z.infer<typeof orderSchema>;
