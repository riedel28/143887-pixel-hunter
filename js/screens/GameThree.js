import {
  renderScreen,
  changeView,
  getPointsFromAnswer
} from "./../utils";
import GameThreeView from "./../views/GameThreeView";
import statsScreen from "./Stats";

import introScreen from "./Intro";
import {
  gameState
} from "./../data/state";

export default () => {
  const gameThreeScreen = new GameThreeView(gameState);

  gameThreeScreen.onArrowBackClick = () => {
    renderScreen(introScreen());
  };

  const screenAnswers = [];

  gameThreeScreen.onAnswerClick = (e) => {
    const {
      type: nextGameScreen
    } = gameState.screens[gameState.currentScreen];

    const success = e.target.value === gameThreeScreen.options[0].type;

    screenAnswers.push({
      time: 30,
      success
    });

    const sumScreenAnswers = screenAnswers.reduce((sum, answer) => {
      return sum + getPointsFromAnswer(answer);
    }, 0);

    const isCorrect = sumScreenAnswers === 100 ? `correct` : `wrong`;

    const score = sumScreenAnswers;


    const updateStats = () => {
      const {
        stats,
        currentScreen
      } = gameState;

      const index = stats.indexOf(currentScreen);

      if (score) {
        gameState.stats.unshift({
          time: 30,
          success: true,
          answer: isCorrect,
          score
        });
        gameState.stats.pop(index);
      } else {
        gameState.stats.unshift({
          time: 30,
          success: false,
          answer: isCorrect,
          score
        });
        gameState.stats.pop(index);
      }
    };


    if (screenAnswers.length > 0) {
      updateStats();

      gameState.currentScreen++;

      if (gameState.currentScreen >= gameState.screens.length) {
        renderScreen(statsScreen());
      } else {
        changeView(nextGameScreen);
      }
    }
  };

  return gameThreeScreen;
};
