$(document).ready(function() {

      function updateImages() {
        var width = $(window).width();
        var $img = $('.banner-nosotros').find('.img-banner');
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
      }
      $(window).resize(updateImages);

});