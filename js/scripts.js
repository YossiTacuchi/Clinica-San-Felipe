
$(document).ready(function() {
  var lastScrollTop = 0;
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > lastScrollTop) {
      // Scroll down
      $('.header').addClass("sticky-top");
      //$('.submenu').addClass("hide");
    } else {
      // Scroll up
      $('.header').addClass("sticky-top");
      //$('.submenu').removeClass("hide");
    }
    lastScrollTop = scrollTop;
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

});
