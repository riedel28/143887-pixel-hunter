import {renderScreen} from "./../utils.js";
import GameTwoView from "./../views/GameTwoView";

import introScreen from "./Intro";
import GameThree from "./GameThree";

const gameTwoScreen = new GameTwoView();

gameTwoScreen.onArrowBackClick = () => {
  renderScreen(introScreen);
};

let arr = [];

gameTwoScreen.onAnswerClick = (e) => {
  // console.log(e.target.value);

  arr.push(e.target.value);
  if (arr.length > 0) {
    renderScreen(GameThree);
  }
};

export default gameTwoScreen;
