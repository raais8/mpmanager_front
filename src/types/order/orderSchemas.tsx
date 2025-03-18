import { z } from "zod";
import { marketplaceSchema } from "../marketplace/marketplaceSchemas";
import { Country, OrderStatus, PayMethod } from "./orderEnums";
import { marketplaceProductSchema } from "../product/productSchemas";

export const customerSchema = z.object({
  id: z.number().min(0),
  bill_phone: z.string(),
  bill_email: z.string().email(),
  bill_firstname: z.string(),
  bill_lastname: z.string(),
  bill_company: z.string(),
  bill_address: z.string(),
  bill_city: z.string(),
  bill_zipcode: z.string(),
  bill_country: z.nativeEnum(Country),
  ship_phone: z.string(),
  ship_email: z.string().email(),
  ship_firstname: z.string(),
  ship_lastname: z.string(),
  ship_company: z.string(),
  ship_address: z.string(),
  ship_city: z.string(),
  ship_zipcode: z.string(),
  ship_country: z.nativeEnum(Country),
});

export const carrierSchema = z.object({
  id: z.number().min(0),
  name: z.string(),
});

export const orderItemSchema = z.object({
  order_id: z.number().min(0),
  quantity: z.number().min(0).int(),
  purchase_price: z.number().min(0),
  marketplace_product: marketplaceProductSchema,
});

export const orderSchema = z.object({
  id: z.number().min(0),
  order_id: z.string(),
  marketplace: marketplaceSchema,
  customer: customerSchema,
  status: z.nativeEnum(OrderStatus),
  order_date: z.string().datetime(),
  total_price: z.number().min(0),
  carrier: carrierSchema,
  ticket: z.string(),
  ticket_refund: z.string(),
  pay_method: z.nativeEnum(PayMethod),
  package_quantity: z.number().min(0).int(),
  weight: z.number().min(0),
  order_items: z.array(orderItemSchema),
  notes: z.string(),
  updated_at: z.string().datetime(),
});
