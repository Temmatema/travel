import Swiper from '../vendor/swiper.js';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.tours__swiper', {
  speed: 300,
  direction: 'horizontal',
  spaceBetween: 30,
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.tours__next-btn',
    prevEl: '.tours__prev-btn',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1199: {
      slidesPerView: 3,
    },
    1600: {
      slidesPerView: 4,
    },
  },
});
