const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  e2e: {
    baseUrl: "https://qastoredesafio.lojaintegrada.com.br", // Base URL da aplicação
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});