'use strict';

module.exports = function($) {
  $.gulp.task('copy.fonts', function () {
    return $.gulp.src($.path.font.font)
      .pipe($.gulp.dest($.config.root + '/fonts'));
  });
};