
let screenHeight = $(window).height();

$(window).scroll( () => {
    let currentPosition = $(this).scrollTop();
    if (currentPosition >= screenHeight){
        $('.site-nav').addClass('site-nav-scroll');
    }else {
        $('.site-nav').removeClass('site-nav-scroll');
    }
});


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


// Waypoint

function setActive(current) {

    $(".nav-link").removeClass("current-section");

    $(`.nav-link[href='#${current}']`).addClass('current-section');

}

function navScroll() {

    let currentSection = $("section[id]");
    currentSection.waypoint(function (direction) {

        if(direction === "down"){
            let currentSectionId = $(this.element).attr('id');
            console.log(currentSectionId);
            setActive(currentSectionId);
        }
    }, {offset: '150px'});

    currentSection.waypoint(function (direction) {

        if(direction === "up"){
            let currentSectionId = $(this.element).attr('id');
            console.log(currentSectionId);
            setActive(currentSectionId);
        }
    }, {
        offset: function () {
            return -$(this.element).height() + 155;
        }
    });
}
navScroll();

new WOW().init();

$('.pricing-slide').slick({
    arrows: false,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$(window).on("load",function () {
    $('.loading-container').fadeOut(500,function () {
        $(this).remove();
    });
});