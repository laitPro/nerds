'use strict';

module.exports = function($) {
  $.gulp.task('pug', function() {
    return $.combine(
      $.gulp.src($.paths.templates),
      $.gp.pug({
        locals : JSON.parse($.fs.readFileSync('./content.json', 'utf8')),
        pretty: true
      }),
      $.gulp.dest($.config.root)
    );   
  });
};
