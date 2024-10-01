const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "i9azzzs",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://telnyx.com/", 
    supportFile: "cypress/support/e2e.js",
  },
});
