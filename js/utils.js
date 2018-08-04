// import state from "./data/state";

import gameOneScreen from "./screens/GameOne";
import gameTwoScreen from "./screens/GameTwo";
import gameThreeScreen from "./screens/GameThree";


const getElementFromTemplate = (markup) => {
  const element = document.createElement(`div`);
  element.innerHTML = markup;
  return element;
};

export {
  getElementFromTemplate
};

const removeEventHandlers = (handlers, renderFunction) => {
  handlers.forEach((handler) => {
    handler.target.removeEventListener(handler.type, handler.handler);
  });
  renderFunction();
};

export {
  removeEventHandlers
};

export const renderScreen = (screen) => {
  const mainScreen = document.querySelector(`.central`);

  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screen.element);
};

// const screenTypes = {
//   [`one-of-two`]: 0,
//   [`tinder-like`]: 1,
//   [`one-of-three`]: 2
// };

export const changeView = (screenType) => {
  switch (screenType) {
    case `one-of-two`:
      renderScreen(gameOneScreen());
      break;
    case `tinder-like`:
      renderScreen(gameTwoScreen());
      break;
    case `one-of-three`:
      renderScreen(gameThreeScreen());
      break;
  }
};

export const getPointsFromAnswer = (answer) => {
  const {
    time,
    success
  } = answer;

  if (success === false) {
    return 0;
  }

  if (time > 0 && time <= 10) {
    return 150;
  } else if (time > 10 && time <= 20) {
    return 100;
  } else if (time > 20 && time <= 30) {
    return 50;
  } else {
    return 0;
  }
};

export const getGameScore = (answers) => {
  return answers.reduce((total, answer) => {
    if (typeof answer === `object`) {
      return total + answer.score;
    }

    return total + 0;
  }, 0);
};
export const getCorrectAnswers = (answers) => {
  const correctAnswers = answers.filter((answer) => answer.answer === `correct`);

  return correctAnswers;
};

export const getFastAnswerScore = (answers) => {
  const fastAnswers = answers.filter((answer) => answer.time > 20);

  // return fastAnswers.reduce((sum, value) => {
  //   return sum + value;
  // }, 0);
  return fastAnswers;
};

export const getSlowAnswers = (answers) => {
  const slowAnswers = answers.filter((answer) => answer.time < 10);

  // return slowAnswers.reduce((sum, value) => {
  //   return sum + value;
  // }, 0);
  return slowAnswers;
};

// export const getGameScore = (...scores) => {
//   return scores.reduce((total, score) => {
//     return total + score.
//   }, 0)
// };

export const getTotalScore = (answers, lives) => {
  if (answers.length < 10) {
    return -1;
  }

  let totalScore = 0;

  answers.forEach((answer) => {
    totalScore += getPointsFromAnswer(answer);
  });

  totalScore += lives * 50;

  return totalScore;
};


const getTimer = (timer) => {
  return {
    timer,
    tick() {
      if (this.timer > 0) {
        return --this.timer;
      }
      return 0;
    },
    getCurrentTimer() {
      return this.timer;
    }
  };
};

export {
  getTimer
};

// const randomizeAnswers = () => {
//   return state.answersTypes[
//       Math.floor(Math.random() * state.answersTypes.length)
//   ];
// };

// export {
//   randomizeAnswers
// };

// const displayRandomAnswers = state.answers.map(() => {
//   return `<li class="stats__result stats__result--${randomizeAnswers()}"></li>`;
// });

// export {displayRandomAnswers};
