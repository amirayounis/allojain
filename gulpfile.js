const gulp = require('gulp');
const cssmin = require('gulp-cssmin');

 function minifyCSS() {
    return gulp.src('assets/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
}
const imgMin=require("gulp-imagemin");

function imgsMinify() {
  return gulp.src("assets/imgs/*").pipe(imgMin())
  .pipe(gulp.dest("dist/imgs"));
}

// gulp.task('default', minifyCSS());
exports.default=imgsMinify;