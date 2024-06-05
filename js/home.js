$(document).ready(function() {
    
    $('.lightbox-home').click();
    
    $('.list-submenu').addClass('hidehome');

    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if ($(window).scrollTop() > 185) {
          // Scroll down
          $('.list-submenu').removeClass('hidehome');
        } else {
          // Scroll up
          $('.list-submenu').addClass('hidehome');
        }
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

});
