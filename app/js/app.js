$(document).ready(function () {
  $('.certificates__list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }]
  });
  $('.main__gallary').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  });


  window.addEventListener("resize", function () {
    if (window.innerWidth >= 769) {
      $('.project__preview').slick('unslick');
    }
    else {
      $('.project__preview').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        centerPadding: '50px',
        autoplaySpeed: 3000,
        prevArrow: $('.prev1'),
        nextArrow: $('.next1'),
      });
    }
  });



  $('.gallery__list').slick({
    rows: 2,
    dots: false,
    arrows: true,
    // infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          rows: 1,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 1
        }
      }
    ]
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
