const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './Tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://crwn-clothing-live-ks.herokuapp.com/shop',
      browser: 'chrome',
      windowSize: 'maximize',
    }
  },
  include: {
    I: './steps_file.js',
    homePage : './Pages/homePage.js',
    checkoutPage : './Pages/checkoutPage.js',
    paymentPage : './Pages/paymentPage.js',
    
  },
  bootstrap: null,
  mocha: {
    reporterOptions : {
      mochaFile : "output/result.xml",
      repertDir : "output"
    }
  },
  name: 'CodeceptJS',
  Plugins :{
    stepBystepReport : {
      enabled : true,
    }
  }
}
