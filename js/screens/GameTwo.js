import {
  renderScreen
} from "../utils";
import GameTwoView from "../views/GameTwoView";
import introScreen from "./Intro";
import gameThreeScreen from "./GameThree";
import {
  gameState
} from "../data/state";

export default () => {
  const gameTwoScreen = new GameTwoView(gameState);

  gameTwoScreen.onArrowBackClick = () => {
    renderScreen(introScreen());
  };

  let arr = [];

  gameTwoScreen.onAnswerClick = (e) => {
    // console.log(e.target.value);
    console.log(gameState);

    arr.push(e.target.value);
    if (arr.length > 0) {
      gameState.currentScreen++;
      console.log(gameState.currentScreen);
      renderScreen(gameThreeScreen());
    }
  };

  return gameTwoScreen;
};
