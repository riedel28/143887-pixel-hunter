import {renderScreen} from "./../utils";

import RulesView from "./../views/RulesView";

import introScreen from "./Intro";
import gameOneScreen from "./GameOne";

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
