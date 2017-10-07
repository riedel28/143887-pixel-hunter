const getElementFromTemplate = (markup) => {
  const element = document.createElement(`div`);
  element.innerHTML = markup;
  return element;
};

export {getElementFromTemplate};

const removeElementHandlers = (handlers, renderFunction) => {
  handlers.forEach((handler) => {
    handler.target.removeEventListener(handler.type, handler.handler);
  });
  renderFunction();
};

export {removeElementHandlers};
