import {renderScreen} from "./../utils";
import GameOneView from "./../views/GameOneView";
import GameTwo from "./GameTwo";

import introScreen from "./Intro";

const gameOneScreen = new GameOneView();

gameOneScreen.onArrowBackClick = () => {
  renderScreen(introScreen);
};

let arr = [];

gameOneScreen.onAnswerClick = (e) => {
  // console.log(e.target.value);

  arr.push(e.target.value);
  if (arr.length > 1) {
    renderScreen(GameTwo);
  }
};

export default gameOneScreen;
