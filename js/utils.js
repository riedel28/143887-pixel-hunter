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

const mainScreen = document.querySelector(`.central`);

const renderScreen = (screen) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screen);
};

export {renderScreen};
