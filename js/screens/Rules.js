import {
  renderScreen,
  changeView
} from "../utils";
import RulesView from "../views/RulesView";
import introScreen from "./Intro";

export default () => {
  const rulesScreen = new RulesView();

  rulesScreen.onArrowBackClick = () => {
    renderScreen(introScreen());
  };

  rulesScreen.onFormSubmit = (e) => {
    e.preventDefault();
    changeView(`one-of-two`);
  };

  return rulesScreen;
};
