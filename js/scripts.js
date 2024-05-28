
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


    $('.owl-carousel-home').owlCarousel({
      autoplay:true,
      loop:true,
      margin:10,
      nav:true,
      dots:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
    });

  $('.owl-carousel-articulos').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
  });

  $('.owl-carousel-sedes').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
  $('.owl-carousel-detalle-sede').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
  $('.owl-carousel-especialidades').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  });

});
