import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

import { serveStatic } from '@hono/node-server/serve-static'
import { trpcServer } from '@hono/trpc-server'

import { appRouter } from './trpc'

const app = new Hono()
app.use('*', cors())
app.use('*', logger())

app.get('/', (c) => c.text('Hello Hono!'))

app.use(
  '*',
  trpcServer({
    router: appRouter,
    endpoint: '/api/trpc'
  })
)

// Serve React app for all the routes except "/api"
app.use('*', serveStatic({ root: '../../client/dist' }))
app.use('*', serveStatic({ path: '../../client/dist/index.html' }))

export default app
