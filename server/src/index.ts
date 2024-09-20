import type { Server as HttpServer } from 'http'
import { Server as SocketIOServer } from 'socket.io'

import { serve } from '@hono/node-server'

import app from './app'
import { env } from './env'

export const server = serve({
  port: env.PORT,
  fetch: app.fetch
})

export const io = new SocketIOServer(server as HttpServer, {
  cors: {
    origin: env.CLIENT_URL
  }
})

io.on('connection', (ws) => {
  console.log(ws.id, 'connected!')
  ws.on('disconnect', () => console.log(ws.id, 'disconnected!'))
})
