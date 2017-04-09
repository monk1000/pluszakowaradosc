var num = 40; //number of pixels before modifying styles

$(window).bind('scroll', function () {
	

    if ($(window).scrollTop() > num) {
        $('header').addClass('fixed');
     } else {
        $('header').removeClass('fixed');
    }
});


$(function() {  

    // Default
    jQuery.scrollSpeed(800, 600);
    
    // Custom Easing
    jQuery.scrollSpeed(800, 600, 'easeOutCubic');
    
});
