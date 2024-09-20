import { publicProcedure, router } from '.'

export const appRouter = router({
  test: publicProcedure.query(() => {
    return {
      success: true
    }
  })
})
