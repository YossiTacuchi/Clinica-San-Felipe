
$(document).ready(function() {
  var lastScrollTop = 0;
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if ($(window).scrollTop() > 185) {
      // Scroll down
      $('.header').addClass("sticky-top");
    } else {
      // Scroll up
      $('.header').removeClass("sticky-top");
    }
    lastScrollTop = scrollTop;
  });

  $('.navbar-toggler').click(function(){
    if($('.menu-mobile').hasClass('show')){
      $('.menu-mobile').removeClass('show');
    }else{
      $('.menu-mobile').addClass('show');
    }
  });
  $('.btn-close').click(function(){
    if($('.menu-mobile').hasClass('show')){
      $('.menu-mobile').removeClass('show');
    }else{
      $('.menu-mobile').addClass('show');
    }
  });

  var scrollToTopBtn = $('.scroll-to-top');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        scrollToTopBtn.addClass('show-scroll');
      } else {
        scrollToTopBtn.removeClass('show-scroll');
      }
    });

    scrollToTopBtn.click(function() {
      $('html, body').animate({scrollTop: 0}, '200');
      return false;
    });

});
