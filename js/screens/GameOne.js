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

  let arr = [];

  gameOneScreen.onAnswerClick = (e) => {
    const {
      type: nextGameScreen
    } = gameState.screens[gameState.currentScreen];


    const answer = {
      time: 30
    };

    if (e.target.value === gameOneScreen.options[0].type) {
      answer.success = true;
    } else {
      answer.success = false;
    }
    arr.push(answer);

    const screenAnswersPoints = arr.map((it) => getPointsFromAnswer(it));


    // console.log(arr);

    const sumAllAnswersPoints = screenAnswersPoints.reduce((sum, answerPoints) => {
      return sum + answerPoints;
    }, 0);

    const updateStateAnswers = () => {
      gameState.answers.pop();
      return sumAllAnswersPoints === 100 ? gameState.answers.unshift(`correct`) : gameState.answers.unshift(`wrong`);
    };


    if (arr.length > 1) {
      updateStateAnswers();

      gameState.currentScreen++;
      changeView(nextGameScreen);
    }
  };

  return gameOneScreen;
};
