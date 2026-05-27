/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'automacao-codeceptjs',
  tests: './Testes/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.demoblaze.com',
      browser: 'chromium',
      show: true,
      windowSize: '1200x900',
      waitForTimeout: 15000,
      smartWait: 5000
    }
  },
  include: { I: './Testes/steps_file.js' },
  plugins: {
    // O Allure usa automaticamente o output do screenshotOnFail se configurado corretamente
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './allure-results' 
    }
  }
}