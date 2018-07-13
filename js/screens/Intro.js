import {renderScreen} from "./../utils";

import IntroView from "./../views/IntroView";

import greetingScreen from "./Greeting";

const introScreen = new IntroView();

introScreen.onAsteriskClick = () => {
  renderScreen(greetingScreen);
  // alert(`hi!`);
};

export default introScreen;
