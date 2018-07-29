/**
 * Performance analyzer
 * https://github.com/macbre/phantomas
 */
const gulp = require('gulp');
const louis = require('gulp-louis');

gulp.task('louis', () => {
  louis({
    // url: 'http://localhost:5000/',
    timeout: 15,
    viewport: '1280x1024',
    engine: 'webkit',
    userAgent: 'Chrome/37.0.2062.120',
    outputFileName: 'results.json',
    noExternals: false,
    performanceBudget: {
      notFound: 0,
      htmlCount: 1,
      htmlSize: 100000,
      cssCount: 1,
      cssSize: 100000,
      jsCount: 1,
      jsSize: 300000,
      jsErrors: 0,
      jsonCount: 0,
      imageCount: 30,
      imageSize: 1000000,
      videoCount: 0,
      // videoSize: 0,
      webfontCount: 0,
      webfontSize: 0,
      consoleMessages: 0,
      jQueryVersion: 0,
      redirects: 0,
      requests: 20,
      requestsToDomContentLoaded: 5,
      requestsToDomComplete: 20,
      assetsNotGzipped: 0,
      timeToFirstCss: 300,
      domInteractive: 100,
      domContentLoaded: 300,
      domContentLoadedEnd: 300,
      domComplete: 200,
      timeFrontend: 200,
    },
  });
});
