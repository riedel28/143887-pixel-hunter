import {renderScreen} from "./../utils";
import GameTwoView from "./../views/GameTwoView";
import introScreen from "./Intro";
import gameThreeScreen from "./GameThree";

export default () => {
  const gameTwoScreen = new GameTwoView();

  gameTwoScreen.onArrowBackClick = () => {
    renderScreen(introScreen());
  };

  let arr = [];

  gameTwoScreen.onAnswerClick = (e) => {
    // console.log(e.target.value);

    arr.push(e.target.value);
    if (arr.length > 0) {
      renderScreen(gameThreeScreen());
    }
  };

  return gameTwoScreen;
};
