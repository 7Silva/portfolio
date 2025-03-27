import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().min(5, 'Name must be at least 5 characters long'),
  email: z.string().email('Invalid email'),
  message: z.string().min(25, 'Message must be at least 25 characters long'),
})
