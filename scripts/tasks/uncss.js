/**
 * Build CSS
 */
const gulp = require('gulp');
const path = require('path');
const uncss = require('gulp-uncss');
const bytediff = require('gulp-bytediff');
const gulpCopy = require('gulp-copy');

const config = require('./config');

// Configiration for gulp-uncss plugin.
const unCssIgnore = [
  '.fonts-stage-1',
  '.fonts-stage-2',
  /test\-[0-9]+/,
  // /(#|\.)fancybox(-[a-zA-Z]+)?/,
  // /tooltip/,
  // '.modal',
];

gulp.task('uncss', function() {
  return gulp
    .src(path.join(__dirname, config.root.dist, '*.css'), { base: './' })
    .pipe(gulpCopy(path.join(__dirname, config.root.dist, 'backup'), { prefix: 5 }))
    .pipe(bytediff.start())
    .pipe(
      uncss({
        html: [path.join(__dirname, config.root.dist, 'index.html')], //'./**/*.html')),
        timeout: 5000,
        ignore: [unCssIgnore],
      })
    )
    .pipe(bytediff.stop())
    .pipe(gulp.dest('.'));
});
