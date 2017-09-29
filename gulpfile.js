'use strict';

var $ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/path/path.task'),
    template: require('./gulp/path/path.template'),
    img: require('./gulp/path/path.img.js')
  },
  gulp: require('gulp'),
  combine: require('stream-combiner2').obj,
  rimraf: require('rimraf'),
  browserSync: require('browser-sync').create(),
  fs: require('fs'),
  buffer: require('vinyl-buffer'),
  gp: require('gulp-load-plugins')({
    rename: {
      'gulp-sass-glob': 'sassGlob',
      'gulp.spritesmith' : 'spritesmith',
      'gulp-replace-task' : 'replace'
    }
  }),
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)($);
});

$.dev = false;

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'img.opt',
    'img.sprite'
  ),
  $.gulp.parallel(
    'pug',
    'sass'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  ) 
));