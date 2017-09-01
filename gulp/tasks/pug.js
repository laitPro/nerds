'use strict';

module.exports = function($) {
  $.gulp.task('pug', function() {
    return $.gulp.src($.paths.templates)
      .pipe($.gp.pug({
      	pretty: true
      }))
      .pipe($.gulp.dest($.config.root));
  });
};
