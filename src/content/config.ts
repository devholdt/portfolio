import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      url: z.string()
    })
});

export const collections = {
    projects: projectsCollection,
  };