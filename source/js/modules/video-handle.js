let videoBlock = document.querySelector('.entry__video');
let videoBtn = videoBlock.querySelector('button');
let iframe = videoBlock.querySelector('iframe');

videoBtn.onclick = () => {
  videoBlock.classList.add('is-play');
  iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&controls=0';
};
