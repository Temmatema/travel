const videoBlock = document.querySelector('.entry__video');

if (videoBlock) {
  const videoBtn = videoBlock.querySelector('button');
  const iframe = videoBlock.querySelector('iframe');

  videoBtn.onclick = () => {
    videoBlock.classList.add('is-play');
    iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&controls=0';
  };
}
