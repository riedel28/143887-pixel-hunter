import {renderScreen} from "../../utils";
import GameThreeView from "./GameThreeView";

import introScreen from "./../intro/Intro";

const gameThreeScreen = new GameThreeView();

gameThreeScreen.onArrowBackClick = () => {
  renderScreen(introScreen);
};

export default gameThreeScreen;
