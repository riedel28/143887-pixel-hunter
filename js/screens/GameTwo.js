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

    const success = e.target.value === gameTwoScreen.options[0].type;

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
      changeView(nextGameScreen);
    }
  };

  return gameTwoScreen;
};
