import { create } from 'zustand'
import { Session } from '@supabase/supabase-js'
import { createSelector } from 'better-zustand-selector'

type AppStore = {
  loading: boolean
  session: Session | null

  setLoading: (loading: boolean) => void
  setSession: (session: Session | null) => void
}

export const appStore = create<AppStore>((set) => ({
  loading: true,
  session: null,

  setLoading: (loading) => set({ loading }),
  setSession: (session) => set({ session })
}))

export const useApp = createSelector(appStore)
