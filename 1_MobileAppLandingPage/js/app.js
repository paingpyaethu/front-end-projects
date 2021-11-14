
$(window).on("load", function () {
    /**************** Preloader ******************/
    $(".preloader").fadeOut("slow");
});


$(document).ready(function () {
    /************ Navbar Scroll ************/
    $(window).on("scroll", function () {
        if ($(this).scrollTop()  > 90 ){
            $(".navbar").addClass("navbar-scroll");
        }else {
            $(".navbar").removeClass("navbar-scroll");

        }
    });

    /************ Video Popup ************/
    const videoSrc = $("#player-1").attr("src");

    $(".video-play-btn, .video-popup").on("click", function () {
        if ($(".video-popup").hasClass("open")){
                $(".video-popup").removeClass("open");
                $("#player-1").attr("src","");
        } else {
            $(".video-popup").addClass("open");

            if ($("#player-1").attr("src") === ''){
                $("#player-1").attr("src", videoSrc);
            }
        }
    });

    /************* Features Carousel *************/

    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        // autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    /************* Screenshots Carousel *************/

    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    });

    /************* Testimonial Carousel *************/

    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    /************* Team Carousel *************/

    $('.team-carousel').owlCarousel({
        loop:true,
        margin:0,
        // autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });


    /************* Page Scrolling - ScrollIt ***************/

    $.scrollIt({
        topOffset: -70          // offste (in px) for fixed top navigation
    });

    /************** Wow Js - Scroll Animation **************/
    wow = new WOW(
        {
            // boxClass:     'wow',      // default
            // animateClass: 'animated', // default
            offset:  100,
            // mobile:       true,       // default
            // live:         true        // default
        }
    )
    wow.init();

    /************** Menu Icon **************/


    $(".navbar-toggler").on("click", function () {

        if($(".menu-icon").hasClass("fa-bars")){
                $(".menu-icon").removeClass("fa-bars").addClass("fa-times");
        }else{
                $(".menu-icon").removeClass("fa-times").addClass("fa-bars");
        }
    });

    /************** Navbar Collapse **************/

    $(".nav-link").on("click", function () {

        if ($(".menu-icon").hasClass("fa-times")){
                $(".menu-icon").removeClass("fa-times").addClass("fa-bars");
                $(".navbar-collapse").collapse("hide");
        }
    });

    /************** Toogle Theme - Light & Dark Mode **************/

    function toogleTheme() {
        if (localStorage.getItem("p2t-theme") !== null){
            if (localStorage.getItem("p2t-theme") === "dark"){
                $("body").addClass("dark");
            }else {
                $("body").removeClass("dark");
            }
        }
        updateIcon();
    }
    toogleTheme();

    $(".toggle-theme").on("click", function () {
        $("body").toggleClass("dark");
        if ($("body").hasClass("dark")){
            localStorage.setItem("p2t-theme", "dark");
        }else {
            localStorage.setItem("p2t-theme", "light");
        }
        updateIcon();
    });

    function updateIcon() {
        if ($("body").hasClass("dark")){
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        }else {
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
        }
    }

});
