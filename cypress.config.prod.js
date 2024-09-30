const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    apiUrl: 'https://api.telnyx.com', // URL для продакшену
  },
  defaultCommandTimeout: 15000,
  retries: 2, // Більше спроб повтору для продакшену
  reporter: 'junit', // Наприклад, для продакшену може бути інший репортер
  e2e: {
    setupNodeEvents(on, config) {
      // Тут можна налаштувати події Node
    },
    baseUrl: 'https://telnyx.com', // базовий URL для продакшену
  },
});
