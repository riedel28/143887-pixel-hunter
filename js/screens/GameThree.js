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

    const screenAnswersPoints = screenAnswers.map((answer) => getPointsFromAnswer(answer));

    const sumAllAnswersPoints = screenAnswersPoints.reduce((sum, answerObj) => {
      return sum + answerObj.success;
    }, 0);

    const updateStats = () => {
      gameState.stats.pop();
      return sumAllAnswersPoints === 100 ? gameState.stats.unshift({
        time: 30,
        success: true,
        answer: `correct`
      }) : gameState.stats.unshift({
        time: 30,
        success: false,
        answer: `wrong`
      });
    };


    if (screenAnswers.length > 0) {
      // updateStats();

      gameState.currentScreen++;

      if (gameState.currentScreen >= gameState.screens.length) {
        renderScreen(statsScreen());
        // console.log(getTotalScore(gameState.answers, gameState.lives));
      } else {
        changeView(nextGameScreen);
      }
    }
  };

  return gameThreeScreen;
};
