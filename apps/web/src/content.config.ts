import { defineCollection, z, reference } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: 'src/data/blog' }),
  schema: z.object({
    title: z.string(),
    author: reference('authors'),
    relatedPosts: z.array(reference('blog'))
  })
})

const authors = defineCollection({
  loader: glob({ pattern: "**/*.json", base: 'src/data/authors' }),
  schema: z.object({
    name: z.string(),
    portfolio: z.string().url(),
  })
})

export const collections = { blog, authors }
