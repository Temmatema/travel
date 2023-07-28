import Swiper from '../vendor/swiper.js';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.training__swiper', {
  speed: 300,
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.training__next-btn',
    prevEl: '.training__prev-btn',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
    1600: {
      slidesPerView: 5,
    },
  },
});

