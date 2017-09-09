'use strict';

var $ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  paths: {
    tasks: require('./gulp/paths/path.tasks'),
    templates: require('./gulp/paths/path.templates')
  },
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')({
    rename: {
      'gulp-sass-glob': 'sassGlob'
    }
  }),
  combine: require('stream-combiner2').obj,
  rimraf: require('rimraf'),
  browserSync: require('browser-sync').create(),
  fs: require('fs')
};

$.paths.tasks.forEach(function(taskPath) {
  require(taskPath)($);
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'pug',
    'sass'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  ) 
));