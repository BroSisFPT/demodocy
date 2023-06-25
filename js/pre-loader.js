(function ($) {
  "use strict";

  /*============= preloader js css =============*/
  var cites = [];
  cites[0] ="Hello";
  cites[1] = "Hãy nổ lực nhé";
  cites[2] = "Cố lên nào!";
  cites[3] = "Chúng ta luôn có những người bạn ở bên";
  var cite = cites[Math.floor(Math.random() * cites.length)];
  $("#preloader p").text(cite);
  $("#preloader").addClass("loading");

  $(window).on("load", function () {
    setTimeout(function () {
      $("#preloader").fadeOut(500, function () {
        $("#preloader").removeClass("loading");
      });
    }, 500);
  });
})(jQuery);
