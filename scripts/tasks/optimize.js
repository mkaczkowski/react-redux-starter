/**
 * Optimize image assets
 */
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const path = require('path');
const plumber = require('gulp-plumber');
const pngquant = require('imagemin-pngquant');
// const changed = require("gulp-changed")

const config = require('./config');
const paths = require('./lib/paths');

gulp.task('optimize_images', () =>
  gulp
    .src(path.join(paths.landingPath, config.img.src, config.img.extensions), { base: './' })
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    // .pipe(changed(path.join(paths.landingPath, "assets/images")))
    .pipe(
      imagemin({
        progressive: true,
        verbose: true,
        svgoPlugins: [{ removeViewBox: false }, { cleanupIDs: false }],
        use: [pngquant()],
      })
    )
    .pipe(gulp.dest('./'))
);
