$(function(){
    $('.select-style').styler();

    $('.reviews__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        prevArrow: '<button type="button" class="reviews__arrow reviews__arrow--prev"><svg><use xlink:href="images/sprite.svg#icon-chevron"></use></svg></button>',
        nextArrow: '<button type="button" class="reviews__arrow reviews__arrow--next"><svg><use xlink:href="images/sprite.svg#icon-chevron"></use></svg></button>',
        autoplay: true,
        autoplaySpeed: 5000
    });

    $(function () {
        $(".star").rateYo({
        rating: 0,
        starWidth: "16px",
        });
    });

    $(".first--star").rateYo({
        rating: 5,
        starWidth: "16px",
        readOnly: true
    });

    $(".second--star").rateYo({
        rating: 4,
        starWidth: "16px",
        readOnly: true
    });

    $(".third--star").rateYo({
        rating: 3,
        starWidth: "16px",
        readOnly: true
    });

    $(".fourth--star").rateYo({
        rating: 2,
        starWidth: "16px",
        readOnly: true
    });

    $(".fifth--star").rateYo({
        rating: 1,
        starWidth: "16px",
        readOnly: true
    }); 

    $('.filter-price__input').ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function (data) {
          $('.filter-price__from').text(data.from);
          $('.filter-price__to').text(data.to);
        },
        onChange: function (data) {
          $('.filter-price__from').text(data.from);
          $('.filter-price__to').text(data.to);
        },
    });

    $('.catalog-top__btn').on('click', function() {
        $('.catalog-top__btn').removeClass('catalog-top__btn--active');
        $(this).addClass('catalog-top__btn--active');
    });
    
    $('.catalog-top__btn--list').on('click', function() {
        $('.product-card').addClass('product-card--list');
    });

    $('.catalog-top__btn--grid').on('click', function() {
        $('.product-card').removeClass('product-card--list');
    });

    $('.catalog-top__btn--list').on('click', function() {
        $('.product-catalog__items').addClass('product-catalog__list');
    });

    $('.catalog-top__btn--grid').on('click', function() {
        $('.product-catalog__items').removeClass('product-catalog__list');
    });

    $('.product-tabs__top-item').on('click', function(e){
        e.preventDefault();
        $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
        $(this).addClass('product-tabs__top-item--active');

        $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
        $($(this).attr('href')).addClass('product-tabs__content-item--active');
    })
});