import {
  renderScreen
} from "../utils";

import IntroView from "../views/IntroView";

import greetingScreen from "./Greeting";

export default () => {
  const introScreen = new IntroView();

  introScreen.onAsteriskClick = () => {
    renderScreen(greetingScreen());
  };

  return introScreen;
};
