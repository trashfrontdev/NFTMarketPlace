const detailsSeconds = document.querySelector(".seconds");
const detailsMinutes = document.querySelector(".minutes");
const detailsHours = document.querySelector(".hours");

let seconds = Number(detailsSeconds.innerHTML);
let minutes = Number(detailsMinutes.innerHTML);
let hours = Number(detailsHours.innerHTML);

setInterval(() => {
  if (seconds > 0) {
    seconds -= 1;
    detailsSeconds.innerHTML = seconds;
  } else if (minutes > 0) {
    minutes -= 1;
    detailsMinutes.innerHTML = minutes;
    seconds = 59;
  } else if (hours > 0) {
    hours -= 1;
    detailsHours.innerHTML = hours;
    minutes = 59;
  }
}, 1000);

const guideCards = document.querySelectorAll(".guide-flex-card");
console.log(guideCards);

const documentItems = [
  document.querySelector('.main'),
  document.querySelector('.section'),
  document.querySelector('.article'),
  document.querySelector('.aside'),
  document.querySelector('.details'),
  document.querySelector('.guide-wrapper'),
  document.querySelector('.main-form')
];

const signUpBtn = document.querySelector('.nav-item-button');
const messangerBtn = document.querySelector('.messanger-button');

const openForm  = () => {
  document.querySelector('.header-main-nav').style.top = "-55vh";
  document.querySelector('.sign-up-absolute').style.display = "flex";
  isBurgerShow = false;
}

const closeForm = () => {
  document.querySelector('.sign-up-absolute').style.display = "none";
}

let isRotate = false;


messangerBtn.addEventListener('click', () => {
  if(!isRotate){
    messangerBtn.classList.add('rotate-circle');
    isRotate = true;
    setTimeout(() => {
      for(let i of messangerItems){
        i.style.display = "flex";
        i.classList.add("main-animation");
        i.style.animationName = "reverse-hide-wrapper";
      }
    }, 200)
  } else {
    messangerBtn.classList.remove('rotate-circle');
    isRotate = false;
    setTimeout(() => {
      for(let el of messangerItems){
        el.style.animationName = "hide-wrapper";
        setTimeout(() => {
          el.style.display = "none";
        }, 400)
      }
    }, 200)
  }
})
const messangerItems = document.querySelectorAll('.messanger-list-link');

let isBurgerShow = false;
const bodyDoc = document.querySelector('.main-body');
console.log(window.innerWidth)
  if(window.innerWidth <= 1090){
    document.querySelector('.burger-menu').addEventListener('click', () => {
      
      if(!isBurgerShow){
        document.querySelector('.header-main-nav').style.top = "0";
        isBurgerShow = true;
      } else {
        document.querySelector('.header-main-nav').style.top = "-55vh";
        isBurgerShow = false;
      }
    })
  }
