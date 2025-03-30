import { z } from "zod";
import { Country } from "../order/orderEnums";

export const marketplaceSchema = z.object({
  id: z.number().min(0),
  country: z.nativeEnum(Country),
  name: z.string(),
  logo_url: z.string().url(),
  color: z.string(),
});
