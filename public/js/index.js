$(document).ready(function () {

    $('.js-btn-search').on('click', function () {
        var searchWrap = $('.search__wrapper');
        var serchInp = $('#searchInp');
        $('.search').toggleClass('active');
    })

    $(window).resize(function () {
        var client_w = window.innerWidth;
        if (client_w <= 1080) {
            $('.nav__list').addClass('js-nav__list');
        }
        if (client_w > 1080) {
            $('.nav__list').removeClass('js-nav__list');
        }
    });

    $(document).on('click', function (event) {
        var target = $(event.target);
        var navWrap = $('.js-nav__list');
        var navBtn = $('.js-btn-burger');
        var client_w = window.innerWidth;
        if (client_w <= 1080) {


            if ($(target).closest(navBtn).length === 0 || $(navBtn).hasClass('active')) {
                $(navBtn).removeClass('active');
                $(navWrap).slideUp(200);
            } else {
                $(navBtn).addClass('active');
                $('.search').removeClass('active');
                $(navWrap).slideDown(200);
            }
        }
    })


    $(document).on('click', function (event) {
        var target = $(event.target);
        var menuToggleList = $('.js-menuToggle');
        var menuList = $('.js-user__menu');
        var parent = $(target).closest('.js-menuToggle');
        if ($(target).closest('.js-menuToggle').length === 0) {
            for (var i = 0; i < menuToggleList.length; i++) {
                $(menuToggleList[i]).removeClass("active");
                $(menuList[i]).slideUp(200);
            }
            return
        }
        if ($(parent).hasClass("active")) {
            $(parent).find('.js-user__menu').slideUp(200);
            $(parent).removeClass("active");
            return
        }
        if ($(target).closest('.js-menuToggle').length === 1) {
            for (var i = 0; i < menuToggleList.length; i++) {
                $(menuToggleList[i]).removeClass("active");
                $(menuList[i]).slideUp(200);
            }
            $('.search').removeClass('active');
            $(parent).toggleClass('active');
            $(parent).find('.js-user__menu').slideDown(200);
        }
    })

});
$(window).load(function () {
    $('.flexslider').flexslider({
        animation: "slide",
        touch: true,
        directionNav: true,
        controlNav: true,
        controlsContainer: ".slider__desc",
        prevText: '',
        nextText: ''
    });
});
