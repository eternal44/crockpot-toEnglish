var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');

gulp.task('mocha', function() {
  return gulp.src('./specs/**/*.js', {read: false})
  .pipe(mocha({ reporter: 'nyan'}))
  .on('error', gutil.log);
})

gulp.task('lint', function(){
  return gulp.src(['./src/**'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
})

gulp.task('test', function(){
  gulp.watch(['src/**', 'specs/**'], ['mocha'])
})
