(function() {
  'use strict';

  console.log("Jquery подключен, версия:",jQuery.fn.jquery);

  $('.slider').slick({
  	slidesToShow: 1,
  	infinite: true,
  	autoplay: true,
  	autoplaySpeed: 4000,
  	arrows: false,
  	fade: true,
  	cssEase: 'linear',
  	dots: true,
  	customPaging: function(slick,index) {
        return '<a>'  + '</a>';
    }
  });

 
})();