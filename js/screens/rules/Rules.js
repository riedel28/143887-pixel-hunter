import {renderScreen} from "./../../utils";

import RulesView from "./RulesView";

import introScreen from "./../intro/Intro";

const rulesScreen = new RulesView();

rulesScreen.onArrowBackClick = () => {
  renderScreen(introScreen);
};

rulesScreen.onFormSubmit = (e) => {
  e.preventDefault();
  // renderScreen(game1());
  console.log(`hi`);
};

export default rulesScreen;
