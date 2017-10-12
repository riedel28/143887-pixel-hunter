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
  mainScreen.appendChild(screen);
};

export {renderScreen};

const getPointsFromAnswer = (answer) => {
  // const correctAnswer = 100;
  // const slowAnswer = 50;
  // const fastAnswer = 150;

  // if (answer.type === `ok`) {
  //   return 100;
  // } else if (answer.type === `fast`) {
  //   return 150;
  // } else if (answer.type === `slow`) {
  //   return 50;
  // } else {
  //   return 0;
  // }
  const {time, success} = answer;

  if (success === false) {
    return 0;
  }

  if (time > 0 && time <= 10 && success === true) {
    return 150;
  } else if (time > 10 && time <= 20) {
    return 100;
  } else if (time > 20 && time <= 30) {
    return 50;
  } else {
    return 0;
  }
};

export {getPointsFromAnswer};

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

const getTime = (time) => {
  if (time === 0) {
    return `Время истекло`;
  }

  return {
    tick() {
      return getTime(time - 1);
    }
  };
};

export {getTime};
