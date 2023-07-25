import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: false,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    excludeSpecPattern: '*.hot-update.js',
    experimentalRunAllSpecs: false,
    slowTestThreshold: 10000,
    testIsolation: true,
  },
  chromeWebSecurity: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  env: {
    NODE_ENV: 'development',
  },
})
