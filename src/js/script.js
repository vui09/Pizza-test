$(document).on('ready', function() {
    $('.humburger').click(function(){
        $('.mobile').slideToggle();
        $('body').toggleClass('lock-scroll');
    });

    $('.all-filter').click(function(){
      $('.menu-item').removeClass('hide');
    });

    $('.menu-item').hover(function(){
      let icon = $(this).find('.item-icon');
      icon.toggleClass('icon-show');
    });

    $('.menu-filter-item').click(function(){
      $('.menu-filter-item').removeClass('active');
      $(this).toggleClass('active');
    });

    $('.all-filter').click(function(){
      $(".menu-item").css('display', 'block');
    });

    $('.spicy-filter').click(function(){
      $(".menu-item").css('display', 'none');
      $(".menu-item").filter(".spicy").css('display', 'block');
    });

    $('.meat-filter').click(function(){
      $(".menu-item").css('display', 'none');
      $(".menu-item").filter(".meat").css('display', 'block');
    });

    $('.cheese-filter').click(function(){
      $(".menu-item").css('display', 'none');
      $(".menu-item").filter(".cheese").css('display', 'block');
    });

    $('.vegan-filter').click(function(){
      $(".menu-item").css('display', 'none');
      $(".menu-item").filter(".vegan").css('display', 'block');
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

