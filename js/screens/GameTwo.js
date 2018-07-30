import {
  renderScreen,
  changeView,
  getPointsFromAnswer
} from "./../utils";
import GameTwoView from "./../views/GameTwoView";
import introScreen from "./Intro";
import {
  gameState
} from "./../data/state";

export default () => {
  const gameTwoScreen = new GameTwoView(gameState);

  gameTwoScreen.onArrowBackClick = () => {
    renderScreen(introScreen());
  };

  const screenAnswers = [];

  gameTwoScreen.onAnswerClick = (e) => {
    const {
      type: nextGameScreen
    } = gameState.screens[gameState.currentScreen];

    // const answer = {
    //   time: 30
    // };

    // if (e.target.value === gameTwoScreen.options[0].type) {
    //   answer.success = true;
    // } else {
    //   answer.success = false;
    // }
    // arr.push(answer);
    const success = e.target.value && gameTwoScreen.options[0].type;


    screenAnswers.push({
      time: 30,
      success
    });

    const screenAnswersPoints = screenAnswers.map((answer) => getPointsFromAnswer(answer));

    const sumAllAnswersPoints = screenAnswersPoints.reduce((sum, answerPoints) => {
      return sum + answerPoints;
    }, 0);

    const updateStateAnswers = () => {
      gameState.stats.pop();
      return sumAllAnswersPoints === 100 ? gameState.stats.unshift(`correct`) : gameState.stats.unshift(`wrong`);
    };

    if (screenAnswers.length > 0) {

      updateStateAnswers();

      gameState.currentScreen++;
      changeView(nextGameScreen);
    }
  };

  return gameTwoScreen;
};
