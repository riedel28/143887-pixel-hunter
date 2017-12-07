import {renderScreen} from "./../../utils";

import RulesView from "./RulesView";

import introScreen from "./../intro/Intro";
import gameOneScreen from "./../game-1/GameOne";

const rulesScreen = new RulesView();

rulesScreen.onArrowBackClick = () => {
  renderScreen(introScreen);
};

rulesScreen.onFormSubmit = (e) => {
  e.preventDefault();
  // renderScreen(game1());
  renderScreen(gameOneScreen);
  // console.log(`hi`);
};

export default rulesScreen;
