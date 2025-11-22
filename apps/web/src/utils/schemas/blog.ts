import { z, reference } from "astro:content";

export const blogSchema = z.object({
	title: z.string(),
	author: reference("authors"),
	relatedPosts: z.array(reference("blog")),
});
