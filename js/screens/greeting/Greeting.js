import {renderScreen} from "./../../utils";

import GreetingView from "./GreetingView";

import rulesScreen from "./../rules/Rules";

// import introScreen from "./../intro/Intro";

const greetingScreen = new GreetingView();

greetingScreen.onArrowClick = () => {
  renderScreen(rulesScreen);
  // alert(`hi!`);
  // console.log(greetingScreen);
};

export default greetingScreen;
