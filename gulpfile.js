'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

var paths = {
  // all our client app js files, not including 3rd party js files
  html: ['./_planning/static/src/**/*.html'],
  images: ['./_planning/static/src/img/*.*'],
  styles: ['./_planning/static/src/**/*.scss'],
  styledist: './_planning/static/build',
  serve: ['./_planning/static/build/'],
  all: ['./_planning/static/**/*.*']
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
    .pipe(gulp.dest(paths.serve[0] + '/img'));
};

gulp.task('sass', function () {
  gulp.src(paths.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest(paths.styledist))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
