import './index.css'

import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import { createRouter, RouterProvider } from '@tanstack/react-router'

import { USER_EXPIRES_IN } from './config/app.constants'
import { User, userSchema } from './config/schemas/user.zod'
import { routeTree } from './routeTree.gen'
import { useApp } from './state/app.store'

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  context: {
    user: null as User | null
  }
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootEl = document.getElementById('root')!
if (!rootEl.innerHTML) createRoot(rootEl).render(<Main />)

function Main() {
  const { user, setUser } = useApp()

  useEffect(() => {
    const storageRes = localStorage.getItem('user')
    const parsed = JSON.parse(storageRes || '{}')

    const validationRes = userSchema.safeParse(parsed)
    if (!validationRes.success) return localStorage.removeItem('user')

    const storedUser = validationRes.data
    storedUser.expiresIn = new Date(Date.now() + USER_EXPIRES_IN)

    localStorage.setItem('user', JSON.stringify(storedUser))
    setUser(storedUser)
  }, [])
  return (
    <div className='animate-in zoom-in-0'>
      <RouterProvider router={router} context={{ user }} />
    </div>
  )
}
