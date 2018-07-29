import {
  renderScreen,
  changeView
} from "../utils";
import GameTwoView from "./../views/GameTwoView";
import introScreen from "./Intro";
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

    arr.push(e.target.value);
    if (arr.length > 0) {
      gameState.currentScreen++;
      changeView(`one-of-three`);
    }
  };

  return gameTwoScreen;
};
