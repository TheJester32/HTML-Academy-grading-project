const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const menu = document.querySelector('.navigation');
const menuToggle = document.querySelector('.toggle');
const menuCross = document.querySelector('.cross');
menuToggle.classList.remove('navigation--nojs__toggle');

menu.classList.remove('navigation--nojs');
menu.classList.add('navigation--closed');

menuToggle.addEventListener('click', () => {
  if (menu.classList.contains('navigation--closed')) {
    menu.classList.remove('navigation--closed');
    menu.classList.add('navigation--opened');
    menuToggle.classList.add('hidden')
    menuCross.classList.remove('hidden')
  } else {
    menu.classList.add('navigation--closed');
    menu.classList.remove('navigation--opened');
  }
});

menuCross.addEventListener('click', () =>{

    menuCross.classList.add('hidden')
    menu.classList.add('navigation--closed');
    menu.classList.remove('navigation--opened');
    menuToggle.classList.remove('hidden')
  })

const map = L.map('map', { scrollWheelZoom: false }).setView([59.968322, 30.317359], 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);

const marker1 = L.marker([59.968322, 30.317359]).addTo(map);

//please read readme
