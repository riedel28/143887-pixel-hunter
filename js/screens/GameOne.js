import {renderScreen} from "./../utils";
import GameOneView from "./../views/GameOneView";
import gameTwoScreen from "./GameTwo";

import introScreen from "./Intro";

export default () => {
  const gameOneScreen = new GameOneView();

  gameOneScreen.onArrowBackClick = () => {
    renderScreen(introScreen());
  };

  let arr = [];

  gameOneScreen.onAnswerClick = (e) => {
    // console.log(e.target.value);

    arr.push(e.target.value);
    if (arr.length > 1) {
      renderScreen(gameTwoScreen());
    }
  };

  return gameOneScreen;
};
