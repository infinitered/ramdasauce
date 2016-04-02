const gulp = require('gulp')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const rollup = require('gulp-rollup')

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('dist', () => {
  return gulp.src('lib/index.js')
    .pipe(rollup({}))
    .pipe(babel({
      presets: ['es2015', 'stage-2']
    }))
    .pipe(gulp.dest('./dist'))
});
