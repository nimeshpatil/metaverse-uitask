/*----- AOS Animation -----*/
AOS.init();

/*----- nav-bar -----*/

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            $(".header").addClass("sticky-header");
        } else {
            $(".header").removeClass("sticky-header");
    }
});