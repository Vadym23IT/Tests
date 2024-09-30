const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    apiUrl: 'https://dev-api.telnyx.com', // URL для dev-середовища
  },
  defaultCommandTimeout: 10000,
  retries: 1, // Наприклад, одну спробу повтору
  reporter: 'spec',
  e2e: {
    setupNodeEvents(on, config) {
      // Тут можна налаштувати події Node
    },
    baseUrl: 'https://dev.telnyx.com', // базовий URL для dev-середовища
  },
});
