import baseConfig from '@hono/eslint-config'

export default [
  ...baseConfig,
  {
    rules: {
      'import-x/order': 'off'
    }
  }
]
