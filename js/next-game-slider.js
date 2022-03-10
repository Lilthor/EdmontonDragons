$(document).ready(function(){
  $('.next-game-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows: true,
      responsive: [{
          breakpoint: 1200,
          settings: {
              slidesToScroll: 4,
              slidesToShow: 4
          }
      }, {
          breakpoint: 990,
          settings: {
              slidesToScroll: 3,
              slidesToShow: 3
          }
      }, {
          breakpoint: 768,
          settings: {
              arrows: false,
              slidesToScroll: 3,
              slidesToShow: 3
          }
      }, {
          breakpoint: 520,
          settings: {
              arrows: false,
              slidesToScroll: 1,
              slidesToShow: 1
          }
      }]
  });
});