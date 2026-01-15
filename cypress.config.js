const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 1080,
  e2e: {
     baseUrl: 'https://test.testowanie-oprogramowania.pl',
     specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
         


    },
  },
});
