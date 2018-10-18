AOS.init();
/////////////////////////////////////////////////////////////////////////
// TYPING ANIMATION
/////////////////////////////////////////////////////////////////////////
var i = 0;
var txt1 = 'Hello, My name is Mason. Welcome to my page!';
// var txt2 = 'My name is Mason.';
// var txt3 = 'Welcome to my page!';
var speed = 100;

function hello() {
    if (i < txt1.length) {
        document.getElementById("hello").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(hello, speed);
    } else {
        i = 0;
        return i;
    }
}
// function name() {
//     if (i < txt2.length) {
//         document.getElementById("name").innerHTML += txt2.charAt(i);
//         i++;
//         setTimeout(name, speed);
//     } else {
//         i = 0;
//         return i;
//     }
// }
// function welcome() {
//     if (i < txt3.length) {
//         document.getElementById("welcome").innerHTML += txt3.charAt(i);
//         i++;
//         setTimeout(welcome, speed);
//     } else {
//         i = 0;
//         return i;
//     }
// }

setTimeout(hello, 500);
// setTimeout(name, 2500);
// setTimeout(welcome, 5500);

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
var fromTop = 60;
$(".nav-about").click(function () {
    $('html,body').animate({
        scrollTop: $("#about-me").offset().top - fromTop
    }, 'slow');
});
$(".nav-portfolio").click(function () {
    $('html,body').animate({
        scrollTop: $("#portfolio").offset().top - fromTop
    }, 'slow');
});
$(".nav-contact").click(function () {
    $('html,body').animate({
        scrollTop: $("#contact-icons").offset().top - fromTop
    }, 'slow');
});


