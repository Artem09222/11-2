// const article = document.querySelector('.article')
// console.log(article);

// client

// console.log(article.clientWidth, article.clientHeight);
// console.log(article.clientTop, article.clientLeft);

// offset

// console.log(article.offsetWidth, article.offsetHeight);
// console.log(article.offsetTop, article.offsetLeft);

// const button = document.querySelector('.menu-button');
// const menu = document.querySelector('.menu');

// console.log(menu, button);

// function openMenu(){
//     menu.style.marginLeft = '0px';
// }

// function closeMenu(){
//     menu.style.marginLeft = '-300px';
// }

// button.addEventListener('mouseover', openMenu);
// menu.addEventListener('mouseleave', closeMenu);
let player = document.querySelector(".player");

let mgLeft = 0;
let mgTop = 0;
let step = 10;

function moveTop() {
  mgTop -= step;
}
function moveBottom() {
  mgTop += step;
}
function moveLeft() {
  mgLeft -= step;
}
function moveRight() {
  mgLeft += step;
}

function reverseHandler() {
  player.style.marginLeft = mgLeft + "px";
  player.style.marginTop = mgTop + "px";
}

function Space(){
  mgLeft = 0;
  mgTop = 0;
  player.style.margin = 0 + 'px';
}

function moveHandler(event) {
  switch (event.code) {
    case "KeyW":
      moveLeft();
      break;
    case "KeyQ":
      moveTop();
      break;
    case "KeyA":
      moveRight();
      break;
    case "KeyG":
      moveBottom();
      break;
    case "Space":
      Space();
  }
  reverseHandler();
  console.log(mgLeft, mgTop);
}

document.addEventListener("keydown", moveHandler);