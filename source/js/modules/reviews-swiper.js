import Swiper from '../vendor/swiper.js';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.reviews__swiper', {
  speed: 300,
  direction: 'horizontal',
  spaceBetween: 30,
  slidesPerView: 1,
  navigation: {
    nextEl: '.reviews__next-btn',
    prevEl: '.reviews__prev-btn',
  },
  breakpoints: {
    1600: {
      slidesPerView: 2,
    },
  },
});
