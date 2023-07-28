const barBtn = document.querySelector('.bar');
const header = document.querySelector('.header');
const headerIcon = document.querySelector('.header-icon');

barBtn.addEventListener('click', () => {
  header.classList.toggle('is-active');

  const currentHref = headerIcon.getAttribute('xlink:href');

  if (currentHref === 'img/sprite/logo.svg#logo-dark') {
    headerIcon.setAttribute('xlink:href', 'img/sprite/logo.svg#logo-light');
  } else {
    headerIcon.setAttribute('xlink:href', 'img/sprite/logo.svg#logo-dark');
  }
});
