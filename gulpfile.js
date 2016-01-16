'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

var paths = {
  // all our client app js files, not including 3rd party js files
  html: ['./_planning/static/src/**/*.html'],
  images: ['./_planning/static/src/img/*.*'],
  styles: ['./_planning/static/src/**/**/*.scss'],
  stylebuild: './_planning/static/build',
  serve: ['./_planning/static/build/'],
  all: ['./_planning/static/**/*.*'],
  distcopy: ['./_planning/static/build/style.css', './_planning/static/build/img/*.*', './_planning/static/build/fonts/*.*'],
  dispath: './dist/'
};


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {
  browserSync.init({
    server: paths.serve
  });
  gulp.watch(paths.styles, ['sass']);
  gulp.watch(paths.all).on('change', watchChangeHandler);
});

function watchChangeHandler() {
  browserSync.reload();
  gulp.src(paths.images)
    .pipe(gulp.dest(paths.serve + '/img'));
  gulp.src(paths.html)
    .pipe(gulp.dest(paths.serve[0]));
  //copy the style file to dist folder 
  gulp.src(paths.distcopy)
    .pipe(gulp.dest(paths.dispath))
};

gulp.task('sass', function () {
  gulp.src(paths.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest(paths.stylebuild))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
