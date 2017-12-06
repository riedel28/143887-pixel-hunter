import {renderScreen} from "./../../utils";

import IntroView from "./IntroView";

import greetingScreen from "../greeting/Greeting";

const introScreen = new IntroView();

introScreen.onAsteriskClick = () => {
  renderScreen(greetingScreen);
  // alert(`hi!`);
};

export default introScreen;
