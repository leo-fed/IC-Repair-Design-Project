//header nav
const atop = document.querySelector('a[href*="top"]');
const top1 = document.getElementById('top1');
const aprojects = document.querySelector('a[href*="projects"]');
const projects = document.getElementById('projects');
const atypes = document.querySelector('a[href*="types"]');
const types = document.getElementById('types');
const areviews = document.querySelector('a[href*="reviews"]');
const reviews = document.getElementById('reviews');
const acontacts = document.querySelector('a[href*="contacts"]');
const contacts = document.getElementById('contacts');

document.addEventListener('scroll', function() {
  let top1Top = top1.getBoundingClientRect().top;
  let top1Bot = top1.getBoundingClientRect().bottom;
  
  let projectsTop = projects.getBoundingClientRect().top;
  let projectsBot = projects.getBoundingClientRect().bottom;

  let typesTop = types.getBoundingClientRect().top;
  let typesBot = types.getBoundingClientRect().bottom;

  let reviewsTop = reviews.getBoundingClientRect().top;
  let reviewsBot = reviews.getBoundingClientRect().bottom;

  let contactsTop = contacts.getBoundingClientRect().top;
  let contactsBot = contacts.getBoundingClientRect().bottom;

  if (top1Top <= 83 && projectsTop >= 0 && !atop.classList.contains('menu__links_active')) {
    atop.classList.add('menu__links_active');
  } else if (projectsTop < 0 && atop.classList.contains('menu__links_active')) {
    atop.classList.remove('menu__links_active');
  };
  //
  if (projectsTop <= 0 && typesTop >= 0 && !aprojects.classList.contains('menu__links_active')) {
    aprojects.classList.add('menu__links_active');
  } else if ((typesTop <= 0 || projectsTop >= 0) && aprojects.classList.contains('menu__links_active')) {
    aprojects.classList.remove('menu__links_active');
  };
  //
  if (typesTop <= 0 && reviewsTop >= 0 && !atypes.classList.contains('menu__links_active')) {
    atypes.classList.add('menu__links_active');
  } else if ((reviewsTop < 0 || typesTop >= 0) && atypes.classList.contains('menu__links_active')) {
    atypes.classList.remove('menu__links_active');
  };
  //
  if (reviewsTop <= 0 && contactsTop >= 0 && !areviews.classList.contains('menu__links_active')) {
    areviews.classList.add('menu__links_active');
  } else if ((contactsTop < 0 || reviewsTop >= 0) && areviews.classList.contains('menu__links_active')) {
    areviews.classList.remove('menu__links_active');
  };
  //
  if (contactsTop <= 0 && contactsBot >= 0 && !acontacts.classList.contains('menu__links_active')) {
    acontacts.classList.add('menu__links_active');
  } else if (contactsTop > 0 && acontacts.classList.contains('menu__links_active')) {
    acontacts.classList.remove('menu__links_active');
  };
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
