import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { Session } from '@supabase/supabase-js'

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  context: {
    session: null as Session | null
  }
})

const rootEl = document.getElementById('root')!
if (!rootEl.innerHTML) {
  createRoot(rootEl).render(<RouterProvider router={router} />)
}

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
