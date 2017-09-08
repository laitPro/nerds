'use strict';

module.exports = function($) {
	$.gulp.task('watch', function() {
		$.gulp.watch('./app/template/**/*.pug', $.gulp.series('pug'));
		$.gulp.watch('./app/style/**/*.scss', $.gulp.series('sass'));
	})
}