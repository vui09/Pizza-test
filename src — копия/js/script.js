$(document).on('ready', function() {
    // $(".action-block").slick({
    //     slidesToShow: 3,
    //     dots: false,
    //     responsive: [{
    //         breakpoint: 600,
    //         settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         dots: true
    //         }
    //     }]
    //   });

    $('.humburger').click(function(){
        $('.mobile').slideToggle();
        $('body').toggleClass('lock-scroll');
    });
  });  

$(window).on('scroll', function() {
    var $nav = $('.header'),
        scroll = $(this).scrollTop();

    if (scroll > 10) {
        $nav.addClass('header-scroll');
    } else {
        $nav.removeClass('header-scroll');
    }
});  

$(window).on('load resize', function() {
    if ($(window).width() < 600) {
      $('.action-block').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      });
    } else {
      $("#items.slick-initialized").slick("unslick");
    }
  });
