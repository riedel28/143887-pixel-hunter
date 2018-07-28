import {
  renderScreen
} from "../utils";
import GameOneView from "../views/GameOneView";
import {
  gameState
} from "../data/state";
import gameTwoScreen from "./GameTwo";
import gameThreeScreen from "./GameThree";

import introScreen from "./Intro";

export default () => {
  const gameOneScreen = new GameOneView(gameState);

  gameOneScreen.onArrowBackClick = () => {
    renderScreen(introScreen());
  };

  let arr = [];

  gameState.currentScreen = 0;

  const screenTypes = {
    [`one-of-two`]: 0,
    [`tinder-like`]: 1,
    [`one-of-three`]: 2
  };


  const changeView = (num) => {
    if (screenTypes[`one-of-two`] === num) {
      return gameOneScreen;
    } else if (screenTypes[`tinder-like`] === num) {
      return gameTwoScreen();
    } else if (screenTypes[`one-of-three`] === num) {
      return gameThreeScreen();
    }
    return 123;
  };

  console.log(changeView(0));
  console.log(changeView(1));
  console.log(changeView(2));

  gameOneScreen.onAnswerClick = (e) => {
    // console.log(e.target.value);
    // const image = e.target.parentNode;

    // if (image.alt === e.target.value) {
    //   arr.push(e.target.value);
    // }


    // arr.push(e.target.value);
    // console.log(gameState);

    arr.push(e.target.value);

    // console.log(arr);
    if (arr.length > 1) {
      gameState.currentScreen++;
      console.log(gameState.currentScreen);
      renderScreen(gameTwoScreen());

    }
  };

  return gameOneScreen;
};
