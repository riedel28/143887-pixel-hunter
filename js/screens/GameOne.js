import {
  renderScreen,
  changeView,
  getPointsFromAnswer
} from "./../utils";
import GameOneView from "./../views/GameOneView";
import {
  gameState
} from "./../data/state";

import introScreen from "./Intro";


export default () => {
  const gameOneScreen = new GameOneView(gameState);

  gameOneScreen.onArrowBackClick = () => {
    renderScreen(introScreen());
  };

  const screenAnswers = [];

  gameOneScreen.onAnswerClick = (e) => {
    const {
      type: nextGameScreen
    } = gameState.screens[gameState.currentScreen];

    const success = e.target.value === gameOneScreen.options[0].type;

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
        gameState.stats.pop(index);
        gameState.stats.unshift({
          time: 30,
          success: true,
          answer: isCorrect,
          score
        });

      } else {
        gameState.stats.pop(index);
        gameState.stats.unshift({
          time: 30,
          success: false,
          answer: isCorrect,
          score
        });

      }
    };

    if (screenAnswers.length > 1) {
      updateStats();

      gameState.currentScreen++;
      changeView(nextGameScreen);
    }
  };

  return gameOneScreen;
};
