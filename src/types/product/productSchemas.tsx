import { z } from "zod";
import { marketplaceSchema } from "../marketplace/marketplaceSchemas";
import { DataType } from "./productEnums";

export const productAttributeTypeSchema = z.object({
  id: z.number().min(0),
  name: z.string(),
  data_type: z.nativeEnum(DataType),
});

const baseFields = {
  id: z.number().min(0),
  attribute_type: productAttributeTypeSchema,
};

export const productAttributeSchema = z.discriminatedUnion("data_type", [
  z.object({
    ...baseFields,
    data_type: z.literal(DataType.INT),
    data: z.number().int(),
  }),
  z.object({
    ...baseFields,
    data_type: z.literal(DataType.DECIMAL),
    data: z.number(),
  }),
  z.object({
    ...baseFields,
    data_type: z.literal(DataType.STRING),
    data: z.string(),
  }),
  z.object({
    ...baseFields,
    data_type: z.literal(DataType.TEXT),
    data: z.string(),
  }),
  z.object({
    ...baseFields,
    data_type: z.literal(DataType.DATE),
    data: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    }),
  }),
  z.object({
    ...baseFields,
    data_type: z.literal(DataType.DATETIME),
    data: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid datetime format",
    }),
  }),
  z.object({
    ...baseFields,
    data_type: z.literal(DataType.BOOLEAN),
    data: z.boolean(),
  }),
]);

export const productChildSchema = z.object({
  id: z.number().min(0),
  parent: z.number().min(0),
  name: z.number().min(0),
  sku: z.string(),
  reference: z.string(),
  price: z.number().min(0),
  stock: z.number().min(0).int(),
  image: z.string().url(),
  marketplaces: z.array(z.number()).min(1),
});

export const productSchema = z.object({
  id: z.number().min(0),
  parent: z.number().min(0).nullable(),
  name: z.string(),
  sku: z.string(),
  reference: z.string(),
  price: z.number().min(0),
  stock: z.number().min(0).int(),
  image: z.string().url(),
  marketplaces: z.array(z.number()).min(1),
  attributes: z.array(productAttributeSchema),
  children: z.array(productChildSchema),
});

export const marketplaceProductSchema = z.object({
  id: z.number().min(0),
  product: productSchema,
  marketplace: marketplaceSchema,
});
