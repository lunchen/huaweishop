var gulp = require('gulp');
/*var uglify = require('gulp-uglify');*/
var stylus = require('gulp-stylus')
var paths = {
  script: ['./dev/js/*'],
  stylus: ['./dev/stylus/*']
};

gulp.task('script-1', function() {
  return gulp.src(paths.script[0])
     /* .pipe(uglify())*/
    .pipe(gulp.dest('./pro/js'));
});

gulp.task('stylus-1', function() {
  return gulp.src(paths.stylus[0])
      .pipe(stylus({
        compress:true
      }))
    .pipe(gulp.dest('./pro/css'));
});


gulp.task('watch', function() {
  gulp.watch(paths.script, ['script-1']);
  gulp.watch(paths.stylus, ['stylus-1']);
});

gulp.task('default', ['watch','script-1','stylus-1']);