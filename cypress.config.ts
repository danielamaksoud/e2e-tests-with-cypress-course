import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
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
