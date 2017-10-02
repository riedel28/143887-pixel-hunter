const greeting = document.getElementById(`greeting`);
const rules = document.getElementById(`rules`);
const game1 = document.getElementById(`game-1`);
const game2 = document.getElementById(`game-3`);
const game3 = document.getElementById(`game-3`);
const stats = document.getElementById(`stats`);

const screens = [greeting, rules, game1, game2, game3, stats];

const templateIds = screens.map((id) => {
  const ids = [];
  ids.push(id);
  return ids;
});

const mainScreen = document.querySelector(`.central`);

let currentScreen = 0;

const isAltRight = (e) => e.altKey && e.keyCode === 39;
const isAltLeft = (e) => e.altKey && e.keyCode === 37;

const showScreen = (number) => {
  mainScreen.innerHTML = screens[number].innerHTML;
};

const changeScreen = () => {
  if (isAltRight) {
    showScreen(++currentScreen);
  }

  if (isAltLeft) {
    showScreen(--currentScreen);
  }
};

showScreen(currentScreen);

document.addEventListener(`keydown`, function (e) {
  changeScreen(e);
});
