import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tagline: z.string().optional(),
      tags: z.array(z.string()).optional(),
      tech: z.array(z.string()).optional(),
      url_repo: z.string(),
      url_live: z.string(),
      img_main: image(),
      // img_main: image().refine((img) => img.width >= 600, {
      //   message: "Image must be at least 600px wide",
      // }),
      img_main_alt: z.string(),
      img_secondary: image(),
      // img_secondary: image().refine((img) => img.width >= 600, {
      //   message: "Image must be at least 600px wide",
      // }),
      img_secondary_alt: z.string(),
      order: z.number().optional(),
    }),
});

export const collections = {
  projects: projectCollection,
};

// export const collections = {
//   projects: defineCollection({
//     type: "content",
//     schema: z.object({
//       title: z.string(),
//       description: z.string(),
//       tagline: z.string().optional(),
//       tags: z.array(z.string()).optional(),
//       tech: z.array(z.string()).optional(),
//       url_repo: z.string(),
//       url_live: z.string(),
//       img_main: z.string(),
//       img_main_alt: z.string(),
//       img_secondary: z.string(),
//       img_secondary_alt: z.string(),
//       order: z.number().optional(),
//     }),
//   }),
// };
