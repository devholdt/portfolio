import { defineCollection, z } from 'astro:content';

export const collections = {
	projects: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			tagline: z.string().optional(),
			tags: z.array(z.string()).optional(),
			url_repo: z.string(),
			url_live: z.string(),
			img_main: z.string(),
			img_main_alt: z.string().optional(),
			img_secondary: z.string().optional(),
			img_secondary_alt: z.string().optional(),
		}),
	}),
};
