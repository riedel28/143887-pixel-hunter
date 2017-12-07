import {renderScreen} from "../../utils";
import GameOneView from "./GameOneView";

import introScreen from "./../intro/Intro";

const gameOneScreen = new GameOneView();

gameOneScreen.onArrowBackClick = () => {
  renderScreen(introScreen);
};

export default gameOneScreen;
