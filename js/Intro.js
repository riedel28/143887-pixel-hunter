import IntroView from "./IntroView";

import greeting from "./Greeting";

import {renderScreen} from "./utils";

const introScreen = new IntroView();

introScreen.onAsteriskClick = () => {
  renderScreen(greeting());
  // alert(`hi!`);
};

export default introScreen;
