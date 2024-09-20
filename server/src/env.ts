import 'dotenv/config'

import { z } from 'zod'

const schema = z.object({
  PORT: z.coerce
    .number()
    .refine((port) => port > 1024 && port < 65535)
    .default(3001),
  CLIENT_URL: z.string(),
  DATABASE_URL: z.string(),
  SUPABASE_URL: z.string(),
  SUPABASE_ANON_KEY: z.string(),
  SUPABASE_SERVICE_ROLE_KEY: z.string()
})

export const env = schema.parse(process.env)
