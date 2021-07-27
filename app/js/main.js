// const navLink = document.querySelectorAll('.nav__link'),
//   headerNav = document.querySelector('.header__nav');

// for (let i = 0; i < navLink.length; i++) {
//   navLink[i].addEventListener('click', function (event) {
//     event.preventDefault();

//     let href = this.getAttribute('href').substring(1);

//     const scrollTarget = document.getElementById(href);

//     const topOffset = document.querySelector('.header__nav').offsetHeight;
//     const elementPosition = scrollTarget.getBoundingClientRect().top;
//     const offsetPosition = elementPosition - topOffset;


//     navListLeft.classList.toggle('mobile__nav-list-active');
//     mobileBtn.classList.toggle('burger-close');

//     window.scrollBy({
//       top: offsetPosition,
//       behavior: 'smooth'
//     });
//   });
// }


// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// const mobileBtn = document.querySelector('.burger');
// const navListLeft = document.querySelector('.mobile__nav-list');

// mobileBtn.onclick = function () {
//   this.classList.toggle('burger-close');
//   navListLeft.classList.toggle('mobile__nav-list-active');
// }


const form = document.querySelector('.contacts-info__form');
const formBtn = document.querySelector('.contacts-info__button');
const formClose = document.querySelector('.contacts-info__form-close');

formBtn.onclick = function () {
    form.classList.add('-active')
}
formClose.onclick = function () {
    form.classList.remove('-active');
}

const modal = document.querySelector('.popup')
const modalBtn = document.querySelector('.open-popup')
const modalClose = document.querySelector('.popup__close')
const modalClose1 = document.querySelector('.popup__button');

modalBtn.onclick = function () {
    modal.classList.add('popup-active');
    form.classList.remove('-active');
};

modalClose.onclick = function () {
    modal.classList.remove('popup-active');
};

modalClose1.onclick = function () {
    modal.classList.remove('popup-active');
};


modal.onclick = function(e){
    if ( event.target.className != 'popup__content' ) {
        modal.classList.remove('popup-active');
    };
};

// const form = document.querySelector("form");
// form.addEventListener("submit", async event => {
//     event.preventDefault();
//     const formData = new FormData(form)
//     const response = await fetch(form.action, {
//         method: 'POST',
//         body: formData
//     }
//   if (response.ok) {
//         location.replace('yourredirecturl')
//     }
// });