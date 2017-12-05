import state from "./data/state";

const getElementFromTemplate = (markup) => {
  const element = document.createElement(`div`);
  element.innerHTML = markup;
  return element;
};

export {getElementFromTemplate};

const removeEventHandlers = (handlers, renderFunction) => {
  handlers.forEach((handler) => {
    handler.target.removeEventListener(handler.type, handler.handler);
  });
  renderFunction();
};

export {removeEventHandlers};

const renderScreen = (screen) => {
  const mainScreen = document.querySelector(`.central`);

  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screen.element);
};

export {renderScreen};

const getPointsFromAnswer = (answer) => {
  const {time, success} = answer;

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

const getTotalScore = (answers, lives) => {
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

export {getTotalScore};

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

export {getTimer};

const randomizeAnswers = () => {
  return state.answersTypes[
      Math.floor(Math.random() * state.answersTypes.length)
  ];
};

export {randomizeAnswers};

// const displayRandomAnswers = state.answers.map(() => {
//   return `<li class="stats__result stats__result--${randomizeAnswers()}"></li>`;
// });

// export {displayRandomAnswers};
