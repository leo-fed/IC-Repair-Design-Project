//header
let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('header_hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('header_hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        header.classList.remove('header_hide');        
    }
    lastScroll = scrollPosition();
});

//header nav
let nav = document.getElementById('block');

document.addEventListener('scroll', function() {
  let posTop = elem.getBoundingClientRect().top;
  elem.classList.toggle('visible', posTop <= 0);
});


//player
let vidEl = document.getElementsByTagName('video')[0],
    playBtn = document.getElementById('play-btn'),
    vidPlayer = document.getElementById('online-control__player'),
    vidOverlay = document.getElementById('player__overlay'),
    vidControls = document.getElementById('player__controls');
    
vidEl.volume = 0.1;

playBtn.addEventListener('click', function () {
    if (vidEl.paused) {
        vidEl.play();
        playBtn.classList.add('hidden');
        playBtn.classList.add('hidden_big');
    } else {
        vidEl.pause();
        playBtn.classList.remove('hidden');
        playBtn.classList.remove('hidden_big');
    };
    vidOverlay.classList.add('hidden');
}, false);

//slider1
let imgs = [...document.querySelectorAll('.slider__img')];
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


//slider2
let imgsm = [...document.querySelectorAll('.mobile-slider__img')];

function gom(dir) {
    let index = imgsm.indexOf(document.querySelector('.mobile-slider__img_active'));
    imgsm[index].classList.remove('mobile-slider__img_active');
    imgsm[(index + dir + imgsm.length) % imgsm.length].classList.add('mobile-slider__img_active');
};


//slider3
let imgsm2 = [...document.querySelectorAll('.gallery-slider__img')];

function gom2(dir) {
    let index = imgsm2.indexOf(document.querySelector('.gallery-slider__img_active'));
    imgsm2[index].classList.remove('gallery-slider__img_active');
    imgsm2[(index + dir + imgsm2.length) % imgsm2.length].classList.add('gallery-slider__img_active');
};
