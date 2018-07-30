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


    // const answer = {
    //   time: 30
    // };


    // if (e.target.value === gameOneScreen.options[0].type) {
    //   answer.success === true;
    // } else {
    //   answer.success = false;
    // }

    // const success = e.target.value === gameOneScreen.options[0].type ? true : false;

    const success = e.target.value && gameOneScreen.options[0].type;


    screenAnswers.push({
      time: 30,
      success
    });

    // console.dir(screenAnswers);

    const screenAnswersPoints = screenAnswers.map((answer) => getPointsFromAnswer(answer));

    const sumAllAnswersPoints = screenAnswersPoints.reduce((sum, answerPoints) => {
      return sum + answerPoints;
    }, 0);

    const updateStats = () => {
      gameState.stats.pop();
      return sumAllAnswersPoints === 100 ? gameState.stats.unshift(`correct`) : gameState.stats.unshift(`wrong`);
    };


    if (screenAnswers.length > 1) {
      updateStats();

      gameState.currentScreen++;
      changeView(nextGameScreen);
    }
  };

  return gameOneScreen;
};
