import {renderScreen} from "./../utils";
import GameThreeView from "./../views/GameThreeView";
import statsScreen from "./Stats";

import introScreen from "./Intro";

export default () => {
  const gameThreeScreen = new GameThreeView();

  gameThreeScreen.onArrowBackClick = () => {
    renderScreen(introScreen());
  };

  let arr = [];

  gameThreeScreen.onAnswerClick = (e) => {
    // console.log(e.target.value);

    arr.push(e.target.value);
    if (arr.length > 0) {
      renderScreen(statsScreen());
    }
  };

  return gameThreeScreen;
};
