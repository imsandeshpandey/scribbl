import './index.css'

import { createRoot } from 'react-dom/client'

import { createRouter, RouterProvider } from '@tanstack/react-router'

import { routeTree } from './routeTree.gen'

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent'
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
