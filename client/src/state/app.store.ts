import { createSelector } from 'better-zustand-selector'
import { create } from 'zustand'

import { AvatarConfig } from '@/components/avatars/config'
import { configToHash } from '@/components/avatars/utils'
import { USER_EXPIRES_IN } from '@/config/app.constants'
import { User } from '@/config/schemas/user.zod'

type AppStore = {
  user: User | null

  setUser: (user: User) => void
  refreshSession: () => void
  registerUser: (name: string, avatar: AvatarConfig) => void
}

export const appStore = create<AppStore>((set) => ({
  loading: true,
  user: null,

  setUser: (user) => set({ user }),

  refreshSession: () =>
    set((s) => {
      if (!s.user) return s
      return {
        user: {
          ...s.user,
          expiresIn: new Date(Date.now() + USER_EXPIRES_IN)
        }
      }
    }),

  registerUser: (name: string, avatar: AvatarConfig) =>
    set(() => {
      const user = {
        id: crypto.randomUUID(),
        name,
        avatar: configToHash(avatar),
        expiresIn: new Date(Date.now() + USER_EXPIRES_IN)
      }

      localStorage.setItem('user', JSON.stringify(user))
      return { user: { ...user, avatar } }
    })
}))

export const useApp = createSelector(appStore)
