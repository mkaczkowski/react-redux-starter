/**
 * Default Tasks
 */
const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('prepare', cb => {
  runSequence('optimize_images', 'webp', cb);
});

gulp.task('postbuild', cb => {
  runSequence('uncss', 'gzip', 'size', cb);
});

gulp.task('analyze', cb => {
  runSequence('louis', cb);
});
