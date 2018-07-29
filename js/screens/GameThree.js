import {
  renderScreen
} from "../utils";
import GameThreeView from "./../views/GameThreeView";
import statsScreen from "./Stats";

import introScreen from "./Intro";
import {
  gameState
} from "../data/state";

export default () => {
  const gameThreeScreen = new GameThreeView(gameState);

  gameThreeScreen.onArrowBackClick = () => {
    renderScreen(introScreen());
  };

  let arr = [];

  gameThreeScreen.onAnswerClick = (e) => {
    // console.log(e.target.value);

    arr.push(e.target.value);
    if (arr.length > 0) {
      gameState.currentScreen++;
      renderScreen(statsScreen());
    }
  };

  return gameThreeScreen;
};
