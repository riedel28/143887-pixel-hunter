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

  let arr = [];

  gameThreeScreen.onAnswerClick = (e) => {
    const {
      type: nextGameScreen
    } = gameState.screens[gameState.currentScreen];

    const answer = {
      time: 30
    };

    if (e.target.value === gameThreeScreen.options[0].type) {
      answer.success = true;
    } else {
      answer.success = false;
    }
    arr.push(answer);

    const screenAnswersPoints = arr.map((it) => getPointsFromAnswer(it));

    const sumAllAnswersPoints = screenAnswersPoints.reduce((sum, answerPoints) => {
      return sum + answerPoints;
    }, 0);

    const updateStateAnswers = () => {
      gameState.stats.pop();
      return sumAllAnswersPoints === 100 ? gameState.stats.unshift(`correct`) : gameState.stats.unshift(`wrong`);
    };


    if (arr.length > 0) {
      updateStateAnswers();

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
