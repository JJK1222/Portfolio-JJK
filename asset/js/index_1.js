// 배경이미지 롤링 js
$("body").vegas({
  delay: 7000,
  timer: false,
  shuffle: true,
  firstTransition: 'fade',
  firstTransitionDuration: 5000,
  transition: 'fade',
  transitionDuration: 4000,
  animation: 'random',
  overlay: 'asset/js/vegas/overlays/05.png',
  slides: [
    { src: "asset/images/main_bg/001.jpg" },
    { src: "asset/images/main_bg/002.jpg" },
    { src: "asset/images/main_bg/003.jpg" },
    { src: "asset/images/main_bg/004.jpg" },
    { src: "asset/images/main_bg/005.jpg" }
],
timer: false
});

// 메인 타이핑 텍스트
const instance = new Typewriter('#typing', {
  loop: false,
});

instance.typeString('html, css,')
  .typeString('<br/>')
  .pauseFor(500)
  .typeString('Javascript')
  .typeString('<br/>')
  .pauseFor(1500)
  .typeString('어렵지만')
  .pauseFor(3000)
  .typeString(' 재밌...')
  .pauseFor(1500)
  .typeString('<br/>')
  .typeString('@$&^%*%^& ??')
  .pauseFor(3000)
  .deleteAll(30)
  .pauseFor(3000)
  .typeString('<br/>')
  .pauseFor(3000)
  .typeString('도전하는 내가')
  .pauseFor(300)
  .typeString('<br/>')
  .pauseFor(500)
  .typeString('아름답다! 아자!')
  .pauseFor(3000)
  .start();
