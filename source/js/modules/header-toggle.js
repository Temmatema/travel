const barBtn = document.querySelector('.bar');
const header = document.querySelector('.header');
const entry = document.querySelector('.entry');
const headerIcon = document.querySelector('.header-icon');
const nav = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__link');
const wrapper = document.querySelector('.wrapper');

if (barBtn && header && headerIcon) {
  barBtn.addEventListener('click', () => {
    header.classList.toggle('is-active');
    entry.classList.toggle('is-active');
    wrapper.classList.toggle('is-active');

    switchLogo();
  });
}

function switchLogo() {
  const currentHref = headerIcon.getAttribute('xlink:href');

  if (currentHref === 'img/sprite/logo.svg#logo-dark') {
    headerIcon.setAttribute('xlink:href', 'img/sprite/logo.svg#logo-light');
  } else {
    headerIcon.setAttribute('xlink:href', 'img/sprite/logo.svg#logo-dark');
  }
}

document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && e.target !== barBtn) {
    header.classList.remove('is-active');
    entry.classList.remove('is-active');
    wrapper.classList.remove('is-active');
    headerIcon.setAttribute('xlink:href', 'img/sprite/logo.svg#logo-light');
  }
});

links.forEach((el) => {
  el.addEventListener('click', () => {
    header.classList.remove('is-active');
    entry.classList.remove('is-active');
    wrapper.classList.remove('is-active');
    headerIcon.setAttribute('xlink:href', 'img/sprite/logo.svg#logo-light');
  });
});
