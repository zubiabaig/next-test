import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    include: ["./all-tests/vitest-unit-tests/**/*.{test, spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    setupFiles: ['./vitest-setup.ts']
  }
})
