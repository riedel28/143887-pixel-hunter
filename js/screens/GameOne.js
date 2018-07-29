import {
  renderScreen,
  changeView
} from "../utils";
import GameOneView from "./../views/GameOneView";
import {
  gameState
} from "./../data/state";

import introScreen from "./Intro";

export default () => {
  const gameOneScreen = new GameOneView(gameState);

  gameOneScreen.onArrowBackClick = () => {
    renderScreen(introScreen());
  };

  let arr = [];

  gameOneScreen.onAnswerClick = (e) => {
    const {
      type: nextGameScreen
    } = gameState.screens[gameState.currentScreen];

    arr.push(e.target.value);

    if (arr.length > 1) {
      gameState.currentScreen++;
      changeView(nextGameScreen);
    }
  };

  return gameOneScreen;
};
