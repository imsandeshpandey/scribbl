import { useEffect, useRef } from 'react'

/**
 * A hook that runs an effect only on mount
 * @param effect the effect to run
 * @param deps the dependencies of the effect
 */
export function useMountedEffect(effect: () => void, deps: any[] = []) {
  const isMounted = useRef(false)

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      return
    }
    effect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
