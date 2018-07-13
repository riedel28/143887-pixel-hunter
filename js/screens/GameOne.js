import {renderScreen} from "./../utils";
import GameOneView from "./../views/GameOneView";

import introScreen from "./Intro";

const gameOneScreen = new GameOneView();

gameOneScreen.onArrowBackClick = () => {
  renderScreen(introScreen);
};

gameOneScreen.onAnswerClick = () => {};

export default gameOneScreen;
