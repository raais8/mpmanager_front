import { z } from "zod";
import { customerSchema, orderItemSchema, orderSchema } from "./orderSchemas";

export type Customer = z.infer<typeof customerSchema>;

export type OrderItem = z.infer<typeof orderItemSchema>;

export type Order = z.infer<typeof orderSchema>;
