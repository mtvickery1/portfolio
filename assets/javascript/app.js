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

// Document Ready
$(document).ready(function () {

    //======================================================================
    // RESPONSIVE ABOUT BACKGROUND
    //======================================================================
    // vpw = $(window).width();
    // viewport height
    var vph;
    var nvh = $('#navbar').height();
    var scrollPosition = $(window).scrollTop();
    var landHeight = $('.gorge').height();
    var triggerPosition = landHeight - nvh;

    console.log('triggerPosition', triggerPosition);

    //======================================================================
    // SET NAV COLOR ON LOAD
    //======================================================================
    if (scrollPosition >= triggerPosition) {
        console.log('landHeight', landHeight);
        console.log('scrollPosition', scrollPosition);

        // Set nav color on load       
        $("nav").addClass("scrolled");
        $("nav div ul li a" && "nav div a").addClass("scrolled-font");
    }

    //======================================================================
    // SET NAV COLOR ON SCROLL
    //======================================================================
    $(window).scroll(function () {
        nvh = $('#navbar').height();
        scrollPosition = $(window).scrollTop();
        landHeight = $('.gorge').height();
        triggerPosition = landHeight - nvh;
        console.log('landHeight', landHeight);
        console.log('scrollPosition', scrollPosition);
        console.log('nvh', nvh);
        console.log('triggerPosition', triggerPosition);
        // Nav background color change
        if (scrollPosition >= triggerPosition) {
            $("nav").addClass("scrolled");
            $("nav div ul li a" && "nav div a").addClass("scrolled-font");
        } else {
            $("nav").removeClass("scrolled");
            $("nav div ul li a" && "nav div a").removeClass("scrolled-font");
        }
    });

    // Nav click highlight feature
    $('.nav-effect a').click(function () {
        $(this).closest("li").addClass('highlight').siblings().removeClass('highlight');
        return (false);   // no default behavior from clicking on the link
    });

    // Set height on load
    vph = $(window).height();
    nvh = $('#navbar').height();
    $('.trees').css({ 'height': vph - nvh + 'px' });
    console.log('vph', vph);
    console.log('nvh', nvh);


    // Set height on resize
    $(window).resize(function () {
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

    // Hiding on load
    if ($(window).scrollTop() > 285) {
        $("#hello-container").css("display", "none");
    } else {
        $("#hello-container").css("display", "flex");
    }

    // Hiding div on scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() > 285) {
            $("#hello-container").css("display", "none");
        } else {
            $("#hello-container").css("display", "flex");
        }
    });

    //======================================================================
    // PROJECTS
    //======================================================================
    // Hover over project thumbnail
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

});