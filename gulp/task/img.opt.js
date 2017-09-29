'use strict';

module.exports = function($) {
  $.gulp.task('img.opt', function(cb) {
    return $.combine(
    	$.gulp.src($.path.img.content, {
    		since: $.gulp.lastRun('img.opt')
    	}),
    	$.gp.imagemin({optimizationLevel: 5}),
		$.gulp.dest($.config.root + '/imgs/content/')
    )
  });
};