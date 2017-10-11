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

const getTotalScore = (answers) => {
  const correctAnswer = 100;
  const slowAnswer = 50;
  const fastAnswer = 150;

  if (answers.length < 10) {
    return -1;
  }

  let totalScore = 0;

  for (const answer of answers) {
    if (answer === `correct`) {
      totalScore += correctAnswer;
    } else if (answer === `fast`) {
      totalScore += fastAnswer;
    } else {
      totalScore += slowAnswer;
    }
  }

  return totalScore;
};

export {getTotalScore};
