import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  client: '@hey-api/client-axios',
  input: 'swagger.json',
  output: {
    format: 'prettier',
    lint: 'eslint',
    path: 'libs/data/src/lib/api'
  },
  plugins: ['@tanstack/react-query']
})
