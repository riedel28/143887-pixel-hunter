import {renderScreen} from "./../../utils";

import IntroView from "./IntroView";

import greeting from "./../../Greeting";

const introScreen = new IntroView();

introScreen.onAsteriskClick = () => {
  renderScreen(greeting());
  // alert(`hi!`);
};

export default introScreen;
