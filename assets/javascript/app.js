//======================================================================
// Initialize
//======================================================================
// Initialize Sidenav
$(document).ready(function () {
    $('.sidenav').sidenav();
});

// Initialize AOS
AOS.init();

// Initialize Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
});

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
// RESPONSIVE ABOUT BACKGROUND
//======================================================================
// Nav height
// vpw = $(window).width();
var vph;
var nvh;

// Set height on load
$(document).ready(function () {
    vph = $(window).height();
    nvh = $('#navbar').height();
    $('.trees').css({ 'height': vph - nvh + 'px' });
    console.log('vph', vph);
    console.log('nvh', nvh);
});

// Set height on resize
$(window).resize(function() {
    vph = $(window).height();
    nvh = $('#navbar').height();
    $('.trees').css({ 'height': vph - nvh + 'px' });
    console.log('vph', vph);
    console.log('nvh', nvh);
});


//======================================================================
// SMOOTH SCROLL ON CLICK
//======================================================================
var fromTop = 0;
// Main
$(".main-about").click(function () {
    fromTop = 0;
    $('html,body').animate({
        scrollTop: $(".trees").offset().top - fromTop - nvh
    }, 'slow');
});
$(".main-projects").click(function () {
    fromTop = 10;
    $('html,body').animate({
        scrollTop: $("#projects").offset().top - fromTop - nvh
    }, 'slow');
});
$(".main-contact").click(function () {
    $('html,body').animate({
        scrollTop: $("footer").offset().top - fromTop - nvh
    }, 'slow');
});

// Mobile
$(".side-about").click(function () {
    fromTop = 0;
    $('html,body').animate({
        scrollTop: $(".trees").offset().top - fromTop - nvh
    }, 'slow');
});
$(".side-projects").click(function () {
    fromTop = 10;
    $('html,body').animate({
        scrollTop: $("#projects").offset().top - fromTop - nvh
    }, 'slow');
});
$(".side-contact").click(function () {
    $('html,body').animate({
        scrollTop: $("footer").offset().top - fromTop - nvh
    }, 'slow');
});

//======================================================================
// HEADER
//======================================================================
// Fadeaway hello-container
$(window).scroll(function () {
    $("#hello-container").css("opacity", 1 - $(window).scrollTop() / 250);
});

// Hiding hello-container once scrolled
$(document).ready(function () {

    // Hiding on load
    if ($(window).scrollTop() > 285) {
        $("#hello-container").css("display", "none");
    } else {
        $("#hello-container").css("display", "flex");
    }

    $(window).scroll(function () {

        // Hiding div on scroll
        if ($(window).scrollTop() > 285) {
            $("#hello-container").css("display", "none");

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

//======================================================================
// ISOTOPE - Layout Plugin
//======================================================================
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
