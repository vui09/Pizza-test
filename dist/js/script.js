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
    if ($(window).width() < 767){
      $(".menu-item").css('display', 'flex');
    }
  });

  $('.spicy-filter').click(function(){
    $(".menu-item").css('display', 'none');
    let spicy = $(".menu-item").filter(".spicy")
    spicy.css('display', 'block');
    if ($(window).width() < 767){
      spicy.css('display', 'flex');
    }
  });

  $('.meat-filter').click(function(){
    $(".menu-item").css('display', 'none');
    let meat = $(".menu-item").filter(".meat");
    meat.css('display', 'block');
    if ($(window).width() < 767){
      meat.css('display', 'flex');
    }
  });

  $('.cheese-filter').click(function(){
    $(".menu-item").css('display', 'none');
    let cheese = $(".menu-item").filter(".cheese");
    cheese.css('display', 'block');
    if ($(window).width() < 767){
      cheese.css('display', 'flex');
    }
  });

  $('.vegan-filter').click(function(){
    $(".menu-item").css('display', 'none');
    let vegan = $(".menu-item").filter(".vegan")
    vegan.css('display', 'block');
    if ($(window).width() < 767){
      vegan.css('display', 'flex');
    }
  });

  $('.sb-20').click(function(){
    let item = $(this).closest('.menu-item');
    item.find('.img-item').removeClass().addClass('img-item i-20');
    item.find('.size-btn').removeClass('active');
    $(this).addClass('active');
  });

  $('.sb-30').click(function(){
    let item = $(this).closest('.menu-item');
    item.find('.img-item').removeClass().addClass('img-item i-30');
    item.find('.size-btn').removeClass('active');
    $(this).addClass('active');
  });

  $('.sb-40').click(function(){
    let item = $(this).closest('.menu-item');
    item.find('.img-item').removeClass().addClass('img-item i-40');
    item.find('.size-btn').removeClass('active');
    $(this).addClass('active');
  });


  $('.input-text input').focus(function() {
    $(this).next('.label-text').css('color', '#3F8FE5');
  });

  $('.input-text input').blur(function(){
    $(this).next('.label-text').css('color', '#A6A6A6');
  });

  $('.input-text input').keydown(function() {
    $(this).css('border', '1px solid #3F8FE5');
  });

  $('.input-text input').keyup(function() {
    $(this).css('border', '1px solid #C4C7CA');
  });

  $('.btn-minus').click(function() {
      let $input = $(this).parent().find('.quantity');
      let count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
  });
  $('.btn-plus').click(function() {
      let input = $(this).parent().find('.quantity');
      let count = parseInt(input.val()) + 1;
      count = count > parseInt(input.data('max-count')) ? parseInt(input.data('max-count')) : count;
      input.val(parseInt(count));
  }); 

  // $( ".quantity" ).change(function() {
  //   let count = parseInt(this.val());
  //   if(count != 1){
  //     $('.btn-minus').removeAttr('disabled');
  //   }
  // });

  $('.popup-item .close').click(function(){
    $(this).parent().hide();
  });

  $('.order').click(function(){
    $('.popup-overlay').slideToggle();
    $('body').addClass('lock-scroll');
  });

  $('#close').click(function(){
    $('.popup-overlay').slideToggle();
    $('body').removeClass('lock-scroll');
  });

  $('.navigation-item-link').click(function(){
    $('.navigation-item-link').removeClass('active');
    $(this).addClass('active');
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
