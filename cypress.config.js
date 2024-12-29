const { defineConfig } = require("cypress");
const browserName = process.env.BROWSER_NAME || 'Unknown Browser';
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout:20000
  },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      inlineAssets: true,
      html: true,
      json: false,
      reportFilename: process.env.REPORT_FILENAME || 'default-report', // Use a default if not provided
      reportTitle: `Test Report - ${browserName}`, // Include browser name dynamically
    }
});
