// grab our gulp packages
var gulp  = require('gulp'),
    jshint = require('gulp-jshint'),
    gutil = require('gulp-util'),
    jasmine = require('gulp-jasmine');
// create a default task and just log a message
gulp.task('default', ['watch']);

gulp.task('test', function(){
  return gulp.src('word-count_test.spec.js')
      .pipe(jasmine());
});

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('watch', function() {
  gulp.watch('*.js', ['test','jshint']);
});
