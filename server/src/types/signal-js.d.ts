// signal-js.d.ts

declare module 'signal-js' {
  // Event map key type
  type EventKey = string | number | symbol

  // Function type for event listeners
  type Listener = (...args: any[]) => void

  // Signal prototype declaration
  interface Signal {
    // Event subscription methods
    on(name: EventKey, fn: Listener): this
    off(name: EventKey, fn?: Listener): this
    once(name: EventKey, fn: Listener): this

    // Event emission method
    emit(name: EventKey, ...args: any[]): this

    // Listeners management methods
    listeners(name?: EventKey): Listener[]
    names(): EventKey[]
    size(name?: EventKey): number
    clear(name?: EventKey): this

    // Alias methods for event subscription and removal
    addListener: Signal['on']
    subscribe: Signal['on']
    bind: Signal['on']
    removeListener: Signal['off']
    unsubscribe: Signal['off']
    unbind: Signal['off']
    trigger: Signal['emit']
    dispatch: Signal['emit']
  }

  // Signal creation function
  function create(): Signal

  // Singleton signal instance
  const signal: Signal

  // Default export
  export default signal
}
