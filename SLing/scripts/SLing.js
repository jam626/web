$(function () {

    $('.select').click(function () {
        var submenu = $('nav.navigation-mobile .menu');
        if (submenu.is(":visible")) {
            submenu.fadeOut(300);
        } else {
            submenu.fadeIn(300);
        }
    });
    var submenu_active = false;

    $('nav.navigation-mobile .menu').mouseenter(function () {
        submenu_active = true;
    });

    $('nav.navigation-mobile .menu').mouseleave(function () {
        submenu_active = false
        if (submenu_active === false) $('nav.navigation-mobile .menu').fadeOut(400);
    });

    if (typeof Slingsupersized !== 'undefined')
    {
    $.supersized({

        // Functionality
        slide_interval: 3000,		// Length between transitions
        transition: 1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
        transition_speed: 700,		// Speed of transition

        // Components							
        slide_links: 'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
        slides: Slingsupersized

    });
}

});