import { defineConfig } from "cypress";
// Verify download import
const { isFileExist, findFiles } = require('cy-verify-downloads');

export default defineConfig({
  e2e: {
    baseUrl: "https://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // Verify download import
      on('task', { isFileExist, findFiles })
      // -----------------------
    },
    env: {
      demoVar: "Hello from the Cypress.Config.ts",
      Angular: "https://www.globalsqa.com/",
      demoQA: "https://demoqa.com",
      theInternet: "https://the-internet.herokuapp.com/",
    },
    pageLoadTimeout: 60000,
    viewportHeight: 1000,
    viewportWidth: 1400,
  },
  pageLoadTimeout: 60000,
});
