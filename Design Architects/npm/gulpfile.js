var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');
    

gulp.task('sass', function () {
  return gulp.src('../Design Architects/Content/scss/main.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('../Design Architects/Content/css'));
});
gulp.task('watch', function() {
gulp.watch('../Design Architects/Content/SCSS/**', ['sass']);
});

gulp.task('default', ['watch']);