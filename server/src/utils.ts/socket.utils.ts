import type { Socket } from 'socket.io'

import { SocketEvents } from '@/types/socket-events'

/**
 * @description Binds a socket to a function
 */
export function bindSocket<TFunc extends (...args: unknown[]) => unknown>(socket: Socket, fn: TFunc) {
  return (...args: Parameters<TFunc>) => fn(socket, ...args)
}

/**
 * @description Emits an error to the socket
 */
export function error(socket: Socket, err: string) {
  socket.emit(SocketEvents.ERROR, err)
}
