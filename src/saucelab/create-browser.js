export default createBrowser = ({name: browserName, version: browserVersion}, env) => {
  let browser;
  const {SAUCE_USERNAME, SAUCE_ACCESS_KEY, TRAVIS_JOB_NUMBER, TRAVIS_BUILD_NUMBER} = env || process.env;
  if (SAUCE_USERNAME != undefined) {
     browser = new webdriver.Builder()
     .usingServer( `http://${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY}@ondemand.saucelabs.com:80/wd/hub`)
     .withCapabilities({
        'tunnel-identifier': TRAVIS_JOB_NUMBER,
       build: TRAVIS_BUILD_NUMBER,
       username: SAUCE_USERNAME,
       accessKey: SAUCE_ACCESS_KEY,
       browserName: browserName,
       version: browserVersion
     }).build();
   } else {
     browser = new webdriver.Builder()
     .withCapabilities({
       browserName: browserName,
       version: browserVersion
     }).build();
   }
   return browser;

};
