import { z } from "astro:content";

export const authorSchema = z.object({
	name: z.string(),
	portfolio: z.string().url(),
});
