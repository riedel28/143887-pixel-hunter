// import renderScreen from "./utils";

import renderScreen from "./renderScreen";

import Intro from "./Intro";

renderScreen(Intro);
// import Greeting from "./Greeting";
// import Rules from "./Rules";
// import Game1 from "./Game-1";
// import Game2 from "./Game-2";
// import Game3 from "./Game-3";
// import Stats from "./Stats";

// const keys = {
//   ARROW_LEFT_KEY_CODE: 37,
//   ARROW_RIGHT_KEY_CODE: 39
// };

// const templateIds = [
//   `greeting`,
//   `rules`,
//   `game-1`,
//   `game-2`,
//   `game-3`,
//   `stats`
// ];

// const templates = templateIds.map((id) => document.getElementById(id));

// let currentScreen = 0;

// const isAltRight = (e) => e.altKey && e.keyCode === keys.ARROW_RIGHT_KEY_CODE;
// const isAltLeft = (e) => e.altKey && e.keyCode === keys.ARROW_LEFT_KEY_CODE;

// const onDocumentKeyPress = (e) => {
//   if (isAltRight(e) && currentScreen < templates.length - 1) {
//     showScreen(++currentScreen);
//   }

//   if (isAltLeft(e) && currentScreen > 0) {
//     showScreen(--currentScreen);
//   }
// };

// document.addEventListener(`keydown`, onDocumentKeyPress);

// getElementFromTemplate(`<footer>Футер</footer>`);
