const keys = {
  ARROW_LEFT_KEY_CODE: 37,
  ARROW_RIGHT_KEY_CODE: 39
};

const templateIds = [
  `greeting`,
  `rules`,
  `game-1`,
  `game-2`,
  `game-3`,
  `stats`
];

const templates = templateIds.map((id) => document.getElementById(id));

const mainScreen = document.querySelector(`.central`);

let currentScreen = 0;

const isAltRight = (e) => e.altKey && e.keyCode === keys.ARROW_RIGHT_KEY_CODE;
const isAltLeft = (e) => e.altKey && e.keyCode === keys.ARROW_LEFT_KEY_CODE;

const showScreen = (number) => {
  mainScreen.innerHTML = templates[number].innerHTML;
};

const onDocumentKeyPress = (e) => {
  if (isAltRight(e)) {
    if (currentScreen < templates.length - 1) {
      showScreen(++currentScreen);
    }
  }

  if (isAltLeft(e)) {
    if (currentScreen > 0) {
      showScreen(--currentScreen);
    }
  }
};

showScreen(currentScreen);

document.addEventListener(`keydown`, onDocumentKeyPress);
