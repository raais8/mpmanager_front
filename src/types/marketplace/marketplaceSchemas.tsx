import { z } from "zod";

export const marketplaceSchema = z.object({
  id: z.number().min(0),
  name: z.string(),
  logo_url: z.string().url(),
  color: z.string(),
});
