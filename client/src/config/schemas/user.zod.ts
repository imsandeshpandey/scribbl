import { z } from 'zod'

import { avatarConfigSchema } from '@/components/avatars/config'
import { hashToConfig } from '@/components/avatars/utils'

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  avatar: z.preprocess((val) => {
    if (typeof val !== 'string') return val
    return hashToConfig(val)
  }, avatarConfigSchema),
  expiresIn: z.coerce.date()
})

export type User = z.infer<typeof userSchema>
