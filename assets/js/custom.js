$(function () {
    "use strict";
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 40) {
            $('.navbar').addClass('menu_fix');
        } else {
            $(".navbar").removeClass('menu_fix');
        }
    });
    
    
    // jQuery Smooth Scroll
$(".navbar a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});
    
});
