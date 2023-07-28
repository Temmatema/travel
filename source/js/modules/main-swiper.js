import Swiper from '../vendor/swiper.js';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.entry', {
  speed: 300,
  direction: 'horizontal',
  initialSlide: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  pagination: {
    el: '.swiper__pagination',
    type: 'bullets',
    clickable: true,
  },
});
