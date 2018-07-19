import {renderScreen} from "./../utils";
import GreetingView from "./../views/GreetingView";
import rulesScreen from "./Rules";

// import introScreen from "./../intro/Intro";

export default () => {
  const greetingScreen = new GreetingView();

  greetingScreen.onArrowClick = () => {
    renderScreen(rulesScreen());
    // alert(`hi!`);
    // console.log(greetingScreen);
  };

  // export default greetingScreen;

  return greetingScreen;
};
