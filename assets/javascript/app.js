// AOS
AOS.init();

// Initialize Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
});


//======================================================================
// PARALAX
//======================================================================
$(document).ready(function () {
    $('.sidenav').sidenav();
});

// $('.carousel.carousel-slider').carousel({
//     fullWidth: true,
//     indicators: true
// });

//======================================================================
// CHANGE NAV COLOR
//======================================================================
$(document).ready(function () {

    // Initial nav color on load
    if ($(window).scrollTop() > 500) {
        $("nav").addClass("scrolled");
        $("nav div ul li a" && "nav div a").addClass("scrolled-font");
    }

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

//======================================================================
// SMOOTH SCROLL ON CLICK
//======================================================================
var fromTop;
// Main
$(".main-about").click(function () {
    fromTop = 245;
    $('html,body').animate({
        scrollTop: $("#about-me").offset().top - fromTop
    }, 'slow');
});
$(".main-projects").click(function () {
    fromTop = 70;
    $('html,body').animate({
        scrollTop: $("#projects").offset().top - fromTop
    }, 'slow');
});
$(".main-contact").click(function () {
    $('html,body').animate({
        scrollTop: $("#contact-icons").offset().top - fromTop
    }, 'slow');
});

// Mobile
$(".side-about").click(function () {
    fromTop = 122;
    $('html,body').animate({
        scrollTop: $("#about-me").offset().top - fromTop
    }, 'slow');
});
$(".side-projects").click(function () {
    fromTop = 70;
    $('html,body').animate({
        scrollTop: $("#projects").offset().top - fromTop
    }, 'slow');
});
$(".side-contact").click(function () {
    $('html,body').animate({
        scrollTop: $("#contact-icons").offset().top - fromTop
    }, 'slow');
});

//======================================================================
// HEADER
//======================================================================
// Fadeaway
$(window).scroll(function () {
    $("#hello-container").css("opacity", 1 - $(window).scrollTop() / 250);
});

// Hiding once scrolled
$(document).ready(function () {

    // Hiding div on load
    if ($(window).scrollTop() > 285) {
        $("#hello-container").css("display", "none");
    } else {
        $("#hello-container").css("display", "flex");
    }

    $(window).scroll(function () {

        console.log('scrollTop:', $(window).scrollTop());

        // Hiding div on scroll
        if ($(window).scrollTop() > 285) {
            $("#hello-container").css("display", "none");
            console.log('hidden');

        } else {
            $("#hello-container").css("display", "flex");
        }
    });
});

//======================================================================
// PROJECTS
//======================================================================

// HOVER
$(function () {
    $('.card').hover(
        function () {
            $(this).find('> .card-image > img.activator').click();
        }, function () {
            $(this).find('> .card-reveal > .card-title').click();
        }
    );
});






// bind filter button click
$('.filters-button-group').on('click', 'span', function () {
    var filterValue = $(this).attr('data-filter');

    $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'span', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});
