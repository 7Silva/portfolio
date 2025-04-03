import { z } from 'zod'

export const projectSchema = z.object({
  title: z.string(),
  image: z.string(),
  content: z.array(
    z.object({
      id: z.number(),
      title: z.string().optional(),
      description: z.string(),
      button: z
        .object({
          text: z.string(),
          link: z.string().url(),
        })
        .optional(),
      image: z.string().optional(),
    }),
  ),
})
