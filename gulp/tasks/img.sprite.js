'use strict';

module.exports = function($) {
  $.gulp.task('img.sprite', function(cb) {

    var spriteData = $.gulp.src($.paths.imgs.decorate).pipe($.gp.spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.scss',
    }));
 
    var imgStream = spriteData.img
      $.combine(
        $.buffer(),
        $.gp.imagemin(),
        $.gulp.dest($.config.root + '/imgs/decorate/')
      );

    var cssStream = spriteData.css
      .pipe($.gulp.dest('./app/style/'));
 
    $.gp.merge(imgStream, cssStream); 
  
    cb();
  });
};