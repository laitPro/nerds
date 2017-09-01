'use strict';

module.exports = function($) {
  $.gulp.task('pug', function() {
  	return $.combine(
  		$.gulp.src($.paths.templates),
  		$.gp.pug({ pretty: true }),
  		$.gulp.dest($.config.root)
  	)   
  });
};
