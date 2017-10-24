import game1 from "./Game-1";
import game2 from "./Game-2";
import game3 from "./Game-3";
import stats from "./Stats";
import {renderScreen} from "./utils";
import getNextScreenData from "./data/state";
import state from "./data/state";

const games = [game1, game2, game3];

const getNextScreen = () => {
  const nextScreenData = getNextScreenData();

  if (state.lives === 0) {
    renderScreen(stats);
  }

  renderScreen(games[nextScreenData.type - 1]);
};

export default getNextScreen;
