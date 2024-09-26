import { z } from 'zod'

const schema = z.object({
  PORT: z.coerce.number().refine((port) => port > 1024 && port < 65535),
  SERVER_URL: z.string(),
  WEBSOCKET_URL: z.string(),

  SUPABASE_URL: z.string(),
  SUPABASE_ANON_KEY: z.string(),

  JWT_SECRET: z.string()
})

export const env = schema.parse(parseViteEnv(import.meta.env))

function parseViteEnv(env: Record<string, string | undefined>) {
  const keys = Object.keys(env)
  return Object.fromEntries(
    keys.map((key) => {
      const newKey = key.replace('VITE_', '')
      return [newKey, env[key]]
    })
  )
}
