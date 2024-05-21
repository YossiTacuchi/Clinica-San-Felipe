
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
});
