const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://app.dev.recrutamento.itixti-lab.com.br",
  },
});