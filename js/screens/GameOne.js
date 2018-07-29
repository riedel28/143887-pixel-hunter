import {
  renderScreen,
  changeView
} from "../utils";
import GameOneView from "./../views/GameOneView";
import {
  gameState
} from "../data/state";

import introScreen from "./Intro";

export default () => {
  const gameOneScreen = new GameOneView(gameState);

  gameOneScreen.onArrowBackClick = () => {
    renderScreen(introScreen());
  };

  let arr = [];

  gameState.currentScreen = 0;


  // console.log(changeView(`tinder-like`));
  // console.log(changeView(1));
  // console.log(changeView(2));

  gameOneScreen.onAnswerClick = (e) => {
    // console.log(e.target.value);
    // const image = e.target.parentNode;

    // if (image.alt === e.target.value) {
    //   arr.push(e.target.value);
    // }
    // console.log(gameOneScreen);


    // arr.push(e.target.value);
    // console.log(gameState);

    arr.push(e.target.value);

    // console.log(arr);
    if (arr.length > 1) {
      gameState.currentScreen++;
      // console.log(gameState.currentScreen);
      changeView(`tinder-like`);

    }
  };

  return gameOneScreen;
};
