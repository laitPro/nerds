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
        return '<a>' + '</a>';
    }
  });

  $('.map__button').on('click', function(event) {
    event.preventDefault();
    $('.write-us').arcticmodal({
      afterClose: function() {
        $('.write-us input, .write-us textarea').val('');
      }
    });
  });

})();

function initMap() {
  console.log('Google Maps Api was init');

  var coordinates = {lat: 59.9387942, lng: 30.3208946},
    markerImage = 'imgs/content/map-marker.png',
    zoom = 17,

    map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: zoom,
        disableDefaultUI: true
    }),
    marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: markerImage
    });
}

google.maps.event.addDomListener(window, 'load', initMap);
