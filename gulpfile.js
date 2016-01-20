'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
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
  dispath: './dist/',
  dispathCleanFiles: ['./dist/**/*.*', '!./dist/index.html'],
  serveFiles: ['./_planning/static/build/**/**/*.*', '!./_planning/static/build/**/*.html', '!./_planning/static/build/bootstrap-sass/', '!./_planning/static/build/font-awesome/'],
  serveImage: ['./_planning/static/build/img/*.*'],
  serveFonts: ['./_planning/static/build/fonts/**/*.*'],
  serveStyles: './_planning/static/build/style.css',
  dist: ['./dist/**/*.*', '!./dist/index.html'],
  deploy: './deploy/'
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
  //gulp.src(paths.distcopy)
  //.pipe(gulp.dest(paths.dispath))
};

gulp.task('sass', function () {
  gulp.src(paths.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest(paths.stylebuild))
    .pipe(browserSync.stream());
});

gulp.task('clean', function () {
  return gulp.src(paths.dispathCleanFiles)
    .pipe(clean());
})

gulp.task('copy', function () {
  gulp.src(paths.serveImage)
    .pipe(gulp.dest(paths.dispath + 'img/'));
  gulp.src(paths.serveFonts)
    .pipe(gulp.dest(paths.dispath + 'fonts/'));
  gulp.src(paths.serveStyles)
    .pipe(gulp.dest(paths.dispath));
});

gulp.task('copyd', function () {
  gulp.src(paths.dist)
    .pipe(gulp.dest(paths.deploy));
});

gulp.task('default', ['serve']);
