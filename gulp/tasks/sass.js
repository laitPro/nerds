'use strict'

module.exports = function($) {
	$.gulp.task('sass', function() {
		return $.combine(
			$.gulp.src('./app/style/main.scss'),
			$.gp.sassGlob(),
			$.gp.sass(),
			$.gulp.dest($.config.root + '/css'),
			$.browserSync.stream()
		)
	})
}