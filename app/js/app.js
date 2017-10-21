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

  $('.write-us__form').on('submit', function(event) {
    event.preventDefault();
    console.log('i try submit')
    $('.write-us').arcticmodal('close');
  });

  $("#range-slider").slider({
    min: 0,
    max: 15000,
    step: 1,
    range: true,
    values: [0,6000],
    create: function( event, ui ) {   
      $('.range__input_min').val($(this).slider( "values", 0 ));
      $('.range__input_max').val($(this).slider( "values", 1 ));
    },
    slide: function( event, ui ) {
      $('.range__input_min').val(ui.values[0]);
      $('.range__input_max').val(ui.values[1]);
    }
  });

  $(".range__input").keyup(function(e){
    e.preventDefault;
    var el = e.target.classList[1];
    console.log("I try change:", e.keyCode);

    var newel = $('.' + el).val($('.' + el).val().replace( /[^0123456789]/, '' ));

    var val1=$(".range__input_min").val(),
        val2=$(".range__input_max").val();

    // Set correct input values min max
    var min = Math.min(val1,val2, 15000);
    var max = Math.min(15000,Math.max(val1,val2));

    console.log("min:", min, "max:",max);

    $("#range__slider").slider("values",0,min);
    $("#range__slider").slider("values",1,max);

    $(".range__input_min").val(min),
    $(".range__input_max").val(max);

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
