$(function(){
    $('.select-style').styler();

    $('.reviews__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        prevArrow: '<button type="button" class="reviews__arrow reviews__arrow--prev"><svg><use xlink:href="images/sprite.svg#icon-chevron"></use></svg></button>',
        nextArrow: '<button type="button" class="reviews__arrow reviews__arrow--next"><svg><use xlink:href="images/sprite.svg#icon-chevron"></use></svg></button>',
        // autoplay: true,
        // autoplaySpeed: 5000
    });
});