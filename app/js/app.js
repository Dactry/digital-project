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

    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });
  $('.main__gallary').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    fade: true,
  });

  $('.gallery__list').slick({
    rows: 2,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });

  $('.our-project__list').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });

  $('.our-project__list').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });




  const activeForm = function () {
    $('.contacts-info__form').toggleClass('-active');
  };

  $('.contacts-info__button').on('click', activeForm);
  $('.contacts-info__form-close').on('click', activeForm);
  $('.contacts-info__form-overlay').on('click', activeForm);

  $('[data-popup]').on('click', function () {
    $('.popup').addClass('popup-active');
    $(activeForm);
  });

  const blockScroll = function () {
    $("body").addClass("fixed");
  };

  const closePopup = function () {
    $('.popup').removeClass('popup-active')
  }

  $('.popup__close').on('click', closePopup);
  $('.popup__button').on('click', closePopup);
  $('.popup__overlay').on('click', closePopup);




  // block submit form
  $('.form').submit(function (event) {
    event.preventDefault();
  });


  $('.image-link').magnificPopup({ type: 'image' });
  $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: { enabled: true }
    // other options
  });

  const nextArrow = $('#my-arrow-next');
  const prevArrow = $('#my-arrow-prev');

    var trigger = $('#hamburger'),
        isClosed = false;

    trigger.click(function () {
      burgerTime();
    });

    function burgerTime() {
      if (isClosed == true) {
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
    }


});
