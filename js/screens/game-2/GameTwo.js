import {renderScreen} from "../../utils";
import GameTwoView from "./GameTwoView";

import introScreen from "./../intro/Intro";

const gameTwoScreen = new GameTwoView();

gameTwoScreen.onArrowBackClick = () => {
  renderScreen(introScreen);
};

export default gameTwoScreen;
