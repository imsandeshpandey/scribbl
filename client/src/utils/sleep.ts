/**
 *
 * @description Waits for the given amount of time
 */
export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
