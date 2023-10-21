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

signUpBtn.addEventListener('click', () => {
  for(let docItem = 0; docItem < documentItems.length; docItem++){
    setTimeout(() => {
      documentItems[docItem].classList.add('main-animation');
      documentItems[docItem].style.animationName = "hide-wrapper";
      setTimeout(() => {
        documentItems[docItem].style.display = "none";
      }, 350)
    }, count)
    count += 350;
  }
  document.querySelector('.sign-up-wrapper').style.display = "flex";
})
let count = 0;
const logoButton = document.querySelector('.header-nav-logo');
logoButton.addEventListener('click', () => {
  
})
const messangerBtn = document.querySelector('.messanger-button');
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
