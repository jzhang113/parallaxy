(function ($) {
  $(document).ready(function() {
    if (Modernizr.touch){
    } else {
      // Init Parallax scrolling
      $.stellar({
        horizontalScrolling: false
      });
    }

    // Init mobile menu
    $(".primary-menu").tinyNav({header: 'Menu'});
    $(".tinynav").uniform();
  });
}(jQuery));
