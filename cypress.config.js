const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    expludeSpecPattern: '**/examples/*.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
