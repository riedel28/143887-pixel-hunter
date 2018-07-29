import {
  renderScreen,
  changeView
} from "./../utils";
import RulesView from "./../views/RulesView";
import introScreen from "./Intro";
import {
  gameState
} from "./../data/state";

export default () => {
  const rulesScreen = new RulesView();

  gameState.currentScreen = 0;

  const {
    type: firstGameScreen
  } = gameState.screens[gameState.currentScreen];

  rulesScreen.onArrowBackClick = () => {
    renderScreen(introScreen());
  };

  rulesScreen.onFormSubmit = (e) => {
    e.preventDefault();
    gameState.currentScreen++;
    changeView(firstGameScreen);
  };

  return rulesScreen;
};
