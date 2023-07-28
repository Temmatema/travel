const audioBtn = document.querySelector('.audio-play');
const audioIcon = document.querySelector('.audio__icon');

const audio = new Audio('audio/academy-audio.mp3');

audioBtn.addEventListener('click', () => {
  const currentHref = audioIcon.getAttribute('xlink:href');

  if (currentHref === 'img/sprite/icons.svg#play-audio') {
    audioIcon.setAttribute('xlink:href', 'img/sprite/icons.svg#pause');
    audio.play();
  } else {
    audioIcon.setAttribute('xlink:href', 'img/sprite/icons.svg#play-audio');
    audio.pause();
  }
});
