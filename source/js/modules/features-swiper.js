import Swiper from '../vendor/swiper.js';

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;
  if (width > 1199) {
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper('.features__swiper', {
      speed: 300,
      direction: 'horizontal',
      spaceBetween: 30,
      slidesPerView: 3,
      initialSlide: 1,
      navigation: {
        nextEl: '.features__next-btn',
        prevEl: '.features__prev-btn',
      },
    });
  }
});
