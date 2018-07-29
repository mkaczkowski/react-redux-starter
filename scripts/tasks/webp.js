/**
 * Build webp assets
 */
const path = require('path');
const gulp = require('gulp');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const webp = require('gulp-webp');

const config = require('./config');
const paths = require('./lib/paths');

gulp.task('webp', () =>
  gulp
    .src(path.join(paths.landingPath, config.img.src, config.img.extensions), { base: './' })
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(
      webp({
        quality: 75,
      })
    )
    .pipe(gulp.dest('./'))
);
