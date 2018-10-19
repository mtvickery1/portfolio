AOS.init();


/////////////////////////////////////////////////////////////////////////
// PARALAX
/////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    $(".parallax").parallax();
    $('.sidenav').sidenav();
});

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});

/////////////////////////////////////////////////////////////////////////
// CHANGE NAV COLOR
/////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    $(window).scroll(function () {
        // Nav background color change
        if ($(window).scrollTop() > 500) {
            $("nav").addClass("scrolled");
            $("nav div ul li a" && "nav div a").addClass("scrolled-font");
        } else {
            $("nav").removeClass("scrolled");
            $("nav div ul li a" && "nav div a").removeClass("scrolled-font");
        }
        // // Nav scroll highlight feature - About
        // if ($(window).scrollTop() > 885) {
        //     $(".nav-about").parent().addClass("highlight");
        //     if ($(window).scrollTop() > 1429) {
        //         $(".nav-effect").removeClass("highlight");
        //     }
        // } else {
        //     $(".nav-effect").removeClass("highlight");
        // }
        // // Nav scroll highlight feature - Projects
        // if ($(window).scrollTop() > 1429) {
        //     $(".nav-portfolio").parent().addClass("highlight");
        //     if ($(window).scrollTop() > 1500) {
        //         $(".nav-effect").removeClass("highlight");
        //     }
        // } else {
        //     $(".nav-effect").removeClass("highlight");
        // }
    });
    // Nav click highlight feature
    $('.nav-effect a').click(function () {
        $(this).closest("li").addClass('highlight').siblings().removeClass('highlight');
        return (false);   // no default behavior from clicking on the link
    });


});

/////////////////////////////////////////////////////////////////////////
// SMOOTH SCROLL ON CLICK
/////////////////////////////////////////////////////////////////////////
var fromTop;
$(".nav-about").click(function () {
    fromTop = 120;
    $('html,body').animate({
        scrollTop: $("#about-me").offset().top - fromTop
    }, 'slow');
});
$(".nav-projects").click(function () {
    fromTop = 70;
    $('html,body').animate({
        scrollTop: $("#projects").offset().top - fromTop
    }, 'slow');
});
$(".nav-contact").click(function () {
    $('html,body').animate({
        scrollTop: $("#contact-icons").offset().top - fromTop
    }, 'slow');
});


