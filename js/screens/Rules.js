import {
  renderScreen
} from "../utils";
import RulesView from "../views/RulesView";
import introScreen from "./Intro";
import gameOneScreen from "./GameOne";

import {
  gameScreens
} from "../data/state";

export default () => {
  const rulesScreen = new RulesView();

  rulesScreen.onArrowBackClick = () => {
    renderScreen(introScreen());
  };

  rulesScreen.onFormSubmit = (e) => {
    e.preventDefault();
    // renderScreen(game1());
    renderScreen(gameOneScreen());
  };

  return rulesScreen;
};
