var gulp = require('gulp')
  , uglify = require('gulp-uglify')
  , rename = require('gulp-rename')

gulp.task('compress', function () {
  return gulp.src('./dfp.js')
    .pipe(uglify({ preserveComments: 'license' }))
    .pipe(rename('dfp.min.js'))
    .pipe(gulp.dest('.'))
})

gulp.task('default', [ 'compress' ])
