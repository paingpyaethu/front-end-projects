

$('.show-sidebar-btn').click(function () {
    $('.sidebar').animate({marginLeft: 0});
});

$('.hide-sidebar-btn').click(function () {
    $('.sidebar').animate({marginLeft: '-100%'});
})

function go(url) {
    setTimeout(function () {
        location.href = `${url}`;
    }, 1000);
};

$(function () {
    $('[data-toggle="popover"]').popover()
});

// ItemList FullScreen
$('.full-screen-btn').click(function () {
    let current = $(this).closest('.card');
    current.toggleClass('fullScreen-card');

    if (current.hasClass('fullScreen-card')){
        $(this).html(`<i class="feather-minimize-2"></i>`)
    }else {
        $(this).html(`<i class="feather-maximize-2"></i>`)
    }
});

// SideBar Scroll
const screenHeight = $(window).height();
const currentMenuHeight = $('.nav-menu .active').offset().top;

if ( currentMenuHeight > screenHeight ) {
    $('.sidebar').animate({
        scrollTop: currentMenuHeight - 200
    }, 1000);
};