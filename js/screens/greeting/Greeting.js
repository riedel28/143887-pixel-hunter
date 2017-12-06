// import {renderScreen} from "./../../utils";

import GreetingView from "./GreetingView";

// import rules from "./../../Rules";

const greetingScreen = new GreetingView();

greetingScreen.onArrowClick = () => {
  // renderScreen(rules());
  // alert(`hi!`);
};

export default greetingScreen;
