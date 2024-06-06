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
                items:1,
                onInitialized: updateImages,
                onResized: updateImages
            },
            600:{
                items:1,
                onInitialized: updateImages,
                onResized: updateImages
            },
            1000:{
                items:1,
                onInitialized: updateImages,
                onResized: updateImages
            }
        }
      });
    
      function updateImages() {
        var width = $(window).width();
        $('.owl-carousel-home').find('.item img').each(function() {
          var $img = $(this);
          var mobileSrc = $img.data('src-mobile');
          var desktopSrc = $img.attr('src');
    
          if (width < 600) {
            if ($img.attr('src') !== mobileSrc) {
              $img.attr('src', mobileSrc);
            }
          } else {
            if ($img.attr('src') !== desktopSrc) {
              $img.attr('src', desktopSrc);
            }
          }
        });
      }
      $(window).resize(updateImages);
  
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
                items:1,
                onInitialized: updateImages2,
                onResized: updateImages2
            },
            600:{
                items:1,
                onInitialized: updateImages2,
                onResized: updateImages2
            },
            1000:{
                items:1,
                onInitialized: updateImages2,
                onResized: updateImages2
            }
        }
      });
      function updateImages2() {
        var width = $(window).width();
        $('.owl-carousel-sedes').find('.item img').each(function() {
          var $img = $(this);
          var mobileSrc = $img.data('src-mobile');
          var desktopSrc = $img.attr('src');
    
          if (width < 600) {
            if ($img.attr('src') !== mobileSrc) {
              $img.attr('src', mobileSrc);
            }
          } else {
            if ($img.attr('src') !== desktopSrc) {
              $img.attr('src', desktopSrc);
            }
          }
        });
      }
      $(window).resize(updateImages2);

});
