import { defineCollection, z } from 'astro:content';

const blogSchema = z.object({
  title: z.string(),
  excerpt: z.string(),
  date: z.string(),
  readTime: z.string(),
  tags: z.array(z.string()),
  image: z.string().optional(),
});

export const collections = {
  blog: defineCollection({ type: 'content', schema: blogSchema }),
};
