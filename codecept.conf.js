/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'automacao-codeceptjs',
  tests: './Testes/*_test.js',   // procura todos os arquivos terminados em _test.js dentro da pasta Testes
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.demoblaze.com',
      browser: 'chrome',
      restart: false,
      windowSize: '1200x900',
      smartWait: 5000,
      waitForTimeout: 10000
    }
  },
  include: {
    I: './Testes/steps_file.js'  // steps_file também está dentro da pasta Testes
  },
  bootstrap: null,
  teardown: null,
  mocha: {},
  plugins: {
    screenshotOnFail: { enabled: true },
    retryFailedStep: { enabled: true },
    tryTo: { enabled: true },
    htmlReporter: { enabled: true }
  }
}
