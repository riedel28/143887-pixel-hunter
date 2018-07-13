import {renderScreen} from "./../utils";
import GameThreeView from "./GameThreeView";

import introScreen from "./../Intro";

const gameThreeScreen = new GameThreeView();

gameThreeScreen.onArrowBackClick = () => {
  renderScreen(introScreen);
};

export default gameThreeScreen;
