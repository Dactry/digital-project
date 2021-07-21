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
