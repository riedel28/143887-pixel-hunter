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

    console.log(e.target.value);
    console.log(gameOneScreen.options[0].type);

    screenAnswers.push({
      time: 30,
      success
    });

    const sumScreenAnswers = screenAnswers.reduce((sum, answer) => {
      return sum + getPointsFromAnswer(answer);
    }, 0);

    const isCorrect = sumScreenAnswers === 100;

    console.log(screenAnswers);
    console.log(sumScreenAnswers);

    // const screenAnswersPoints = screenAnswers.map((answer) => getPointsFromAnswer(answer)).reduce((sum, answerObj) => {
    //   console.log(answerObj);
    //   return sum + answerObj.time;
    // }, 0);

    // console.log(screenAnswersPoints);

    // const sumAllAnswersPoints = screenAnswersPoints.reduce((sum, answerObj) => {
    //   console.log(answerObj);
    //   return sum + answerObj.success;
    // }, 0);

    // console.log(sumAllAnswersPoints);

    // const isCorrect = sumAllAnswersPoints === 0


    const updateStats = () => {
      const {
        stats,
        currentScreen
      } = gameState;

      const index = stats.indexOf(currentScreen);

      if (isCorrect) {
        gameState.stats.unshift({
          time: 30,
          success: true,
          answer: `correct`
        });
        gameState.stats.pop(index);
      } else {
        gameState.stats.unshift({
          time: 30,
          success: false,
          answer: `wrong`
        });
        gameState.stats.pop(index);
      }

      console.log(gameState.stats);
    };

    // console.log(gameState.stats);

    // console.log(screenAnswers);

    if (screenAnswers.length > 1) {
      updateStats();

      gameState.currentScreen++;
      changeView(nextGameScreen);
    }
  };

  return gameOneScreen;
};
