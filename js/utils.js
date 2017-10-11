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

const isAnswerCorrect = (answer) => {
  // const correctAnswer = 100;
  // const slowAnswer = 50;
  // const fastAnswer = 150;

  if (answer === `correct`) {
    return 100;
  } else if (answer === `fast`) {
    return 150;
  } else if (answer === `slow`) {
    return 50;
  } else {
    return 0;
  }
};

export {isAnswerCorrect};

const getTotalScore = (answers, lives) => {
  if (answers.length < 10) {
    return -1;
  }

  let totalScore = 0;

  answers.forEach((answer) => {
    isAnswerCorrect(answer);
  });

  totalScore += lives * 50;

  return totalScore;
};

export {getTotalScore};

const getTime = (time) => {
  // if (time >= 0 && time < 10) {
  //   return `fast`;
  // } else if (time >= 10 && time <= 20) {
  //   return `ok`;
  // } else if (time > 20 && time <= 30) {
  //   return `slow`;
  // } else {
  //   return `error`;
  // }
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
