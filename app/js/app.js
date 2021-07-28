// $('.nav__item') 

// $('.nav__logo-wrapper').addClass('is-active')

// $('.nav__logo-wrapper').removeClass('is-active')
// $('.nav__logo-wrapper').toggleClass('is-active')

// $('.nav__item').children('a').addClass('.is-active')

// $('.main__button-slider').on('click', function() {
//     $(this).toggleClass('is-active');
// })

// $('.nav__item').each(function () {
//     $(this).addClass('-active')
// })

$(document).ready(function () {
    $('.certificates__list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    });

    $('.gallery__list').slick({
		rows: 2,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 5
    });
});