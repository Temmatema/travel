import Swiper from '../vendor/swiper.js';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.gallery__swiper', {
  speed: 300,
  direction: 'horizontal',
  spaceBetween: 3,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.gallery__next-btn',
    prevEl: '.gallery__prev-btn',
  },
  breakpoints: {
    767: {
      spaceBetween: 5,
    },
  },
});
