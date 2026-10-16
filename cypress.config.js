const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'cypress-report-qa',
    charts: true,
    reportPageTitle: 'Relatório de testes',
    embeddedScreenshots: true,
    inlineAssets: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      require('@cypress/grep/src/plugin')(config)
      // implement node event listeners here
      return config
    },
  },
});
