// получаем все элементы
let vidEl = document.getElementsByTagName('video')[0],
    playBtn = document.getElementById('play-btn'),
    vidPlayer = document.getElementById('online-control__player'),
    vidOverlay = document.getElementById('player__overlay'),
    vidControls = document.getElementById('player__controls');
    
vidEl.volume = 0.1;
// запускам или останавливаем воспроизведение
playBtn.addEventListener('click', function () {
    if (vidEl.paused) {
        vidEl.play();
        playBtn.classList.add('hidden');
    } else {
        vidEl.pause();
        vidControls.classList.remove('hidden');
    };
    vidOverlay.classList.add('hidden');
}, false);




let imgs = [...document.querySelectorAll('.slider__img')];
let imgsm = [...document.querySelectorAll('.mobile-slider__img')];
let dots = [...document.querySelectorAll('.slider__button-pt')];
let tabs = [...document.querySelectorAll('.slider__tab')];


function go(dir) {
  let indexImg = imgs.indexOf(document.querySelector('.slider__img_active'));
  let indexDot = dots.indexOf(document.querySelector('.slider__button-pt_active'));
  let indexTab = tabs.indexOf(document.querySelector('.slider__tab_active'));
  imgs[indexImg].classList.remove('slider__img_active');
  dots[indexDot].classList.remove('slider__button-pt_active');
  tabs[indexTab].classList.remove('slider__tab_active');
  imgs[(indexImg + dir + imgs.length) % imgs.length].classList.add('slider__img_active');
  dots[(indexImg + dir + imgs.length) % imgs.length].classList.add('slider__button-pt_active');
  tabs[(indexImg + dir + imgs.length) % imgs.length].classList.add('slider__tab_active');
};

function goTo(indexTo) {
    let indexImg = imgs.indexOf(document.querySelector('.slider__img_active'));
    let indexDot = dots.indexOf(document.querySelector('.slider__button-pt_active'));
    let indexTab = tabs.indexOf(document.querySelector('.slider__tab_active'));
    imgs[indexImg].classList.remove('slider__img_active');
    dots[indexDot].classList.remove('slider__button-pt_active');
    tabs[indexTab].classList.remove('slider__tab_active');
    imgs[indexTo].classList.add('slider__img_active');
    dots[indexTo].classList.add('slider__button-pt_active');
    tabs[indexTo].classList.add('slider__tab_active');
  };

function gom(dir) {
    let index = imgsm.indexOf(document.querySelector('.mobile-slider__img_active'));
    imgsm[index].classList.remove('mobile-slider__img_active');
    imgsm[(index + dir + imgsm.length) % imgsm.length].classList.add('mobile-slider__img_active');
};
