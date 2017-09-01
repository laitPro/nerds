'use strict';

var $ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  paths: {
    tasks: require('./gulp/paths/path.tasks'),
    templates: require('./gulp/paths/path.templates')
  },
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')({})
};

$.paths.tasks.forEach(function(taskPath) {
  require(taskPath)($);
});

$.gulp.task('default', $.gulp.series(
  $.gulp.parallel(
    'pug'
  )
));