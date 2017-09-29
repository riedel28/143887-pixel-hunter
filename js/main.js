const screens = document.querySelectorAll(`template`);
const mainScreen = document.querySelector(`.central`);

let currentScreen = 0;

const showScreen = (number) => {
  mainScreen.innerHTML = screens[number].innerHTML;
};

const changeScreen = (e) => {
  if (e.altKey && e.keyCode === 39) {
    showScreen(currentScreen++);
  }

  if (e.altKey && e.keyCode === 37) {
    showScreen(currentScreen--);
  }
};

showScreen(0);

document.addEventListener(`keydown`, function (e) {
  changeScreen(e);
});
